<template>
  <div class="request-sending-result">
    <div class="succesful-notification">
      <NuxtImg src="/images/checkmark.png" alt="green-checkmark" />
    </div>
    <h3>Congratulations, your request sending was successful!</h3>
    <div class="success-buttons-wrapper">
      <NuxtLink class="light-gray-btn" to="/">Home page</NuxtLink>
      <button class="gray-btn" @click="switchFormToAnotherStep(1)">
        Create new request
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.request-sending-result {
  .succesful-notification {
    display: flex;
    justify-content: center;

    img {
      width: 64px;
    }
  }

  h3 {
    font-size: 30px;
    font-weight: bold;
    text-align: center;

    @media (max-width: 834px) {
      font-size: 22px;
    }
  }

  .success-buttons-wrapper {
    display: flex;
    justify-content: space-around;

    @media (max-width: 427px) {
      flex-direction: column;

      .light-gray-btn {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
