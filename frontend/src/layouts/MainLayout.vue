<template>
  <MainLayoutHeader />
  <div>
    <slot></slot>
  </div>
  <MainLayoutFooter />
</template>

<script setup>
import MainLayoutHeader from "@/components/MainLayoutHeader";
import MainLayoutFooter from "@/components/MainLayoutFooter";
</script>
