<template>
  <div class="bg-white min-h-screen">
    <!-- Services Grid -->
    <v-container>
      <v-row>
        <!-- Loop untuk menampilkan semua service -->
        <v-col
          v-for="service in klinik"
          :key="service.id"
          cols="12"
          sm="6"
          md="3"
        >
          <v-card
            class="service-card text-center pa-4"
            hover
            @click="openDialog(service)"
          >
            <v-icon :color="service.color" size="60" class="mb-4">
              {{ service.icon }}
            </v-icon>
            <v-card-title class="justify-center">
              <h3>{{ service.name }}</h3>
            </v-card-title>
            <v-card-text>
              <p class="text-grey">{{ service.description }}</p>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Button ditampilkan setelah semua service -->
        <v-col cols="12" sm="6" md="3">
          <nextButton />
        </v-col>
      </v-row>
    </v-container>

    <!-- Dialog Overlay -->
    <v-dialog v-model="dialog" max-width="900">
      <v-card>
        <v-card-title class="text-h5 d-flex align-center">
          <v-icon :color="selectedService?.color" class="mr-3">
            {{ selectedService?.icon }}
          </v-icon>
          {{ selectedService?.name }}
        </v-card-title>

        <v-card-text>
          <div class="py-4">
            <h4 class="mb-2">Deskripsi</h4>
            <p class="text-grey-darken-1 mb-6">
              {{ selectedService?.description }}
            </p>

            <!-- Stepper untuk menunjukkan progress -->
            <v-stepper v-model="currentStep" class="mb-6">
              <v-stepper-header>
                <v-stepper-item
                  :complete="currentStep > 1"
                  :value="1"
                  title="Pilih Dokter"
                ></v-stepper-item>
                <v-divider></v-divider>
                <v-stepper-item
                  :complete="currentStep > 2"
                  :value="2"
                  title="Pilih Tanggal"
                ></v-stepper-item>
                <v-divider></v-divider>
                <v-stepper-item
                  :complete="currentStep > 3"
                  :value="3"
                  title="Pilih Waktu"
                ></v-stepper-item>
              </v-stepper-header>
            </v-stepper>

            <!-- Step 1: Pilih Dokter -->
            <div v-if="currentStep === 1">
              <h4 class="mb-3">Pilih Dokter</h4>

              <!-- Loading state -->
              <div v-if="loadingDokter" class="text-center py-4">
                <v-progress-circular
                  indeterminate
                  color="primary"
                ></v-progress-circular>
                <p class="mt-2">Memuat daftar dokter...</p>
              </div>

              <!-- Jika tidak ada dokter -->
              <div
                v-else-if="availableDokter.length === 0"
                class="text-center py-4"
              >
                <v-icon size="48" color="grey-lighten-1">mdi-doctor</v-icon>
                <p class="text-grey mt-2">
                  Tidak ada dokter tersedia untuk instalasi ini
                </p>
              </div>

              <!-- Daftar dokter -->
              <div v-else>
                <v-radio-group v-model="selectedDokter" class="mt-2">
                  <v-radio
                    v-for="dokter in availableDokter"
                    :key="dokter.id"
                    :value="dokter"
                    class="mb-2"
                  >
                    <template v-slot:label>
                      <div class="d-flex align-center">
                        <!-- Avatar dengan gambar dokter -->
                        <v-avatar
                          size="40"
                          class="mr-3"
                          :color="dokter.image ? '' : 'primary'"
                        >
                          <!-- Jika ada gambar dokter, tampilkan gambar -->
                          <v-img
                            v-if="dokter.image"
                            :src="dokter.image"
                            :alt="dokter.nama"
                            cover
                            @error="onImageError(dokter)"
                          />
                          <!-- Jika tidak ada gambar atau error, tampilkan icon default -->
                          <v-icon v-else color="white">mdi-doctor</v-icon>
                        </v-avatar>

                        <div>
                          <div class="font-weight-bold">{{ dokter.nama }}</div>
                          <div class="text-caption text-grey">
                            {{ dokter.spesialis }}
                          </div>
                          <div class="text-caption text-grey">
                            NIP: {{ dokter.nip }}
                          </div>
                        </div>
                      </div>
                    </template>
                  </v-radio>
                </v-radio-group>
              </div>
            </div>

            <!-- Step 2: Pilih Tanggal -->
            <div v-else-if="currentStep === 2">
              <h4 class="mb-3">Pilih Tanggal</h4>
              <div class="text-sm text-grey mb-4">
                Dokter yang dipilih: <strong>{{ selectedDokter?.nama }}</strong>
              </div>

              <v-date-picker
                v-model="selectedDate"
                :min="minDate"
                :max="maxDate"
                show-adjacent-months
                width="100%"
                class="mx-auto"
              ></v-date-picker>
            </div>

            <!-- Step 3: Pilih Waktu -->
            <div v-else-if="currentStep === 3">
              <h4 class="mb-3">Pilih Waktu</h4>
              <div class="text-sm text-grey mb-4">
                Tanggal: <strong>{{ formatDate(selectedDate) }}</strong> |
                Dokter: <strong>{{ selectedDokter?.nama }}</strong>
              </div>

              <div class="d-flex flex-wrap gap-3">
                <v-chip
                  v-for="time in availableTimeSlots"
                  :key="time"
                  :variant="selectedTime === time ? 'elevated' : 'outlined'"
                  :color="selectedTime === time ? 'primary' : 'default'"
                  clickable
                  @click="selectedTime = time"
                  class="ma-1"
                >
                  {{ time }}
                </v-chip>
              </div>

              <!-- Jika tidak ada waktu tersedia -->
              <div
                v-if="availableTimeSlots.length === 0"
                class="text-center py-4"
              >
                <v-icon size="48" color="grey-lighten-1"
                  >mdi-clock-outline</v-icon
                >
                <p class="text-grey mt-2">
                  Tidak ada waktu tersedia untuk tanggal ini
                </p>
              </div>
            </div>
          </div>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <!-- Tombol Back -->
          <v-btn
            v-if="currentStep > 1"
            color="grey-darken-1"
            variant="text"
            @click="previousStep"
          >
            Kembali
          </v-btn>

          <!-- Tombol Close -->
          <v-btn color="grey-darken-1" variant="text" @click="closeDialog">
            Tutup
          </v-btn>

          <!-- Tombol Next/Pesan -->
          <v-btn
            color="primary"
            variant="elevated"
            @click="nextStep"
            :disabled="!canProceed"
          >
            {{ currentStep === 3 ? "Pesan Sekarang" : "Lanjut" }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Snackbar untuk notifikasi -->
    <v-snackbar
      v-model="snackbar.show"
      :color="snackbar.color"
      timeout="3000"
      location="top"
    >
      {{ snackbar.message }}
      <template v-slot:actions>
        <v-btn variant="text" @click="snackbar.show = false"> Tutup </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from "vue";

type Klinik = {
  id: number;
  name: string;
  description: string;
  icon?: string;
  color: string;
  details?: string[];
  price?: string;
};

type Dokter = {
  id: number;
  nama: string;
  spesialis: string;
  nip: string;
  instalasi_id: number | null;
  image: string;
};

// Fetch data instalasi
const { data: klinikData } = await useFetch<Klinik[]>("/data/klinik.json");
const klinik = klinikData.value || [];

// Fetch data dokter
const { data: dokterData } = await useFetch<Dokter[]>("/data/dokter.json");
const allDokter = dokterData.value || [];

// State untuk dialog
const dialog = ref(false);
const selectedService = ref<Klinik | null>(null);
const selectedDokter = ref<Dokter | null>(null);
const selectedDate = ref<Date>(new Date());
const selectedTime = ref<string>("");
const currentStep = ref(1);
const loadingDokter = ref(false);

// State untuk snackbar
const snackbar = reactive({
  show: false,
  message: "",
  color: "success",
});

// State untuk track image errors
const imageErrors = ref<Set<number>>(new Set());

// Computed untuk tanggal minimum dan maksimum
const minDate = computed(() => {
  const today = new Date();
  return today;
});

const maxDate = computed(() => {
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 30); // 30 hari ke depan
  return maxDate;
});

// Computed untuk slot waktu yang tersedia
const availableTimeSlots = computed(() => {
  // Simulasi slot waktu (bisa disesuaikan dengan kebutuhan)
  const slots = [
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
  ];

  // Filter slot yang sudah lewat jika tanggal hari ini
  const today = new Date();
  const isToday = selectedDate.value.toDateString() === today.toDateString();

  if (isToday) {
    const currentHour = today.getHours();
    const currentMinute = today.getMinutes();

    return slots.filter((slot) => {
      const [hour, minute] = slot.split(":").map(Number);
      return (
        hour > currentHour || (hour === currentHour && minute > currentMinute)
      );
    });
  }

  return slots;
});

// Computed untuk mendapatkan dokter yang tersedia untuk instalasi yang dipilih
const availableDokter = computed(() => {
  if (!selectedService.value) return [];

  // Filter dokter yang belum assigned ke instalasi lain atau yang sudah assigned ke instalasi ini
  return allDokter.filter(
    (dokter) =>
      dokter.instalasi_id === null ||
      dokter.instalasi_id === selectedService.value?.id
  );
});

// Computed untuk cek apakah bisa lanjut ke step berikutnya
const canProceed = computed(() => {
  if (currentStep.value === 1) return selectedDokter.value !== null;
  if (currentStep.value === 2) return selectedDate.value !== null;
  if (currentStep.value === 3) return selectedTime.value !== "";
  return false;
});

// Function untuk format tanggal
const formatDate = (date: Date) => {
  if (!date) return "";
  return new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};

// Function untuk handle image error
const onImageError = (dokter: Dokter) => {
  console.warn(
    `Failed to load image for doctor ${dokter.nama}: ${dokter.image}`
  );
  imageErrors.value.add(dokter.id);
};

// Function untuk membuka dialog
const openDialog = async (service: Klinik) => {
  selectedService.value = service;
  selectedDokter.value = null;
  selectedDate.value = new Date();
  selectedTime.value = "";
  currentStep.value = 1;
  dialog.value = true;

  // Reset image errors untuk dialog baru
  imageErrors.value.clear();

  // Simulasi loading dokter
  loadingDokter.value = true;
  await new Promise((resolve) => setTimeout(resolve, 500));
  loadingDokter.value = false;
};

// Function untuk menutup dialog
const closeDialog = () => {
  dialog.value = false;
  selectedService.value = null;
  selectedDokter.value = null;
  selectedDate.value = new Date();
  selectedTime.value = "";
  currentStep.value = 1;
  imageErrors.value.clear();
};

// Function untuk ke step selanjutnya
const nextStep = () => {
  if (currentStep.value === 3) {
    // Proses pemesanan
    handleBooking();
  } else {
    currentStep.value++;
  }
};

// Function untuk ke step sebelumnya
const previousStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--;
  }
};

// Function untuk handle pemesanan
const handleBooking = () => {
  if (
    !selectedDokter.value ||
    !selectedService.value ||
    !selectedDate.value ||
    !selectedTime.value
  ) {
    showSnackbar("Silakan lengkapi semua pilihan", "error");
    return;
  }

  // Implementasi logika untuk pemesanan
  console.log("Pesan layanan:", selectedService.value.name);
  console.log("Dokter yang dipilih:", selectedDokter.value.nama);
  console.log("Tanggal:", selectedDate.value);
  console.log("Waktu:", selectedTime.value);

  // Simulasi proses pemesanan
  const pesanan = {
    instalasi: selectedService.value.name,
    dokter: selectedDokter.value.nama,
    tanggal: selectedDate.value,
    waktu: selectedTime.value,
    timestamp: new Date().toISOString(),
  };

  // Tampilkan konfirmasi
  showSnackbar(
    `Berhasil memesan layanan ${selectedService.value.name} dengan ${
      selectedDokter.value.nama
    } pada ${formatDate(selectedDate.value)} pukul ${selectedTime.value}`,
    "success"
  );

  // Tutup dialog
  closeDialog();

  // Tambahkan navigasi atau logic lainnya sesuai kebutuhan
  // navigateTo('/booking-confirmation', { query: pesanan });
};

// Function untuk menampilkan snackbar
const showSnackbar = (message: string, color: string = "success") => {
  snackbar.message = message;
  snackbar.color = color;
  snackbar.show = true;
};
</script>

<style scoped>
.service-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
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

/* Style untuk radio button dokter */
:deep(.v-radio .v-label) {
  width: 100%;
}

:deep(.v-input--radio-group .v-radio) {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 8px;
  transition: all 0.3s ease;
}

:deep(.v-input--radio-group .v-radio:hover) {
  border-color: #1976d2;
  background-color: #f3f7ff;
}

:deep(.v-input--radio-group .v-radio--is-focused) {
  border-color: #1976d2;
  background-color: #f3f7ff;
}

/* Style untuk avatar dengan gambar */
.v-avatar {
  transition: all 0.3s ease;
}

.v-avatar:hover {
  transform: scale(1.05);
}

/* Style untuk handling image loading states */
.v-img {
  border-radius: inherit;
}

/* Style untuk time slots */
.v-chip {
  min-width: 80px;
  justify-content: center;
}

/* Style untuk date picker */
:deep(.v-date-picker) {
  box-shadow: none;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
}
</style>
