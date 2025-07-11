<template>
  <v-container height="auto">
    <v-row justify="center">
      <v-menu min-width="100px">
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props">
            <v-icon>mdi-message-badge</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-text>
            <div class="mx-auto text-center">
              <h3>Notifications</h3>
              <v-divider class="my-3"></v-divider>

              <!-- Space untuk message notifications -->
              <div
                class="notification-space"
                style="min-height: 150px; max-height: 200px; overflow-y: auto"
              >
                <p class="text-grey text-body-2 mt-4">No new notifications</p>
              </div>

              <v-divider class="my-3"></v-divider>
              <v-btn to="/notifications" variant="text" rounded>
                View All Notifications
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-menu>
    </v-row>
  </v-container>
</template>

<script setup></script>
