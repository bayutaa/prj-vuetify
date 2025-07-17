<script setup lang="ts">
import { LazySearchBarKolomPencarian } from "#components";
</script>

<template>
  <div>
    <LazyDiffContentHeaderContent
      headerHalaman="Layanan Medis Kami"
      subHeaderHalaman="Temukan berbagai layanan kesehatan berkualitas tinggi dengan
              teknologi modern"
    />
    <div class="pb-16">
      <SearchBarKolomPencarian />
    </div>
    <LazyDetailServicesHealthServices />
  </div>
</template>
