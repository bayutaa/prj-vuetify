<template>
  <div>
    <contactUs v-if="mounted" />
  </div>
</template>

<script setup lang="ts">
const mounted = ref(false);

onMounted(() => {
  mounted.value = true;
});
</script>
