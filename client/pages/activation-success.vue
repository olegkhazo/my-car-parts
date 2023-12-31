<template>
  <div class="content-wrapper activating-screen">
    <h1>Account Activated</h1>
    <div>
      <p>
        Congratulation! Your Account activated succesful. Now you can use your account and use the service to the
        fullest.
      </p>
    </div>
  </div>
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

.activating-screen {
  padding: 0 0 20vh 0;
  h1 {
    font-size: 40px;
    margin-bottom: 40px;
    font-weight: 300;
    text-align: center;

    @media (max-width: 834px) {
      font-size: 28px;
    }

    @media (max-width: 768px) {
      margin: 20px auto;
    }

    @media (max-width: 382px) {
      font-size: 24px;
    }
  }

  p {
    margin-top: 30px;
    font-size: 20px;

    @media (max-width: 768px) {
      margin-top: 20px;
    }

    @media (max-width: 382px) {
      font-size: 18px;
    }
    a {
      text-decoration: none;
      color: $blue;
      font-weight: 600;
    }
  }
}
</style>
