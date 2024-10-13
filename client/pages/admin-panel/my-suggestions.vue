<script setup>
definePageMeta({
  layout: "admin-panel",
});

import { useAuthStore } from "@/stores";
const authManager = useAuthStore();
const { userInfo } = storeToRefs(authManager);

import { API_URL } from "@/utils/constants";
// import Paginate from "vuejs-paginate-next";
import { suggestionsTableHeaderContent } from "@/utils/collections";

//fetching all requests
const { data: allUserSuggestions, error } = await useFetch(
  `${API_URL}single-user-suggestions/${userInfo.value.userId}`
);

onMounted(() => {
  if (userInfo.value.role === "buyer") {
    navigateTo("my-requests");
  }
});
</script>

<template>
  <div class="all-suggestions-wrapper">
    <h1>My suggestions</h1>
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th v-for="item in suggestionsTableHeaderContent" :key="item" class="form-area-column">
              {{ item }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="single-request-row" v-for="singleRecord in allUserSuggestions" id="tbody" :key="singleRecord._id">
            <td>{{ singleRecord.car_make }}</td>
            <td>{{ singleRecord.car_model }}</td>
            <td>{{ singleRecord.car_year }}</td>
            <td>{{ singleRecord.part_name }}</td>
            <td>${{ singleRecord.price }}</td>
            <td>
              <!-- Here add more convinient approach to view all part request details. Maybe modal window -->
              <NuxtLink :to="`/offer-page/${singleRecord.related_request_id}`">DETAILS</NuxtLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.all-suggestions-wrapper {
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
