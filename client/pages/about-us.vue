<template>
  <div class="content-wrapper">
    <h1>About Us</h1>

    <div class="simple-project-decription-wrapper">
      <p>
        <b>MyNextParts</b> is a service committed to assisting you in effortlessly, promptly, and affordably finding
        auto parts in the USA. Whether you're in need of new or used parts, we link you with online stores and car
        yards.
      </p>
      <p>
        By <NuxtLink to="/part-request">submiting a request</NuxtLink> for auto parts through our website, you can
        eliminate concerns about where to order spare parts online, save time on phone calls, and bypass visits to car
        markets, auto parts stores, or dismantlers. Once your request is sent, sellers will contact you, presenting
        their prices and sales terms.
      </p>
      <p>
        We collaborate with online auto parts retailers and dismantling stores nationwide, providing you access to an
        extensive range of spare parts in stock and available for order. This empowers you to select a seller offering
        the most competitive prices. Through our service, you not only save time but also reduce costs!
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

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

.simple-project-decription-wrapper {
  font-size: 16px;

  a {
    text-decoration: none;
    color: $blue;
    font-weight: 600;
  }
}
</style>
