<template>
  <div>
    <TheAdminPanelHeader />
    <div class="main-admin-content">
      <TheSideAdminNavigation />
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import TheAdminPanelHeader from "@/components/admin-panel-components/TheAdminPanelHeader";
import TheSideAdminNavigation from "@/components/admin-panel-components/TheSideAdminNavigation";
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.main-admin-content {
  display: flex;
  min-height: calc(100vh - 63px);
}
</style>
