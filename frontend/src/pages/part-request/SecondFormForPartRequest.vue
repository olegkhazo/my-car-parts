<template>
  <div class="form-fields-section">
    <label
      class="label-text"
      for="car-type"
      >Car type *</label
    >
    <span
      v-for="error in v$.car_type.$errors"
      :key="error.$uid"
      class="input-error-notification"
      >{{ error.$message }}</span
    >
    <select
      id="car-type"
      v-model="formData.car_type"
      name="type-group"
    >
      <option value="car">Car</option>
      <option value="motorcycle">Motorcycle</option>
    </select>

    <label
      class="label-text"
      for="car-brand"
    >
      Car Brand *
    </label>
    <span
      v-for="error in v$.car_brand.$errors"
      :key="error.$uid"
      class="input-error-notification"
      >{{ error.$message }}</span
    >
    <select
      id="car-brand"
      v-model="formData.car_brand"
      name="car-brand-group"
    >
      <option value="audi">Audi</option>
      <option
        value="bmw"
        selected
      >
        BMW
      </option>
      <option value="skoda">Skoda</option>
    </select>

    <label
      class="label-text"
      for="car-model"
    >
      Car Model *
    </label>
    <span
      v-for="error in v$.car_model.$errors"
      :key="error.$uid"
      class="input-error-notification"
      >{{ error.$message }}</span
    >
    <select
      id="car-model"
      v-model="formData.car_model"
      name="car-model-group"
    >
      <option value="a2">a2</option>
      <option
        value="a3"
        selected
      >
        a3
      </option>
      <option value="a4">a4</option>
    </select>

    <label
      class="label-text"
      for="car-year"
    >
      Year *
    </label>
    <span
      v-for="error in v$.car_year.$errors"
      :key="error.$uid"
      class="input-error-notification"
      >{{ error.$message }}</span
    >
    <select
      id="car-year"
      v-model="formData.car_year"
      name="car-year-group"
    >
      <option value="2023">2023</option>
      <option
        value="2022"
        selected
      >
        2022
      </option>
      <option value="2021">2021</option>
    </select>

    <div class="fuel-validator-errors-wrapper">
      <span
        v-for="error in v$.fuel_type.$errors"
        :key="error.$uid"
        class="input-error-notification"
        >{{ error.$message }}</span
      >
      <span
        v-for="error in v$.engine_volume.$errors"
        :key="error.$uid"
        class="input-error-notification"
        >{{ error.$message }}</span
      >
    </div>
    <div class="fuel-data-wrapper">
      <label
        class="label-text"
        for="car-fuel-type"
      >
        Fuel Type *
      </label>

      <select
        id="car-fuel-type"
        v-model="formData.fuel_type"
        name="car-fuel-type"
      >
        <option value="petrol">Petrol</option>
        <option
          value="disel"
          selected
        >
          disel
        </option>
        <option value="electric">Electric</option>
      </select>

      <input
        id="litres"
        v-model="formData.engine_volume"
        type="text"
      />
      <label
        class="label-text"
        for="litres"
        >Litres *</label
      >
    </div>

    <label
      class="label-text"
      for="car-body-type"
    >
      Car Body *
    </label>
    <span
      v-for="error in v$.car_body.$errors"
      :key="error.$uid"
      class="input-error-notification"
      >{{ error.$message }}</span
    >
    <select
      id="car-body-type"
      v-model="formData.car_body"
      name="car-body-type"
    >
      <option value="sedan">Sedan</option>
      <option
        value="coupe"
        selected
      >
        coupe
      </option>
      <option value="universal">Universal</option>
      <option value="pickup">Pickup</option>
    </select>

    <label
      class="label-text"
      for="car-vin"
    >
      VIN
    </label>
    <input
      id="car-vin"
      v-model="formData.vin_code"
      name="car-vin"
      placeholder="VIN"
    />

    <button
      class="light-gray-btn"
      @click.prevent="checkTheFormFields(1)"
    >
      Back
    </button>
    <button
      class="gray-btn"
      @click.prevent="checkTheFormFields(3)"
    >
      Continue
    </button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { usePartRequestFormStore } from "@/stores";

const { dataFromSecondFormStep } = storeToRefs(usePartRequestFormStore());

const formData = ref({
  car_type: "",
  car_brand: "",
  car_model: "",
  car_year: "",
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

const rules = computed(() => {
  return {
    car_type: { required },
    car_brand: { required },
    car_model: { required },
    car_year: { required },
    fuel_type: { required },
    engine_volume: { required },
    car_body: { required },
  };
});

const v$ = useVuelidate(rules, formData.value);

async function checkTheFormFields(step) {
  const result = await v$.value.$validate();

  if (result) {
    Object.assign(dataFromSecondFormStep.value, formData.value);

    switchFormToAnotherStep(step);
  }
}

const emit = defineEmits(["switchFormToAnotherStep"]);
const switchFormToAnotherStep = (step) => emit("switchFormToAnotherStep", step);
</script>

<style lang="sass" scoped>
@import "@/styles/pages/part-request/_second-form-for-part-request.scss"
</style>
