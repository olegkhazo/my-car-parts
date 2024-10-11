<script setup>
definePageMeta({
  layout: "admin-panel",
});

import { useAuthStore } from "@/stores";
const authManager = useAuthStore();

const { userInfo } = storeToRefs(authManager);

//fetching user data
const { data: userData, error } = await useFetch(`${API_URL}user/${userInfo.value.userId}`);

onMounted(() => {
  if (userData) {
    console.log(userData.value);
    console.log("User data get successfull");
  } else {
    console.log("something wrong:" + error.value);
  }
});
</script>

<template>
  <div class="profile-settings-wrapper">
    <div class="profile-header">
      <div class="user-avatar">
        <NuxtImg src="/images/photo-camera.svg" alt="camera" />
        <span class="download-awatar-img">
          <NuxtImg src="/images/download-image.svg" alt="download" />
        </span>
      </div>
    </div>

    <div class="user-information-wrapper">
      <div class="name-and-role">
        <span class="name">{{ userData.first_name }} {{ userData.last_name }}</span>
        <span>{{ userData.role }}</span>
      </div>

      <div class="main-user-information">
        <div class="personal-information">
          <div class="subheader">
            <NuxtImg class="green-icon" src="/images/green-user.svg" alt="user-icon" />
            <span class="subheader-text">PERSONAL INFORMATION</span>
            <NuxtImg class="pencil" src="/images/black-pencil.svg" alt="pencil-icon" />
          </div>

          <div class="information-content">
            <div class="single-info-point-block">
              <span class="info-item">First name</span>
              <span class="info-item-content">{{ userData.first_name }}</span>
            </div>

            <div class="single-info-point-block">
              <span class="info-item">First name</span>
              <span class="info-item-content">{{ userData.last_name }}</span>
            </div>

            <div v-if="userData.company" class="single-info-point-block">
              <span class="info-item">Company name</span>
              <span class="info-item-content">{{ userData.company }}</span>
            </div>
          </div>
        </div>

        <div class="personal-information">
          <div class="subheader">
            <NuxtImg class="green-icon" src="/images/green-envelope.svg" alt="green-envelope-icon" />
            <span class="subheader-text">CONTACT INFORMATION</span>
            <NuxtImg class="pencil" src="/images/black-pencil.svg" alt="pencil-icon" />
          </div>

          <div class="information-content">
            <div class="single-info-point-block">
              <span class="info-item">Email</span>
              <span class="info-item-content">{{ userData.email }}</span>
            </div>

            <div v-if="userData.phone" class="single-info-point-block">
              <span class="info-item">Phone:</span>
              <span class="info-item-content">{{ userData.phone }}</span>
            </div>
          </div>
        </div>

        <div class="personal-information">
          <div class="subheader">
            <NuxtImg class="green-icon" src="/images/green-lock.svg" alt="green-lock-icon" />
            <span class="subheader-text">PASSWORD</span>
          </div>
          <div class="password-btn-wrapper">
            <NuxtLink to="/" class="transparent-green-btn">Change password</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.profile-settings-wrapper {
  padding: 0 20px;
  margin: 0 auto 40px auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 834px) {
    margin: 20px auto 150px auto;
  }

  .profile-header {
    background-color: $green-600;
    border-radius: 15px 15px 0 0;
    padding-top: 100px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    .user-avatar {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 120px;
      height: 120px;
      border: 10px solid $white;
      border-radius: 50%;
      background-color: $gray-200;
      position: absolute;

      img {
        width: 50%;
      }

      .download-awatar-img {
        position: absolute;
        width: 65px;
        cursor: pointer;
        right: -40px;
        bottom: 0;
      }
    }
  }

  .user-information-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 80px;

    .name-and-role {
      display: flex;
      flex-direction: column;
      align-items: center;

      .name {
        font-weight: 500;
        font-size: 28px;
        line-height: 0;
        margin-bottom: 15px;
      }

      span {
        font-size: 16px;
        font-weight: 300;
      }
    }

    .main-user-information {
      width: 70%;
      border-radius: 5px;
      border: 2px solid $gray-300;
      margin-top: 20px;

      .subheader {
        display: flex;
        justify-content: center;
        background: $gray-300;
        padding: 10px 0;
        position: relative;

        img {
          width: 18px;
          margin-right: 10px;
        }

        span {
          color: $green-600;
          font-weight: 600;
          font-size: 16px;
        }

        .pencil {
          position: absolute;
          right: 5px;
        }
      }

      .information-content {
        display: flex;
        justify-content: space-between;
        padding: 20px 20px 30px 20px;

        .single-info-point-block {
          display: flex;
          flex-direction: column;

          .info-item {
            color: $gray-700;
            font-weight: 300;
            font-weight: 12px;
          }

          .info-item-content {
            font-weight: 600;
            font-size: 18px;
          }
        }
      }

      .password-btn-wrapper {
        display: flex;
        justify-content: center;
        padding: 20px 0;
      }
    }
  }
}
</style>
