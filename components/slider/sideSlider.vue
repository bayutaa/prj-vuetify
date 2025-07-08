<template>
  <div class="side-slider">
    <div class="timeline-container">
      <v-slide-group
        v-model="props.activeYear"
        class="timeline-slider"
        show-arrows
        mandatory
      >
        <v-slide-group-item
          v-for="(item, index) in timelineData"
          :key="item.id"
          v-slot="{ isSelected, toggle }"
        >
          <v-card
            :class="['timeline-card mx-2', { 'active-card': isSelected }]"
            width="400"
            @click="handleCardClick(toggle, index)"
          >
            <v-img
              :src="item.image"
              height="150"
              cover
              class="timeline-image"
              :alt="`Gambar ${item.title}`"
            >
              <div class="year-overlay">
                <span class="year-text">{{ item.year }}</span>
              </div>
            </v-img>
            <v-card-title class="text-h6 font-weight-bold">
              {{ item.title }}
            </v-card-title>
            <v-card-text>
              <p class="text-body-1">{{ item.description }}</p>
            </v-card-text>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TimelineItem } from "~/components/slider/slidertypedata";

// Props
interface Props {
  timelineData: TimelineItem[];
  activeYear: number;
}

const props = withDefaults(defineProps<Props>(), {
  timelineData: () => [],
  activeYear: 0,
});

// Emits
const emit = defineEmits<{
  "year-changed": [index: number];
}>();

// Methods
const handleCardClick = (toggle: () => void, index: number) => {
  toggle();
  emit("year-changed", index);
};
</script>

<style scoped>
.timeline-container {
  position: relative;
  overflow: hidden;
}

.timeline-card {
  transition: all 0.3s ease;
  cursor: pointer;
}

.timeline-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.active-card {
  transform: scale(1.05);
  box-shadow: 0 8px 25px rgba(57, 73, 171, 0.3);
}

.timeline-image {
  position: relative;
}

.year-overlay {
  position: absolute;
  top: 16px;
  left: 16px;
  background: rgba(40, 53, 147, 0.9);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: bold;
}

.year-text {
  font-size: 14px;
  font-weight: 700;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .timeline-card {
    width: 300px !important;
  }
}
</style>
