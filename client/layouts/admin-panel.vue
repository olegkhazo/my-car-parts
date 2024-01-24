<template>
  <div>
    <TheAdminPanelHeader />
    <div class="main-admin-content">
      <TheSideAdminNavigation />
      <div class="admin-panel-right-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import TheAdminPanelHeader from "@/components/admin-panel-components/TheAdminPanelHeader";
import TheSideAdminNavigation from "@/components/admin-panel-components/TheSideAdminNavigation";
const authManager = useAuthStore();

const { loggedIn } = storeToRefs(authManager);

onMounted(() => {
  if (!loggedIn.value) {
    navigateTo("/sign-in");
  }
});
</script>

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
