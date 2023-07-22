<template>
  <div>
    <div class="form-steps">
      <span class="step active-step">1</span>
      <img
        src="@/assets/images/step-arrow.svg"
        alt="arrow"
      />
      <span class="step">2</span>
      <img
        src="@/assets/images/step-arrow.svg"
        alt="arrow"
      />
      <span class="step">3</span>
    </div>

    <div class="form-fields-section">
      <label
        class="label-text"
        for="part-name"
        >Part name</label
      >
      <input
        id="part-name"
        type="text"
      />

      <label
        class="label-text"
        for="part-group"
      >
        Part group
      </label>
      <select
        id="part-group"
        name="part-group"
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

      <span class="label-text">Type of part</span>
      <div class="radio-toolbar">
        <input
          id="radio-any-type"
          type="radio"
          name="type-of-part"
          value="apple"
          checked
        />
        <label
          class="label-text"
          for="radio-any-type"
        >
          Any type
        </label>

        <input
          id="radio-original"
          type="radio"
          name="type-of-part"
          value="original"
        />
        <label
          class="label-text"
          for="radio-original"
        >
          Original
        </label>

        <input
          id="radio-analog"
          type="radio"
          name="type-of-part"
          value="analog"
        />
        <label
          class="label-text"
          for="radio-analog"
        >
          Analog
        </label>
      </div>

      <label
        class="label-text"
        for="part-number"
        >Part number</label
      >
      <input
        id="part-number"
        type="text"
      />

      <div class="group-green-button">
        <span class="label-text">More data</span>
        <span class="green-tab">photo</span>
        <span class="green-tab">description</span>
        <span class="green-tab">price</span>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="sass" scoped>
@import "@/styles/pages/part-request/_first-part-request-form.scss"
</style>
