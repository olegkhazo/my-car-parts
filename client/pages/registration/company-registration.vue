<template>
  <div class="content-wrapper">
    <h2>Offer Page</h2>
    <div id="offer-page-wrapper" class="offer-page-wrapper">
      <div class="form-wrapper">
        <div class="offer-form">
          <div class="offer-form-fields-section">
            <label class="label-text" for="first-name">First name *</label>
            <span v-if="!isFirstNameValid && formButtonClicked" class="input-error-notification"
              >Please enter a valid name.</span
            >
            <input id="first-name" v-model="userCreds.first_name" type="text" />

            <label class="label-text" for="last-name">Last name *</label>
            <span v-if="!isLastNameValid && formButtonClicked" class="input-error-notification"
              >Please enter a valid last name.</span
            >
            <input id="last-name" v-model="userCreds.last_name" type="text" />

            <label class="label-text" for="company">Company *</label>
            <span v-if="!isCompanyValid && formButtonClicked" class="input-error-notification"
              >Please enter a valid company name.</span
            >
            <input id="company" v-model="userCreds.company" type="text" />

            <label class="label-text" for="email"> Work email address * </label>
            <span v-if="!isEmailValid && formButtonClicked" class="input-error-notification">
              Please enter a valid email address.
            </span>
            <input id="email" v-model="userCreds.email" type="email" name="email" placeholder="Work email address" />

            <label class="label-text" for="password"> Password * </label>
            <span v-if="!isPasswordValid && formButtonClicked" class="input-error-notification">
              Please enter a valid password.
            </span>
            <input
              id="password"
              v-model="userCreds.password"
              type="password"
              name="password"
              placeholder="Password(8 or more characters)"
            />

            <button class="blue-btn" @click="registerNewUser()">Create my account</button>
          </div>
        </div>
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
  return validateFormField(userCreds.value.full_name, "COMMON_NOT_EMPTY_PATTERN");
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
</style>
