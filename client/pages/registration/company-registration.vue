<template>
  <div class="content-wrapper">
    <div class="form-wrapper">
      <h1>Sign up to sell car parts</h1>
      <div class="offer-form-fields-section">
        <span v-if="!isFirstNameValid && formButtonClicked" class="input-error-notification"
          >Please enter a valid name.</span
        >
        <input id="first-name" v-model="userCreds.first_name" type="text" placeholder="First name *" />

        <span v-if="!isLastNameValid && formButtonClicked" class="input-error-notification"
          >Please enter a valid last name.</span
        >
        <input id="last-name" v-model="userCreds.last_name" type="text" placeholder="Last name *" />

        <span v-if="!isCompanyValid && formButtonClicked" class="input-error-notification"
          >Please enter a valid company name.</span
        >
        <input id="company" v-model="userCreds.company" type="text" placeholder="Company *" />

        <span v-if="!isEmailValid && formButtonClicked" class="input-error-notification">
          Please enter a valid email address.
        </span>
        <input id="email" v-model="userCreds.email" type="email" name="email" placeholder="Work email address *" />

        <span v-if="!isPasswordValid && formButtonClicked" class="input-error-notification">
          Please enter a valid password.
        </span>
        <input
          id="password"
          v-model="userCreds.password"
          type="password"
          name="password"
          placeholder="Password(8 or more characters) *"
        />

        <button class="blue-btn" @click="registerNewUser()">Create my account</button>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "MyNextParts - Company registration",
  meta: [
    {
      name: "Company registration page",
      content:
        "Mynextparts.com company registration page. After registration sell car parts companies will get the account and became bble to see all clients car parts request and suggest them their car parts variants",
    },
  ],
});

import { API_URL } from "@/utils/constants";
import { validateFormField } from "@/utils/index";
const formButtonClicked = ref(false);

const userCreds = ref({
  first_name: "",
  last_name: "",
  company: "",
  email: "",
  password: "",
});

// Validation

const isFirstNameValid = computed(() => {
  return validateFormField(userCreds.value.first_name, "COMMON_NOT_EMPTY_PATTERN");
});

const isLastNameValid = computed(() => {
  return validateFormField(userCreds.value.last_name, "COMMON_NOT_EMPTY_PATTERN");
});

const isCompanyValid = computed(() => {
  return validateFormField(userCreds.value.company, "COMMON_NOT_EMPTY_PATTERN");
});

const isEmailValid = computed(() => {
  return validateFormField(userCreds.value.email, "EMAIL_PATTERN");
});

const isPasswordValid = computed(() => {
  return validateFormField(userCreds.value.password, "PASSWORD_PATTERN");
});

async function registerNewUser() {
  formButtonClicked.value = true;

  if (
    isFirstNameValid.value &&
    isLastNameValid.value &&
    isCompanyValid.value &&
    isEmailValid.value &&
    isPasswordValid.value
  ) {
    const { data: newUserCreating, error } = await useFetch(API_URL + "register", {
      method: "post",
      body: JSON.stringify(userCreds.value),
    });

    if (newUserCreating.value) {
      console.log("User created succesful");
    } else if (error.value) {
      console.log("something wrong:" + error.value);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

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

  .offer-form-fields-section {
    padding-top: 30px;

    input,
    select,
    textarea {
      margin-bottom: 20px;
    }
  }

  button {
    width: 100%;
    margin: 5px auto 20px auto;
  }
}
</style>
