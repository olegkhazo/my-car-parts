<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="header-logo">
        <span>MyCarParts</span>
      </div>
      <img
        v-if="mobileMenuIcon === 'menu'"
        src="@/assets/images/menu_black_36dp.svg"
        alt="burger"
        class="menu-icon"
        @click="mobileMenuSwitcher"
      />
      <img
        v-else
        name="close"
        src="@/assets/images/close_black_36dp.svg"
        alt="cross"
        class="menu-icon"
        @click="mobileMenuSwitcher"
      />
      <div class="nav" :class="{ showMobileMenu: mobileMenuVisibilaty }">
        <ul>
          <li>
            <span>Find part</span>
          </li>
          <li>
            <span>How It Work</span>
          </li>
          <li>
            <span>Company Registration</span>
          </li>
          <li>
            <a href="#" class="blue-btn">Sign In</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const mobileMenuVisibilaty = ref(false);
const mobileMenuIcon = ref("menu");

function mobileMenuSwitcher() {
  mobileMenuVisibilaty.value = mobileMenuVisibilaty.value === false;
}

watch(mobileMenuVisibilaty, () => {
  mobileMenuIcon.value =
    mobileMenuVisibilaty.value === false ? "menu" : "close";
});
</script>

<style lang="sass" scoped>
@import "@/styles/components/_main-layout-header.scss"
</style>
