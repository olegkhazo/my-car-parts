<template>
  <div class="form-fields-section">
    <label
      class="label-text"
      for="part-name"
      >Part name *</label
    >
    <span
      v-for="error in v$.part_name.$errors"
      :key="error.$uid"
      class="input-error-notification"
      >{{ error.$message }}</span
    >
    <input
      id="part-name"
      v-model="formData.part_name"
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
      v-model="formData.part_group"
      name="part-group"
    >
      <option value="engine">Engine</option>
      <option value="transmission">Transmission</option>
      <option value="body">Body</option>
    </select>

    <span class="label-text">Type of part</span>
    <div class="radio-toolbar">
      <input
        id="radio-any-type"
        v-model="formData.type_of_part"
        type="radio"
        name="type-of-part"
        value="any-type"
      />
      <label
        class="label-text"
        for="radio-any-type"
      >
        Any type
      </label>

      <input
        id="radio-original"
        v-model="formData.type_of_part"
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
        v-model="formData.type_of_part"
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
        v-model="formData.part_condition"
        type="radio"
        name="type-of-condition"
        value="any-condition"
      />
      <label
        class="label-text"
        for="radio-any-condition"
      >
        Any
      </label>

      <input
        id="radio-new-condition"
        v-model="formData.part_condition"
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
        v-model="formData.part_condition"
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
      v-model="formData.part_code"
      type="text"
    />

    <!-- Extra data - need to be added later, after MVP launching -->
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
import { ref, computed, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import { usePartRequestFormStore } from "@/stores";

const { dataFromFirstFormStep } = storeToRefs(usePartRequestFormStore());

const formData = ref({
  part_name: "",
  part_group: "",
  type_of_part: "any-type",
  part_condition: "any-condition",
  part_code: "",
});

onMounted(() => {
  if (Object.keys(dataFromFirstFormStep.value).length) {
    Object.assign(formData.value, dataFromFirstFormStep.value);
  }
});

const rules = computed(() => {
  return {
    part_name: { required, minLength: minLength(3) },
  };
});

const v$ = useVuelidate(rules, formData.value);

async function checkTheFormFields() {
  const result = await v$.value.$validate();

  if (result) {
    Object.assign(dataFromFirstFormStep.value, formData.value);

    switchFormToAnotherStep();
  }
}

const emit = defineEmits(["switchFormToAnotherStep"]);
const switchFormToAnotherStep = () => emit("switchFormToAnotherStep", 2);
</script>

<style lang="sass" scoped>
@import "@/styles/pages/part-request/_first-form-for-part-request.scss"
</style>
