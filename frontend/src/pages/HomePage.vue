<template>
  <MainLayout>
    <div class="content-wrapper request-form-wrapper">
      <div class="request-form">
        <h3>
          Simple way <br />
          <span>to find your new car part</span>
        </h3>
        <div class="part-request-input">
          <div class="input-btn">
            <input type="text" class="part-naming" placeholder="Type which part you need" />
            <router-link :to="{ name: 'part-request' }" class="yellow-btn">Start Searching</router-link>
          </div>
          <div class="example">
            <span>For example: <span class="example-bold">Left headlight</span></span>
          </div>
        </div>
      </div>
      <div class="img-wrapper">
        <img src="@/assets/images/strange-car.png" alt="car" />
      </div>
    </div>

    <div class="content-wrapper how-it-works-wrapper">
      <span class="how-it-works-header">So how it work?</span>
      <div class="how-it-works">
        <div class="how-it-works-step">
          <span class="step-header">Submit a form</span>
          <span class="step-body">
            Submit a short request form with a list of required auto parts and information about your car.
          </span>
        </div>
        <div class="how-it-works-step">
          <span class="step-header">Receive answers</span>
          <span class="step-body"
            >After sending the request, you will almost immediately receive answers with quotations from the sellers of
            spare parts and auto shops that are registered in <b>MyCarParts</b>
          </span>
        </div>
        <div class="how-it-works-step">
          <span class="step-header">Choose the best</span>
          <span class="step-body"> Choose from the received offers the most profitable! </span>
        </div>
      </div>
    </div>

    <hr />

    <div class="content-wrapper">
      <div class="last-requests-table-wrapper">
        <div class="table-pre-header">
          <span>New requests for auto parts</span>
          <router-link :to="{ name: 'part-request' }">+send request</router-link>
        </div>
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
                  <img src="@/assets/images/green-wheel.svg" alt="" />
                </td>
                <td>Rear silencer for 2008 Volkswagen Multivan 3.2 petrol</td>
                <td>Orlando</td>
                <td>2 minutes ago</td>
              </tr>
              <tr>
                <td>
                  <img src="@/assets/images/green-wheel.svg" alt="" />
                </td>
                <td>Rear silencer for 2008 Volkswagen Multivan 3.2 petrol</td>
                <td>Orlando</td>
                <td>2 minutes ago</td>
              </tr>
              <tr>
                <td>
                  <img src="@/assets/images/green-wheel.svg" alt="" />
                </td>
                <td>Rear silencer for 2008 Volkswagen Multivan 3.2 petrol</td>
                <td>Orlando</td>
                <td>2 minutes ago</td>
              </tr>
              <tr>
                <td>
                  <img src="@/assets/images/green-wheel.svg" alt="" />
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
                <img src="@/assets/images/green-wheel.svg" alt="" />
                <div class="request-description">
                  <p>Rear silencer for 2008 Volkswagen Multivan 3.2 petrol</p>
                  <span>Orlando - 2 minutes ago</span>
                </div>
              </div>
            </li>
            <li>
              <div class="single-request-wrapper">
                <img src="@/assets/images/green-wheel.svg" alt="" />
                <div class="request-description">
                  <p>Rear silencer for 2008 Volkswagen Multivan 3.2 petrol</p>
                  <span>Orlando - 2 minutes ago</span>
                </div>
              </div>
            </li>
            <li>
              <div class="single-request-wrapper">
                <img src="@/assets/images/green-wheel.svg" alt="" />
                <div class="request-description">
                  <p>Rear silencer for 2008 Volkswagen Multivan 3.2 petrol</p>
                  <span>Orlando - 2 minutes ago</span>
                </div>
              </div>
            </li>
            <li>
              <div class="single-request-wrapper">
                <img src="@/assets/images/green-wheel.svg" alt="" />
                <div class="request-description">
                  <p>Rear silencer for 2008 Volkswagen Multivan 3.2 petrol</p>
                  <span>Orlando - 2 minutes ago</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="table-button-wrapper">
          <router-link :to="{ name: 'part-request' }" class="yellow-btn">Send your request</router-link>
        </div>

        <div class="info-for-sellers">
          <img src="@/assets/images/price.svg" alt="price" />
          <div class="info-for-sellers-right">
            <span class="red-seller-info">Do you sell auto parts?</span>
            <br />
            <span><a href="#">Sign up</a> and find hundreads of new buers daily!</span>
          </div>
        </div>
      </div>
    </div>

    <div class="content-wrapper simple-project-decription-wrapper">
      <p>
        <b>MyCarParts</b> is a service for finding auto parts, with which you can easily, quickly and cheaply buy auto
        parts in Ukraine - both new and used in online stores and at car yards.
      </p>
      <p>
        By <a href="#">sending a request</a> for auto parts through our website, you no longer need to think about where
        you can order and buy spare parts online, waste time on phone calls or trips to car markets, auto parts stores
        or auto disassembly. After sending the request, the sellers will contact you and offer their prices and terms of
        sale.
      </p>
      <p>
        We work with online auto parts and disassembly stores from all over Ukraine, from which you can buy any spare
        parts for foreign cars and domestic cars, in stock and on order. This gives you the opportunity to choose the
        seller with the lowest price. With our website you save time and money!
      </p>
    </div>

    <div class="content-wrapper call-to-action-wrapper">
      <div class="buyer-call-to-action">
        <img src="@/assets/images/buyer.png" alt="buyer" />
        <div class="buyer-text">
          <span class="action-card-header">Looking for a part?</span>
          <span class="action-card-body"
            >Just send a simple request for the part you need, hundreds of sellers will see your request and offer
            profitable options.
          </span>
          <span>
            <router-link :to="{ name: 'part-request' }" class="yellow-btn">Send your request</router-link>
          </span>
        </div>
      </div>
      <div class="sellesman-call-to-action">
        <div class="sallesman-text">
          <span class="action-card-header">Looking for a part?</span>
          <span class="action-card-body"
            >Just send a simple request for the part you need, hundreds of sellers will see your request and offer
            profitable options.
          </span>
          <span>
            <router-link :to="{ name: 'part-request' }" class="yellow-btn">Send your request</router-link>
          </span>
        </div>
        <img src="@/assets/images/sallesman.png" alt="sallesman" />
      </div>
    </div>

    <div class="content-wrapper user-reviews-wrapper">
      <span class="reviews-block-header">We unite!</span>
      <span class="user-reviews-description">Here, those who need spare parts find those who have them!</span>
      <div class="reviews-main-wrapper">
        <div class="single-review">
          <img src="@/assets/images/review_avatar.png" alt="review avatar" />
          <span class="review-header">Sultan Ibrahimovich</span>
          <span class="review-content">
            Some short description of expereince by servece. Some short description of expereince by servece.
          </span>
        </div>
        <div class="single-review">
          <img src="@/assets/images/review_avatar.png" alt="review avatar" />
          <span class="review-header">Sultan Ibrahimovich</span>
          <span class="review-content">
            Some short description of expereince by servece. Some short description of expereince by servece.
          </span>
        </div>
        <div class="single-review">
          <img src="@/assets/images/review_avatar.png" alt="review avatar" />
          <span class="review-header">Sultan Ibrahimovich</span>
          <span class="review-content">
            Some short description of expereince by servece. Some short description of expereince by servece.
          </span>
        </div>
        <div class="single-review">
          <img src="@/assets/images/review_avatar.png" alt="review avatar" />
          <span class="review-header">Sultan Ibrahimovich</span>
          <span class="review-content">
            Some short description of expereince by servece. Some short description of expereince by servece.
          </span>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
</script>

<style lang="scss" scoped>
@import "@/styles/pages/_home-page.scss";
</style>
