<script setup>
useHead({
  title: "MyNextParts - Sign in",
  meta: [
    {
      name: "Sign-in page",
      content: "MyNextParts sign-in page",
    },
  ],
});

import { validateFormField } from "@/utils/index";
import { useAuthStore } from "@/stores";

const authManager = useAuthStore();
const formButtonClicked = ref(false);
const backendErrors = ref({
  email: "",
  password: "",
  general: "",
});

const signInCreds = ref({
  email: "",
  password: "",
});

const isEmailValid = computed(() => {
  return validateFormField(signInCreds.value.email, "EMAIL_PATTERN");
});

const isPasswordValid = computed(() => {
  return validateFormField(signInCreds.value.password, "PASSWORD_PATTERN");
});

async function signIn() {
  formButtonClicked.value = true;
  backendErrors.value = { email: "", password: "", general: "" };

  if (isEmailValid.value && isPasswordValid.value) {
    const loginResponse = await authManager.login(signInCreds.value);

    if (loginResponse && loginResponse.success) {
      setTimeout(() => {
        navigateTo("/admin-panel");
      }, "1000");
    } else {
      backendErrors.value.general = "Login failed. Please check your credentials.";
      console.error("Login error:", loginResponse.error);
    }
  }
}
</script>

<template>
  <div class="content-wrapper">
    <div class="form-wrapper">
      <h1>Log in to MyNextParts</h1>
      <div class="sign-in-field-section">
        <span v-if="!isEmailValid && formButtonClicked" class="input-error-notification">
          Please enter a valid email address.
        </span>
        <span v-if="backendErrors.email" class="input-error-notification">
          {{ backendErrors.email }}
        </span>
        <input id="email" v-model="signInCreds.email" type="email" name="email" placeholder="Email address *" />

        <span v-if="!isPasswordValid && formButtonClicked" class="input-error-notification">
          Please enter a valid password.
        </span>
        <span v-if="backendErrors.password" class="input-error-notification">
          {{ backendErrors.password }}
        </span>
        <input id="password" v-model="signInCreds.password" type="password" name="password" placeholder="Password *" />
        <span v-if="backendErrors.general" class="input-error-notification">
          {{ backendErrors.general }}
        </span>

        <button class="xl-green-btn" @click="signIn">Sign In</button>
      </div>
      <p>Dont have "MyNextParts" account? <NuxtLink to="/sign-up">Sign Up</NuxtLink></p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.content-wrapper {
  min-height: 60vh;

  .form-wrapper {
    margin: 60px auto 100px auto;
    padding: 30px 60px 10px 60px;
    border: 2px solid $gray-100;
    border-radius: 15px;
    position: relative;
    text-align: center;
    width: 690px;

    @media (max-width: 768px) {
      margin: 40px auto 0 auto;
      padding: 15px 20px 10px 20px;
      width: 100%;
    }

    h1 {
      font-size: 40px;
      margin-bottom: 0;
      margin-top: 0;
      font-weight: 300;
      text-align: center;

      @media (max-width: 834px) {
        font-size: 28px;
      }

      @media (max-width: 768px) {
        margin: 0;
      }

      @media (max-width: 382px) {
        font-size: 24px;
      }
    }

    .sign-in-field-section {
      padding-top: 30px;

      input,
      select,
      textarea {
        margin-bottom: 20px;
      }

      input {
        @media (max-width: 768px) {
          &::placeholder {
            font-size: 14px;
          }
        }
      }

      .input-error-notification {
        float: left;
      }
    }

    button {
      width: 100%;
      margin: 25px auto 20px auto;
    }

    p {
      margin-top: 20px;

      @media (max-width: 768px) {
        margin-top: 20px;
      }
      a {
        text-decoration: none;
        color: $blue;
        font-weight: 600;
      }
    }
  }
}
</style>
