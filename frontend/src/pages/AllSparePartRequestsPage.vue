<template>
  <MainLayout>
    <div class="content-wrapper">
      <div class="all-requests-wrapper">
        <h2>All spare part requests</h2>
        <div class="filters">
          <span class="filters-title">Sort requests with filters</span>
          <select
            id="brand"
            name="brand"
          >
            <option value="audi">Audi</option>
            <option value="bmw">BMW</option>
            <option value="skoda">Skoda</option>
          </select>

          <select
            id="model"
            name="model"
          >
            <option value="a1">A1</option>
            <option value="a3">A3</option>
            <option value="a4">A4</option>
            <option value="a5">A5</option>
            <option value="a6">A6</option>
            <option value="a7">A7</option>
            <option value="a8">A8</option>
          </select>
        </div>
        <div class="all-requests-table-wrapper">
          <div class="table-pre-header"></div>
          <div class="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Spare part description</th>
                  <th>Area/Region</th>
                  <th>Sent</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      src="@/assets/images/green-wheel.svg"
                      alt=""
                    />
                  </td>
                  <td>Rear silencer for 2008 Volkswagen Multivan 3.2 petrol</td>
                  <td>Orlando</td>
                  <td>2 minutes ago</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="@/assets/images/green-wheel.svg"
                      alt=""
                    />
                  </td>
                  <td>Rear silencer for 2008 Volkswagen Multivan 3.2 petrol</td>
                  <td>Orlando</td>
                  <td>2 minutes ago</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="@/assets/images/green-wheel.svg"
                      alt=""
                    />
                  </td>
                  <td>Rear silencer for 2008 Volkswagen Multivan 3.2 petrol</td>
                  <td>Orlando</td>
                  <td>2 minutes ago</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="@/assets/images/green-wheel.svg"
                      alt=""
                    />
                  </td>
                  <td>Rear silencer for 2008 Volkswagen Multivan 3.2 petrol</td>
                  <td>Orlando</td>
                  <td>2 minutes ago</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="all-requests-sm-screen-wrapper">
            <ul>
              <li>
                <div class="single-request-wrapper">
                  <img
                    src="@/assets/images/green-wheel.svg"
                    alt=""
                  />
                  <div class="request-description">
                    <p>Rear silencer for 2008 Volkswagen Multivan 3.2 petrol</p>
                    <span>Orlando - 2 minutes ago</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="single-request-wrapper">
                  <img
                    src="@/assets/images/green-wheel.svg"
                    alt=""
                  />
                  <div class="request-description">
                    <p>Rear silencer for 2008 Volkswagen Multivan 3.2 petrol</p>
                    <span>Orlando - 2 minutes ago</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="single-request-wrapper">
                  <img
                    src="@/assets/images/green-wheel.svg"
                    alt=""
                  />
                  <div class="request-description">
                    <p>Rear silencer for 2008 Volkswagen Multivan 3.2 petrol</p>
                    <span>Orlando - 2 minutes ago</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="single-request-wrapper">
                  <img
                    src="@/assets/images/green-wheel.svg"
                    alt=""
                  />
                  <div class="request-description">
                    <p>Rear silencer for 2008 Volkswagen Multivan 3.2 petrol</p>
                    <span>Orlando - 2 minutes ago</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import { ref, onMounted } from "vue";
import MainLayout from "@/layouts/MainLayout.vue";

const sparePartsRequestsData = ref([]);

const fetchParts = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/all-spare-part-requests-data");
    const data = await response.json();
    sparePartsRequestsData.value = data;

    console.log(sparePartsRequestsData.value);
  } catch (error) {
    console.error("Error fetching parts:", error);
  }
};

onMounted(() => {
  fetchParts();
});
</script>

<style lang="sass" scoped>
@import "@/styles/pages/_all-spare-part-requests-page.scss"
</style>
