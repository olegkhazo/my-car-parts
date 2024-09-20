<script setup>
useHead({
  title: "MyNextParts - FAQ",
  meta: [
    {
      name: "description",
      content: "FAQ page where users can find the most common questions and answers for them",
    },
  ],
});
</script>

<template>
  <div class="content-wrapper">
    <h1>FAQ</h1>
    <h2>Check all answers for the most common questions!</h2>
    <div class="single-question">
      <p>How quickly will I receive a response from the sellers?</p>
      <span
        >Responses with offers from auto parts sellers usually arrive within an hour, but sometimes it may take up to 24
        hours. It depends on the day of the week when the request was submitted. For example, if you sent the request on
        the weekend, some offers may come immediately, while others may arrive on the next working day after the
        weekend.</span
      >
    </div>
    <div class="single-question">
      <p>Is it possible to submit a request for multiple parts at once?</p>
      <span
        >At the moment, this option is not available, but our team is actively working on implementing such
        functionality.</span
      >
    </div>
    <div class="single-question">
      <p>Can I place an order for parts with you?</p>
      <span
        >Unfortunately, no. <b>MyNextParts</b> service does not engage in trading auto parts. We act as an intermediary
        between the buyer and the seller.</span
      >
    </div>

    <div class="single-question">
      <p>I want to sell my car for parts. Can I do this through your website?</p>
      <span
        >Unfortunately, no. Only companies or individual entrepreneurs engaged in wholesale or retail trade of auto
        parts can register as sellers on our website.</span
      >
    </div>

    <div class="single-question">
      <p>How long does it take for the parts to be delivered?</p>
      <span
        >As our company merely provides an online platform for sellers and buyers, delivery details should be confirmed
        directly with the seller you've engaged for the purchase.</span
      >
    </div>

    <div class="single-question">
      <p>What is a VIN code? Where can it be found?</p>
      <span>- The VIN code can be found on the front part of the car's instrument panel.</span>
      <br />
      <span>- The VIN code may be indicated on the end part of the driver's door near the lock.</span>
      <br />
      <span>- You can find the VIN code (chassis number) in the technical passport of your car.</span>
    </div>

    <div class="how-it-work-link-wrapper">
      <p>
        <span class="question-sign">!</span>
        Also you can check <NuxtLink to="/how-it-work">How It Work</NuxtLink> page and read more about work process with
        <b>MyNextParts</b> service.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.content-wrapper {
  min-height: 60vh;
  font-size: 16px;

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

  a {
    text-decoration: none;
    color: $blue;
    font-weight: 600;
  }

  .single-question {
    border-bottom: 1px solid $gray-100;
    padding-bottom: 20px;

    p {
      font-weight: 500;

      @media (max-width: 768px) {
        font-size: 14px;
      }
    }

    span {
      font-weight: 300;

      @media (max-width: 768px) {
        font-size: 12px;
        font-weight: 400;
      }
    }
  }

  .how-it-work-link-wrapper {
    margin-top: 50px;
    .question-sign {
      background-color: $blue;
      margin-right: 4px;
      color: $black;
      padding: 4px 14px;
      font-size: 20px;
      border-radius: 50%;

      @media (max-width: 402px) {
        padding: 3px 10px;
        font-size: 14px;
      }
    }
  }
}
</style>
