<template>
  <div>
    <!-- Hero Section dengan Background Image -->
    <v-container fluid class="hero-section pa-0">
      <v-row class="fill-height" align="center" justify="center">
        <v-col cols="12" md="8" lg="6">
          <div class="text-center">
            <!-- Header -->
            <h1 class="display-2 font-weight-bold text-white mb-4">
              Rumah Sakit Sehat Bersama
            </h1>
            <p class="headline text-white mb-8">
              Pelayanan kesehatan terpercaya untuk keluarga Anda
            </p>

            <!-- Search Section -->
            <v-card
              class="search-card pa-6 mx-auto"
              max-width="600"
              elevation="8"
            >
              <v-card-title class="justify-center pb-4">
                <h2 class="title">Cari Layanan Kesehatan</h2>
              </v-card-title>

              <v-form>
                <v-text-field
                  v-model="searchQuery"
                  label="Cari dokter, layanan, atau informasi kesehatan..."
                  prepend-icon="mdi-magnify"
                  outlined
                  dense
                  clearable
                  placeholder="Contoh: dokter jantung, tes darah, jadwal praktek"
                  class="mb-4"
                ></v-text-field>

                <v-btn color="primary" large block @click="searchAppointment">
                  <v-icon left>mdi-magnify</v-icon>
                  Cari Sekarang
                </v-btn>
              </v-form>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- Quick Services Section -->
    <v-container class="py-12">
      <v-row>
        <v-col cols="12" class="text-center mb-8">
          <h2 class="display-1 font-weight-bold primary--text">
            Layanan Unggulan
          </h2>
          <p class="subtitle-1 grey--text">
            Berbagai layanan kesehatan terbaik untuk Anda
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          v-for="service in quickServices"
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
      </v-row>
    </v-container>

    <!-- Contact Info -->
    <v-container fluid class="contact-section primary lighten-5 py-8">
      <v-container>
        <v-row>
          <v-col cols="12" md="4" class="text-center">
            <v-icon color="primary" size="40" class="mb-2">mdi-phone</v-icon>
            <h3>Hubungi Kami</h3>
            <p>(0341) 362101</p>
          </v-col>

          <v-col cols="12" md="4" class="text-center">
            <v-icon color="primary" size="40" class="mb-2"
              >mdi-map-marker</v-icon
            >
            <h3>Alamat</h3>
            <p>
              Jl. Jaksa Agung Suprapto No.2, Klojen, Kec. Klojen, Kota Malang,
              Jawa Timur 65112
            </p>
          </v-col>

          <v-col cols="12" md="4" class="text-center">
            <v-icon color="primary" size="40" class="mb-2">mdi-clock</v-icon>
            <h3>Jam Operasional</h3>
            <p>24 Jam / 7 Hari</p>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      searchQuery: "",

      quickServices: [
        {
          id: 1,
          name: "Gawat Darurat",
          description: "Pelayanan 24 jam untuk kondisi darurat",
          icon: "mdi-ambulance",
          color: "red",
        },
        {
          id: 2,
          name: "Rawat Jalan",
          description: "Konsultasi dan pemeriksaan rutin",
          icon: "mdi-stethoscope",
          color: "blue",
        },
        {
          id: 3,
          name: "Rawat Inap",
          description: "Perawatan intensif dengan fasilitas lengkap",
          icon: "mdi-bed",
          color: "green",
        },
        {
          id: 4,
          name: "Laboratorium",
          description: "Pemeriksaan lab dengan teknologi terkini",
          icon: "mdi-test-tube",
          color: "purple",
        },
      ],
    };
  },
};
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
