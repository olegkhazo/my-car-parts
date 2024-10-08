<script setup>
import { getTimeAgo } from "@/utils";

const props = defineProps({
  partRequests: Object,
});

import { useAuthStore } from "@/stores";

const authManager = useAuthStore();
const { loggedIn } = storeToRefs(authManager);

function showAllContentOfSingleRequest(event) {
  const allContentRow = event.target.closest(".single-request-row").nextElementSibling;

  allContentRow.classList.contains("hidden")
    ? allContentRow.classList.remove("hidden")
    : allContentRow.classList.add("hidden");
}

function hideAllContentOfSingleRequest(event) {
  const button = event.target;
  const contentRow = button.closest(".all-content-for-single-request");
  contentRow.classList.add("hidden");

  scrollToTopOfTheTableBody();
}
</script>

<template>
  <div class="table-wrapper">
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Car part</th>
          <th class="form-area-column">Area/Region</th>
          <th class="form-date-column">Sent</th>
          <th class="form-info-button-column"></th>
        </tr>
      </thead>
      <tbody v-for="request in props.partRequests" id="tbody" :key="request._id">
        <tr class="single-request-row" @click="showAllContentOfSingleRequest">
          <td>
            <div class="green-wheel-img-wrapper">
              <NuxtImg src="/images/green-wheel.svg" title="green-wheel" />
            </div>
          </td>
          <td>
            {{ request.part_name }} for {{ request.car_make }} {{ request.car_model }} {{ request.engine_volume }}
            {{ request.fuel_type }}
            <div class="block-for-mobile-screen">
              {{ request.city }} -
              {{ getTimeAgo(request.created_date) }}
            </div>
          </td>
          <td class="form-area-column">{{ request.city }}</td>
          <td class="form-date-column">
            {{ getTimeAgo(request.created_date) }}
          </td>
          <td class="form-info-button-column">
            <span class="sm-green-btn">Info</span>
          </td>
        </tr>
        <tr class="all-content-for-single-request hidden">
          <td colspan="5">
            <div class="all-content-wrapper">
              <div class="all-content">
                <div class="single-request-details">
                  <div class="single-request-details-left">
                    <span v-if="request.part_name">
                      Spare part:
                      <span class="bold">{{ request.part_name }}</span>
                    </span>
                    <span v-if="request.part_group">
                      Group:
                      <span class="bold">{{ request.part_group }}</span>
                    </span>
                    <span v-if="request.type_of_part">
                      Type of part:
                      <span class="bold">{{ request.type_of_part }}</span>
                    </span>
                    <span v-if="request.part_condition">
                      Condition:
                      <span class="bold">{{ request.part_condition }}</span>
                    </span>
                    <span v-if="request.part_code">
                      Part code:
                      <span class="bold">{{ request.part_code }}</span>
                    </span>
                    <span v-if="request.car_type">
                      Car type:
                      <span class="bold">{{ request.car_type }}</span>
                    </span>
                    <span v-if="request.car_make">
                      Car make:
                      <span class="bold">{{ request.car_make }}</span>
                    </span>
                    <span v-if="request.car_model">
                      Car model:
                      <span class="bold">{{ request.car_model }}</span>
                    </span>
                    <span v-if="request.car_year">
                      Car year:
                      <span class="bold">{{ request.car_year }}</span>
                    </span>
                  </div>
                  <div class="single-request-details-right">
                    <span v-if="request.fuel_type">
                      Fuel type:
                      <span class="bold">{{ request.fuel_type }}</span>
                    </span>
                    <span v-if="request.engine_volume">
                      Engine volume:
                      <span class="bold">{{ request.engine_volume }}</span>
                    </span>
                    <span v-if="request.car_body">
                      Car body:
                      <span class="bold">{{ request.car_body }}</span>
                    </span>
                    <span v-if="request.vin_code">
                      VIN code:
                      <span class="bold">{{ request.vin_code }}</span>
                    </span>
                    <span v-if="request.comment">
                      User comment:
                      <span class="bold">{{ request.comment }}</span>
                    </span>
                    <span v-if="request.city">
                      State/City:
                      <span class="bold">{{ request.city }}</span>
                    </span>
                    <span v-if="request.name">
                      Name: <span class="bold">{{ request.name }}</span>
                    </span>
                  </div>
                </div>

                <div class="spare-part-requests-btn-wrapper">
                  <NuxtLink v-if="loggedIn" :to="'/offer-page/' + request._id" class="suggest-button xl-green-btn"
                    >Suggest your variant</NuxtLink
                  >
                  <NuxtLink v-else to="sign-in" class="suggest-button xl-green-btn"
                    >Sign in and suggest your variant</NuxtLink
                  >
                  <span class="close-content-btn blue-btn" @click="hideAllContentOfSingleRequest">Hide content</span>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.table-wrapper {
  width: 100%;
  padding-top: 11px;

  .single-request-row {
    cursor: pointer;

    .block-for-mobile-screen {
      display: none;

      @media (max-width: 720px) {
        display: block;
        color: $gray-700;
      }
    }
  }

  .form-date-column,
  .form-area-column {
    @media (max-width: 720px) {
      display: none;
    }
  }

  .form-info-button-column {
    text-align: right;
  }

  .all-content-for-single-request {
    td {
      background: $white !important;
      border-top: 2px solid white;
      border-bottom: 2px solid $gray-100;

      .all-content-wrapper {
        .all-content {
          .single-request-details {
            display: flex;
            border: 2px solid $gray-300;
            border-radius: 5px;
            padding: 5px;

            .single-request-details-right {
              margin-left: 65px;

              @media (max-width: 485px) {
                margin-left: 20px;
              }

              @media (max-width: 370px) {
                margin-left: 10px;
              }
            }

            span {
              display: block;
              margin-top: 3px;

              .bold {
                display: inline;
                font-size: 16px;
                font-weight: 600;

                @media (max-width: 485px) {
                  font-size: 14px;
                  font-weight: 500;
                }
              }
            }
          }

          .spare-part-requests-btn-wrapper {
            display: flex;

            @media (max-width: 360px) {
              flex-direction: column;
            }

            .suggest-button,
            .close-content-btn {
              display: inline-block;
              margin: 20px 0;

              @media (max-width: 360px) {
                margin: 0;
              }
            }

            .suggest-button {
              @media (max-width: 360px) {
                margin: 15px 0 10px 0;
              }
            }

            .close-content-btn {
              margin-left: 10px;

              @media (max-width: 360px) {
                margin: 0 0 15px 0;
              }
            }
          }
        }
      }
    }
  }

  .hidden {
    display: none;
  }
}
</style>
