<template>
  <div class="filters-wrapper">
    <div class="filters">
      <span class="filters-title">Sort requests with filters</span>
      <select
        id="make"
        v-model="filterByMake"
        name="make"
      >
        <option value="Select Make">Select Make</option>
        <option value="audi">Audi</option>
        <option value="bmw">BMW</option>
        <option value="skoda">Skoda</option>
      </select>

      <select
        id="model"
        v-model="filterByModel"
        name="model"
        :disabled="filterByMake === 'Select Make'"
      >
        <option value="Select Model">Select Model</option>
        <option value="a1">A1</option>
        <option value="a2">A2</option>
        <option value="a3">A3</option>
        <option value="a4">A4</option>
        <option value="a5">A5</option>
        <option value="a6">A6</option>
        <option value="a7">A7</option>
        <option value="a8">A8</option>
      </select>

      <select
        id="car-year"
        v-model="filterByYear"
        name="car-year"
        :disabled="filterByModel === 'Select Model'"
      >
        <option value="Year">Year</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useAllPartRequestsDataStore } from "@/stores";

const { originalSparePartRequestsData, filteredPartRequestsData } = storeToRefs(useAllPartRequestsDataStore());

const filterByMake = ref("Select Make");
const filterByModel = ref("Select Model");
const filterByYear = ref("Year");

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

// Watcher for filterByModel
watch(filterByModel, (newVal) => {
  if (filterByMake.value !== "Select Make") {
    if (newVal !== "Select Model") {
      filterByYear.value = "Year"; // Reset filterByYear when changing model

      filteredPartRequestsData.value = originalSparePartRequestsData.value.filter(
        (item) => item.car_make === filterByMake.value && item.car_model === newVal
      );
    } else {
      filteredPartRequestsData.value = originalSparePartRequestsData.value.filter(
        (item) => item.car_make === filterByMake.value
      );
    }
  }
});

// Watcher for filterByYear
watch(filterByYear, (newVal) => {
  if (filterByMake.value !== "Select Make" && filterByModel.value !== "Select Model") {
    filteredPartRequestsData.value = originalSparePartRequestsData.value.filter(
      (item) =>
        item.car_make === filterByMake.value &&
        item.car_model === filterByModel.value &&
        (newVal === "Year" || item.car_year === newVal)
    );
  }
});
</script>

<style lang="scss" scoped>
@import "@/styles/components/_filters-for-part-requests.scss";
</style>
