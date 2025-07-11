<template>
  <v-app-bar color="indigo-lighten-1">
    <v-app-bar-nav-icon
      variant="text"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>

    <v-toolbar-title
      >Halo, {{ currentUser?.fullName || "User" }}!</v-toolbar-title
    >

    <template v-if="$vuetify.display.mdAndUp" v-slot:append>
      <!-- <v-btn icon="mdi-message-badge" variant="text"></v-btn> -->
      <LayoutsNotificationIcon />
      <LayoutsProfileAvatar />
    </template>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    :location="$vuetify.display.mobile ? 'bottom' : undefined"
    temporary
  >
    <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.value"
        :title="item.title"
        @click="navigateTo(item.to)"
        link
      ></v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="ms-16">2025 — <strong>RSSA</strong></div>
    </template>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import {
  LayoutsNotificationIcon,
  LayoutsProfileAvatar,
  LazyLayoutsAppBarLogin,
  LazyLayoutsProfileAvatar,
} from "#components";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// Menggunakan composable useAuth untuk mendapatkan data user
const { currentUser, isLoggedIn } = useAuth();

const items = [
  {
    title: "Dashboard",
    value: "dashboard",
    to: "/homepage",
  },
  {
    title: "Profile",
    value: "profile",
    to: "/homepage/profile",
  },
  {
    title: "Settings",
    value: "settings",
    to: "/homepage/settings",
  },
];

const drawer = ref(false);
const group = ref(null);

// Navigation function
const navigateTo = (route: string) => {
  router.push(route);
  drawer.value = false; // Close drawer after navigation
};

watch(group, () => {
  drawer.value = false;
});
</script>
