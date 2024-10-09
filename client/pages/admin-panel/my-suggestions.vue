<script setup>
definePageMeta({
  layout: "admin-panel",
});

import { useAuthStore } from "@/stores";
const authManager = useAuthStore();
const { userInfo } = storeToRefs(authManager);

import { API_URL } from "@/utils/constants";
import Paginate from "vuejs-paginate-next";
import BlackTable from "@/components/common/BlackTable.vue";
import { suggestionsTableHeaderContent } from "@/utils/collections";

//fetching all requests
const { data: allUserSuggestions, error } = await useFetch(
  `${API_URL}single-user-suggestions/${userInfo.value.userId}`
);

onMounted(() => {
  if (allUserSuggestions.value) {
    console.log("Suggestions get successful");
  } else if (error.value) {
    // should to think how better to show errors
    console.log("something wrong:" + error.value);
  }
});
</script>

<template>
  <div class="my-suggestions-wrapper">
    <h1>My suggestions</h1>
    <BlackTable :all-user-suggestions="allUserSuggestions" :table-header="suggestionsTableHeaderContent" />
  </div>
</template>

<style lang="scss" scoped>
.my-suggestions-wrapper {
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
