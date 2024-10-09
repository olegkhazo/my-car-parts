<script setup>
definePageMeta({
  layout: "admin-panel",
});
</script>

<template>
  <div class="my-requests-wrapper">
    <h1>All my parts requests</h1>
    <div class="table-wrapper"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.my-requests-wrapper {
  padding: 0 10px;
  margin: 30px auto 40px auto;

  @media (max-width: 834px) {
    margin: 20px auto 150px auto;
  }

  h1 {
    font-size: 30px;
    font-weight: 500;

    @media (max-width: 834px) {
      font-size: 25px;
    }

    @media (max-width: 382px) {
      font-size: 22px;
    }
  }
}
</style>
