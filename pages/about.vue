<template>
  <div class="about-page">
    <v-container fluid class="pa-0">
      <!-- Timeline Section -->
      <v-row no-gutters class="timeline-section">
        <v-col>
          <MainSlider v-if="mounted" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import MainSlider from "~/components/slider/mainSlider.vue";

const mounted = ref(false);

onMounted(() => {
  mounted.value = true;
});
</script>

<style scoped>
.about-page {
  min-height: 100vh;
}

.timeline-section {
  background-color: #f5f5f5;
}
</style>
