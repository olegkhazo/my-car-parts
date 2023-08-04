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
            <div
              v-if="formStep < 4"
              class="form-steps"
            >
              <span
                class="step"
                :class="{ 'active-step': formStep === 1 }"
                >1</span
              >
              <img
                src="@/assets/images/step-arrow.svg"
                alt="arrow"
              />
              <span
                class="step"
                :class="{ 'active-step': formStep === 2 }"
                >2</span
              >
              <img
                src="@/assets/images/step-arrow.svg"
                alt="arrow"
              />
              <span
                class="step"
                :class="{ 'active-step': formStep === 3 }"
                >3</span
              >
            </div>

            <div
              v-else-if="formStep === 4"
              class="succesful-notification"
            >
              <img
                src="@/assets/images/checkmark.png"
                alt="green-checkmark"
              />
            </div>

            <FirstFormForPartRequest
              v-if="formStep === 1"
              @switch-form-to-another-step="formStepsSwitcher"
            />
            <SecondFormForPartRequest
              v-else-if="formStep === 2"
              @switch-form-to-another-step="formStepsSwitcher"
            />
            <ThirdFormForPartRequest
              v-else-if="formStep === 3"
              @switch-form-to-another-step="formStepsSwitcher"
            />
            <SuccessSendingNotification
              v-else-if="formStep === 4"
              @switch-form-to-another-step="formStepsSwitcher"
            />
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
import FirstFormForPartRequest from "./FirstFormForPartRequest";
import SecondFormForPartRequest from "./SecondFormForPartRequest";
import ThirdFormForPartRequest from "./ThirdFormForPartRequest";
import SuccessSendingNotification from "./SuccessSendingNotification";

const formStep = ref(1);

function formStepsSwitcher(step) {
  formStep.value = step;
}
</script>

<style lang="sass" scoped>
@import "@/styles/pages/part-request/_part-request.scss"
</style>
