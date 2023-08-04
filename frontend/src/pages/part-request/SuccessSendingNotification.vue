<template>
  <div class="request-sending-result">
    <h3>Congratulations, your request sending was successful!</h3>
    <div class="success-buttons-wrapper">
      <router-link
        class="light-gray-btn"
        to="/"
        >Home page</router-link
      >
      <button
        class="gray-btn"
        @click="switchFormToAnotherStep(1)"
      >
        Create new request
      </button>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "@/styles/pages/part-request/_success-sending-notification.scss";
</style>
