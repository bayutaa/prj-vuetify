<template>
  <v-card class="search-card pa-6 mx-auto" max-width="600" elevation="8">
    <v-card-title class="justify-center pb-4">
      <h2 class="title">Cari Layanan Kesehatan</h2>
    </v-card-title>

    <v-form>
      <v-text-field
        label="Cari dokter, layanan, atau informasi kesehatan..."
        prepend-icon="mdi-magnify"
        outlined
        dense
        clearable
        placeholder="Contoh: dokter jantung, tes darah, jadwal praktek"
        class="mb-4"
      ></v-text-field>

      <v-btn color="indigo-lighten-1" large block @click="">
        <v-icon left>mdi-magnify</v-icon>
        Cari Sekarang
      </v-btn>
    </v-form>
  </v-card>
</template>
