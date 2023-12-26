<template>
  <div class="content-wrapper">
    <div class="registration-form">
      <label for="email">Enter your example.com email:</label>
      <input type="email" id="email" v-model="userCreds.userEmail" />

      <label for="pass">Password (8 characters minimum):</label>
      <input type="password" id="pass" name="password" v-model="userCreds.password" />

      <button class="gray-btn" @click.prevent="registerNewUser">Register</button>
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

const userCreds = ref({});

async function registerNewUser() {
  console.log("1");

  console.log("2");

  const { data: newUserCreating, error } = await useFetch(API_URL + "register", {
    method: "post",
    body: JSON.stringify(userCreds.value),
  });

  if (newUserCreating.value) {
    console.log("3");

    console.log("User created succesful");
  } else if (error.value) {
    console.log("4");

    console.log("something wrong:" + error.value);
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
</style>
