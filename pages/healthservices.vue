<template>
  <div class="bg-white min-h-screen">
    <!-- Header Section -->
    <v-container class="pt-12 pb-8">
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">
          <div class="text-center mb-8">
            <h1 class="text-h3 font-weight-bold text-indigo-darken-4 mb-4">
              Layanan Medis Kami
            </h1>
            <p class="text-h6 text-black font-weight-regular">
              Temukan berbagai layanan kesehatan berkualitas tinggi dengan
              teknologi modern
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- Services Grid -->
    <v-container>
      <v-row>
        <!-- Kardiologi -->
        <v-col cols="12" sm="6" md="4" lg="3">
          <v-card
            class="mx-auto service-card"
            elevation="4"
            hover
            rounded="xl"
            height="300"
          >
            <v-card-text class="pa-0">
              <div
                class="bg-indigo-darken-1 pa-8 text-center position-relative"
              >
                <v-chip
                  class="position-absolute"
                  style="top: 12px; right: 12px"
                  color="white"
                  size="small"
                  text-color="indigo-darken-1"
                >
                  Spesialis
                </v-chip>
                <v-icon size="64" color="white" class="mb-2">
                  mdi-heart-pulse
                </v-icon>
                <h3 class="text-h6 font-weight-bold text-white">Kardiologi</h3>
              </div>
              <div class="pa-4">
                <p class="text-body-2 text-indigo-darken-2 mb-3">
                  Pelayanan jantung dan pembuluh darah dengan teknologi terdepan
                </p>
                <div class="d-flex align-center justify-space-between">
                  <v-chip color="indigo-darken-1" size="small">
                    <v-icon start size="16">mdi-clock</v-icon>
                    24/7
                  </v-chip>
                  <v-btn
                    color="indigo-darken-1"
                    size="small"
                    variant="elevated"
                    rounded
                  >
                    Detail
                  </v-btn>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- IGD -->
        <v-col cols="12" sm="6" md="4" lg="3">
          <v-card
            class="mx-auto service-card"
            elevation="4"
            hover
            rounded="xl"
            height="300"
          >
            <v-card-text class="pa-0">
              <div class="bg-red-darken-1 pa-8 text-center position-relative">
                <v-chip
                  class="position-absolute animate-pulse"
                  style="top: 12px; left: 12px"
                  color="white"
                  size="small"
                  text-color="white"
                >
                  URGENT
                </v-chip>
                <v-icon size="64" color="white" class="mb-2">
                  mdi-ambulance
                </v-icon>
                <h3 class="text-h6 font-weight-bold text-white">IGD</h3>
              </div>
              <div class="pa-4">
                <p class="text-body-2 text-indigo-darken-2 mb-3">
                  Layanan darurat 24 jam dengan tim medis siaga
                </p>
                <v-alert
                  color="red-darken-1"
                  variant="tonal"
                  density="compact"
                  class="text-body-2"
                >
                  <v-icon start>mdi-phone</v-icon>
                  Hotline: 021-1234-5678
                </v-alert>
              </div>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Neurologi -->
        <v-col cols="12" sm="6" md="4" lg="3">
          <v-card
            class="mx-auto service-card"
            elevation="4"
            hover
            rounded="xl"
            height="300"
          >
            <v-card-text class="pa-0">
              <div class="bg-light-blue pa-8 text-center">
                <v-icon size="64" color="white" class="mb-2">
                  mdi-brain
                </v-icon>
                <h3 class="text-h6 font-weight-bold text-white">Neurologi</h3>
              </div>
              <div class="pa-4">
                <p class="text-body-2 text-indigo-darken-2 mb-3">
                  Spesialis saraf dan otak dengan pemeriksaan lengkap
                </p>
                <div class="d-flex flex-column ga-1">
                  <div class="d-flex align-center">
                    <v-icon color="indigo-darken-1" size="8" class="mr-2">
                      mdi-circle
                    </v-icon>
                    <span class="text-body-2">Stroke Center</span>
                  </div>
                  <div class="d-flex align-center">
                    <v-icon color="indigo-darken-1" size="8" class="mr-2">
                      mdi-circle
                    </v-icon>
                    <span class="text-body-2">Epilepsy Care</span>
                  </div>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Farmasi -->
        <v-col cols="12" sm="6" md="4" lg="3">
          <v-card
            class="mx-auto service-card"
            elevation="4"
            hover
            rounded="xl"
            height="300"
          >
            <v-card-text class="pa-0">
              <div class="bg-green-darken-1 pa-8 text-center">
                <v-icon size="64" color="white" class="mb-2">
                  mdi-mortar-pestle-plus
                </v-icon>
                <h3 class="text-h6 font-weight-bold text-white">Farmasi</h3>
              </div>
              <div class="pa-4">
                <p class="text-body-2 text-indigo-darken-2 mb-3">
                  Apotek lengkap dengan obat-obatan berkualitas
                </p>
                <v-row dense>
                  <v-col cols="6">
                    <div class="text-center bg-green-lighten-4 pa-2 rounded">
                      <div class="text-h6 font-weight-bold text-green-darken-2">
                        500+
                      </div>
                      <div class="text-caption text-green-darken-1">
                        Jenis Obat
                      </div>
                    </div>
                  </v-col>
                  <v-col cols="6">
                    <div class="text-center bg-green-lighten-4 pa-2 rounded">
                      <div class="text-h6 font-weight-bold text-green-darken-2">
                        24/7
                      </div>
                      <div class="text-caption text-green-darken-1">Buka</div>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Radiologi -->
        <v-col cols="12" sm="6" md="4" lg="3">
          <v-card
            class="mx-auto service-card"
            elevation="4"
            hover
            rounded="xl"
            height="300"
          >
            <v-card-text class="pa-0">
              <div class="bg-brown pa-8 text-center">
                <v-icon size="64" color="white" class="mb-2">
                  mdi-image-filter-center-focus
                </v-icon>
                <h3 class="text-h6 font-weight-bold text-white">Radiologi</h3>
              </div>
              <div class="pa-4">
                <p class="text-body-2 text-indigo-darken-2 mb-3">
                  Pemeriksaan radiologi dengan teknologi digital terdepan
                </p>
                <div class="d-flex flex-column ga-2">
                  <div
                    class="d-flex align-center justify-space-between bg-indigo-lighten-4 pa-2 rounded"
                  >
                    <span class="text-body-2 font-weight-medium"
                      >X-Ray Digital</span
                    >
                    <v-icon color="indigo-darken-1" size="16">mdi-check</v-icon>
                  </div>
                  <div
                    class="d-flex align-center justify-space-between bg-indigo-lighten-4 pa-2 rounded"
                  >
                    <span class="text-body-2 font-weight-medium"
                      >CT Scan & MRI</span
                    >
                    <v-icon color="indigo-darken-1" size="16">mdi-check</v-icon>
                  </div>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Medical Check Up -->
        <v-col cols="12" sm="6" md="4" lg="3">
          <v-card
            class="mx-auto service-card"
            elevation="4"
            hover
            rounded="xl"
            height="300"
          >
            <v-card-text class="pa-0">
              <div class="bg-teal-darken-1 pa-8 text-center position-relative">
                <v-chip
                  class="position-absolute"
                  style="top: 12px; right: 12px"
                  color="white"
                  size="small"
                  text-color="white"
                >
                  Popular
                </v-chip>
                <v-icon size="64" color="white" class="mb-2">
                  mdi-clipboard-check
                </v-icon>
                <h3 class="text-h6 font-weight-bold text-white">
                  Medical Check Up
                </h3>
              </div>
              <div class="pa-4">
                <p class="text-body-2 text-indigo-darken-2 mb-3">
                  Paket pemeriksaan kesehatan menyeluruh
                </p>
                <div class="bg-teal-lighten-4 pa-3 rounded">
                  <div class="d-flex align-center justify-space-between mb-1">
                    <span class="text-body-2 font-weight-medium"
                      >Paket Basic</span
                    >
                    <span class="text-body-2 font-weight-bold">Rp 250K</span>
                  </div>
                  <p class="text-caption text-teal-darken-1">
                    Lab lengkap + konsultasi
                  </p>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Orthopedi -->
        <v-col cols="12" sm="6" md="4" lg="3">
          <v-card
            class="mx-auto service-card"
            elevation="4"
            hover
            rounded="xl"
            height="300"
          >
            <v-card-text class="pa-0">
              <div class="bg-orange-darken-1 pa-8 text-center">
                <v-icon size="64" color="white" class="mb-2"> mdi-bone </v-icon>
                <h3 class="text-h6 font-weight-bold text-white">Orthopedi</h3>
              </div>
              <div class="pa-4">
                <p class="text-body-2 text-indigo-darken-2 mb-3">
                  Spesialis tulang dan sendi dengan teknologi modern
                </p>
                <div class="d-flex align-center justify-space-around">
                  <div class="d-flex align-center">
                    <v-icon color="orange-darken-1" size="8" class="mr-1">
                      mdi-circle
                    </v-icon>
                    <span class="text-body-2">Fisioterapi</span>
                  </div>
                  <div class="d-flex align-center">
                    <v-icon color="orange-darken-1" size="8" class="mr-1">
                      mdi-circle
                    </v-icon>
                    <span class="text-body-2">Operasi</span>
                  </div>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- CTA Section -->
    <v-container class="mt-12">
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">
          <v-card
            class="text-center"
            elevation="6"
            rounded="xl"
            color="indigo-darken-2"
          >
            <v-card-text class="pa-8">
              <h2 class="text-h4 font-weight-bold text-white mb-4">
                Butuh Konsultasi?
              </h2>
              <p class="text-h6 text-indigo-lighten-2 mb-6">
                Tim medis kami siap membantu Anda 24/7
              </p>
              <div class="d-flex flex-column flex-sm-row ga-4 justify-center">
                <v-btn
                  color="white"
                  variant="elevated"
                  size="large"
                  rounded
                  class="text-indigo-darken-2 font-weight-bold"
                >
                  <v-icon start>mdi-calendar-check</v-icon>
                  Buat Appointment
                </v-btn>
                <v-btn
                  color="white"
                  variant="outlined"
                  size="large"
                  rounded
                  class="text-white"
                >
                  <v-icon start>mdi-phone</v-icon>
                  Hubungi Kami
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

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
