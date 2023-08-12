<template>
  <MainLayout>
    <div class="content-wrapper">
      <div class="all-requests-wrapper">
        <h2>All spare part requests</h2>
        <div class="filters">
          <span class="filters-title">Sort requests with filters</span>
          <select
            id="brand"
            name="brand"
          >
            <option value="audi">Audi</option>
            <option value="bmw">BMW</option>
            <option value="skoda">Skoda</option>
          </select>

          <select
            id="model"
            name="model"
          >
            <option value="a1">A1</option>
            <option value="a3">A3</option>
            <option value="a4">A4</option>
            <option value="a5">A5</option>
            <option value="a6">A6</option>
            <option value="a7">A7</option>
            <option value="a8">A8</option>
          </select>
        </div>
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
                v-for="request in sparePartsRequestsData"
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
                    {{ request.part_name }} for {{ request.car_brand }} {{ request.car_model }}
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
                        <span
                          >Spare part: <span class="bold"> {{ request.part_name }}</span></span
                        >
                        <span
                          >Group: <span class="bold"> {{ request.part_group }}</span></span
                        >
                        <span
                          >Type of part: <span class="bold"> {{ request.type_of_part }}</span></span
                        >
                        <span
                          >Condition:<span class="bold"> {{ request.part_condition }}</span></span
                        >
                        <span
                          >Part code:<span class="bold"> {{ request.part_code }}</span></span
                        >
                        <span
                          >Car type: <span class="bold"> {{ request.car_type }}</span></span
                        >
                        <span
                          >Car brand:<span class="bold"> {{ request.car_brand }}</span></span
                        >
                        <span
                          >Car model: <span class="bold"> {{ request.car_model }}</span></span
                        >
                        <span
                          >Car year:<span class="bold"> {{ request.car_year }}</span></span
                        >
                        <span
                          >Fuel type: <span class="bold"> {{ request.fuel_type }}</span></span
                        >
                        <span
                          >Engine volume: <span class="bold"> {{ request.engine_volume }}</span></span
                        >
                        <span
                          >Car body: <span class="bold"> {{ request.car_body }}</span></span
                        >
                        <span
                          >VIN code: <span class="bold"> {{ request.vin_code }}</span></span
                        >
                        <span
                          >User comment: <span class="bold"> {{ request.comment }}</span></span
                        >
                        <span
                          >State/City: <span class="bold"> {{ request.city }}</span></span
                        >
                        <span
                          >Email <span class="bold"> {{ request.email }}</span></span
                        >
                        <span
                          >Phone: <span class="bold"> {{ request.phone }}</span></span
                        >
                        <span
                          >Name <span class="bold"> {{ request.name }}</span></span
                        >

                        <span class="suggest-button xl-green-btn">Suggest your variant</span>
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
import { ref, onMounted } from "vue";
import MainLayout from "@/layouts/MainLayout.vue";
import { getTimeAgo } from "@/utils";

const sparePartsRequestsData = ref([]);

const fetchParts = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/all-spare-part-requests-data");
    const data = await response.json();
    sparePartsRequestsData.value = data;
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

<style lang="sass" scoped>
@import "@/styles/pages/_all-spare-part-requests-page.scss"
</style>
