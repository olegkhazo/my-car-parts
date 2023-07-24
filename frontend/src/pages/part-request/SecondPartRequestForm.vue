<template>
  <div>
    <div class="form-steps">
      <span class="step">1</span>
      <img
        src="@/assets/images/step-arrow.svg"
        alt="arrow"
      />
      <span class="step active-step">2</span>
      <img
        src="@/assets/images/step-arrow.svg"
        alt="arrow"
      />
      <span class="step">3</span>
    </div>

    <div class="form-fields-section">
      <label
        class="label-text"
        for="type"
        >Type</label
      >
      <select
        id="type"
        name="type-group"
      >
        <option value="test1">Test 1</option>
        <option
          value="test2"
          selected
        >
          Test 2
        </option>
        <option value="test3">Test 3</option>
      </select>

      <label
        class="label-text"
        for="car-brand"
      >
        Car Brand
      </label>
      <select
        id="car-brand"
        name="car-brand-group"
      >
        <option value="test1">Test 1</option>
        <option
          value="test2"
          selected
        >
          Test 2
        </option>
        <option value="test3">Test 3</option>
      </select>

      <label
        class="label-text"
        for="car-model"
      >
        Car Model
      </label>
      <select
        id="car-model"
        name="car-model-group"
      >
        <option value="test1">Test 1</option>
        <option
          value="test2"
          selected
        >
          Test 2
        </option>
        <option value="test3">Test 3</option>
      </select>

      <label
        class="label-text"
        for="car-year"
      >
        Year
      </label>
      <select
        id="car-year"
        name="car-year-group"
      >
        <option value="1990">1990</option>
        <option
          value="1992"
          selected
        >
          1992
        </option>
        <option value="1993">1993</option>
      </select>

      <div class="fuel-data-wrapper">
        <label
          class="label-text"
          for="car-fuel-type"
        >
          Fuel Type
        </label>
        <select
          id="car-fuel-type"
          name="car-fuel-type"
        >
          <option value="test1">Test 1</option>
          <option
            value="test2"
            selected
          >
            Test 2
          </option>
          <option value="test3">Test 3</option>
        </select>

        <input
          id="litres"
          type="text"
        />
        <label
          class="label-text"
          for="litres"
          >Litres</label
        >
      </div>

      <label
        class="label-text"
        for="car-body-type"
      >
        Car Body
      </label>
      <select
        id="car-body-type"
        name="car-body-type"
      >
        <option value="test1">Test 1</option>
        <option
          value="test2"
          selected
        >
          Test 2
        </option>
        <option value="test3">Test 3</option>
      </select>

      <label
        class="label-text"
        for="car-vin"
      >
        VIN
      </label>
      <input
        id="car-vin"
        name="car-vin"
        placeholder="VIN"
      />
    </div>
  </div>
</template>

<script setup></script>

<style lang="sass" scoped>
@import "@/styles/pages/part-request/_second-part-request-form.scss"
</style>
