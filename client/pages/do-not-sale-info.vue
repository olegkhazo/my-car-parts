<script setup>
useHead({
  title: "MyNextParts - Do not sale my info (CA)",
  meta: [
    {
      name: "description",
      content: " Do not sale my info (CA) of MyNextParts service",
    },
  ],
});
</script>

<template>
  <div class="content-wrapper">
    <div>
      <h2>Do Not Sell My Info</h2>
      <p>
        Welcome to the "Do Not Sell My Info" page of MyNextParts. Here, we respect your privacy choices and offer you
        the option to exercise your rights under the California Consumer Privacy Act (CCPA).
      </p>
      <p>
        <strong>What is "Do Not Sell My Info"?</strong> The "Do Not Sell My Info" option allows California residents to
        opt-out of the sale of their personal information to third parties.
      </p>
      <p>
        <strong>Your Rights:</strong> If you are a California resident, you have the right to instruct us not to sell
        your personal information. This includes details such as your name, contact information, and information related
        to your parts requests.
      </p>
      <p>
        <strong>How to Opt-Out:</strong> To exercise your "Do Not Sell My Info" right, please right to us on email
        address below. We will ensure that your personal information is not sold to third parties for monetary or other
        valuable consideration.
      </p>
      <a href="mailto:o.zhuravko@gmail.com">o.zhuravko@gmail.com</a>
      <p>
        <strong>Important Note:</strong> Please be aware that opting out of the sale of your information does not affect
        our ability to collect or share your information for other purposes, such as providing our services or improving
        our platform.
      </p>
      <p>
        <strong>Contact Us:</strong> If you have any questions or concerns regarding your privacy or the "Do Not Sell My
        Info" option, please contact us at <a href="mailto:o.zhuravko@gmail.com">o.zhuravko@gmail.com</a>.
      </p>
      <p>Thank you for trusting MyNextParts with your privacy preferences.</p>
    </div>
    <br />
    <NuxtLink class="light-gray-btn" to="/">Home Page</NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.content-wrapper {
  min-height: 60vh;

  a:not(.light-gray-btn) {
    text-decoration: none;
    color: $blue;
    font-weight: 600;
  }
}
</style>
