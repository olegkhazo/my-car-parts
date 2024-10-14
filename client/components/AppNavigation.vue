<script setup>
import { useAuthStore } from "@/stores";
import { storeToRefs } from "pinia";

const authManager = useAuthStore();
const { loggedIn } = storeToRefs(authManager);

const mobileMenuVisibility = ref(false);
const screenWidth = ref(window.innerWidth);

function showHideMobileMenu() {
  mobileMenuVisibility.value = !mobileMenuVisibility.value;
}

function clickOutsideMobileMenu(event) {
  if (mobileMenuVisibility.value && !event.srcElement.classList.contains("menu-icon")) {
    mobileMenuVisibility.value = false;
  }
}

function hideMobileMenu() {
  mobileMenuVisibility.value = false;
}

async function logoutUser() {
  await authManager.logout();
}

const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("resize", updateScreenWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateScreenWidth);
});
</script>

<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="header-logo">
        <NuxtLink to="/">
          <NuxtImg src="/images/logo.svg" alt="logo" />
        </NuxtLink>
      </div>

      <NuxtImg
        v-if="!mobileMenuVisibility"
        src="/images/menu_black_36dp.svg"
        class="menu-icon"
        @click="showHideMobileMenu"
      />
      <NuxtImg v-else src="/images/close_black_36dp.svg" class="menu-icon" @click="showHideMobileMenu" />

      <div class="nav" :class="{ 'show-mobile-menu': mobileMenuVisibility }" v-click-outside="clickOutsideMobileMenu">
        <ul @click="hideMobileMenu">
          <li>
            <NuxtLink to="/part-request">Find parts</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/all-spare-part-requests">Suggest your parts</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/how-it-work">How it work</NuxtLink>
          </li>
          <li v-if="!loggedIn">
            <div class="sign-buttons">
              <NuxtLink to="/sign-in" class="xl-green-btn">Sign In</NuxtLink>
              <NuxtLink to="/sign-up" class="blue-btn">Sign Up</NuxtLink>
            </div>
          </li>
          <li v-if="loggedIn">
            <NuxtLink to="/admin-panel">Admin Panel</NuxtLink>
          </li>
          <li v-if="loggedIn">
            <NuxtLink to="/admin-panel/my-profile">My Profile</NuxtLink>
          </li>
          <li v-if="loggedIn">
            <NuxtLink @click="logoutUser" class="blue-btn">Sign Out</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

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

    .menu-icon {
      width: 38px;
      cursor: pointer;
      display: none;

      @media (max-width: 1080px) {
        display: block;
      }
    }

    .nav {
      width: 70%;

      @media (max-width: 1080px) {
        width: 55%;
        display: none;
      }

      ul {
        display: flex;
        justify-content: space-between;
        align-items: center;

        li {
          list-style: none;

          .sign-buttons {
            display: flex;

            .xl-green-btn {
              margin-right: 15px;
            }
          }

          a {
            font-weight: 500;

            &:hover {
              cursor: pointer;
              color: $gray-800;
            }
          }
        }

        .sign-out-link {
          color: $blue;
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
        padding-bottom: 15px;

        li {
          padding: 10px 0;
        }
      }
    }
  }
}
</style>
