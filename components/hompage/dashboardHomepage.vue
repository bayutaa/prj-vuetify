<template>
  <div>
    <v-card>
      <v-card-title>
        <span class="text-h5">Data Users</span>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
          clearable
        ></v-text-field>
      </v-card-title>

      <v-data-table
        :headers="headers"
        :items="users"
        :search="search"
        :loading="loading"
        :items-per-page="5"
        class="elevation-1"
        show-select
        @click:row="handleRowClick"
      >
        <!-- Custom slot untuk kolom status -->
        <template v-slot:item.status="{ item }">
          <v-chip :color="getStatusColor(item.status)" text-color="white" small>
            {{ item.status }}
          </v-chip>
        </template>

        <!-- Custom slot untuk kolom actions -->
        <template v-slot:item.actions="{ item }">
          <v-btn icon size="small" @click.stop="editUser(item)">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn icon size="small" color="red" @click.stop="deleteUser(item)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </template>

        <!-- Loading slot -->
        <template v-slot:loading>
          <v-skeleton-loader type="table-row@10"></v-skeleton-loader>
        </template>

        <!-- No data slot -->
        <template v-slot:no-data>
          <v-alert type="info" class="ma-2">
            Tidak ada data yang ditemukan
          </v-alert>
        </template>
      </v-data-table>
    </v-card>

    <!-- Dialog untuk edit user -->
    <v-dialog v-model="editDialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Edit User</span>
        </v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid">
            <v-text-field
              v-model="editedUser.name"
              label="Name"
              :rules="nameRules"
              required
            ></v-text-field>
            <v-text-field
              v-model="editedUser.email"
              label="Email"
              :rules="emailRules"
              required
            ></v-text-field>
            <v-select
              v-model="editedUser.status"
              :items="statusOptions"
              label="Status"
              required
            ></v-select>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey" @click="closeDialog">Cancel</v-btn>
          <v-btn color="primary" @click="saveUser" :disabled="!valid"
            >Save</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Snackbar untuk notifikasi -->
    <v-snackbar v-model="snackbar" :timeout="3000" :color="snackbarColor">
      {{ snackbarText }}
      <template v-slot:actions>
        <v-btn text @click="snackbar = false"> Close </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";

// Reactive variables
const search = ref("");
const loading = ref(false);
const editDialog = ref(false);
const valid = ref(false);
const snackbar = ref(false);
const snackbarText = ref("");
const snackbarColor = ref("success");

// Table headers
const headers = [
  {
    title: "ID",
    key: "id",
    align: "start",
    sortable: true,
    width: "10%",
  },
  {
    title: "Name",
    key: "name",
    align: "start",
    sortable: true,
  },
  {
    title: "Email",
    key: "email",
    align: "start",
    sortable: true,
  },
  {
    title: "Role",
    key: "role",
    align: "start",
    sortable: true,
  },
  {
    title: "Status",
    key: "status",
    align: "center",
    sortable: true,
    width: "15%",
  },
  {
    title: "Actions",
    key: "actions",
    align: "center",
    sortable: false,
    width: "15%",
  },
];

// Sample data
const users = ref([
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "User",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "Moderator",
    status: "Active",
  },
  {
    id: 4,
    name: "Alice Brown",
    email: "alice@example.com",
    role: "User",
    status: "Pending",
  },
  {
    id: 5,
    name: "Charlie Wilson",
    email: "charlie@example.com",
    role: "Admin",
    status: "Active",
  },
]);

// Form data
const editedUser = reactive({
  id: null,
  name: "",
  email: "",
  role: "",
  status: "",
});

const defaultUser = {
  id: null,
  name: "",
  email: "",
  role: "",
  status: "",
};

const statusOptions = ["Active", "Inactive", "Pending"];

// Form validation rules
const nameRules = [
  (v) => !!v || "Name is required",
  (v) => (v && v.length >= 2) || "Name must be at least 2 characters",
];

const emailRules = [
  (v) => !!v || "Email is required",
  (v) => /.+@.+\..+/.test(v) || "Email must be valid",
];

// Methods
const getStatusColor = (status) => {
  const colors = {
    Active: "green",
    Inactive: "red",
    Pending: "orange",
  };
  return colors[status] || "grey";
};

const handleRowClick = (event, row) => {
  console.log("Row clicked:", row.item);
  // Handle row click action
};

const editUser = (user) => {
  Object.assign(editedUser, user);
  editDialog.value = true;
};

const deleteUser = (user) => {
  if (confirm(`Are you sure you want to delete ${user.name}?`)) {
    const index = users.value.findIndex((u) => u.id === user.id);
    if (index > -1) {
      users.value.splice(index, 1);
      showSnackbar("User deleted successfully", "success");
    }
  }
};

const saveUser = async () => {
  if (!valid.value) return;

  loading.value = true;

  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const index = users.value.findIndex((u) => u.id === editedUser.id);
    if (index > -1) {
      users.value[index] = { ...editedUser };
      showSnackbar("User updated successfully", "success");
    }

    closeDialog();
  } catch (error) {
    showSnackbar("Error saving user", "error");
  } finally {
    loading.value = false;
  }
};

const closeDialog = () => {
  editDialog.value = false;
  Object.assign(editedUser, defaultUser);
};

const showSnackbar = (text, color = "success") => {
  snackbarText.value = text;
  snackbarColor.value = color;
  snackbar.value = true;
};

// Lifecycle hooks
onMounted(async () => {
  loading.value = true;

  try {
    // Simulate API call to fetch data
    await new Promise((resolve) => setTimeout(resolve, 1500));
    // Data already loaded above
  } catch (error) {
    showSnackbar("Error loading data", "error");
  } finally {
    loading.value = false;
  }
});

// Meta for SEO (Nuxt 3)
useHead({
  title: "User Management Table",
  meta: [
    {
      name: "description",
      content: "Manage users with Vue 3, Nuxt.js and Vuetify data table",
    },
  ],
});
</script>

<style scoped>
.v-data-table {
  background: transparent;
}

.v-card {
  margin: 16px;
}

.v-data-table >>> .v-data-table__wrapper {
  max-height: 600px;
  overflow-y: auto;
}

/* Custom styling untuk row hover */
.v-data-table >>> tbody tr:hover {
  background-color: rgba(0, 0, 0, 0.04);
}

/* Custom styling untuk header */
.v-data-table >>> .v-data-table-header {
  background-color: #f5f5f5;
}
</style>
