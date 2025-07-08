<template>
  <div class="button-container">
    <v-btn
      color="indigo"
      size="default"
      variant="tonal"
      rounded="xl"
      class="mb-4 text-subtitle-2"
    >
      <v-icon start>mdi-chevron-right</v-icon>
      Klik untuk lebih lanjut
    </v-btn>
  </div>
</template>

<style scoped>
.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 20px;
}

.button-hover {
  transition: all 0.3s ease;
}

.button-hover:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(63, 81, 181, 0.3);
}

/* Custom indigo gradient button */
.gradient-button {
  background: linear-gradient(135deg, #3f51b5, #5c6bc0);
  color: white;
  border: none;
  border-radius: 24px;
  padding: 12px 32px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(63, 81, 181, 0.2);
}

.gradient-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(63, 81, 181, 0.4);
  background: linear-gradient(135deg, #303f9f, #3f51b5);
}
</style>
