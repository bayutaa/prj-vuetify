// composables/useUsersData.ts
import { ref, type Ref } from "vue";

interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  fullName: string;
  initials: string;
  image: string;
  role: string;
  createdAt: string;
}

interface UsersData {
  users: User[];
}

interface UseUsersDataReturn {
  users: Ref<User[]>;
  loading: Ref<boolean>;
  error: Ref<string | null>;
  loadUsers: () => Promise<void>;
  findUserByCredentials: (username: string, password: string) => User | null;
  findUserById: (id: number) => User | null;
  findUserByUsername: (username: string) => User | null;
}

export const useUsersData = (): UseUsersDataReturn => {
  const users = ref<User[]>([]);
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);

  const loadUsers = async (): Promise<void> => {
    loading.value = true;
    error.value = null;

    try {
      const response = await fetch("/data/user.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: UsersData = await response.json();
      users.value = data.users;
    } catch (err) {
      error.value = err instanceof Error ? err.message : "Failed to load users";
      console.error("Error loading users:", err);
    } finally {
      loading.value = false;
    }
  };

  const findUserByCredentials = (
    username: string,
    password: string
  ): User | null => {
    return (
      users.value.find(
        (user) => user.username === username && user.password === password
      ) || null
    );
  };

  const findUserById = (id: number): User | null => {
    return users.value.find((user) => user.id === id) || null;
  };

  const findUserByUsername = (username: string): User | null => {
    return users.value.find((user) => user.username === username) || null;
  };

  return {
    users,
    loading,
    error,
    loadUsers,
    findUserByCredentials,
    findUserById,
    findUserByUsername,
  };
};
