<template>
  <LazyDiffContentHeaderContent
    headerHalaman="Masuk ke Akun Anda!"
    subHeaderHalaman="Masuk untuk mengetahui detail yang anda butuhkan"
    headerColor=""
    subHeaderColor=""
  />

  <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
    <v-form @submit.prevent="handleLogin">
      <div class="text-subtitle-1 text-medium-emphasis">
        Username atau Email
      </div>

      <v-text-field
        v-model="loginForm.emailOrUsername"
        density="compact"
        placeholder="Email address atau Username"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
        :error-messages="errors.emailOrUsername"
        required
      ></v-text-field>

      <div
        class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
      >
        Password

        <a
          class="text-caption text-decoration-none text-indigo-lighten-1"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Lupa Password?
        </a>
      </div>

      <v-text-field
        v-model="loginForm.password"
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Enter your password"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        :error-messages="errors.password"
        @click:append-inner="visible = !visible"
        required
      ></v-text-field>

      <!-- Error Message -->
      <v-alert
        v-if="loginError"
        type="error"
        density="compact"
        class="mb-4"
        closable
        @click:close="loginError = ''"
      >
        {{ loginError }}
      </v-alert>

      <!-- Success Message -->
      <v-alert
        v-if="loginSuccess"
        type="success"
        density="compact"
        class="mb-4"
      >
        {{ loginSuccess }}
      </v-alert>

      <v-btn
        type="submit"
        class="mb-8"
        color="indigo-lighten-1"
        size="large"
        variant="tonal"
        block
        :loading="loading"
        :disabled="loading"
      >
        {{ loading ? "Memproses..." : "Masuk" }}
      </v-btn>
    </v-form>

    <v-card-text class="text-center">
      <a
        class="text-indigo-lighten-1 text-decoration-none"
        href="#"
        rel="noopener noreferrer"
        target="_blank"
      >
        Daftar Sekarang <v-icon icon="mdi-chevron-right"></v-icon>
      </a>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const visible = ref(false);
const loading = ref(false);
const loginError = ref("");
const loginSuccess = ref("");

// Form data
const loginForm = reactive({
  emailOrUsername: "",
  password: "",
});

// Error messages
const errors = reactive({
  emailOrUsername: "",
  password: "",
});

// Validation function
const validateForm = () => {
  let isValid = true;

  // Reset errors
  errors.emailOrUsername = "";
  errors.password = "";

  // Validate email or username
  if (!loginForm.emailOrUsername.trim()) {
    errors.emailOrUsername = "Email atau Username harus diisi";
    isValid = false;
  }

  // Validate password
  if (!loginForm.password.trim()) {
    errors.password = "Password harus diisi";
    isValid = false;
  } else if (loginForm.password.length < 6) {
    errors.password = "Password minimal 6 karakter";
    isValid = false;
  }

  return isValid;
};

// Login function
const handleLogin = async () => {
  // Reset messages
  loginError.value = "";
  loginSuccess.value = "";

  // Validate form
  if (!validateForm()) {
    return;
  }

  loading.value = true;

  try {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Load user data from JSON file
    const userData = await $fetch("/data/user.json");

    // Find user by email or username
    const user = userData.users.find(
      (u) =>
        u.email.toLowerCase() === loginForm.emailOrUsername.toLowerCase() ||
        u.username.toLowerCase() === loginForm.emailOrUsername.toLowerCase()
    );

    if (!user) {
      loginError.value = "Email atau Username tidak ditemukan";
      loading.value = false;
      return;
    }

    // Check password
    if (user.password !== loginForm.password) {
      loginError.value = "Password salah";
      loading.value = false;
      return;
    }

    // Login successful
    loginSuccess.value = "Login berhasil! Mengalihkan...";

    // Store user data in localStorage or cookie
    // Note: In production, use proper authentication tokens
    localStorage.setItem("currentUser", JSON.stringify(user));

    // Redirect to homepage after short delay
    setTimeout(() => {
      router.push("/homepage");
    }, 1500);
  } catch (error) {
    console.error("Login error:", error);
    loginError.value = "Terjadi kesalahan saat login. Silakan coba lagi.";
  } finally {
    loading.value = false;
  }
};

// Check if user is already logged in
onMounted(() => {
  const currentUser = localStorage.getItem("currentUser");
  if (currentUser) {
    router.push("/homepage");
  }
});
</script>
