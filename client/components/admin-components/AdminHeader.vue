<script setup>
const menuVisibility = ref(false);

function showHideMenu() {
  menuVisibility.value = menuVisibility.value === false;
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
    <div class="avatar-wrapper" @click="showHideMenu">
      <NuxtImg src="/images/avatar-default.svg" alt="avatar" />
      <div class="menu" :class="{ 'show-menu': menuVisibility }" v-click-outside="clickOutsideMenu">
        <ul @click="hideMenu">
          <li>
            <NuxtLink to="/admin-panel/all-spare-part-requests">Admin Panel</NuxtLink>
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
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.header {
  display: flex;
  justify-content: flex-end;
  padding: 10px 20px;

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

  .menu {
    z-index: 10;
    display: none;
    position: absolute;
    background-color: $white;
    right: 5px;
    top: 50px;
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
    .sign-out-link {
      color: $blue;
    }
  }

  .show-menu {
    display: block;
  }
}
</style>
