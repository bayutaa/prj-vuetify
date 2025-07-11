<template>
  <v-container height="auto">
    <v-row justify="center">
      <v-menu min-width="200px">
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props">
            <v-avatar size="large">
              <v-img
                v-if="user?.image && !imageError"
                :src="user.image"
                :alt="user.fullName"
                cover
                @error="imageError = true"
              ></v-img>
              <span
                v-else
                class="text-h5"
                style="background-color: brown; color: white"
              >
                {{ user?.initials || "U" }}
              </span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-card-text>
            <div class="mx-auto text-center">
              <v-avatar size="large">
                <v-img
                  v-if="user?.image && !imageError"
                  :src="user.image"
                  :alt="user.fullName"
                  cover
                  @error="imageError = true"
                ></v-img>
                <span
                  v-else
                  class="text-h5"
                  style="background-color: brown; color: white"
                >
                  {{ user?.initials || "U" }}
                </span>
              </v-avatar>
              <h3>{{ user?.fullName || "User" }}</h3>
              <p class="text-caption mt-1">
                {{ user?.email || "user@example.com" }}
              </p>
              <v-divider class="my-3"></v-divider>
              <v-btn to="/homepage/profile" variant="text" rounded>
                Profile
              </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn @click="handleLogout" variant="text" rounded>
                Logout
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-menu>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const imageError = ref(false);
const user = ref(null);

// Function to get current user from localStorage
const getCurrentUser = () => {
  if (process.client) {
    const userData = localStorage.getItem("currentUser");
    if (userData) {
      user.value = JSON.parse(userData);
    }
  }
};

// Function to handle logout
const handleLogout = async () => {
  try {
    // Show confirmation dialog
    const confirmed = confirm("Apakah Anda yakin ingin keluar?");

    if (confirmed) {
      // Remove user data from localStorage
      if (process.client) {
        localStorage.removeItem("currentUser");
      }

      // Redirect to login page
      await router.push("/login");
    }
  } catch (error) {
    console.error("Logout error:", error);
  }
};

// Initialize user data on mount
onMounted(() => {
  getCurrentUser();

  // If no user is logged in, redirect to login
  if (!user.value) {
    router.push("/login");
  }
});
</script>
