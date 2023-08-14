<template>
  <MainLayout>
    <div class="content-wrapper offer-page-wrapper">
      <h2>Offer Page</h2>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "@/layouts/MainLayout.vue";

// Write the code which will get one entry from the database by id
// from the route parametr: requestId
// Then neccessary to create API for getting one entry from DB and use here
// it is possible to use prop either, but... I should to think about it.

// Then it necessaty to show main info about request and simple form bellow
// I think this form shoul contain, name of user, company name (optional),
// price of spare part, use it or new, original or analog, city/area, email, phone
// All fields on one page, with validation.

// Then, after button clicked, we will create new entry to table which will call "suggestions"
// or somehow. THis entry will be contain field "related_request" which will containe "requestId"
// from router parametr.

// Also will neccessary to create API in backend for adding single entrie in to DB calling "suggestions"
// or somehow.
</script>

<style lang="scss" scoped>
@import "@/styles/pages/_offer-page.scss";
</style>
