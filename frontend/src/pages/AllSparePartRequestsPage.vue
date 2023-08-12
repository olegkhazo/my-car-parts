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
          <div class="table-pre-header"></div>
          <div class="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Spare part description</th>
                  <th>Area/Region</th>
                  <th>Sent</th>
                </tr>
              </thead>
              <tbody
                v-for="request in sparePartsRequestsData"
                :key="request._id"
              >
                <tr>
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

    // console.log(sparePartsRequestsData.value);
  } catch (error) {
    console.error("Error fetching parts:", error);
  }
};

onMounted(() => {
  fetchParts();
});
</script>

<style lang="sass" scoped>
@import "@/styles/pages/_all-spare-part-requests-page.scss"
</style>
