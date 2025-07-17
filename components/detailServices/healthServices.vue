<template>
  <div class="bg-white min-h-screen">
    <!-- Services Grid -->
    <!-- Opsi 1: Menggunakan v-for dengan kondisi terpisah -->
    <v-container>
      <v-row>
        <!-- Loop untuk menampilkan semua service -->
        <v-col
          v-for="service in instalasi"
          :key="service.id"
          cols="12"
          sm="6"
          md="3"
        >
          <v-card class="service-card text-center pa-4" hover>
            <v-icon :color="service.color" size="60" class="mb-4">
              {{ service.icon }}
            </v-icon>
            <v-card-title class="justify-center">
              <h3>{{ service.name }}</h3>
            </v-card-title>
            <v-card-text>
              <p class="grey--text">{{ service.description }}</p>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Button ditampilkan setelah semua service -->
        <v-col cols="12" sm="6" md="3">
          <nextButton />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
type Instalasi = {
  id: number;
  name: String;
  description: String;
  icon?: String;
  color: string;
};

const { data } = await useFetch<Instalasi[]>("/data/instalasi.json");

const instalasi = data.value || [];
</script>

<style scoped>
.service-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-8px);
}

.animate-pulse {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}
</style>
