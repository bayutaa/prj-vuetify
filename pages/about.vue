<template>
  <div>
    <v-container fluid class="pa-0">
      <!-- Timeline Section -->
      <v-row no-gutters class="timeline-section">
        <v-col>
          <v-card flat class="pa-8">
            <h1
              class="text-h3 text-indigo-darken-4 font-weight-bold text-center mb-8"
            >
              Sejarah RSUD Dr. Saiful Anwar
            </h1>

            <!-- Timeline Navigation -->
            <div class="timeline-nav mb-6">
              <v-btn-toggle
                v-model="activeYear"
                mandatory
                rounded="pill"
                class="d-flex justify-center flex-wrap"
                variant="outlined"
              >
                <v-btn
                  v-for="(item, index) in timelineData"
                  :key="index"
                  :value="index"
                  class="mx-1 my-1"
                  size="small"
                >
                  {{ item.year }}
                </v-btn>
              </v-btn-toggle>
            </div>

            <!-- Main Timeline Content -->
            <div class="timeline-container">
              <v-slide-group
                v-model="activeYear"
                class="timeline-slider"
                show-arrows
                mandatory
              >
                <v-slide-group-item
                  v-for="(item, index) in timelineData"
                  :key="index"
                  v-slot="{ isSelected, toggle }"
                >
                  <v-card
                    :class="[
                      'timeline-card mx-2',
                      { 'active-card': isSelected },
                    ]"
                    width="400"
                    @click="toggle"
                  >
                    <v-img
                      :src="item.image"
                      height="150"
                      cover
                      class="timeline-image"
                    >
                      <div class="year-overlay">
                        <span class="year-text">{{ item.year }}</span>
                      </div>
                    </v-img>
                    <v-card-title class="text-h6 font-weight-bold">
                      {{ item.title }}
                    </v-card-title>
                    <v-card-text>
                      <p class="text-body-1">{{ item.description }}</p>
                    </v-card-text>
                  </v-card>
                </v-slide-group-item>
              </v-slide-group>
            </div>

            <!-- Detailed Content for Active Year -->
            <v-row class="mt-8">
              <v-col cols="12" md="6">
                <v-card elevation="2" class="detail-card">
                  <v-img
                    :src="timelineData[activeYear]?.image"
                    height="400"
                    cover
                  ></v-img>
                </v-card>
              </v-col>
              <v-col cols="12" md="6">
                <v-card elevation="2" class="detail-card pa-6">
                  <v-card-title
                    class="text-h4 font-weight-bold text-indigo-darken-3"
                  >
                    {{ timelineData[activeYear]?.year }}
                  </v-card-title>
                  <v-card-subtitle class="text-h6 mb-4">
                    {{ timelineData[activeYear]?.title }}
                  </v-card-subtitle>
                  <v-card-text>
                    <p class="text-body-1 mb-4">
                      {{ timelineData[activeYear]?.description }}
                    </p>
                    <p class="text-body-1">
                      {{ timelineData[activeYear]?.details }}
                    </p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
  data() {
    return {
      activeYear: 0,
      timelineData: [
        {
          year: "1928",
          title: "Pendirian Awal",
          description:
            "Didirikan sebagai rumah sakit pertama di Malang dengan nama Gemeente Ziekenhuis.",
          details:
            "Pada tahun 1928, rumah sakit ini didirikan oleh pemerintah kolonial Belanda dengan kapasitas 50 tempat tidur. Berlokasi di pusat kota Malang, rumah sakit ini menjadi fasilitas kesehatan pertama yang modern di wilayah Malang Raya.",
          image: "/images/rssa 1.jpg",
        },
        {
          year: "1945",
          title: "Era Kemerdekaan",
          description:
            "Beralih menjadi rumah sakit umum milik pemerintah Indonesia setelah kemerdekaan.",
          details:
            "Setelah kemerdekaan Indonesia, rumah sakit ini diambil alih oleh pemerintah Indonesia dan mulai dikembangkan menjadi rumah sakit umum yang melayani masyarakat luas. Pada periode ini, rumah sakit mulai menerima tenaga medis Indonesia pertama.",
          image:
            "https://i.pinimg.com/736x/90/47/2d/90472d14e9cc3b254f21960d7f6fb473.jpg",
        },
        {
          year: "1963",
          title: "Menjadi RS Pendidikan",
          description: "Ditunjuk sebagai rumah sakit pendidikan FK UB.",
          details:
            "Dengan berdirinya Fakultas Kedokteran Universitas Brawijaya, RS Saiful Anwar ditetapkan sebagai rumah sakit pendidikan utama. Ini menandai dimulainya era baru sebagai pusat pendidikan dokter dan tenaga medis di Jawa Timur.",
          image:
            "https://i.pinimg.com/736x/b6/ee/c0/b6eec0fcf862bbde7c9dd3b191e49010.jpg",
        },
        {
          year: "1982",
          title: "Perubahan Nama",
          description:
            "Secara resmi berganti nama menjadi Rumah Sakit Umum Dr. Saiful Anwar.",
          details:
            "Rumah sakit ini dinamai sesuai dengan nama seorang tokoh dokter yang berjasa dalam pengembangan kesehatan di Indonesia. Nama Dr. Saiful Anwar dipilih untuk menghormati dedikasi beliau dalam dunia kedokteran.",
          image: "/images/rssa 3.jpg",
        },
        {
          year: "1991",
          title: "Status Rumah Sakit Tipe A",
          description:
            "Mendapat pengakuan sebagai rumah sakit tipe A dengan fasilitas pelayanan lengkap.",
          details:
            "Dengan semakin lengkapnya fasilitas dan pelayanan kesehatan, RS Saiful Anwar mendapat status sebagai rumah sakit tipe A. Status ini menunjukkan bahwa rumah sakit telah memenuhi standar pelayanan kesehatan tertinggi di Indonesia.",
          image: "/images/rssa 4.jpg",
        },
        {
          year: "2010",
          title: "Era Digitalisasi",
          description:
            "Implementasi sistem digital untuk efisiensi rumah sakit.",
          details:
            "Memasuki era digital, RS Saiful Anwar mulai mengimplementasikan sistem informasi rumah sakit yang terintegrasi. Sistem ini mencakup rekam medis elektronik, sistem antrian online, dan berbagai layanan digital lainnya.",
          image: "/images/rssa.jpg",
        },
        {
          year: "2023",
          title: "Inovasi dan Ekspansi",
          description:
            "Pengembangan telemedicine dan pembangunan gedung berteknologi modern.",
          details:
            "Pada tahun 2023, RS Saiful Anwar meluncurkan layanan telemedicine dan meresmikan gedung baru yang dilengkapi dengan teknologi medis terkini. Inovasi ini bertujuan untuk memberikan pelayanan kesehatan yang lebih baik dan aksesible bagi masyarakat.",
          image:
            "https://rsusaifulanwar.jatimprov.go.id/wp-content/uploads/2024/11/DSC03847-scaled.jpg",
        },
      ],
      statistics: [
        {
          title: "Tempat Tidur",
          value: "800+",
          icon: "mdi-bed",
        },
        {
          title: "Dokter Spesialis",
          value: "200+",
          icon: "mdi-doctor",
        },
        {
          title: "Pasien per Bulan",
          value: "50K+",
          icon: "mdi-account-group",
        },
        {
          title: "Tahun Pengalaman",
          value: "95+",
          icon: "mdi-calendar-star",
        },
      ],
    };
  },
};
</script>

<style scoped>
.timeline-section {
  background-color: #f5f5f5;
}

.stats-section {
  background: linear-gradient(135deg, #3949ab 0%, #283593 100%);
}

.timeline-container {
  position: relative;
  overflow: hidden;
}

.timeline-card {
  transition: all 0.3s ease;
  cursor: pointer;
}

.timeline-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.active-card {
  transform: scale(1.05);
  box-shadow: 0 8px 25px rgba(57, 73, 171, 0.3);
}

.timeline-image {
  position: relative;
}

.year-overlay {
  position: absolute;
  top: 16px;
  left: 16px;
  background: rgba(40, 53, 147, 0.9);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: bold;
}

.year-text {
  font-size: 14px;
  font-weight: 700;
}

.detail-card {
  height: 100%;
  transition: all 0.3s ease;
}

.detail-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.timeline-nav {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .timeline-card {
    width: 300px !important;
  }

  .hero-section .display-2 {
    font-size: 2rem !important;
  }

  .hero-section .headline {
    font-size: 1.2rem !important;
  }
}
</style>
