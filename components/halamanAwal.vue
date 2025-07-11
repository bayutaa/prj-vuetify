<template>
  <div>
    <!-- Hero Section dengan Background Image -->
    <v-container fluid class="hero-section pa-0">
      <v-row class="fill-height" align="center" justify="center">
        <v-col cols="12" md="8" lg="8" class="mt-6">
          <div class="text-center">
            <LazyDiffContentHeaderContent
              headerHalaman="Rumah Sakit Sehat Bersama"
              subHeaderHalaman="Pelayanan kesehatan terpercaya untuk keluarga Anda"
              headerColor="white"
              subHeaderColor="white"
            />

            <!-- Search Section -->
            <kolomPencarian />
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- Quick Services Section -->
    <v-container class="py-12">
      <v-row>
        <v-col cols="12" md="4" class="text-center">
          <v-icon color="indigo-darken-3" size="40" class="mb-2"
            >mdi-phone</v-icon
          >
          <h3>Hubungi Kami</h3>
          <p>(0341) 362101</p>
        </v-col>

        <v-col cols="12" md="4" class="text-center">
          <v-icon color="indigo-darken-3" size="40" class="mb-2"
            >mdi-map-marker</v-icon
          >
          <h3>Alamat</h3>
          <p>
            Jl. Jaksa Agung Suprapto No.2, Klojen, Kec. Klojen, Kota Malang,
            Jawa Timur 65112
          </p>
        </v-col>

        <v-col cols="12" md="4" class="text-center">
          <v-icon color="indigo-darken-3" size="40" class="mb-2"
            >mdi-clock</v-icon
          >
          <h3>Jam Operasional</h3>
          <p>24 Jam / 7 Hari</p>
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
.hero-section {
  min-height: 70vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/images/medical-bg.png");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.search-card {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.95) !important;
  border-radius: 16px;
}

.service-card {
  transition: transform 0.3s ease;
  border-radius: 16px;
}

.service-card:hover {
  transform: translateY(-5px);
}

.contact-section {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero-section {
    background-attachment: scroll;
  }

  .display-2 {
    font-size: 2rem !important;
  }

  .headline {
    font-size: 1.25rem !important;
  }
}
</style>
