<template>
  <div class="footer">
    <div class="content-wrapper footer-wrapper">
      <div class="main-footer-nav">
        <ul class="logo-container">
          <li class="footer-logo">MyNextParts</li>
          <li class="footer-project-description">
            <b>MyNextParts</b> is not responsible for the quality of parts and services provided by third parties.
          </li>
        </ul>
        <ul class="footer-navs-column">
          <li>About Us</li>
          <li>Blog</li>
          <li>FAQ</li>
          <li>Contact us</li>
        </ul>
        <ul class="footer-navs-column">
          <li>How it works</li>
          <li>Send request</li>
          <li>Suggest parts</li>
          <li>Careers</li>
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
          ><b>MyNextParts</b> is the most convenient way to get your car repaired.</span
        >
        <br />
        <span>
          Our mobile mechanics come to you and complete your car repair at your home or office. We make the process easy
          from start to finish by offering upfront pricing, online booking, after-hours support, and a full warranty.
          See Warranty
        </span>
        <ul>
          <li>
            <NuxtImg src="/images/social/facebook.svg" alt="facebook" />
          </li>
          <li>
            <NuxtImg src="/images/social/linkedin.svg" alt="linkedin" />
          </li>
          <li>
            <NuxtImg src="/images/social/x.svg" alt="x" />
          </li>
          <li>
            <NuxtImg src="/images/social/instagram.svg" alt="instagram" />
          </li>
          <li>
            <NuxtImg src="/images/social/youtube.svg" alt="youtube" />
          </li>
        </ul>
      </div>
      <div class="footer-rights">
        <span> © 2007-2023 "MyNextParts" All rights reserved. </span>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.footer {
  margin-top: 75px;
  background-color: $white;
  box-shadow: 0px 30px 85px 0px rgba(0, 0, 0, 0.25);

  .content-wrapper {
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .footer-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    ul {
      padding-inline-start: 0;
      margin-block-start: 0;
      margin-block-end: 0;

      li {
        list-style: none;
      }
    }

    .main-footer-nav {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 30px 0;

      @media (max-width: 740px) {
        flex-wrap: wrap;
      }

      .logo-container {
        width: 30%;

        @media (max-width: 740px) {
          width: 100%;
          padding-bottom: 20px;
          border-bottom: 1px solid $gray-100;
        }

        .footer-logo {
          font-size: 22px;
          font-weight: 600;
          margin: 10px 0;
        }

        .sellers-entrance {
          font-size: 18px;
          font-weight: 500;
          color: $gray-800;
          margin-bottom: 10px;

          a {
            color: $blue;
            margin-left: 5px;

            &:hover {
              opacity: 0.8;
            }
          }
        }

        .footer-project-description {
          color: $gray-800;
          font-size: 14px;
        }
      }

      .footer-navs-column {
        font-size: 14px;
        font-weight: 500;

        @media (max-width: 500px) {
          font-size: 14px;
        }

        @media (max-width: 390px) {
          width: 100%;
          border-bottom: 1px solid $gray-100;
          padding-bottom: 20px;
        }

        li {
          margin-top: 20px;
        }
      }
    }

    .bottom-footer-part {
      padding: 20px 0;
      border-top: 1px solid $gray-100;
      border-bottom: 1px solid $gray-100;
      display: flex;
      flex-direction: column;

      @media (max-width: 390px) {
        border-top: none;
        padding-top: 0;
      }

      .bototom-footer-header {
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
  }
}
</style>
