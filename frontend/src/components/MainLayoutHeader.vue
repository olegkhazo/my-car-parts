<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="header-logo">
        <router-link :to="{ name: 'home-page' }">MyCarParts</router-link>
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
      <div
        class="nav"
        :class="{ showMobileMenu: mobileMenuVisibilaty }"
      >
        <ul>
          <li>
            <router-link :to="{ name: 'all-spare-part-requests' }">Suggest your parts</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'part-request' }">Find spare part</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'home-page' }">How It Work</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'home-page' }">Company Registration</router-link>
          </li>
          <!-- Will be uncomment later, when registration will be done  -->
          <!-- <li>
            <a
              href="#"
              class="blue-btn"
              >Sign In</a
            >
          </li> -->
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
  mobileMenuIcon.value = mobileMenuVisibilaty.value === false ? "menu" : "close";
});
</script>

<style lang="sass" scoped>
@import "@/styles/components/_main-layout-header.scss"
</style>
