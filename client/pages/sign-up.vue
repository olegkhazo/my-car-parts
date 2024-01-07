<template>
  <div class="content-wrapper">
    <div v-if="!registrationFormVisibility" class="registration-type-window">
      <h1>Join us as either a buyer or a company</h1>
      <div class="registration-options-wrapper">
        <div @click="showFormRegistration('buy')" class="registration-single-option">
          <NuxtImg src="/images/shopping-basket.svg" title="shopping-basket" />
          <h3>I am a buyer, looking for car parts</h3>
        </div>
        <div @click="showFormRegistration('sale')" class="registration-single-option sales-option">
          <NuxtImg src="/images/sales.svg" title="sales" />
          <h3>I sell car parts, and I want to increase sales</h3>
        </div>
      </div>
      <br />
      <p>Already have an account? <NuxtLink to="/sign-in">Log In</NuxtLink></p>
    </div>

    <div v-else class="form-wrapper">
      <h1>Sign up to sell car parts</h1>
      <div v-if="!userCredentialsSentSuccessful" class="registration-form-fields-section">
        <span v-if="!isFirstNameValid && formButtonClicked" class="input-error-notification"
          >Please enter a valid name.</span
        >
        <input id="first-name" v-model="userCreds.first_name" type="text" placeholder="First name *" />

        <span
          v-if="!isLastNameValid && formButtonClicked && typeOfRegistration === 'sale'"
          class="input-error-notification"
          >Please enter a valid last name.</span
        >
        <input
          v-if="typeOfRegistration === 'sale'"
          id="last-name"
          v-model="userCreds.last_name"
          type="text"
          placeholder="Last name *"
        />

        <span
          v-if="!isCompanyValid && formButtonClicked && typeOfRegistration === 'sale'"
          class="input-error-notification"
          >Please enter a valid company name.</span
        >
        <input
          v-if="typeOfRegistration === 'sale'"
          id="company"
          v-model="userCreds.company"
          type="text"
          placeholder="Company *"
        />

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

        <div class="checkbox-wrapper" v-if="typeOfRegistration === 'sale'">
          <div class="checkbox">
            <input type="checkbox" id="tips-agreement" name="tips-agreement" v-model="userCreds.tips_agreement" />
          </div>
          <label for="tips-agreement">Send me emails with tips on how to find buyers for car parts.</label>
        </div>

        <div class="checkbox-wrapper terms-checkbox-wrapper">
          <div class="checkbox">
            <input type="checkbox" id="terms-agreement" name="terms-agreement" v-model="userCreds.terms_agreement" />
          </div>
          <label for="terms-agreement" :class="{ 'empty-checkbox': !userCreds.terms_agreement && formButtonClicked }"
            >Yes, I understand and agree to the MyNextParts <NuxtLink to="/terms">Terms of Service</NuxtLink>, including
            the <NuxtLink to="/privacy-policy">User Agreement and Privacy Policy</NuxtLink>.</label
          >
        </div>
        <button v-if="typeOfRegistration === 'sale'" class="blue-btn" @click="registerCompany()">
          Register a company
        </button>
        <button v-else class="blue-btn" @click="registerClient()">Create my account</button>
        <p>Already have an account? <NuxtLink to="/sign-in">Log In</NuxtLink></p>
        <p v-if="typeOfRegistration === 'sale'" @click="showFormRegistration('buy')">
          Looking for a car parts? <NuxtLink to="/sign-up">Register as a buyer</NuxtLink>
        </p>
        <p v-else @click="showFormRegistration('sale')">
          Do you sell car parts? <NuxtLink to="/sign-up">Register as a company</NuxtLink>
        </p>
      </div>

      <div v-else class="confirm-information">
        <NuxtImg src="https://i.ibb.co/6HY86R7/checkmark.png" title="green-checkmark" />
        <h3>
          Congratulations, you created account. Check please your email and follow the link to confirm your account.
        </h3>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "MyNextParts - Choose type of registration",
  meta: [
    {
      name: "Choose type of registration",
      content: "Choose type of registration on mynextparts.com. Choose you need to buy or sell car parts",
    },
  ],
});

import { API_URL } from "@/utils/constants";
import { validateFormField } from "@/utils/index";

const registrationFormVisibility = ref(false);
const formButtonClicked = ref(false);
const userCredentialsSentSuccessful = ref(false);
const typeOfRegistration = ref("");

const userCreds = ref({
  first_name: "",
  last_name: "",
  company: "",
  email: "",
  password: "",
  tips_agreement: "",
  terms_agreement: "",
});

function showFormRegistration(type) {
  typeOfRegistration.value = type;
  registrationFormVisibility.value = true;
}

// VALIDATION
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

async function createRequestToRegistrationApi() {
  const { data: newUserCreating, error } = await useFetch(API_URL + "sign-up", {
    method: "post",
    body: JSON.stringify(userCreds.value),
  });

  if (newUserCreating.value) {
    console.log("Part request created successfully");
    userCredentialsSentSuccessful.value = true;
  } else if (error.value) {
    // should to think how better to show errors
    console.log("something really wrong Oleg:" + error.value);
  }
}

function registerCompany() {
  formButtonClicked.value = true;
  if (
    isFirstNameValid.value &&
    isLastNameValid.value &&
    isCompanyValid.value &&
    isEmailValid.value &&
    isPasswordValid.value &&
    userCreds.value.terms_agreement
  ) {
    createRequestToRegistrationApi();
  }
}

function registerClient() {
  formButtonClicked.value = true;
  if (isFirstNameValid.value && isEmailValid.value && isPasswordValid.value && userCreds.value.terms_agreement) {
    createRequestToRegistrationApi();
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.content-wrapper {
  .registration-type-window {
    margin: 60px auto 100px auto;
    padding: 30px 60px 10px 60px;
    border: 2px solid $gray-100;
    border-radius: 15px;
    position: relative;
    text-align: center;
    width: 690px;

    @media (max-width: 768px) {
      margin: 40px auto 0 auto;
      padding: 0;
      width: 100%;
      border: none;
    }

    h1 {
      font-size: 40px;
      margin-bottom: 40px;
      font-weight: 300;
      text-align: center;

      @media (max-width: 834px) {
        font-size: 28px;
      }

      @media (max-width: 768px) {
        margin: 0 auto 20px auto;
      }

      @media (max-width: 382px) {
        font-size: 24px;
      }
    }

    .registration-options-wrapper {
      display: flex;
      justify-content: space-around;

      @media (max-width: 768px) {
        flex-direction: column;
      }

      .registration-single-option {
        width: 240px;
        padding: 30px 15px 15px 15px;
        border: 2px solid $gray-100;
        border-radius: 15px;
        cursor: pointer;

        @media (max-width: 768px) {
          padding: 15px 10px 0 10px;
          width: 100%;
        }

        h3 {
          font-size: 18px;
          margin-top: 15px;

          @media (max-width: 768px) {
            font-size: 16px;
          }
        }

        &:hover {
          border: 2px solid $green;
        }
      }

      .sales-option {
        @media (max-width: 768px) {
          margin-top: 20px;
        }
      }
    }
  }

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

    .registration-form-fields-section {
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

    .checkbox-wrapper {
      display: flex;
      text-align: left;
      justify-content: space-between;

      .checkbox {
        width: 5%;
        margin: 0;
      }

      input {
        cursor: pointer;
      }

      label {
        width: 94%;

        @media (max-width: 495px) {
          width: 92%;
        }
      }
      a {
        color: $blue;
      }

      .empty-checkbox {
        color: $red;
      }
    }

    .terms-checkbox-wrapper {
      @media (max-width: 495px) {
        margin-top: 10px;
      }
    }

    button {
      width: 100%;
      margin: 25px auto 20px auto;
    }

    .confirm-information {
      img {
        width: 60px;
      }
    }
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
</style>
