<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="header-logo">
        <NuxtLink to="/">MyNextParts</NuxtLink>
      </div>
      <NuxtImg
        v-if="!mobileMenuVisibility"
        src="/images/menu_black_36dp.svg"
        class="menu-icon"
        @click="showHideMobileMenu"
      />
      <NuxtImg v-else name="close" src="/images/close_black_36dp.svg" class="menu-icon" @click="showHideMobileMenu" />
      <div class="nav" :class="{ 'show-mobile-menu': mobileMenuVisibility }" v-click-outside="clickOutsideMobileMenu">
        <ul>
          <li>
            <NuxtLink to="/part-request">Find parts</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/all-spare-part-requests">Suggest your parts</NuxtLink>
          </li>
          <li>
            <NuxtLink to="how-it-work">How it work</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const mobileMenuVisibility = ref(false);

function showHideMobileMenu() {
  mobileMenuVisibility.value = mobileMenuVisibility.value === false;
}

function clickOutsideMobileMenu(event) {
  if (mobileMenuVisibility.value && !event.srcElement.classList.contains("menu-icon")) {
    mobileMenuVisibility.value = false;
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.header {
  height: 63px;
  background-color: $white;
  box-shadow: 0px -13px 33px rgba(0, 0, 0, 0.25);

  .content-wrapper {
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .header-logo {
      font-size: 22px;
      font-weight: 600;
    }

    .menu-icon {
      width: 38px;
      display: none;
      cursor: pointer;

      @media (max-width: 1080px) {
        display: block;
      }
    }

    .nav {
      width: 40%;

      @media (max-width: 1080px) {
        width: 55%;
      }

      @media (max-width: 1080px) {
        display: none;
      }

      ul {
        display: flex;
        justify-content: space-between;

        li {
          list-style: none;

          a {
            font-weight: 500;

            &:hover {
              cursor: pointer;
              color: $gray-800;
            }
          }
        }
      }
    }

    .show-mobile-menu {
      z-index: 10;
      display: block;
      position: absolute;
      background-color: $white;
      right: 5px;
      top: 65px;
      width: 200px;
      border: 1px solid $white;
      box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.25);

      ul {
        flex-direction: column;
        padding-inline-start: 15px;

        li {
          padding: 10px 0;
        }
      }
    }
  }
}
</style>
