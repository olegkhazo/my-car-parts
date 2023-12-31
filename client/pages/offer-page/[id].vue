<template>
  <div class="content-wrapper">
    <h2>Offer Page</h2>
    <div id="offer-page-wrapper" class="offer-page-wrapper">
      <div class="form-wrapper">
        <form class="offer-form">
          <div v-if="!successfulOferSending" class="offer-form-fields-section">
            <label class="label-text" for="full-name">Your name *</label>
            <span v-if="!isNameValid && formButtonClicked" class="input-error-notification"
              >Please enter a valid name.</span
            >
            <input id="full-name" v-model="formData.full_name" type="text" />

            <label class="label-text" for="company_name">Company name *</label>
            <span v-if="!isCompanyNameValid && formButtonClicked" class="input-error-notification"
              >Please enter a valid company name.</span
            >
            <input id="company_name" v-model="formData.company_name" type="text" />

            <span class="label-text">Type of part</span>
            <div class="radio-toolbar">
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

            <span class="label-text">Part condition</span>
            <div class="radio-toolbar spare-part-condition">
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

            <label class="label-text" for="price">Price *</label>
            <span v-if="!isPriceValid && formButtonClicked" class="input-error-notification"
              >Set the price for your part</span
            >
            <input id="price" v-model="formData.price" type="price" name="price" placeholder="Price" />

            <label class="label-text" for="state">State *</label>
            <span v-if="!isStateValid && formButtonClicked" class="input-error-notification"
              >Select the state where spare part is located</span
            >
            <select id="state" v-model="formData.state" name="make">
              <option v-for="state in states" :key="state">
                {{ state }}
              </option>
            </select>

            <label class="label-text" for="city_area">City/Area *</label>
            <span v-if="!isCityValid && formButtonClicked" class="input-error-notification"
              >Please enter a valid city</span
            >
            <input id="city_area" v-model="formData.city_area" type="text" />

            <label class="label-text" for="email"> E-mail * </label>
            <span v-if="!isEmailValid && formButtonClicked" class="input-error-notification">
              Please enter a valid email address.
            </span>
            <input id="email" v-model="formData.email" type="email" name="email" placeholder="E-mail" />

            <label class="label-text" for="phone"> Phone *</label>
            <span v-if="!isPhoneValid && formButtonClicked" class="input-error-notification"
              >Please enter a valid phone number.</span
            >
            <input id="phone" v-model="formData.phone" type="tel" name="phone" placeholder="Phone" />

            <button class="gray-btn" @click.prevent="createNewOffer">Continue</button>
          </div>
          <TheSuccessRequestForPart v-else :data="successWindowData" />
        </form>
      </div>

      <div class="offer-right-info-wrapper">
        <span v-if="successfulOferSending" class="successfull-notyfication"
          >You sent your suggestion successfully!</span
        >
        <span class="right-blue-block-title">Car part request content:</span>
        <div v-if="singlePartRequestData" class="all-content-wrapper">
          <div class="all-content">
            <span v-if="singlePartRequestData.part_name">
              Part:
              <span class="bold">{{ singlePartRequestData.part_name }}</span>
            </span>
            <span v-if="singlePartRequestData.part_group">
              Group:
              <span class="bold">{{ singlePartRequestData.part_group }}</span>
            </span>
            <span v-if="singlePartRequestData.type_of_part">
              Type of part:
              <span class="bold">{{ singlePartRequestData.type_of_part }}</span>
            </span>
            <span v-if="singlePartRequestData.part_condition">
              Condition:
              <span class="bold">{{ singlePartRequestData.part_condition }}</span>
            </span>
            <span v-if="singlePartRequestData.part_code">
              Part code:
              <span class="bold">{{ singlePartRequestData.part_code }}</span>
            </span>
            <span v-if="singlePartRequestData.car_type">
              Car type:
              <span class="bold">{{ singlePartRequestData.car_type }}</span>
            </span>
            <span v-if="singlePartRequestData.car_make">
              Car make:
              <span class="bold">{{ singlePartRequestData.car_make }}</span>
            </span>
            <span v-if="singlePartRequestData.car_model">
              Car model:
              <span class="bold">{{ singlePartRequestData.car_model }}</span>
            </span>
            <span v-if="singlePartRequestData.car_year">
              Car year:
              <span class="bold">{{ singlePartRequestData.car_year }}</span>
            </span>
            <span v-if="singlePartRequestData.fuel_type">
              Fuel type:
              <span class="bold">{{ singlePartRequestData.fuel_type }}</span>
            </span>
            <span v-if="singlePartRequestData.engine_volume">
              Engine volume:
              <span class="bold">{{ singlePartRequestData.engine_volume }}</span>
            </span>
            <span v-if="singlePartRequestData.car_body">
              Car body:
              <span class="bold">{{ singlePartRequestData.car_body }}</span>
            </span>
            <span v-if="singlePartRequestData.vin_code">
              VIN code:
              <span class="bold">{{ singlePartRequestData.vin_code }}</span>
            </span>
            <span v-if="singlePartRequestData.comment">
              User comment:
              <span class="bold">{{ singlePartRequestData.comment }}</span>
            </span>
            <span v-if="singlePartRequestData.city">
              State/City:
              <span class="bold">{{ singlePartRequestData.city }}</span>
            </span>
            <span v-if="singlePartRequestData.name">
              Name: <span class="bold">{{ singlePartRequestData.name }}</span>
            </span>
          </div>
        </div>

        <NuxtLink to="/all-spare-part-requests" class="back-button xl-green-btn">Back to all requests</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Creating an offer for car parts",
  meta: [
    {
      name: "description",
      content: "Page for sending an offer of a car spare part to a user request",
    },
  ],
});

import { API_URL } from "@/utils/constants";
import { usaStates } from "@/utils/usaStates";
import { validateFormField } from "@/utils/index";
import TheSuccessRequestForPart from "@/components/notification-components/TheSuccessRequestForPart";

const { id } = useRoute().params;
const formButtonClicked = ref(false);

const successWindowData = {
  header:
    "Your suggestion was sent successfully! If your variant fits the client, he will connect with you by your contacts.",
  typeOfRequest: "offer",
};

const singlePartRequestData = ref(null);
const successfulOferSending = ref(false);
const states = ref([]);

const formData = ref({
  related_request_id: id,
  part_name: "",
  byer_email: "",
  full_name: "",
  company_name: "",
  type_of_part: "original",
  part_condition: "new",
  price: "",
  state: "",
  city_area: "",
  email: "",
  phone: "",
});

const { data: singleRequest, error } = await useFetch(API_URL + `single-spare-part-request-data/${id}`);

onMounted(() => {
  if (singleRequest.value) {
    singlePartRequestData.value = singleRequest.value;
  } else if (error.value) {
    // should to think how better to show errors
    console.log("something wrong:" + error.value);
  }

  for (let stateData of Object.values(usaStates)) {
    states.value.push(stateData.name);
  }
});

// Validation
const isEmailValid = computed(() => {
  return validateFormField(formData.value.email, "EMAIL_PATTERN");
});

const isNameValid = computed(() => {
  return validateFormField(formData.value.full_name, "COMMON_NOT_EMPTY_PATTERN");
});

const isCompanyNameValid = computed(() => {
  return validateFormField(formData.value.company_name, "COMMON_NOT_EMPTY_PATTERN");
});

const isPriceValid = computed(() => {
  return validateFormField(formData.value.price, "PRICE_PATTERN");
});

const isStateValid = computed(() => {
  return validateFormField(formData.value.state, "COMMON_NOT_EMPTY_PATTERN");
});

const isCityValid = computed(() => {
  return validateFormField(formData.value.city_area, "COMMON_NOT_EMPTY_PATTERN");
});

const isPhoneValid = computed(() => {
  return validateFormField(formData.value.phone, "PHONE_PATTERN");
});

async function createNewOffer() {
  formButtonClicked.value = true;

  formData.value.byer_email = singlePartRequestData.value.email;
  formData.value.part_name = singlePartRequestData.value.part_name;

  if (
    isEmailValid.value &&
    isNameValid.value &&
    isCompanyNameValid.value &&
    isPriceValid.value &&
    isStateValid.value &&
    isCityValid.value &&
    isPhoneValid.value
  ) {
    const { data: newRequestCreating, error } = await useFetch(API_URL + "create-offer", {
      method: "post",
      body: JSON.stringify(formData.value),
    });

    if (newRequestCreating.value) {
      successfulOferSending.value = true;
      scrollToTopOfTheTableBody();
    } else if (error.value) {
      // should to think how better to show errors
      console.log("something wrong:" + error.value);
    }
  }
}

function scrollToTopOfTheTableBody() {
  document.getElementById("offer-page-wrapper").scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

h2 {
  font-size: 50px;
  font-weight: 300;
  text-align: center;

  @media (max-width: 834px) {
    font-size: 35px;
  }

  @media (max-width: 382px) {
    font-size: 28px;
  }
}

.offer-page-wrapper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 105px;

  @media (max-width: 834px) {
    flex-direction: column;
  }

  .form-wrapper {
    width: 57%;

    @media (max-width: 834px) {
      width: 100%;
    }

    .offer-form {
      padding: 30px 60px;
      border: 2px solid $gray-100;
      border-radius: 15px;
      position: relative;

      @media (max-width: 995px) {
        padding: 20px 25px;
      }

      .offer-form-fields-section {
        padding-top: 30px;

        input,
        select,
        textarea {
          margin-bottom: 15px;
        }

        .radio-toolbar {
          margin-bottom: 15px;
          justify-content: flex-start;

          .label-text {
            margin-right: 10px;
          }
        }
      }

      .succesful-notification {
        display: flex;
        justify-content: center;

        img {
          width: 64px;
        }
      }

      button {
        margin-top: 10px;
      }

      .light-gray-btn {
        margin-right: 15px;

        @media (max-width: 427px) {
          margin-right: 0;
        }
      }
    }

    .offer-sending-result {
      .succesful-notification {
        display: flex;
        justify-content: center;
      }

      h3 {
        font-size: 30px;
        font-weight: bold;
        text-align: center;

        @media (max-width: 834px) {
          font-size: 22px;
        }
      }

      .success-offer-buttons-wrapper {
        display: flex;
        justify-content: space-around;

        @media (max-width: 427px) {
          flex-direction: column;

          .light-gray-btn {
            margin-bottom: 10px;
          }
        }
      }
    }
  }

  .offer-right-info-wrapper {
    width: 40%;
    border-radius: 15px;
    background-color: $blue-250;
    padding: 20px 25px;
    color: $gray-1000;
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

    .successfull-notyfication {
      display: block;
      color: $green;
      font-weight: 600;
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

    .all-content-wrapper {
      .all-content {
        margin-top: 25px;

        @media (max-width: 834px) {
          margin-top: 10px;
        }

        span {
          display: block;
          margin-top: 3px;
          font-size: 15px;

          .bold {
            display: inline;
            font-size: 18px;
            font-weight: 600;

            @media (max-width: 382px) {
              font-size: 14px;
            }
          }
        }
      }
    }

    .back-button {
      display: inline-block;
      margin-top: 22px;
    }
  }
}
</style>
