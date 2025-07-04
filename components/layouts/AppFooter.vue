<template>
  <v-footer
    class="text-center d-flex flex-column ga-2 py-4"
    color="indigo-lighten-1"
  >
    <div class="d-flex ga-3">
      <v-btn
        v-for="social in socialLinks"
        :key="social.icon"
        :icon="social.icon"
        :href="social.url"
        target="_blank"
        density="comfortable"
        variant="text"
      ></v-btn>
    </div>

    <v-divider class="my-2" thickness="2" width="50"></v-divider>

    <div class="text-caption font-weight-regular opacity-60">
      Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris
      cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id
      ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui.
      Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada.
      Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin.
      Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius
      natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </div>

    <v-divider></v-divider>

    <div>2025 — <strong>RSSA</strong></div>
  </v-footer>
</template>

<script setup>
const socialLinks = [
  {
    icon: "mdi-facebook",
    url: "https://www.facebook.com/p/RSUD-DrSaiful-Anwar-100064865763707/",
  },
  {
    icon: "mdi-twitter",
    url: "https://x.com/rsudsaifulanwar",
  },
  {
    icon: "mdi-instagram",
    url: "https://www.instagram.com/rssaifulanwar",
  },
];
</script>
