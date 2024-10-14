<script setup>
definePageMeta({
  layout: "admin-panel",
});

import { useAuthStore } from "@/stores";
const authManager = useAuthStore();
const { userInfo, userId } = storeToRefs(authManager);
const isAuthInitialized = ref(false);

import { validateFormField } from "@/utils/index";

const editForm = ref(false);
const userData = ref(null);
const isLoading = ref(true);

// Инициализируем состояние аутентификации
onMounted(async () => {
  await authManager.initializeAuthState();
  isAuthInitialized.value = true;

  if (userId.value) {
    const { data, error: fetchError } = await useFetch(`${API_URL}user/${userId.value}`);
    if (data.value) {
      userData.value = data.value;
    } else {
      console.error("Error fetching user data:", fetchError.value);
    }
  } else {
    console.error("User ID is missing");
  }

  isLoading.value = false;
});

// Валидации
const isFirstNameValid = computed(() => {
  return validateFormField(userData.value?.first_name, "COMMON_NOT_EMPTY_PATTERN");
});

const isLastNameValid = computed(() => {
  return validateFormField(userData.value?.last_name, "COMMON_NOT_EMPTY_PATTERN");
});

const isCompanyValid = computed(() => {
  return validateFormField(userData.value?.company, "COMMON_NOT_EMPTY_PATTERN");
});

const isEmailValid = computed(() => {
  return validateFormField(userData.value?.email, "EMAIL_PATTERN");
});

function showEditForm() {
  editForm.value = !editForm.value;
}

const formButtonClicked = ref(false);

async function changeUserPersonalInformation() {
  formButtonClicked.value = true;

  if (!isFirstNameValid.value || !isLastNameValid.value || !isCompanyValid.value) {
    return;
  }

  try {
    const updatedData = {
      first_name: userData.value.first_name,
      last_name: userData.value.last_name,
      company: userData.value.company,
    };

    const response = await fetch(`${API_URL}user/${userId.value}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error("User data updating error");
    }

    const updatedUser = await response.json();

    userData.value = updatedUser;
    editForm.value = false;
    formButtonClicked.value = false;
  } catch (error) {
    console.error("Error during data updating:", error);
  }
}
</script>

<template>
  <div class="profile-settings-wrapper">
    <div class="profile-header">
      <div class="user-avatar">
        <NuxtImg src="/images/photo-camera.svg" alt="camera" />
        <!-- <span class="download-awatar-img">
          <NuxtImg src="/images/download-image.svg" @click="uploadAvatar" alt="download" />
        </span> -->
      </div>
    </div>

    <div v-if="isLoading" class="loading-state">
      <p>Loading suggestions...</p>
    </div>

    <div v-else-if="userData && userData.first_name && !isLoading" class="user-information-wrapper">
      <div class="name-and-role">
        <span class="name">{{ userData.first_name }} {{ userData.last_name }}</span>
        <span>{{ userInfo.role }}</span>
      </div>

      <div class="main-user-information">
        <div class="personal-information">
          <div class="subheader">
            <NuxtImg class="green-icon" src="/images/green-user.svg" alt="user-icon" />
            <span class="subheader-text">PERSONAL INFORMATION</span>
            <NuxtImg
              v-if="!editForm"
              @click="showEditForm"
              class="pencil"
              src="/images/black-pencil.svg"
              alt="pencil-icon"
            />
          </div>

          <div v-if="!editForm" class="information-content">
            <div class="single-info-point-block">
              <span class="info-item">First name</span>
              <span class="info-item-content">{{ userData.first_name }}</span>
            </div>

            <div class="single-info-point-block">
              <span class="info-item">Last name</span>
              <span class="info-item-content">{{ userData.last_name }}</span>
            </div>

            <div v-if="userData.company" class="single-info-point-block">
              <span class="info-item">Company name</span>
              <span class="info-item-content">{{ userData.company }}</span>
            </div>
          </div>

          <div v-else class="information-edit-form">
            <span v-if="!isFirstNameValid && formButtonClicked" class="input-error-notification"
              >Please enter a valid name.</span
            >
            <input id="first-name" v-model="userData.first_name" type="text" :placeholder="userData.first_name" />

            <span v-if="!isLastNameValid && formButtonClicked" class="input-error-notification"
              >Please enter a valid last name.</span
            >
            <input id="last-name" v-model="userData.last_name" type="text" :placeholder="userData.last_name" />

            <span v-if="!isCompanyValid && formButtonClicked" class="input-error-notification"
              >Please enter a valid company name.</span
            >
            <input id="company" v-model="userData.company" type="text" :placeholder="userData.company" />

            <div class="edit-button-wrapper">
              <button @click="changeUserPersonalInformation" class="green-btn">Save</button>
            </div>
          </div>
        </div>

        <div class="personal-information">
          <div class="subheader">
            <NuxtImg class="green-icon" src="/images/green-envelope.svg" alt="green-envelope-icon" />
            <span class="subheader-text">CONTACT INFORMATION</span>
            <NuxtImg
              v-if="!editForm"
              @click="showEditForm"
              class="pencil"
              src="/images/black-pencil.svg"
              alt="pencil-icon"
            />
          </div>

          <div v-if="!editForm" class="information-content">
            <div class="single-info-point-block">
              <span class="info-item">Email</span>
              <span class="info-item-content">{{ userData.email }}</span>
            </div>

            <div v-if="userData.phone" class="single-info-point-block">
              <span class="info-item">Phone:</span>
              <span class="info-item-content">{{ userData.phone }}</span>
            </div>
          </div>

          <div v-else class="information-edit-form">
            <span v-if="!isEmailValid && formButtonClicked" class="input-error-notification">
              Please enter a valid email address.
            </span>
            <input id="email" v-model="userData.email" type="email" name="email" :placeholder="userData.email" />

            <!-- <div class="edit-button-wrapper">
              <button @click="changeUserEmail" class="green-btn">Change email</button>
            </div> -->
          </div>
        </div>

        <div class="personal-information">
          <div class="subheader">
            <NuxtImg class="green-icon" src="/images/green-lock.svg" alt="green-lock-icon" />
            <span class="subheader-text">PASSWORD</span>
          </div>
          <div class="password-btn-wrapper">
            <NuxtLink class="transparent-green-btn">Change password</NuxtLink>
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
  margin: 0 auto 80px auto;
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

      .information-edit-form {
        width: 70%;
        margin: 40px auto 20px auto;

        input {
          margin-bottom: 20px;
        }

        .edit-button-wrapper {
          text-align: center;
          margin-bottom: 30px;

          .green-btn {
            width: 100%;
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
