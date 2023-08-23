<template>
  <MainLayout>
    <div class="content-wrapper">
      <div class="all-requests-wrapper">
        <h2>All spare part requests</h2>
        <FiltersForPartRequests />
        <div class="all-requests-table-wrapper">
          <div class="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Spare part description</th>
                  <th>Area/Region</th>
                  <th>Sent</th>
                  <th></th>
                </tr>
              </thead>
              <tbody
                v-for="request in filteredPartRequestsData"
                id="tbody"
                :key="request._id"
              >
                <tr
                  class="single-request-row"
                  @click="showBlockWithAllRelatedContent"
                >
                  <td>
                    <img
                      src="@/assets/images/green-wheel.svg"
                      alt=""
                    />
                  </td>
                  <td>
                    {{ request.part_name }} for {{ request.car_make }} {{ request.car_model }}
                    {{ request.engine_volume }} {{ request.fuel_type }}
                  </td>
                  <td>{{ request.city }}</td>
                  <td>{{ getTimeAgo(request.created_date) }}</td>
                  <td>
                    <a class="sm-green-btn">Info</a>
                  </td>
                </tr>
                <tr class="all-content-for-single-request hidden">
                  <td colspan="5">
                    <div class="all-content-wrapper">
                      <div class="all-content">
                        <span v-if="request.part_name">
                          Spare part: <span class="bold">{{ request.part_name }}</span>
                        </span>
                        <span v-if="request.part_group">
                          Group: <span class="bold">{{ request.part_group }}</span>
                        </span>
                        <span v-if="request.type_of_part">
                          Type of part: <span class="bold">{{ request.type_of_part }}</span>
                        </span>
                        <span v-if="request.part_condition">
                          Condition: <span class="bold">{{ request.part_condition }}</span>
                        </span>
                        <span v-if="request.part_code">
                          Part code: <span class="bold">{{ request.part_code }}</span>
                        </span>
                        <span v-if="request.car_type">
                          Car type: <span class="bold">{{ request.car_type }}</span>
                        </span>
                        <span v-if="request.car_make">
                          Car make: <span class="bold">{{ request.car_make }}</span>
                        </span>
                        <span v-if="request.car_model">
                          Car model: <span class="bold">{{ request.car_model }}</span>
                        </span>
                        <span v-if="request.car_year">
                          Car year: <span class="bold">{{ request.car_year }}</span>
                        </span>
                        <span v-if="request.fuel_type">
                          Fuel type: <span class="bold">{{ request.fuel_type }}</span>
                        </span>
                        <span v-if="request.engine_volume">
                          Engine volume: <span class="bold">{{ request.engine_volume }}</span>
                        </span>
                        <span v-if="request.car_body">
                          Car body: <span class="bold">{{ request.car_body }}</span>
                        </span>
                        <span v-if="request.vin_code">
                          VIN code: <span class="bold">{{ request.vin_code }}</span>
                        </span>
                        <span v-if="request.comment">
                          User comment: <span class="bold">{{ request.comment }}</span>
                        </span>
                        <span v-if="request.city">
                          State/City: <span class="bold">{{ request.city }}</span>
                        </span>
                        <span v-if="request.email">
                          Email: <span class="bold">{{ request.email }}</span>
                        </span>
                        <span v-if="request.phone">
                          Phone: <span class="bold">{{ request.phone }}</span>
                        </span>
                        <span v-if="request.name">
                          Name: <span class="bold">{{ request.name }}</span>
                        </span>

                        <router-link
                          :to="{ name: 'offer-page', params: { requestId: request._id } }"
                          class="suggest-button xl-green-btn"
                          >Suggest your variant</router-link
                        >
                        <span
                          class="close-content-btn blue-btn"
                          @click="hideOpenedContentByButtonClick"
                          >Hide content</span
                        >
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import { onMounted } from "vue";
import { getTimeAgo } from "@/utils";
import MainLayout from "@/layouts/MainLayout.vue";
import FiltersForPartRequests from "@/components/FiltersForPartRequests.vue";

import { storeToRefs } from "pinia";
import { useAllPartRequestsDataStore } from "@/stores";

const { originalSparePartRequestsData, filteredPartRequestsData } = storeToRefs(useAllPartRequestsDataStore());

const fetchParts = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/all-spare-part-requests-data");
    const data = await response.json();
    originalSparePartRequestsData.value = data;
    filteredPartRequestsData.value = originalSparePartRequestsData.value;
  } catch (error) {
    console.error("Error fetching parts:", error);
  }
};

onMounted(() => {
  fetchParts();
});

function showBlockWithAllRelatedContent(event) {
  const allContentRow = event.target.closest(".single-request-row").nextElementSibling;

  allContentRow.classList.contains("hidden")
    ? allContentRow.classList.remove("hidden")
    : allContentRow.classList.add("hidden");
}

function hideOpenedContentByButtonClick(event) {
  const button = event.target;
  const contentRow = button.closest(".all-content-for-single-request");
  contentRow.classList.add("hidden");

  document.getElementById("tbody").scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
}
</script>

<style lang="scss" scoped>
@import "@/styles/pages/_all-spare-part-requests-page.scss";
</style>
