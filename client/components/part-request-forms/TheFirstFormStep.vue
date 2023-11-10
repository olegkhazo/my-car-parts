<template>
  <div class="form-fields-section">
    <label class="label-text" for="part-name">Spare part name *</label>
    <span
      v-if="!isPartNameValid && formButtonClicked"
      class="input-error-notification"
      >Please enter a valid spare part name.</span
    >
    <input id="part-name" v-model="formData.part_name" type="text" />

    <label class="label-text" for="part-group">Spare part group</label>
    <select id="part-group" v-model="formData.part_group" name="part-group">
      <option v-for="group in sparePartGroups" :key="group">{{ group }}</option>
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
      <label class="label-text" for="radio-any-type"> Any type </label>

      <input
        id="radio-original"
        v-model="formData.type_of_part"
        type="radio"
        name="type-of-part"
        value="original"
      />
      <label class="label-text" for="radio-original"> Original </label>

      <input
        id="radio-analog"
        v-model="formData.type_of_part"
        type="radio"
        name="type-of-part"
        value="analog"
      />
      <label class="label-text" for="radio-analog"> Analog </label>
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
      <label class="label-text" for="radio-any-condition"> Any </label>

      <input
        id="radio-new-condition"
        v-model="formData.part_condition"
        type="radio"
        name="type-of-condition"
        value="new"
      />
      <label class="label-text" for="radio-new-condition"> New </label>

      <input
        id="radio-used"
        v-model="formData.part_condition"
        type="radio"
        name="type-of-condition"
        value="used"
      />
      <label class="label-text" for="radio-used"> Used </label>
    </div>

    <label class="label-text" for="part-code">Part code</label>
    <input id="part-code" v-model="formData.part_code" type="text" />

    <button class="gray-btn" @click.prevent="checkTheFormFields">
      Continue
    </button>
  </div>
</template>

<script setup>
import { usePartRequestFormStore } from "@/stores";
import { validateFormField } from "@/utils/index";
import { sparePartGroups } from "@/utils/collections";

const formButtonClicked = ref(false);

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

// Validation
const isPartNameValid = computed(() => {
  return validateFormField(
    formData.value.part_name,
    "COMMON_NOT_EMPTY_PATTERN"
  );
});

async function checkTheFormFields() {
  formButtonClicked.value = true;
  if (isPartNameValid.value) {
    Object.assign(dataFromFirstFormStep.value, formData.value);

    switchFormToAnotherStep();
  }
}

const emit = defineEmits(["switchFormToAnotherStep"]);
const switchFormToAnotherStep = () => emit("switchFormToAnotherStep", 2);
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
}

.gray-btn {
  margin-top: 10px;
}
</style>
