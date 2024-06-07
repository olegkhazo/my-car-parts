<template>
  <div class="form-fields-section">
    <span class="type-of-communication-header-text">Choose how you want to receive responses from sellers:</span>

    <hr />

    <label class="label-text" for="email"> E-mail * </label>
    <span v-if="!isEmailValid && formButtonClicked" class="input-error-notification">
      Please enter a valid email address.
    </span>
    <input id="email" v-model="formData.email" type="email" name="email" placeholder="E-mail" />

    <label class="label-text" for="phone"> Phone </label>
    <input id="phone" v-model="formData.phone" type="tel" name="phone" placeholder="Phone" />

    <hr />

    <label class="label-text" for="name"> Your name * </label>
    <span v-if="!isNameValid && formButtonClicked" class="input-error-notification"> Please enter a valid name. </span>
    <input id="name" v-model="formData.name" type="text" name="name" placeholder="name" />

    <label class="label-text" for="city"> City * </label>
    <span v-if="!isCityValid && formButtonClicked" class="input-error-notification"> Please enter a valid city. </span>
    <input id="city" v-model="formData.city" type="text" name="city" placeholder="city" />

    <label class="label-text" for="comment"> Leave a comment </label>
    <textarea id="comment" v-model="formData.comment" name="comment" rows="2"></textarea>

    <button class="light-gray-btn" @click.prevent="switchFormToAnotherStep(2)">Back</button>

    <button class="gray-btn" @click.prevent="checkTheFormFields(4)">Send request</button>
  </div>
</template>

<script setup>
import { usePartRequestFormStore } from "@/stores";
import { validateFormField } from "@/utils/index";

const { dataFromThirdFormStep } = storeToRefs(usePartRequestFormStore());
const formButtonClicked = ref(false);

const formData = ref({
  email: "",
  phone: "",
  name: "",
  city: "",
  comment: "",
});

onMounted(() => {
  if (Object.keys(dataFromThirdFormStep.value).length) {
    Object.assign(formData.value, dataFromThirdFormStep.value);
  }
});

// Validation
const isEmailValid = computed(() => {
  return validateFormField(formData.value.email, "EMAIL_PATTERN");
});

const isNameValid = computed(() => {
  return validateFormField(formData.value.name, "COMMON_NOT_EMPTY_PATTERN");
});

const isCityValid = computed(() => {
  return validateFormField(formData.value.city, "COMMON_NOT_EMPTY_PATTERN");
});

async function checkTheFormFields(step = "") {
  formButtonClicked.value = true;

  if (isEmailValid.value && isNameValid.value && isCityValid.value) {
    Object.assign(dataFromThirdFormStep.value, formData.value);

    switchFormToAnotherStep(step);
  }
}

const emit = defineEmits(["switchFormToAnotherStep"]);
const switchFormToAnotherStep = (step) => emit("switchFormToAnotherStep", step);
</script>

<style lang="scss" scoped>
.form-fields-section {
  input,
  select,
  textarea {
    margin-bottom: 15px;
  }

  .radio-toolbar {
    margin-bottom: 15px;
  }

  .type-of-communication-header-text {
    display: block;
    margin-top: 30px;
  }

  hr {
    margin: 20px 0;
  }

  button {
    margin-top: 10px;
  }

  .light-gray-btn {
    margin-right: 15px;
  }
}
</style>
