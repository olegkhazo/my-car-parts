<template>
  <div class="footer">
    <div class="content-wrapper footer-wrapper">
      <div class="main-footer-nav">
        <ul class="logo-container">
          <li class="footer-logo">MyCarParts</li>
          <li class="sellers-entrance">
            <img src="@/assets/images/login_black_24dp.svg" alt="login" />
            <router-link :to="{ path: '/' }" class="sellers-entrance-text">
              Sellers entrance
            </router-link>
          </li>
          <li class="footer-project-description">
            <b>MyCarParts</b> is not responsible for the quality of parts and
            services provided by third parties.
          </li>
        </ul>
        <ul class="footer-navs-column">
          <li>Careers</li>
          <li>Blog</li>
          <li>About Us</li>
          <li>FAQ</li>
        </ul>
        <ul class="footer-navs-column">
          <li>Send request</li>
          <li>How it works</li>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
        <ul class="footer-navs-column">
          <li>Terms</li>
          <li>Privacy</li>
          <li>Sitemap</li>
          <li>Do not sale my info (CA)</li>
        </ul>
      </div>
      <div class="bottom-footer-part">
        <span class="bototom-footer-header"
          ><b>MyCarParts</b> is the most convenient way to get your car
          repaired.</span
        >
        <br />
        <span>
          Our mobile mechanics come to you and complete your car repair at your
          home or office. We make the process easy from start to finish by
          offering upfront pricing, online booking, after-hours support, and a
          full warranty. See Warranty
        </span>
        <ul>
          <li>
            <img src="@/assets/images/social/facebook.svg" alt="facebook" />
          </li>
          <li>
            <img src="@/assets/images/social/linkedin.svg" alt="facebook" />
          </li>
          <li>
            <img src="@/assets/images/social/twitter.svg" alt="facebook" />
          </li>
          <li>
            <img src="@/assets/images/social/instagram.svg" alt="facebook" />
          </li>
          <li>
            <img src="@/assets/images/social/youtube.svg" alt="facebook" />
          </li>
        </ul>
      </div>
      <div class="footer-rights">
        <span> © 2007-2023 "MyCarParts" All rights reserved. </span>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "@/styles/components/_main-layout-footer.scss";
</style>
