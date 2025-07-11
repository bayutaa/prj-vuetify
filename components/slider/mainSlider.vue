<template>
  <div class="main-slider">
    <v-card flat class="">
      <LazyDiffContentHeaderContent headerHalaman="Tentang Kami" />

      <!-- Timeline Navigation -->
      <div class="timeline-nav mb-6">
        <v-btn-toggle
          v-model="activeYear"
          mandatory
          rounded="pill"
          class="d-flex justify-center flex-wrap"
          variant="outlined"
          @update:model-value="handleYearChange"
        >
          <v-btn
            v-for="(item, index) in historyData?.timeline"
            :key="item.id"
            :value="index"
            class="mx-1 my-1"
            size="small"
          >
            {{ item.year }}
          </v-btn>
        </v-btn-toggle>
      </div>

      <!-- Side Slider Component -->
      <SliderSideSlider
        :timeline-data="historyData?.timeline || []"
        :active-year="activeYear"
        @year-changed="handleYearChange"
      />

      <!-- Detail Slider Component -->
      <SliderDetailSlider
        :timeline-data="historyData?.timeline || []"
        :active-year="activeYear"
        class="mt-8"
      />
    </v-card>
  </div>
</template>

<!-- Menggunakan Composition API -->
<script setup lang="ts">
import { SliderDetailSlider } from "#components";
import type { HistoryData } from "~/utils/slidertypedata";

// Data fetching dengan useFetch (Nuxt 3)
const { data: historyData } = await useFetch<HistoryData>("/data/history.json");

// Reactive state
const activeYear = ref<number>(0);

// Methods
const handleYearChange = (yearIndex: number) => {
  activeYear.value = yearIndex;
};
</script>

<style scoped>
.main-slider {
  background-color: #f5f5f5;
}

.timeline-nav {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .timeline-nav {
    gap: 4px;
  }
}
</style>
