<template>
  <div class="content-wrapper">
    <div class="all-requests-wrapper">
      <h1>All car part requests</h1>
      <TheFilterByCarTypes />
      <div class="all-requests-table-wrapper">
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
            <tbody v-for="request in chunkOfRequestsForView" id="tbody" :key="request._id">
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
                          <span v-if="request.car_year">
                            Car year:
                            <span class="bold">{{ request.car_year }}</span>
                          </span>
                          <span v-if="request.car_model">
                            Car model:
                            <span class="bold">{{ request.car_model }}</span>
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
                        <NuxtLink :to="'/offer-page/' + request._id" class="suggest-button xl-green-btn"
                          >Suggest your variant</NuxtLink
                        >
                        <span class="close-content-btn blue-btn" @click="hideAllContentOfSingleRequest"
                          >Hide content</span
                        >
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <br />
      <paginate
        v-model="currentPage"
        :page-count="numPages"
        :page-range="5"
        :click-handler="rewriteChunkOfRequests"
        :container-class="'pagination'"
        prev-text="<"
        next-text=">"
      />
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Table of user requests for car parts",
  meta: [
    {
      name: "description",
      content: "A detailed table of all user requests for car parts with detailed descriptions and information.",
    },
  ],
});
import { getTimeAgo } from "@/utils";
import { API_URL } from "@/utils/constants";
import { useAllPartRequestsDataStore } from "@/stores";
import Paginate from "vuejs-paginate-next";

const currentPage = ref(1);
const chunkOfRequestsForView = ref([]);
const { originalSparePartRequestsData, filteredPartRequestsData } = storeToRefs(useAllPartRequestsDataStore());

//fetching all requests
const { data: allRequests, error } = await useFetch(API_URL + "all-spare-part-requests-data");

onMounted(() => {
  if (allRequests.value) {
    allRequests.value.sort((a, b) => {
      // Comparing and sorting the created_date in descending order
      return new Date(b.created_date) - new Date(a.created_date);
    });

    originalSparePartRequestsData.value = allRequests.value;
    filteredPartRequestsData.value = originalSparePartRequestsData.value;

    chunkOfRequestsForView.value = filteredPartRequestsData.value.slice(0, 10);
  } else if (error.value) {
    // should to think how better to show errors
    console.log("something wrong:" + error.value);
  }
});

const numPages = computed(() => {
  return filteredPartRequestsData.value.length / 10;
});

function rewriteChunkOfRequests(pageNum) {
  currentPage.value = pageNum;

  if (currentPage.value === 1) {
    chunkOfRequestsForView.value = filteredPartRequestsData.value.slice(0, 10);
  } else {
    chunkOfRequestsForView.value = filteredPartRequestsData.value.slice(
      currentPage.value * 10 - 10,
      currentPage.value * 10
    );
  }
  scrollToTopOfTheTableBody();
}

watch(filteredPartRequestsData, () => {
  chunkOfRequestsForView.value = filteredPartRequestsData.value.slice(0, 10);
});

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

function scrollToTopOfTheTableBody() {
  document.getElementById("tbody").scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.all-requests-wrapper {
  margin: 30px auto 150px auto;

  @media (max-width: 834px) {
    margin: 20px auto 150px auto;
  }

  h1 {
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

  .filters {
    display: flex;
    align-items: center;

    .filters-title {
      font-weight: 500;
    }

    select {
      max-width: 150px;
      font-size: 12px;
      height: 30px;
      margin-left: 10px;
      padding: 5px;
    }
  }

  .all-requests-table-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15px;
    position: relative;

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
  }
}
</style>
