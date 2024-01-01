<template>
  <div class="content-wrapper">
    <div class="form-wrapper">
      <h1>Sign In</h1>
      <div class="offer-form-fields-section">
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

        <button class="xl-green-btn" @click="signIn">Register a company</button>
      </div>
    </div>
  </div>
</template>

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

async function signIn() {
  console.log("Sign In");
}
</script>

<style lang="scss" scoped>
.content-wrapper {
  min-height: 60vh;
}
</style>
