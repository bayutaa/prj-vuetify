<template>
  <v-container class="pt-12 pb-8">
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <div class="text-center mb-8">
          <h1 class="text-h3 font-weight-bold text-indigo-darken-4 mb-4">
            Kontak Kami
          </h1>
          <p class="text-h6 text-black font-weight-regular">
            Tim kami selalu siap menjawab pertanyaan Anda kapan saja
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
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

<script>
export default {
  data() {
    return {
      phoneNumber: "+62 822-1577-8959",
      message: "Halo, Saya butuh bantuan!",
    };
  },

  methods: {
    openWhatsApp() {
      const cleanPhone = this.phoneNumber.replace(/[\s\-\+\(\)]/g, "");
      const encodedMessage = encodeURIComponent(this.message);
      const whatsappURL = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;

      window.open(whatsappURL, "_blank");
    },
  },
};
</script>
