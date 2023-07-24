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
            <FirstPartRequestForm v-if="formStep === 1" />
            <SecondPartRequestForm v-if="formStep === 2" />
            <ThirdPartRequestForm v-if="formStep === 3" />

            <button
              v-if="formStep > 1"
              class="light-gray-btn"
              @click.prevent="switchFormStep(-1)"
            >
              Back
            </button>
            <button
              class="gray-btn"
              @click.prevent="switchFormStep(1)"
            >
              Continue
            </button>
          </form>
        </div>

        <div class="request-right-info-wrapper">
          <span class="right-blue-block-title">Find yor next car part,</span>
          <span class="bold-span">Spend only couple minutes!</span>
          <div class="blue-arrow-wrapper top-arrow">
            <img
              src="@/assets/images/blue-arrow.svg"
              alt="arrow"
            />
          </div>

          <div class="priveleges">
            <div class="priveleges-point">
              <img
                src="@/assets/images/green-wheel.svg"
                alt=""
              />
              <span class="priveleges-text">
                <span class="bold-span">Fill out the request form</span>
                <span class="thin-span"
                  >for new or used parts, indicating the list of parts and information about your car</span
                >
              </span>
            </div>
            <div class="priveleges-point">
              <img
                src="@/assets/images/green-wheel.svg"
                alt=""
              />
              <span class="priveleges-text">
                <span class="bold-span">Get an answer</span>
                <span class="thin-span">within a few minutes from sellers from all over USA</span>
              </span>
            </div>
            <div class="priveleges-point">
              <img
                src="@/assets/images/green-wheel.svg"
                alt=""
              />
              <span class="priveleges-text">
                <span class="bold-span">Choose a seller</span>
                <span class="thin-span">with the best price and delivery terms</span>
              </span>
            </div>
          </div>
          <div class="blue-arrow-wrapper">
            <img
              src="@/assets/images/blue-arrow.svg"
              alt="arrow"
            />
          </div>

          <ul class="result-you-get">
            <span class="bold-span">As a result, you get: </span>
            <li>Spare parts at the lowest price in USA</li>
            <li>Saving search time</li>
            <li>Quick buy guarantee</li>
          </ul>

          <div class="thumbs-up-wrapper">
            <img
              src="@/assets/images/thumbs-up.svg"
              alt="thumbs-up"
            />
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import { ref } from "vue";
import MainLayout from "@/layouts/MainLayout";
import FirstPartRequestForm from "./FirstPartRequestForm";
import SecondPartRequestForm from "./SecondPartRequestForm";
import ThirdPartRequestForm from "./ThirdPartRequestForm";

const formStep = ref(1);

function switchFormStep(step) {
  formStep.value += step;
}
</script>

<style lang="sass" scoped>
@import "@/styles/pages/part-request/_part-request.scss"
</style>
