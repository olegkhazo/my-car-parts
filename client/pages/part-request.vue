<script setup>
useHead({
  title: "Page with a form for requesting a car spare part",
  meta: [
    {
      name: "description",
      content: `An easy way to find car parts, just fill out the form, send a
          request and hundreds of auto parts sellers will offer the parts they have`,
    },
  ],
});

import { API_URL } from "@/utils/constants";
import FirstFormStep from "@/components/part-request-forms/FirstFormStep";
import SecondFormStep from "@/components/part-request-forms/SecondFormStep";
import ThirdFormStep from "@/components/part-request-forms/ThirdFormStep";
import SuccessRequestWindow from "@/components/notification/SuccessRequestWindow";

import { usePartRequestFormStore } from "@/stores";

const successWindowData = {
  header:
    "Your request was sent successfully! Hundreds of sellers will see your request soon and will suggest the best variants.",
  typeOfRequest: "part-request",
};

const { dataFromFirstFormStep, dataFromSecondFormStep, dataFromThirdFormStep } = storeToRefs(usePartRequestFormStore());

const formStep = ref(1);
const finalRequestData = ref({});

function formStepsSwitcher(step) {
  scrollToTopOfTheTableBody();

  formStep.value = step;
}

function scrollToTopOfTheTableBody() {
  document.getElementById("form-page-title").scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
}

async function addPartRequestRecordToTheDB() {
  const { data: newRequestCreating, error } = await useFetch(API_URL + "create-part-request", {
    method: "post",
    body: JSON.stringify(finalRequestData.value),
  });

  if (newRequestCreating.value) {
    console.log("Part request created successfully");
    dataFromFirstFormStep.value = {};
    dataFromSecondFormStep.value = {};
    dataFromThirdFormStep.value = {};
  } else if (error.value) {
    // should to think how better to show errors
    console.log("something wrong:" + error.value);
  }
}

watch(formStep, (newStep) => {
  if (newStep === 4) {
    Object.assign(
      finalRequestData.value,
      dataFromFirstFormStep.value,
      dataFromSecondFormStep.value,
      dataFromThirdFormStep.value
    );

    addPartRequestRecordToTheDB();
  }
});
</script>

<template>
  <div class="content-wrapper">
    <div class="request-form-page-wrapper">
      <div class="form-wrapper">
        <span id="form-page-title" class="form-description">Find car parts in USA</span>

        <form class="part-request-form" action="">
          <div v-if="formStep < 4" class="form-steps">
            <span class="step" :class="{ 'active-step': formStep === 1 }">1</span>
            <NuxtImg src="/images/step-arrow.svg" title="arrow" />
            <span class="step" :class="{ 'active-step': formStep === 2 }">2</span>
            <NuxtImg src="/images/step-arrow.svg" title="arrow" />
            <span class="step" :class="{ 'active-step': formStep === 3 }">3</span>
          </div>

          <FirstFormStep v-if="formStep === 1" @switch-form-to-another-step="formStepsSwitcher" />
          <SecondFormStep v-else-if="formStep === 2" @switch-form-to-another-step="formStepsSwitcher" />
          <ThirdFormStep v-else-if="formStep === 3" @switch-form-to-another-step="formStepsSwitcher" />
          <SuccessRequestWindow
            v-else-if="formStep === 4"
            @switch-form-to-another-step="formStepsSwitcher"
            :data="successWindowData"
          />
        </form>
      </div>

      <div class="request-right-info-wrapper">
        <span class="right-blue-block-title">Find yor next car part,</span>
        <span class="bold-span">Spend only couple minutes!</span>
        <div class="blue-arrow-wrapper top-arrow">
          <NuxtImg src="/images/blue-arrow.svg" title="arrow" />
        </div>

        <div class="priveleges">
          <div class="priveleges-point">
            <NuxtImg src="/images/green-wheel.svg" title="" />
            <span class="priveleges-text">
              <span class="bold-span">Complete the request form</span>
              <span class="thin-span">
                for new or used parts, specifying the part list and providing information about your car.</span
              >
            </span>
          </div>
          <div class="priveleges-point">
            <NuxtImg src="/images/green-wheel.svg" title="" />
            <span class="priveleges-text">
              <span class="bold-span">Receive responses</span>
              <span class="thin-span">within minutes from sellers across the USA.</span>
            </span>
          </div>
          <div class="priveleges-point">
            <NuxtImg src="/images/green-wheel.svg" title="" />
            <span class="priveleges-text">
              <span class="bold-span">Choose a seller</span>
              <span class="thin-span">with the best price and delivery terms</span>
            </span>
          </div>
        </div>
        <div class="blue-arrow-wrapper">
          <NuxtImg src="/images/blue-arrow.svg" title="arrow" />
        </div>

        <ul class="result-you-get">
          <span class="bold-span">As a result, you get: </span>
          <li>Car parts at a profitable price in the USA</li>
          <li>Saving search time</li>
          <li>Quick buy guarantee</li>
        </ul>

        <div class="thumbs-up-wrapper">
          <NuxtImg src="/images/thumbs-up.svg" title="thumbs-up" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.request-form-page-wrapper {
  display: flex;
  justify-content: space-between;
  padding: 55px 0;

  @media (max-width: 834px) {
    flex-direction: column;
  }
  .form-description {
    color: $gray-800;
    font-size: 25px;
    position: absolute;
    top: 80px;
  }
  .form-wrapper {
    width: 57%;

    @media (max-width: 834px) {
      width: 100%;
    }
    .part-request-form {
      padding: 20px 60px;
      border: 2px solid $gray-100;
      border-radius: 15px;
      position: relative;

      @media (max-width: 995px) {
        padding: 20px 25px;
      }
      .form-steps {
        display: flex;
        justify-content: space-between;

        img {
          width: 110px;
        }

        .step {
          padding: 10px 19px;
          font-size: 20px;
          color: $gray-100;
          background-color: $gray-300;
          border-radius: 50%;

          @media (max-width: 402px) {
            padding: 10px 16px;
            font-size: 13px;
          }
        }

        img {
          @media (max-width: 855px) {
            width: 80px;
          }

          @media (max-width: 834px) {
            width: auto;
          }

          @media (max-width: 490px) {
            width: 80px;
          }

          @media (max-width: 402px) {
            width: 40px;
          }
        }
        .active-step {
          background-color: $yellow;
          color: $black;
        }
      }

      button {
        margin-top: 10px;
      }

      .light-gray-btn {
        margin-right: 15px;
      }
    }
  }
  .request-right-info-wrapper {
    width: 40%;
    border-radius: 15px;
    background-color: $blue-250;
    padding: 20px 25px;
    color: $gray-950;
    height: fit-content;

    @media (max-width: 900px) {
      padding: 20px 15px;
    }

    @media (max-width: 834px) {
      width: 100%;
      margin-top: 30px;
      padding: 40px 45px;
    }

    @media (max-width: 425px) {
      padding: 25px 30px;
    }

    @media (max-width: 425px) {
      padding: 25px 20px;
    }

    .right-blue-block-title {
      font-size: 30px;
      font-weight: 500;

      @media (max-width: 950px) {
        font-size: 24px;
      }

      @media (max-width: 834px) {
        font-size: 30px;
      }

      @media (max-width: 390px) {
        font-size: 24px;
      }

      @media (max-width: 325px) {
        font-size: 22px;
      }
    }

    span {
      display: block;
    }

    .bold-span {
      font-size: 16px;
      font-weight: 500;
    }

    .blue-arrow-wrapper {
      display: flex;
      justify-content: center;
      margin-bottom: 15px;

      img {
        width: 35px;
      }
    }

    .top-arrow {
      margin-top: 15px;
    }

    .priveleges {
      .priveleges-point {
        margin-bottom: 12px;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;

        .priveleges-text {
          width: 90%;
        }

        img {
          width: 24px;
        }
      }
    }

    .result-you-get {
      li {
        margin-left: 20px;
        list-style-type: disc;
      }
    }

    .thumbs-up-wrapper {
      display: flex;
      justify-content: center;
      margin-top: 10px;

      img {
        width: 100px;
      }
    }
  }
}
</style>
