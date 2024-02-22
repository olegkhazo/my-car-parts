<template>
  <div class="content-wrapper">
    <div class="error-page-content">
      <h1>Account Activated</h1>
      <p>
        Congratulation! Your Account activated succesful. Now you can use your account and use the service to the
        fullest.
      </p>
      <div class="links-nav">
        <NuxtLink to="/part-request">Find Parts</NuxtLink>
        <NuxtLink to="/all-spare-part-requests">Suggest Your Parts</NuxtLink>
        <NuxtLink to="/how-it-work">How It Work</NuxtLink>
        <NuxtLink to="/">Home</NuxtLink>
      </div>
    </div>
    <div class="error-img-wrapper">
      <NuxtImg src="/images/shaking-hands.jpg" title="shaking-hands" />
    </div>
  </div>
  <TheFooter />
</template>

<script setup>
useHead({
  title: "MyNextParts - Success activation",
  meta: [
    {
      name: "Success activation account page",
      content:
        "Your Account activated succesful. Now you can use your mynextparts.com account and use the service to the fullest. Sell and buy car parts from your admin panel",
    },
  ],
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.content-wrapper {
  min-height: 60vh;
  font-size: 16px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1070px) {
    flex-direction: column;
    align-items: center;
  }
  .error-page-content {
    width: 45%;

    @media (max-width: 1070px) {
      width: 70%;
      text-align: center;
    }

    @media (max-width: 768px) {
      width: 100%;
      text-align: start;
    }

    h1 {
      font-size: 50px;
      font-weight: 300;
      margin-bottom: 10px;
    }

    p {
      font-size: 20px;
      font-weight: 300;
      color: $gray-800;
    }

    .links-nav {
      display: flex;
      justify-content: space-between;

      @media (max-width: 768px) {
        flex-direction: column;
      }

      a {
        text-decoration: none;
        color: $blue;
        font-weight: 500;

        @media (max-width: 768px) {
          font-weight: 400;
          margin-bottom: 10px;
        }
      }
    }
  }

  .error-img-wrapper {
    width: 45%;
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;

    @media (max-width: 1070px) {
      width: 100%;
      justify-content: center;
    }

    img {
      width: auto;
    }
  }
}
</style>
