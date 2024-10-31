<script setup>
definePageMeta({
  layout: "default",
});

useHead({
  title: "MyNextParts - the biggest used car parts market",
  meta: [
    {
      name: "Market - home page",
      content: "Home page of a used carparts market",
    },
  ],
});

//fetching all requests
const { data: vmAutoCollection, error } = await useFetch(`${API_URL}vm-auto-list`);

if (error) {
  console.log("Something wrong:" + error.value);
}
</script>

<template>
  <div>
    <h1>Shop is there</h1>
  </div>
</template>

<style lang="scss" scoped></style>
