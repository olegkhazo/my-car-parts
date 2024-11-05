<script setup>
const props = defineProps({
  url: String,
});

function removeDashes(str) {
  return str.replace(/-/g, " ");
}

const formattedUrl = computed(() => removeDashes(props.url));
</script>

<template>
  <div class="bread-crumbs">
    <a href="/market">Home</a>
    <NuxtImg class="bread-crumbs-arrow" src="/images/bread-crumbs-arrow.svg" title="arrow" />
    <a :href="`/${props.url}`">{{ formattedUrl }}</a>
  </div>
</template>

<style lang="scss" scoped>
.bread-crumbs {
  display: flex;

  .bread-crumbs-arrow {
    width: 8px;
    margin: 0 5px;
  }
}
</style>
