<template>
  <div class="form-fields-section">
    <label
      class="label-text"
      for="part-name"
      >Part name</label
    >
    <input
      id="part-name"
      v-model="dataFromFirstForm.partName"
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
      for="part-code"
      >Part code</label
    >
    <input
      id="part-code"
      v-model="dataFromFirstForm.partCode"
      type="text"
    />

    <div class="group-green-button">
      <span class="label-text">More data</span>
      <span class="green-tab">photo</span>
      <span class="green-tab">description</span>
      <span class="green-tab">price</span>
    </div>

    <button
      class="gray-btn"
      @click.prevent="checkTheFormFields"
    >
      Continue
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

const dataFromFirstForm = ref({
  partName: "",
  partCode: "",
});

const rules = {
  partName: { required },
  partCode: { required },
};

const v$ = useVuelidate(rules, dataFromFirstForm.value);

async function checkTheFormFields() {
  const result = await v$.value.$validate();

  console.log(dataFromFirstForm.value);
  if (result) {
    switchFormToAnotherStep();
  } else {
    console.log("Check partName and PartCode field, must not be empty");
  }
}

const emit = defineEmits(["switchFormToAnotherStep"]);
const switchFormToAnotherStep = () => emit("switchFormToAnotherStep", 2);
</script>

<style lang="sass" scoped>
@import "@/styles/pages/part-request/_first-form-for-part-request.scss"
</style>
