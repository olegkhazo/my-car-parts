import type { imgProps } from '@nuxt/image/dist/runtime/components/nuxt-img'; import type { imgProps } from
'@nuxt/image/dist/runtime/components/nuxt-img';
<template>
  <div class="request-sending-result">
    <div class="succesful-notification">
      <NuxtImg src="images/checkmark.png" title="green-checkmark" />
    </div>
    <h3>{{ props.data.header }}</h3>
    <div class="success-buttons-wrapper">
      <NuxtLink class="light-gray-btn" to="/">Home page</NuxtLink>
      <button v-if="props.data.typeOfRequest === 'part-request'" class="gray-btn" @click="switchFormToAnotherStep(1)">
        Create new request
      </button>
      <NuxtLink
        v-if="props.data.typeOfRequest === 'offer'"
        to="/all-spare-part-requests"
        class="back-button xl-green-btn"
      >
        Back to all requests
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>

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
