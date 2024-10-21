<script setup>
const props = defineProps({
  text: String,
  bgColor: String,
  textColor: String,
});
</script>

<template>
  <span :style="{ backgroundColor: props.bgColor, color: props.textColor }">
    {{ props.text }}
  </span>
</template>

<style lang="scss" scoped>
span {
  padding: 2px 4px;
  border-radius: 5px;
  background: opacity(0.9);
}
</style>
