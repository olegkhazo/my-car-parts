<template>
  <div class="footer">
    <div class="content-wrapper footer-wrapper">
      <div class="main-footer-nav">
        <ul class="logo-container">
          <li class="footer-logo">MyNextParts</li>
          <li class="footer-project-description">
            <b>MyNextParts</b> is not responsible for the quality of third-party parts and services.
          </li>
        </ul>
        <ul class="footer-navs-column">
          <li>
            <NuxtLink to="/about-us">About Us</NuxtLink>
          </li>
          <!-- <li>
            <NuxtLink to="/blog">Blog</NuxtLink>
          </li> -->
          <li>
            <NuxtLink to="/faq">FAQ</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact-us">Contact us</NuxtLink>
          </li>
        </ul>
        <ul class="footer-navs-column">
          <li>
            <NuxtLink to="/how-it-work">How it work</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/part-request"> Send request </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/all-spare-part-requests"> Suggest parts </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/careers">Careers</NuxtLink>
          </li>
        </ul>
        <ul class="footer-navs-column">
          <li>
            <NuxtLink to="/terms">Terms</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/privacy-policy">Privacy</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/do-not-sale-info">Do not sale my info (CA)</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="bottom-footer-part">
        <span class="bototom-footer-header"
          ><b>MyNextParts</b> offers the utmost convenience in acquiring your next car parts.</span
        >
        <span>
          Simply submit a request by filling out a straightforward form, and hundreds of sellers will see your needs!
        </span>
        <ul>
          <li>
            <NuxtImg src="/images/social/facebook.svg" title="facebook" />
          </li>
          <li>
            <NuxtImg src="/images/social/linkedin.svg" title="linkedin" />
          </li>
          <li>
            <NuxtImg src="/images/social/x.svg" title="x" />
          </li>
          <li>
            <NuxtImg src="/images/social/instagram.svg" title="instagram" />
          </li>
          <li>
            <NuxtImg src="/images/social/youtube.svg" title="youtube" />
          </li>
        </ul>
      </div>
      <div class="footer-rights">
        <span> © 2022-2023 "MyNextParts" All rights reserved. </span>
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
          margin: 10px 0 0 0;
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
          font-weight: 300;
          font-size: 12px;
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
      width: 100%;

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
