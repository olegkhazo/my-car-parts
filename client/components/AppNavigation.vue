<script setup>
import { useAuthStore } from "@/stores";
const authManager = useAuthStore();

const { loggedIn } = storeToRefs(authManager);

const mobileMenuVisibility = ref(false);
const menuVisibility = ref(false);

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

function showHideMenu() {
  menuVisibility.value = !menuVisibility.value;
}

function clickOutsideMenu(event) {
  const avatarWrapper = event.target.closest(".avatar-wrapper");
  if (!avatarWrapper) {
    menuVisibility.value = false;
  }
}

function hideMenu() {
  menuVisibility.value = false;
}
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
            <NuxtLink to="/sign-in" class="xl-green-btn">Sign In</NuxtLink>
          </li>
          <li v-if="!loggedIn">
            <NuxtLink to="/sign-up" class="blue-btn">Sign Up</NuxtLink>
          </li>
          <li v-if="loggedIn">
            <div class="avatar-wrapper" @click="showHideMenu">
              <NuxtImg src="/images/avatar-default.svg" alt="avatar" />
              <div class="menu" :class="{ 'show-menu': menuVisibility }" v-click-outside="clickOutsideMenu">
                <ul @click="hideMenu" class="registered-menu">
                  <li>
                    <NuxtLink to="/admin-panel">Admin Panel</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/admin-panel/my-profile">My Profile</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink @click="logoutUser" class="sign-out-link">Sign Out</NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
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
      display: none;
      cursor: pointer;

      @media (max-width: 1080px) {
        display: block;
      }
    }

    .nav {
      width: 60%;

      @media (max-width: 1080px) {
        width: 55%;
      }

      @media (max-width: 1080px) {
        display: none;
      }

      ul {
        display: flex;
        justify-content: space-between;
        align-items: center;

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
        .sign-out-link {
          color: $blue;
        }
      }

      .avatar-wrapper {
        height: 35px;
        width: 35px;
        background-color: $gray-100;
        border-radius: 50%;
        cursor: pointer;

        img {
          width: inherit;
          padding: 3px;
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

    .menu {
      z-index: 10;
      display: none;
      position: absolute;
      background-color: $white;
      right: 5px;
      top: 65px;
      width: 200px;
      border: 1px solid $white;
      box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.25);

      .registered-menu {
        flex-direction: column;
        align-items: flex-start;
        padding-inline-start: 15px;
        padding-bottom: 15px;

        li {
          padding: 10px 0;
        }
      }
    }

    .show-menu {
      display: block;
    }
  }
}
</style>
