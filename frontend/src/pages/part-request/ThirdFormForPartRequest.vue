<template>
  <div class="form-fields-section">
    <span class="type-of-communication-header-text">Choose how you want to receive responses from sellers:</span>

    <hr />

    <label
      class="label-text"
      for="email"
    >
      E-mail *
    </label>
    <span
      v-for="error in v$.email.$errors"
      :key="error.$uid"
      class="input-error-notification"
      >{{ error.$message }}</span
    >
    <input
      id="email"
      v-model="formData.email"
      type="email"
      name="email"
      placeholder="E-mail"
    />

    <label
      class="label-text"
      for="phone"
    >
      Phone
    </label>
    <input
      id="phone"
      v-model="formData.phone"
      type="tel"
      name="phone"
      placeholder="Phone"
    />

    <!-- Here will be checkbox with massengers icons -->
    <hr />

    <label
      class="label-text"
      for="name"
    >
      Your name *
    </label>
    <span
      v-for="error in v$.name.$errors"
      :key="error.$uid"
      class="input-error-notification"
      >{{ error.$message }}</span
    >
    <input
      id="name"
      v-model="formData.name"
      type="text"
      name="name"
      placeholder="name"
    />

    <label
      class="label-text"
      for="city"
    >
      City *
    </label>
    <span
      v-for="error in v$.city.$errors"
      :key="error.$uid"
      class="input-error-notification"
      >{{ error.$message }}</span
    >
    <input
      id="city"
      v-model="formData.city"
      type="text"
      name="city"
      placeholder="city"
    />

    <label
      class="label-text"
      for="comment"
    >
      Leave a comment
    </label>
    <textarea
      id="comment"
      v-model="formData.comment"
      name="comment"
      rows="2"
    ></textarea>

    <button
      class="light-gray-btn"
      @click.prevent="checkTheFormFields"
    >
      Back
    </button>

    <button
      class="gray-btn"
      @click.prevent="checkTheFormFields(true)"
    >
      Send request
    </button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, email } from "@vuelidate/validators";
import { usePartRequestFormStore } from "@/stores";

const { dataFromThirdFormStep } = storeToRefs(usePartRequestFormStore());

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

const rules = computed(() => {
  return {
    email: { required, minLength: minLength(5), email },
    name: { required, minLength: minLength(2) },
    city: { required, minLength: minLength(2) },
  };
});

const v$ = useVuelidate(rules, formData.value);

async function checkTheFormFields(sendRequest = false) {
  const result = await v$.value.$validate();

  if (result) {
    Object.assign(dataFromThirdFormStep.value, formData.value);

    sendRequest === true ? console.log("Send request") : switchFormToAnotherStep();
  }
}
const emit = defineEmits(["switchFormToAnotherStep"]);
const switchFormToAnotherStep = () => emit("switchFormToAnotherStep", 2);
</script>

<style lang="sass" scoped>
@import "@/styles/pages/part-request/_third-form-for-part-request.scss"
</style>
