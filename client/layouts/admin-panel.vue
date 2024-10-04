<script setup>
import AdminHeader from "@/components/admin-components/AdminHeader";
import AdminNavigation from "@/components/admin-components/AdminNavigation";

import { useAuthStore } from "@/stores/useAuthStore";
const authManager = useAuthStore();

const { isAuthenticated } = storeToRefs(authManager);

onMounted(async () => {
  if (!isAuthenticated.value) {
    navigateTo("/sign-in");
  }
});
</script>

<template>
  <div class="admin-panel">
    <AdminNavigation />
    <div class="main-admin-content">
      <div class="admin-panel-right-content">
        <AdminHeader />

        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.admin-panel {
  display: flex;
  width: 100%;
  min-height: 100vh;

  .main-admin-content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
}
</style>
