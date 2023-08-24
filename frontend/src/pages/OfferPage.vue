<template>
  <MainLayout>
    <div class="content-wrapper">
      <h2>Offer Page</h2>
      <div class="offer-page-wrapper">
        <div class="form-wrapper">
          <form class="offer-form" action="">
            <div v-if="!successfulOferSending" class="offer-form-fields-section">
              <label class="label-text" for="full-name">You full name *</label>
              <span v-for="error in v$.full_name.$errors" :key="error.$uid" class="input-error-notification">
                {{ error.$message }}
              </span>
              <input id="full-name" v-model="formData.full_name" type="text" />

              <label class="label-text" for="company_name">Company name *</label>
              <span v-for="error in v$.company_name.$errors" :key="error.$uid" class="input-error-notification">
                {{ error.$message }}
              </span>
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

              <span class="label-text">Spare part condition</span>
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

              <label class="label-text" for="city_area">City/Area *</label>
              <span v-for="error in v$.city_area.$errors" :key="error.$uid" class="input-error-notification">{{
                error.$message
              }}</span>
              <input id="city_area" v-model="formData.city_area" type="text" />

              <label class="label-text" for="email"> E-mail * </label>
              <span v-for="error in v$.email.$errors" :key="error.$uid" class="input-error-notification">{{
                error.$message
              }}</span>
              <input id="email" v-model="formData.email" type="email" name="email" placeholder="E-mail" />

              <label class="label-text" for="phone"> Phone </label>
              <span v-for="error in v$.phone.$errors" :key="error.$uid" class="input-error-notification">{{
                error.$message
              }}</span>
              <input id="phone" v-model="formData.phone" type="tel" name="phone" placeholder="Phone" />

              <button class="gray-btn" @click.prevent="createNewOffer">Continue</button>
            </div>
            <div v-else class="offer-sending-result">
              <div class="succesful-notification">
                <img src="@/assets/images/checkmark.png" alt="green-checkmark" />
              </div>
              <h3>Congratulations, your offer sending was successful!</h3>
              <div class="success-offer-buttons-wrapper">
                <router-link class="light-gray-btn" to="/">Home page</router-link>
                <router-link :to="{ name: 'all-spare-part-requests' }" class="back-button xl-green-btn">
                  Back to all requests
                </router-link>
              </div>
            </div>
          </form>
        </div>

        <div class="offer-right-info-wrapper">
          <span class="right-blue-block-title">Spare part request content:</span>
          <div v-if="singlePartRequestData" class="all-content-wrapper">
            <div class="all-content">
              <span v-if="singlePartRequestData.part_name">
                Spare part: <span class="bold">{{ singlePartRequestData.part_name }}</span>
              </span>
              <span v-if="singlePartRequestData.part_group">
                Group: <span class="bold">{{ singlePartRequestData.part_group }}</span>
              </span>
              <span v-if="singlePartRequestData.type_of_part">
                Type of part: <span class="bold">{{ singlePartRequestData.type_of_part }}</span>
              </span>
              <span v-if="singlePartRequestData.part_condition">
                Condition: <span class="bold">{{ singlePartRequestData.part_condition }}</span>
              </span>
              <span v-if="singlePartRequestData.part_code">
                Part code: <span class="bold">{{ singlePartRequestData.part_code }}</span>
              </span>
              <span v-if="singlePartRequestData.car_type">
                Car type: <span class="bold">{{ singlePartRequestData.car_type }}</span>
              </span>
              <span v-if="singlePartRequestData.car_make">
                Car make: <span class="bold">{{ singlePartRequestData.car_make }}</span>
              </span>
              <span v-if="singlePartRequestData.car_model">
                Car model: <span class="bold">{{ singlePartRequestData.car_model }}</span>
              </span>
              <span v-if="singlePartRequestData.car_year">
                Car year: <span class="bold">{{ singlePartRequestData.car_year }}</span>
              </span>
              <span v-if="singlePartRequestData.fuel_type">
                Fuel type: <span class="bold">{{ singlePartRequestData.fuel_type }}</span>
              </span>
              <span v-if="singlePartRequestData.engine_volume">
                Engine volume: <span class="bold">{{ singlePartRequestData.engine_volume }}</span>
              </span>
              <span v-if="singlePartRequestData.car_body">
                Car body: <span class="bold">{{ singlePartRequestData.car_body }}</span>
              </span>
              <span v-if="singlePartRequestData.vin_code">
                VIN code: <span class="bold">{{ singlePartRequestData.vin_code }}</span>
              </span>
              <span v-if="singlePartRequestData.comment">
                User comment: <span class="bold">{{ singlePartRequestData.comment }}</span>
              </span>
              <span v-if="singlePartRequestData.city">
                State/City: <span class="bold">{{ singlePartRequestData.city }}</span>
              </span>
              <span v-if="singlePartRequestData.email">
                Email: <span class="bold">{{ singlePartRequestData.email }}</span>
              </span>
              <span v-if="singlePartRequestData.phone">
                Phone: <span class="bold">{{ singlePartRequestData.phone }}</span>
              </span>
              <span v-if="singlePartRequestData.name">
                Name: <span class="bold">{{ singlePartRequestData.name }}</span>
              </span>
            </div>
          </div>

          <router-link :to="{ name: 'all-spare-part-requests' }" class="back-button xl-green-btn"
            >Back to all requests</router-link
          >
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import MainLayout from "@/layouts/MainLayout.vue";
import { useRoute } from "vue-router";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, email } from "@vuelidate/validators";

const route = useRoute();

const requestId = route.params.requestId;
const singlePartRequestData = ref(null);
const successfulOferSending = ref(false);

const formData = ref({
  related_request_id: requestId,
  full_name: "",
  company_name: "",
  type_of_part: "original",
  part_condition: "new",
  city_area: "",
  email: "",
  phone: "",
});

const rules = computed(() => {
  return {
    full_name: { required, minLength: minLength(2) },
    company_name: { required },
    type_of_part: { required },
    part_condition: { required },
    city_area: { required, minLength: minLength(2) },
    email: { required, minLength: minLength(5), email },
    phone: { required, minLength: minLength(7) },
  };
});

const v$ = useVuelidate(rules, formData.value);

onMounted(() => {
  fetchSingleRequest();
});

async function fetchSingleRequest() {
  try {
    const response = await fetch(`http://localhost:3000/api/single-spare-part-request-data/${requestId}`);
    const data = await response.json();
    singlePartRequestData.value = data;

    console.log(singlePartRequestData.value);
  } catch (error) {
    console.error("Error fetching parts:", error);
  }
}

async function createNewOffer() {
  const result = await v$.value.$validate();

  if (result) {
    try {
      const response = await fetch("http://localhost:3000/api/create-offer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData.value),
      });
      if (response.ok) {
        successfulOferSending.value = true;
      } else {
        console.error("Failed to create offer");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/pages/_offer-page.scss";
</style>
