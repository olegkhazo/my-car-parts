<script setup>
definePageMeta({
  layout: "admin-panel",
});

import { useAuthStore } from "@/stores";
const authManager = useAuthStore();
const { userInfo } = storeToRefs(authManager);

import { API_URL } from "@/utils/constants";
// import Paginate from "vuejs-paginate-next";
import { requestTableHeaderContent } from "@/utils/collections";

//fetching all requests for single user

const { data: singleUserRequests, error } = await useFetch(`${API_URL}single-user-requests/${userInfo.value.userId}`);

const dataGeted = ref(false);
const isLoading = ref(true);

onMounted(() => {
  if (singleUserRequests.value) {
    dataGeted.value = true;
  } else if (error.value) {
    // should to think how better to show errors
    console.error("something wrong:" + error.value);
  }

  isLoading.value = false;
});

async function deleteRequest(id) {
  const { data: deletedRequest, error } = await useFetch(`${API_URL}delete-part-request/${id}`);

  if (!error.value) {
    singleUserRequests.value = singleUserRequests.value.filter((request) => request._id !== id);
  } else {
    console.log("Error deleting request:", error.value);
  }
}
</script>

<template>
  <div class="my-requests-wrapper">
    <h1>My parts requests</h1>

    <div v-if="isLoading" class="loading-state">
      <p>Loading suggestions...</p>
    </div>

    <div v-else-if="dataGeted && !isLoading" class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th v-for="item in requestTableHeaderContent" :key="request" class="form-area-column">
              {{ item }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="single-request-row" v-for="request in singleUserRequests" id="tbody" :key="request._id">
            <td>{{ request.part_name }}</td>
            <td>{{ request.car_make }}</td>
            <td>{{ request.car_model }}</td>
            <td>{{ request.car_year }}</td>
            <td>{{ request.part_condition }}</td>
            <td><span class="sm-red-btn" @click="deleteRequest(request._id)">DELETE</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-else class="no-db-entries-block">
      <p>It seems you haven't any requests yet</p>
      <NuxtLink to="/part-request" class="yellow-btn">Find parts</NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.my-requests-wrapper {
  padding: 0 10px;
  margin: 0 auto 40px auto;

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

  .no-db-entries-block {
    text-align: center;
    margin-top: 20vh;

    p {
      font-weight: 300;
      font-size: 22px;
    }
  }

  .table-wrapper {
    width: 100%;
    padding-top: 11px;

    table {
      width: 100%;
      border-collapse: collapse;
    }

    thead {
      background-color: $gray-850;

      tr:first-child th:first-child {
        border-top-left-radius: 5px;
      }

      tr:first-child th:last-child {
        border-top-right-radius: 5px;
      }

      th {
        color: white;
        padding: 10px;
        background-color: $gray-850;
        text-align: left;
      }
    }

    tbody {
      tr {
        td {
          padding: 10px;
          border-bottom: 1px solid $gray-300;

          a {
            color: $blue-100;
            font-weight: 500;
          }
        }
      }
    }
  }
}
</style>
