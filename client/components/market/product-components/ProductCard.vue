<script setup></script>
<template>
  <div class="product-card-wrapper">
    <NuxtImg
      src="https://smhttp-ssl-69129-sixityauto.nexcesscdn.net/media/catalog/product/cache/dfb666c93e4dbea62edd6ff1f507fb5b/3/0/3056108877image1.jpg"
    />
    <div class="product-description">
      <p>DENSO 210-1056 Alternator</p>
      <span class="sale-price">$256.90 </span>
      <span class="price">$366.99</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.product-card-wrapper {
  width: 200px;
  height: 350px;
  background-color: $gray-150;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 120px;
    height: 280px;
  }

  @media (max-width: 525px) {
    width: 220px;
    height: 350px;
    text-align: center;
  }

  &:hover {
    border: 1px solid $gray-100;
    border-radius: 5px;
  }

  .product-description {
    padding: 5px 10px;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
}
</style>
