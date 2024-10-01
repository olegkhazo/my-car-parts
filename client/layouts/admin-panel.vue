<script setup>
import AdminHeader from "@/components/admin-components/AdminHeader";
import AdminNavigation from "@/components/admin-components/AdminNavigation";
const authManager = useAuthStore();

const { loggedIn } = storeToRefs(authManager);

onMounted(() => {
  if (!loggedIn.value) {
    navigateTo("/sign-in");
  }
});
</script>

<template>
  <div>
    <AdminHeader />
    <div class="main-admin-content">
      <AdminNavigation />
      <div class="admin-panel-right-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.main-admin-content {
  display: flex;
  min-height: calc(100vh - 63px);

  .admin-panel-right-content {
    width: calc(100% - 200px);

    @media (max-width: 850px) {
      width: calc(100% - 150px);
    }
  }
}
</style>
