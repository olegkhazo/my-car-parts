<template>
  <div class="filters-wrapper">
    <div class="filters">
      <span class="filters-title">Sort requests with filters</span>

      <select id="make" v-model="filterByMake" name="make">
        <option value="Select Make">Select Make</option>
        <option v-for="make in makesCollection" :key="make">{{ make }}</option>
      </select>

      <select
        id="car-year"
        v-model="filterByYear"
        name="car-year"
        :disabled="filterByMake === 'Select Make'"
      >
        <option value="Year">Year</option>
        <option v-for="year in yearOptions" :key="year">{{ year }}</option>
      </select>

      <select
        id="model"
        v-model="filterByModel"
        name="model"
        :disabled="filterByYear === 'Year'"
      >
        <option value="Select Model">Select Model</option>
        <option
          v-for="models in modelsCollection.Results"
          :key="models"
          value="models.Model_Name"
        >
          {{ models.Model_Name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { useAllPartRequestsDataStore } from "@/stores";
import { makesCollection, yearOptions } from "@/utils/collections";
import { GET_MODELS_BY_MAKE_AND_YEAR } from "@/utils/constants";

const { originalSparePartRequestsData, filteredPartRequestsData } = storeToRefs(
  useAllPartRequestsDataStore()
);

const filterByMake = ref("Select Make");
const filterByYear = ref("Year");
const filterByModel = ref("Select Model");

const modelsCollection = ref({});

// Watcher for filterByMake
watch(filterByMake, (newVal) => {
  if (newVal !== "Select Make") {
    filterByModel.value = "Select Model";
    filterByYear.value = "Year";

    filteredPartRequestsData.value = originalSparePartRequestsData.value.filter(
      (item) => item.car_make === newVal
    );
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
      filterByModel.value = "Select Model";

      filteredPartRequestsData.value =
        originalSparePartRequestsData.value.filter(
          (item) =>
            item.car_make === filterByMake.value && item.car_year === newVal
        );
      getModelsFromVpicApi();
    } else {
      filteredPartRequestsData.value =
        originalSparePartRequestsData.value.filter(
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
  const { data: carModels, error } = await useFetch(
    `${GET_MODELS_BY_MAKE_AND_YEAR}/${filterByMake.value}/modelyear/${filterByYear.value}?format=json`
  );

  modelsCollection.value = carModels.value;

  if (error.value) {
    // should to think how better to show errors
    console.log("something wrong: " + error.value);
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.filters-wrapper {
  .filters {
    display: flex;
    align-items: center;

    @media (max-width: 395px) {
      flex-direction: column;
    }

    .filters-title {
      font-weight: 500;

      @media (max-width: 395px) {
        margin-bottom: 10px;
      }
    }

    select {
      max-width: 150px;
      font-size: 12px;
      height: 30px;
      margin-left: 10px;
      padding: 5px;

      @media (max-width: 834px) {
        max-width: 105px;
      }

      @media (max-width: 480px) {
        max-width: 80px;
      }

      @media (max-width: 395px) {
        max-width: 150px;
        font-size: 12px;
        margin-bottom: 5px;
        margin-left: 0;
      }
    }
  }
}
</style>
