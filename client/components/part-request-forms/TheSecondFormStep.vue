<template>
  <div class="form-fields-section">
    <label class="label-text" for="car-type">Type *</label>
    <span v-if="!isCarTypeValid && formButtonClicked" class="input-error-notification">Please enter a valid type</span>
    <select id="car-type" v-model="formData.car_type" name="type-group">
      <option value="car" selected>Car</option>
    </select>

    <label class="label-text" for="car-make"> Make * </label>
    <span v-if="!isCarMakeValid && formButtonClicked" class="input-error-notification">Please choose car make</span>
    <select id="car-make" v-model="filterByMake" name="car-make-group">
      <option value="Select Make">Select Make</option>
      <option v-for="make in makesCollection" :key="make">{{ make }}</option>
    </select>

    <label class="label-text" for="car-year"> Year * </label>
    <span v-if="!isCarYearValid && formButtonClicked" class="input-error-notification">Please choose car year</span>
    <select id="car-year" v-model="filterByYear" name="car-year-group" :disabled="filterByMake === 'Select Make'">
      <option value="Year">Year</option>
      <option v-for="year in yearOptions" :key="year">{{ year }}</option>
    </select>

    <label class="label-text" for="car-model"> Model * </label>
    <span v-if="!isCarModelValid && formButtonClicked" class="input-error-notification">Please choose car model</span>
    <select id="car-model" v-model="filterByModel" name="car-model-group" :disabled="filterByYear === 'Year'">
      <option value="Select Model">Select Model</option>
      <option v-for="model in modelsCollection.Results" :key="model">
        {{ model.Model_Name }}
      </option>
    </select>

    <div class="fuel-validator-errors-wrapper">
      <span v-if="!isFuelTypeValid && formButtonClicked" class="input-error-notification">Choose fuel type</span>
      <span v-if="!isEngineVolumeValid && formButtonClicked" class="input-error-notification">Enter engine value</span>
    </div>
    <div class="fuel-data-wrapper">
      <label class="label-text" for="car-fuel-type"> Fuel Type</label>
      <select id="car-fuel-type" v-model="formData.fuel_type" name="car-fuel-type">
        <option v-for="fuel in carsFuelTypes" :key="fuel" :value="fuel">
          {{ fuel }}
        </option>
      </select>

      <input id="litres" v-model="formData.engine_volume" type="text" placeholder="2.5" />
      <label class="label-text" for="litres">Volume</label>
    </div>

    <label class="label-text" for="car-body-type"> Body Type </label>
    <select id="car-body-type" v-model="formData.car_body" name="car-body-type">
      <option v-for="body in carBodyTypes" :key="body" :value="body">
        {{ body }}
      </option>
    </select>

    <label class="label-text" for="car-vin"> VIN </label>
    <input id="car-vin" v-model="formData.vin_code" name="car-vin" placeholder="VIN" />

    <button class="light-gray-btn" @click.prevent="switchFormToAnotherStep(1)">Back</button>
    <button class="gray-btn" @click.prevent="checkTheFormFields(3)">Continue</button>
  </div>
</template>

<script setup>
import { usePartRequestFormStore } from "@/stores";
import { validateFormField } from "@/utils/index";
import { makesCollection, yearOptions, carsFuelTypes, carBodyTypes } from "@/utils/collections";
import { GET_MODELS_BY_MAKE_AND_YEAR } from "@/utils/constants";

const { dataFromSecondFormStep } = storeToRefs(usePartRequestFormStore());
const formButtonClicked = ref(false);

const filterByMake = ref("Select Make");
const filterByYear = ref("Year");
const filterByModel = ref("Select Model");
const modelsCollection = ref({});

const formData = ref({
  car_type: "car",
  car_make: "",
  car_year: "",
  car_model: "",
  fuel_type: "",
  engine_volume: "",
  car_body: "",
  vin_code: "",
});

onMounted(() => {
  if (Object.keys(dataFromSecondFormStep.value).length) {
    Object.assign(formData.value, dataFromSecondFormStep.value);
  }
});

// Validation block
const isCarTypeValid = computed(() => {
  return validateFormField(formData.value.car_type, "COMMON_NOT_EMPTY_PATTERN");
});

const isCarMakeValid = computed(() => {
  return filterByMake.value !== "Select Make";
});

const isCarYearValid = computed(() => {
  return filterByYear.value !== "Year";
});

const isCarModelValid = computed(() => {
  return filterByModel.value !== "Select Model";
});

// End validation block

// Watcher for car_make field
watch(filterByMake, (newVal) => {
  if (newVal !== "Select Make") {
    filterByModel.value = "Select Model";
    filterByYear.value = "Year";
  } else {
    filterByModel.value = "Select Model";
    filterByYear.value = "Year";
  }
});

// Watcher for year field
watch(filterByYear, (newVal) => {
  if (filterByMake.value !== "Select Make") {
    if (newVal !== "Year") {
      filterByModel.value = "Select Model";

      getModelsFromVpicApi();
    }
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

async function checkTheFormFields(step) {
  formButtonClicked.value = true;

  if (isCarTypeValid.value && isCarMakeValid.value && isCarYearValid.value && isCarModelValid.value) {
    formData.value.car_make = filterByMake.value;
    formData.value.car_year = filterByYear.value;
    formData.value.car_model = filterByModel.value;

    Object.assign(dataFromSecondFormStep.value, formData.value);
    console.log(formData.value);

    console.log(dataFromSecondFormStep.value);
    switchFormToAnotherStep(step);
  }
}

const emit = defineEmits(["switchFormToAnotherStep"]);
const switchFormToAnotherStep = (step) => emit("switchFormToAnotherStep", step);
</script>

<style lang="scss" scoped>
.form-fields-section {
  padding-top: 30px;

  input,
  select,
  textarea {
    margin-bottom: 15px;
  }

  .radio-toolbar {
    margin-bottom: 15px;
  }

  .fuel-validator-errors-wrapper {
    display: flex;
    flex-direction: column;
  }

  .fuel-data-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    select {
      width: 50%;

      @media (max-width: 460px) {
        width: 35%;
      }

      @media (max-width: 340px) {
        width: 30%;
      }

      @media (max-width: 312px) {
        width: 20%;
      }
    }

    input {
      width: 15%;

      @media (max-width: 312px) {
        width: 20%;
      }
    }

    .label-text {
      margin-bottom: 12px;
    }
  }

  button {
    margin-top: 10px;
  }

  .light-gray-btn {
    margin-right: 15px;
  }
}
</style>
