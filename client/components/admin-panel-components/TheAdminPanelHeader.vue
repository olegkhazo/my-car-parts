<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="header-logo">
        <NuxtLink to="/">
          <NuxtImg src="/images/logo.svg" alt="logo" />
        </NuxtLink>
      </div>

      <div class="avatar-wrapper" @click="showHideMenu">
        <NuxtImg src="/images/avatar-default.svg" alt="avatar" />
        <div class="menu" :class="{ 'show-menu': menuVisibility }" v-click-outside="clickOutsideMenu">
          <ul @click="hideMenu">
            <li>
              <NuxtLink to="/part-request">Find parts</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/all-spare-part-requests">Suggest your parts</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const menuVisibility = ref(false);

function showHideMenu() {
  menuVisibility.value = menuVisibility.value === false;
  console.log(menuVisibility.value);
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

    ul {
      flex-direction: column;
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
</style>
