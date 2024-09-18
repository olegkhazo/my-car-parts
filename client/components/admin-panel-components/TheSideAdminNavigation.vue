<template>
  <div class="side-admin-navigation">
    <ul>
      <li>
        <NuxtLink to="/admin-panel/all-spare-part-requests">All part requests</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/admin-panel/my-requests">My suggestions</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/admin-panel/my-profile">My profile</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.side-admin-navigation {
  min-height: 80vh;
  width: 200px;
  padding: 40px 0 10px 30px;
  background-color: $gray-1000;

  @media (max-width: 850px) {
    width: 150px;
    padding: 40px 5px 10px 10px;
  }

  ul {
    li {
      margin-bottom: 25px;

      a {
        color: $white;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 1px;

        @media (max-width: 850px) {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
