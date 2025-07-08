<template>
  <div class="detail-slider">
    <v-row v-if="currentTimeline">
      <v-col cols="12" md="6">
        <v-card elevation="2" class="detail-card">
          <v-img
            :src="currentTimeline.image"
            height="400"
            cover
            :alt="`Gambar ${currentTimeline.title}`"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="indigo"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card elevation="2" class="detail-card pa-6">
          <v-card-title class="text-h4 font-weight-bold text-indigo-darken-3">
            {{ currentTimeline.year }}
          </v-card-title>
          <v-card-subtitle class="text-h6 mb-4">
            {{ currentTimeline.title }}
          </v-card-subtitle>
          <v-card-text>
            <p class="text-body-1 mb-4">
              {{ currentTimeline.description }}
            </p>
            <v-divider class="my-4"></v-divider>
            <p class="text-body-1">
              {{ currentTimeline.details }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "DetailSlider",
  props: {
    timelineData: {
      type: Array,
      required: true,
    },
    activeYear: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    currentTimeline() {
      return this.timelineData[this.activeYear] || null;
    },
  },
};
</script>

<style scoped>
.detail-card {
  height: 100%;
  transition: all 0.3s ease;
}

.detail-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.detail-slider {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .detail-card {
    margin-bottom: 16px;
  }
}
</style>
