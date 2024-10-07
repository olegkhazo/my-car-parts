<script setup>
import { useAuthStore } from "@/stores";
const authManager = useAuthStore();

const { userInfo } = storeToRefs(authManager);
</script>

<template>
  <div class="side-admin-navigation">
    <div class="admin-logo">
      <NuxtLink to="/">
        <NuxtImg src="/images/white-logo.svg" alt="logo" />
      </NuxtLink>
    </div>

    <div class="user-info">
      <span class="user-full-name">{{ userInfo.name }} {{ userInfo.lastName }}</span>
      <span class="user-role">{{ userInfo.role }}</span>
    </div>

    <ul>
      <li>
        <NuxtLink to="/admin-panel/all-spare-part-requests">All part requests</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/admin-panel/my-requests">My suggestions</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/admin-panel/all-users">All users</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/admin-panel/my-profile">My profile</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.side-admin-navigation {
  width: 195px;
  background-color: $gray-950;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 130px;
  }

  .admin-logo {
    margin: 20px auto 20px auto;
    display: flex;
    width: 90%;

    a {
      width: inherit;
      text-align: center;

      img {
        width: inherit;
      }
    }
  }

  .user-info {
    padding: 10px 0 30px 20px;

    @media (max-width: 768px) {
      padding: 10px 0 30px 10px;
    }

    span {
      display: block;
    }

    .user-full-name {
      font-size: 18px;
      color: $white;

      @media (max-width: 768px) {
        font-size: 14px;
      }

      @media (max-width: 425px) {
        font-size: 11px;
      }
    }

    .user-role {
      color: $gray-100;
      font-weight: 300;

      @media (max-width: 768px) {
        font-size: 12px;
      }

      @media (max-width: 425px) {
        font-size: 8px;
      }
    }
  }

  ul {
    li {
      a {
        padding: 15px 0 15px 20px;
        display: block;
        color: $white;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 1px;
        cursor: pointer;

        @media (max-width: 768px) {
          padding: 15px 0 15px 10px;
        }

        &:hover {
          background-color: $gray-700;
        }

        &.router-link-active {
          background-color: $gray-700;
        }

        @media (max-width: 768px) {
          font-size: 12px;
        }

        @media (max-width: 425px) {
          font-size: 10px;
        }
      }
    }
  }
}
</style>
