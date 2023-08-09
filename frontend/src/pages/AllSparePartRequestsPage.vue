<template>
  <MainLayout>
    <div class="content-wrapper">
      <h2>All User Requests</h2>
      <div class="last-requests-table-wrapper">
        <div class="table-pre-header"></div>
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Car part</th>
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
        <div class="last-requests-sm-screen-wrapper">
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
  </MainLayout>
</template>

<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
</script>

<style lang="sass" scoped>
@import "@/styles/pages/_all-spare-part-requests-page.scss"
</style>
