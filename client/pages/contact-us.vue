<template>
  <div class="content-wrapper">
    <h1>Contuct Us</h1>
    <p>
      For any questions and suggestions write to us to this email please:
      <a href="mailto:o.zhuravko@gmail.com">o.zhuravko@gmail.com</a>
    </p>
  </div>
</template>

<script setup>
useHead({
  title: "MyCarParts App - Contact Us",
  meta: [
    {
      name: "description",
      content:
        "Contact page of MyCarParts App where users can find all allowed ways how to contact with the service team",
    },
  ],
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.content-wrapper {
  min-height: 60vh;

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

  font-size: 16px;

  a {
    text-decoration: none;
    color: $blue;
    font-weight: 600;
  }
}
</style>
