<template>
  <div>
    <div class="form-steps">
      <span class="step">1</span>
      <img
        src="@/assets/images/step-arrow.svg"
        alt="arrow"
      />
      <span class="step">2</span>
      <img
        src="@/assets/images/step-arrow.svg"
        alt="arrow"
      />
      <span class="step active-step">3</span>
    </div>

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
        rows="5"
        cols="33"
      >
        Your comment...
      </textarea>
    </div>
  </div>
</template>

<script setup></script>

<style lang="sass" scoped>
@import "@/styles/pages/part-request/third-part-request-form.scss"
</style>
