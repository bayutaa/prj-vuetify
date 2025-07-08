<template>
  <v-img
    class="mx-auto my-4"
    max-width="100"
    src="/images/icon-rssa.png"
  ></v-img>

  <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
    <div class="text-subtitle-1 text-medium-emphasis">Username atau Email</div>

    <v-text-field
      density="compact"
      placeholder="Email address"
      prepend-inner-icon="mdi-email-outline"
      variant="outlined"
    ></v-text-field>

    <div
      class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
    >
      Password

      <a
        class="text-caption text-decoration-none text-blue"
        href="#"
        rel="noopener noreferrer"
        target="_blank"
      >
        Lupa Password?</a
      >
    </div>

    <v-text-field
      :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
      :type="visible ? 'text' : 'password'"
      density="compact"
      placeholder="Enter your password"
      prepend-inner-icon="mdi-lock-outline"
      variant="outlined"
      @click:append-inner="visible = !visible"
    ></v-text-field>

    <v-btn class="mb-8" color="blue" size="large" variant="tonal" block>
      Masuk
    </v-btn>

    <v-card-text class="text-center">
      <a
        class="text-blue text-decoration-none"
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
import { ref } from "vue";

const visible = ref(false);
</script>
