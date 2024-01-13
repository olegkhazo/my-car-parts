<template>
  <div>
    <TheAdminPanelHeader />

    <div>
      <slot />
    </div>

    <div class="admin-footer">
      <span class="admin-footer-header"
        ><b>MyNextParts</b> offers the utmost convenience in acquiring your next car parts.</span
      >
      <span>
        Simply submit a request by filling out a straightforward form, and hundreds of sellers will see your needs!
      </span>
      <ul>
        <li>
          <NuxtLink to="https://www.facebook.com/mynextparts" target="_blank">
            <NuxtImg src="/images/social/facebook.svg" title="facebook" />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="https://www.linkedin.com/company/mynextparts" target="_blank">
            <NuxtImg src="/images/social/linkedin.svg" title="linkedin" />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="https://twitter.com/mynextparts" target="_blank">
            <NuxtImg src="/images/social/x.svg" title="x" />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="https://www.instagram.com/mynextparts" target="_blank">
            <NuxtImg src="/images/social/instagram.svg" title="instagram" />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="https://www.youtube.com/channel/UCstXDE9fGYmqKiYqttW5tOw" target="_blank">
            <NuxtImg src="/images/social/youtube.svg" title="youtube" />
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div class="footer-rights">
      <span> © 2022-2023 "MyNextParts" All rights reserved. </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.admin-footer {
  padding: 20px 0;
  border-top: 1px solid $gray-100;
  border-bottom: 1px solid $gray-100;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 390px) {
    border-top: none;
    padding-top: 0;
  }

  .admin-footer-header {
    font-weight: 500;
  }

  ul {
    display: flex;
    margin-top: 15px;

    li {
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
      &:not(:first-child) {
        margin-left: 15px;
      }

      img {
        width: 30px;
      }
    }
  }
}
.footer-rights {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 5px 0 40px 0;
}
</style>
