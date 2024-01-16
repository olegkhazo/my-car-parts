<template>
  <div class="side-admin-navigation">
    <ul>
      <li>
        <NuxtLink to="/">All part requests</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/">My suggestions</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/">Answers</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/">Profile</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.side-admin-navigation {
  min-height: 80vh;
  width: 200px;
  padding: 40px 0 10px 30px;
  background-color: $gray-1000;

  ul {
    li {
      margin-bottom: 25px;

      a {
        color: $white;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 1px;
      }
    }
  }
}
</style>
