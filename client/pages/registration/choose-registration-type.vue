<template>
  <div class="content-wrapper">
    <div class="registration-type-window">
      <h1>Join us as a buyer or company</h1>
      <div class="registration-options-wrapper">
        <NuxtLink to="/registration/client-registration" class="registration-single-option">
          <NuxtImg src="/images/shopping-basket.svg" title="shopping-basket" />
          <h3>I am a buyer, looking for car parts</h3>
        </NuxtLink>
        <NuxtLink to="/registration/company-registration" class="registration-single-option sales-option">
          <NuxtImg src="/images/sales.svg" title="sales" />
          <h3>I sell car parts, and I want to increase sales</h3>
        </NuxtLink>
      </div>

      <p>Already have an account? <NuxtLink to="/">Log In</NuxtLink></p>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "MyNextParts - Choose type of registration",
  meta: [
    {
      name: "Choose type of registration",
      content: "Choose type of registration on mynextparts.com. Choose you need to buy or sell car parts",
    },
  ],
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.registration-type-window {
  margin: 60px auto 100px auto;
  padding: 30px 60px 10px 60px;
  border: 2px solid $gray-100;
  border-radius: 15px;
  position: relative;
  text-align: center;
  width: 690px;

  @media (max-width: 768px) {
    margin: 40px auto 0 auto;
    padding: 0;
    width: 100%;
    border: none;
  }

  h1 {
    font-size: 40px;
    margin-bottom: 40px;
    font-weight: 300;
    text-align: center;

    @media (max-width: 834px) {
      font-size: 28px;
    }

    @media (max-width: 768px) {
      margin: 0 auto 20px auto;
    }

    @media (max-width: 382px) {
      font-size: 24px;
    }
  }

  p {
    margin-top: 60px;

    @media (max-width: 768px) {
      margin-top: 20px;
    }
    a {
      text-decoration: none;
      color: $blue;
      font-weight: 600;
    }
  }

  .registration-options-wrapper {
    display: flex;
    justify-content: space-around;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    .registration-single-option {
      width: 240px;
      padding: 30px 15px 15px 15px;
      border: 2px solid $gray-100;
      border-radius: 15px;
      cursor: pointer;

      @media (max-width: 768px) {
        padding: 15px 10px 0 10px;
        width: 100%;
      }

      h3 {
        font-size: 18px;
        margin-top: 15px;

        @media (max-width: 768px) {
          font-size: 16px;
        }
      }

      &:hover {
        border: 2px solid $green;
      }
    }

    .sales-option {
      @media (max-width: 768px) {
        margin-top: 20px;
      }
    }
  }
}
</style>
