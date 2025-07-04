<template>
  <div class="d-flex align-center justify-center mt-16">
    <v-card width="450" class="mx-auto my-16" color="grey-lighten-3">
      <v-card-title class="text-black text-center">
        <v-icon color="green-darken-3" class="mr-2">mdi-whatsapp</v-icon>
        Hubungi Kami
      </v-card-title>

      <v-card-text class="pa-4">
        <div class="text-center mb-4">
          <div class="text-h6">{{ phoneNumber }}</div>
        </div>

        <v-btn @click="openWhatsApp" color="green" block large dark>
          <v-icon left>mdi-whatsapp</v-icon>
          Chat Sekarang Juga
        </v-btn>
      </v-card-text>
    </v-card>
  </div>
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
