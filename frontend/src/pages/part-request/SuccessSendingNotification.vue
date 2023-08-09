<template>
  <div class="request-sending-result">
    <h3>Congratulations, your request sending was successful!</h3>
    <div class="success-buttons-wrapper">
      <router-link
        class="light-gray-btn"
        to="/"
        >Home page</router-link
      >
      <button
        class="gray-btn"
        @click="switchFormToAnotherStep(1)"
      >
        Create new request
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { usePartRequestFormStore } from "@/stores";
import { storeToRefs } from "pinia";

const finalRequestData = ref({});
const { dataFromFirstFormStep, dataFromSecondFormStep, dataFromThirdFormStep } = storeToRefs(usePartRequestFormStore());

onMounted(() => {
  Object.assign(
    finalRequestData.value,
    dataFromFirstFormStep.value,
    dataFromSecondFormStep.value,
    dataFromThirdFormStep.value
  );

  async function addPartRequestRecordToTheTable() {
    console.log(JSON.stringify(finalRequestData.value));
    try {
      const response = await fetch("http://localhost:3000/api/create-part-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalRequestData.value),
      });

      if (response.ok) {
        console.log("Part created successfully");
      } else {
        console.error("Failed to create part");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  addPartRequestRecordToTheTable();
});
</script>

<style lang="scss" scoped>
@import "@/styles/pages/part-request/_success-sending-notification.scss";
</style>
