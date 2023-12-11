<template>
  <div>
    <TheNavigation />

    <NuxtPage />

    <TheFooter />
  </div>
</template>

<script setup>
import posthog from "posthog-js";

posthog.init("phc_WDTGC09yj0oPOYDgvFnWRC46QuJMzRpKJnCCndeJskW", { api_host: "https://eu.posthog.com" });
</script>
