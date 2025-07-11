<template>
  <!-- Default -->
  <LazyDiffContentHeaderContent
    headerHalaman="Kontak Kami"
    subHeaderHalaman="Tim kami selalu siap menjawab pertanyaan Anda kapan saja"
  />

  <v-card
    class="mx-auto pa-12 pb-5 my-2"
    elevation="8"
    max-width="448"
    rounded="lg"
  >
    <v-btn
      @click="openWhatsApp"
      class="mb-8"
      color="green-darken-2"
      size="large"
      variant="tonal"
      block
    >
      <v-icon>mdi-whatsapp</v-icon>Chat Sekarang Juga
    </v-btn>
  </v-card>
</template>

<script setup>
import {
  DiffContentHeaderContent,
  LazyDiffContentHeaderContent,
} from "#components";

// Reactive data
const phoneNumber = ref("+62 822-1577-8959");
const message = ref("Halo, Saya butuh bantuan!");

// Methods
const openWhatsApp = () => {
  const cleanPhone = phoneNumber.value.replace(/[\s\-\+\(\)]/g, "");
  const encodedMessage = encodeURIComponent(message.value);
  const whatsappURL = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;

  window.open(whatsappURL, "_blank");
};
</script>
