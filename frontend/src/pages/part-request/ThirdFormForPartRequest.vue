<template>
  <div class="form-fields-section">
    <span class="type-of-communication-header-text">Choose how you want to receive responses from sellers:</span>

    <hr />

    <label
      class="label-text"
      for="e-mail"
    >
      E-mail
    </label>
    <input
      id="e-mail"
      type="email"
      name="e-mail"
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
      Your name
    </label>
    <input
      id="name"
      type="text"
      name="name"
      placeholder="name"
    />

    <label
      class="label-text"
      for="city"
    >
      City
    </label>
    <input
      id="city"
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
      name="comment"
      rows="2"
    ></textarea>

    <button
      class="light-gray-btn"
      @click.prevent="switchFormToAnotherStep"
    >
      Back
    </button>

    <button
      class="gray-btn"
      @click.prevent="sendData()"
    >
      Send request
    </button>
  </div>
</template>

<script setup>
const emit = defineEmits(["switchFormToAnotherStep"]);
const switchFormToAnotherStep = () => emit("switchFormToAnotherStep", 2);

function sendData() {
  console.log("send form results");
}
</script>

<style lang="sass" scoped>
@import "@/styles/pages/part-request/_third-form-for-part-request.scss"
</style>
