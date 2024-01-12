<template>
  <div>
    <TheNavigation v-if="route.name !== 'admin-panel'" />

    <NuxtPage />

    <TheFooter />
  </div>
</template>

<script setup>
const route = useRoute();
</script>
