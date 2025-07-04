<template>
  <v-app-bar app color="white" elevation="1" height="64">
    <v-container fluid>
      <div class="d-flex justify-space-between align-center">
        <!-- Logo Section -->
        <v-btn :to="'/'" text class="text-h6 font-weight-bold">
          RSUD Dr. Saiful Anwar
        </v-btn>

        <!-- Desktop Navigation -->
        <div class="d-none d-md-flex">
          <v-btn
            :to="'/'"
            text
            class="mx-2"
            :class="{ 'text-primary': $route.path === '/' }"
          >
            Home
          </v-btn>

          <v-btn
            :to="'/about'"
            text
            class="mx-2"
            :class="{ 'text-primary': $route.path === '/about' }"
          >
            About
          </v-btn>

          <v-btn
            :to="'/healthservices'"
            text
            class="mx-2"
            :class="{ 'text-primary': $route.path === '/healthservices' }"
          >
            Health Services
          </v-btn>

          <v-btn
            :to="'/contact'"
            text
            class="mx-2"
            :class="{ 'text-primary': $route.path === '/contact' }"
          >
            Contact
          </v-btn>

          <v-btn
            :to="'/login'"
            text
            class="mx-2"
            :class="{ 'text-primary': $route.path === '/login' }"
          >
            Login
          </v-btn>
        </div>
      </div>
    </v-container>
  </v-app-bar>
</template>
