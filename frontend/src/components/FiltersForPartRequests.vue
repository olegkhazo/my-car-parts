<template>
  <div class="filters-wrapper">
    <div class="filters">
      <span class="filters-title">Sort requests with filters</span>

      <select id="make" v-model="filterByMake" name="make">
        <option value="Select Make">Select Make</option>
        <option v-for="make in makesCollection" :key="make">{{ make }}</option>
      </select>

      <select id="car-year" v-model="filterByYear" name="car-year" :disabled="filterByMake === 'Select Make'">
        <option value="Year">Year</option>
        <option v-for="year in yearOptions" :key="year">{{ year }}</option>
      </select>

      <select id="model" v-model="filterByModel" name="model" :disabled="filterByYear === 'Year'">
        <option value="Select Model">Select Model</option>
        <option v-for="models in modelsCollection.Results" :key="models" value="models.Model_Name">
          {{ models.Model_Name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useAllPartRequestsDataStore } from "@/stores";
import { makesCollection, yearOptions } from "@/utils/collections";
import { GET_MODELS_BY_MAKE_AND_YEAR } from "@/utils/constants";

const { originalSparePartRequestsData, filteredPartRequestsData } = storeToRefs(useAllPartRequestsDataStore());

const filterByMake = ref("Select Make");
const filterByYear = ref("Year");
const filterByModel = ref("Select Model");

const modelsCollection = ref({});

// Watcher for filterByMake
watch(filterByMake, (newVal) => {
  if (newVal !== "Select Make") {
    filterByModel.value = "Select Model"; // Reset filterByModel when changing make
    filterByYear.value = "Year"; // Reset filterByYear when changing make

    filteredPartRequestsData.value = originalSparePartRequestsData.value.filter((item) => item.car_make === newVal);
  } else {
    filterByModel.value = "Select Model";
    filterByYear.value = "Year";
    filteredPartRequestsData.value = originalSparePartRequestsData.value;
  }
});

// Watcher for filterByYear
watch(filterByYear, (newVal) => {
  if (filterByMake.value !== "Select Make") {
    if (newVal !== "Year") {
      filterByModel.value = "Select Model"; // Reset filterByModel when changing year

      filteredPartRequestsData.value = originalSparePartRequestsData.value.filter(
        (item) => item.car_make === filterByMake.value && item.car_year === newVal
      );
      getModelsFromVpicApi();
    } else {
      filteredPartRequestsData.value = originalSparePartRequestsData.value.filter(
        (item) => item.car_make === filterByMake.value
      );
    }
  }
});

// Watcher for filterByModel
watch(filterByModel, (newVal) => {
  if (filterByMake.value !== "Select Make" && filterByYear.value !== "Year") {
    filteredPartRequestsData.value = originalSparePartRequestsData.value.filter(
      (item) =>
        item.car_make === filterByMake.value &&
        item.car_year === filterByYear.value &&
        (newVal === "Select Model" || item.car_model === newVal)
    );
  }
});

async function getModelsFromVpicApi() {
  try {
    const response = await fetch(
      `${GET_MODELS_BY_MAKE_AND_YEAR}/${filterByMake.value}/modelyear/${filterByYear.value}?format=json`
    );

    modelsCollection.value = await response.json();
    console.log(modelsCollection.value);
  } catch (error) {
    console.log(error);
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/components/_filters-for-part-requests.scss";
</style>
