<template>
  <v-container
    class="d-flex justify-center align-center"
    style="min-height: 20vh"
  >
    <v-card
      class="pa-1"
      max-width="1600"
      width="300%"
      elevation="2"
      rounded="xl"
    >
      <v-card-text>
        <v-row align="center" no-gutters>
          <!-- Judul di sebelah kiri -->
          <v-col cols="12" md="4" class="pe-md-4">
            <h3 class="text-h6 text-indigo-darken-1">
              Pencarian Layanan Kesehatan
            </h3>
            <p class="text-body-2 text-medium-emphasis mt-1">
              Temukan dokter dan layanan kesehatan terbaik
            </p>
          </v-col>

          <!-- Search Bar di sebelah kanan -->
          <v-col cols="12" md="8">
            <v-text-field
              v-model="searchQuery"
              label="Cari dokter, layanan.."
              placeholder="Masukkan nama atau jenis layanan kesehatan"
              prepend-inner-icon="mdi-magnify"
              variant="outlined"
              density="comfortable"
              hide-details
              clearable
            >
              <template v-slot:append>
                <v-btn
                  color="indigo-lighten-2"
                  :disabled="!searchQuery"
                  class="text-none"
                >
                  Cari
                </v-btn>
              </template>
            </v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

// Reactive data
const searchQuery = ref("");
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
