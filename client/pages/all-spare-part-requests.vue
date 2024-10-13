<script setup>
useHead({
  title: "Table of user requests for car parts",
  meta: [
    {
      name: "description",
      content: "A detailed table of all user requests for car parts with detailed descriptions and information.",
    },
  ],
});

import { API_URL } from "@/utils/constants";
import { useAllPartRequestsDataStore } from "@/stores";
import Paginate from "vuejs-paginate-next";

import PartRequestsTable from "~/components/common/PartRequestsTable.vue";

const currentPage = ref(1);
const chunkOfRequestsForView = ref([]);
const { originalSparePartRequestsData, filteredPartRequestsData } = storeToRefs(useAllPartRequestsDataStore());

//fetching all requests
const { data: allRequests, error } = await useFetch(API_URL + "all-spare-part-requests-data");

onMounted(() => {
  if (allRequests.value) {
    allRequests.value.sort((a, b) => {
      // Comparing and sorting the created_date in descending order
      return new Date(b.created_date) - new Date(a.created_date);
    });

    originalSparePartRequestsData.value = allRequests.value;
    filteredPartRequestsData.value = originalSparePartRequestsData.value;

    chunkOfRequestsForView.value = filteredPartRequestsData.value.slice(0, 10);
  } else if (error.value) {
    // should to think how better to show errors
    console.log("something wrong:" + error.value);
  }
});

const numPages = computed(() => {
  return filteredPartRequestsData.value.length / 10;
});

function rewriteChunkOfRequests(pageNum) {
  currentPage.value = pageNum;

  if (currentPage.value === 1) {
    chunkOfRequestsForView.value = filteredPartRequestsData.value.slice(0, 10);
  } else {
    chunkOfRequestsForView.value = filteredPartRequestsData.value.slice(
      currentPage.value * 10 - 10,
      currentPage.value * 10
    );
  }
  scrollToTopOfTheTableBody();
}

watch(filteredPartRequestsData, () => {
  chunkOfRequestsForView.value = filteredPartRequestsData.value.slice(0, 10);
});

function scrollToTopOfTheTableBody() {
  document.getElementById("tbody").scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
}
</script>

<template>
  <div class="content-wrapper">
    <div class="all-requests-wrapper">
      <h1>All car parts requests</h1>
      <FilterByCarTypes />
      <div class="all-requests-table-wrapper">
        <PartRequestsTable :part-requests="chunkOfRequestsForView" />
      </div>
      <br />
      <paginate
        v-model="currentPage"
        :page-count="numPages"
        :page-range="21"
        :first-last-button="true"
        :next-text="Next"
        :prev-text="Prev"
        :click-handler="rewriteChunkOfRequests"
        :container-class="'pagination'"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.all-requests-wrapper {
  margin: 30px auto 150px auto;

  @media (max-width: 834px) {
    margin: 20px auto 150px auto;
  }

  h1 {
    font-size: 50px;
    font-weight: 300;
    text-align: center;

    @media (max-width: 834px) {
      font-size: 35px;
    }

    @media (max-width: 382px) {
      font-size: 28px;
    }
  }

  .filters {
    display: flex;
    align-items: center;

    .filters-title {
      font-weight: 500;
    }

    select {
      max-width: 150px;
      font-size: 12px;
      height: 30px;
      margin-left: 10px;
      padding: 5px;
    }
  }

  .all-requests-table-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15px;
    position: relative;
  }
}
</style>
