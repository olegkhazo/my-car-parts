<template>
  <div>
    <TheAdminPanelHeader />

    <div>
      <slot />
    </div>
  </div>
</template>

<script setup>
import TheAdminPanelHeader from "@/components/admin-panel-components/TheAdminPanelHeader";
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.admin-footer {
  padding: 20px 0;
  border-top: 1px solid $gray-100;
  border-bottom: 1px solid $gray-100;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 390px) {
    border-top: none;
    padding-top: 0;
  }

  .admin-footer-header {
    font-weight: 500;
  }

  ul {
    display: flex;
    margin-top: 15px;

    li {
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
      &:not(:first-child) {
        margin-left: 15px;
      }

      img {
        width: 30px;
      }
    }
  }
}
.footer-rights {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 5px 0 40px 0;
}
</style>
