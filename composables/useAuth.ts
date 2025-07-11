// composables/useAuth.ts
import { ref, readonly, onMounted } from "vue";

// Define User interface
interface User {
  id: string | number;
  name: string;
  email: string;
  role: string;
  [key: string]: any; // Allow additional properties
}

// Define return type for the composable
interface UseAuthReturn {
  currentUser: Readonly<Ref<User | null>>;
  isLoggedIn: Readonly<Ref<boolean>>;
  getCurrentUser: () => User | null;
  setCurrentUser: (user: User) => void;
  logout: () => void;
  hasRole: (role: string) => boolean;
}

export const useAuth = (): UseAuthReturn => {
  const currentUser = ref<User | null>(null);
  const isLoggedIn = ref<boolean>(false);

  // Get current user from localStorage
  const getCurrentUser = (): User | null => {
    if (process.client) {
      const userData = localStorage.getItem("currentUser");
      if (userData) {
        try {
          const parsedUser = JSON.parse(userData) as User;
          currentUser.value = parsedUser;
          isLoggedIn.value = true;
          return parsedUser;
        } catch (error) {
          console.error("Error parsing user data from localStorage:", error);
          // Clear invalid data
          localStorage.removeItem("currentUser");
        }
      }
    }
    return null;
  };

  // Set current user
  const setCurrentUser = (user: User): void => {
    if (process.client) {
      try {
        localStorage.setItem("currentUser", JSON.stringify(user));
        currentUser.value = user;
        isLoggedIn.value = true;
      } catch (error) {
        console.error("Error saving user data to localStorage:", error);
      }
    }
  };

  // Logout user
  const logout = (): void => {
    if (process.client) {
      localStorage.removeItem("currentUser");
      currentUser.value = null;
      isLoggedIn.value = false;
    }
  };

  // Check if user has specific role
  const hasRole = (role: string): boolean => {
    return currentUser.value?.role === role;
  };

  // Initialize on mount
  onMounted(() => {
    getCurrentUser();
  });

  return {
    currentUser: readonly(currentUser),
    isLoggedIn: readonly(isLoggedIn),
    getCurrentUser,
    setCurrentUser,
    logout,
    hasRole,
  };
};
