<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="header-logo">
        <NuxtLink to="/">MyNextParts</NuxtLink>
      </div>
      <NuxtImg
        v-if="mobileMenuIcon === 'menu'"
        src="/images/menu_black_36dp.svg"
        class="menu-icon"
        @click="mobileMenuSwitcher"
      />
      <NuxtImg
        v-else
        name="close"
        src="/images/close_black_36dp.svg"
        class="menu-icon"
        @click="mobileMenuSwitcher"
      />
      <div class="nav" :class="{ 'show-mobile-menu': mobileMenuVisibilaty }">
        <ul>
          <li>
            <NuxtLink to="/all-spare-part-requests"
              >Suggest your parts</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/part-request">Find spare part</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">How It Work</NuxtLink>
          </li>

          <!-- Will be uncomment later, when registration will be done  -->
          <!-- <li>
            <NuxtLink to="/registration" class="blue-btn">Sign In</NuxtLink>
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
  mobileMenuIcon.value =
    mobileMenuVisibilaty.value === false ? "menu" : "close";
});
</script>

<style lang="scss">
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
