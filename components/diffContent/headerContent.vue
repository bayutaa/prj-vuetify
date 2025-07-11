<template>
  <v-container class="pt-4 pb-4">
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <div class="text-center mb-8">
          <h1 class="text-h3 font-weight-bold mb-4" :style="headerStyle">
            {{ props.headerHalaman }}
          </h1>
          <p class="text-h6 font-weight-regular" :style="subHeaderStyle">
            {{ props.subHeaderHalaman }}
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const props = defineProps({
  headerHalaman: { type: String, required: true, default: "" },
  subHeaderHalaman: { type: String, required: true, default: "" },
  headerColor: { type: String, default: "" },
  subHeaderColor: { type: String, default: "" },
});

// Computed untuk style header
const headerStyle = computed(() => {
  return props.headerColor
    ? { color: props.headerColor }
    : { color: "#1a237e" }; // indigo-darken-4
});

// Computed untuk style sub header
const subHeaderStyle = computed(() => {
  return props.subHeaderColor
    ? { color: props.subHeaderColor }
    : { color: "#000000" }; // black
});
</script>
