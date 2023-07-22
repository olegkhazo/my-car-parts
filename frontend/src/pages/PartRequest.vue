<template>
  <MainLayout>
    <div class="content-wrapper">
      <div class="request-form-page-wrapper">
        <div class="form-wrapper">
          <span class="form-description">Find car parts in USA</span>
          <form
            class="part-request-form"
            action=""
          >
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
              <label for="part-name">Part name</label>
              <input
                id="part-name"
                type="text"
              />

              <label for="part-name">Part name</label>
              <input
                id="part-name"
                type="text"
              />

              <div class="radio-toolbar">
                <input
                  id="radio-any"
                  type="radio"
                  name="radio-any"
                  value="any-type"
                />
                <input
                  id="radio-any"
                  type="radio"
                  name="radio-any"
                  value="any-type"
                />
              </div>
            </div>
          </form>
        </div>

        <div class="request-right-info-wrapper"></div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "@/layouts/MainLayout";
</script>

<style lang="sass" scoped>
@import "@/styles/pages/_part-request.scss"
</style>
