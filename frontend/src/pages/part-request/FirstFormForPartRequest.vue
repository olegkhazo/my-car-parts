<template>
  <div class="form-fields-section">
    <label
      class="label-text"
      for="part-name"
      >Part name *</label
    >
    <span
      v-for="error in v$.partName.$errors"
      :key="error.$uid"
      class="input-error-notification"
      >{{ error.$message }}</span
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
      <option value="choose">- choose -</option>
      <option value="engine">Engine</option>
      <option value="transmission">Transmission</option>
      <option value="body">Body</option>
    </select>

    <span class="label-text">Type of part</span>
    <div class="radio-toolbar">
      <input
        id="radio-any-type"
        type="radio"
        name="type-of-part"
        value="any-type"
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

    <span class="label-text">Spare part condition</span>
    <div class="radio-toolbar spare-part-condition">
      <input
        id="radio-any-condition"
        type="radio"
        name="type-of-condition"
        value="any-condition"
        checked
      />
      <label
        class="label-text"
        for="radio-any-condition"
      >
        Any
      </label>

      <input
        id="radio-new-condition"
        type="radio"
        name="type-of-condition"
        value="new"
      />
      <label
        class="label-text"
        for="radio-new-condition"
      >
        New
      </label>

      <input
        id="radio-used"
        type="radio"
        name="type-of-condition"
        value="used"
      />
      <label
        class="label-text"
        for="radio-used"
      >
        Used
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

    <!-- <div class="group-green-button">
      <span class="label-text">More data</span>
      <span class="green-tab">photo</span>
      <span class="green-tab">description</span>
      <span class="green-tab">price</span>
    </div> -->

    <button
      class="gray-btn"
      @click.prevent="checkTheFormFields"
    >
      Continue
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";

const dataFromFirstForm = ref({
  partName: "",
});

const rules = computed(() => {
  return {
    partName: { required, minLength: minLength(3) },
  };
});

const v$ = useVuelidate(rules, dataFromFirstForm.value);

async function checkTheFormFields() {
  const result = await v$.value.$validate();

  if (result) {
    switchFormToAnotherStep();
  }
}

const emit = defineEmits(["switchFormToAnotherStep"]);
const switchFormToAnotherStep = () => emit("switchFormToAnotherStep", 2);
</script>

<style lang="sass" scoped>
@import "@/styles/pages/part-request/_first-form-for-part-request.scss"
</style>
