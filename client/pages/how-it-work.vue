<script setup>
useHead({
  title: "MyNextParts - How It Work",
  meta: [
    {
      name: "description",
      content: "Step-by-step description of how the MyNextParts auto parts search service works",
    },
  ],
});
</script>

<template>
  <div class="content-wrapper">
    <h1>How It Work</h1>
    <div class="how-it-work-content">
      <div class="how-it-work-step">
        <div>
          <span class="step-number">1</span>
        </div>
        <span class="step-description">
          You fill out our <NuxtLink to="/part-request">online request form</NuxtLink> on the website, providing details
          about your car, the list of required auto parts, and your contact information
        </span>
      </div>

      <div class="how-it-work-step">
        <div>
          <span class="step-number">2</span>
        </div>
        <span class="step-description"
          >After submitting the form, your request is instantly forwarded to dozens of auto shops and companies
          registered in our system.</span
        >
      </div>

      <div class="how-it-work-step">
        <div>
          <span class="step-number">3</span>
        </div>
        <span class="step-description"
          >Sellers with the required part for sale will contact you, offering their price and delivery terms. It's up to
          you to choose the preferred seller.</span
        >
      </div>
    </div>
    <div class="video-wrapper">
      <h2>Watch a video with the part request tutorial</h2>
      <iframe
        src="https://www.youtube.com/embed/YFW1h5gvnrk?si=mkpIMFdrG-GZvbh6"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
    <span class="important">Important:</span>
    <span class="additional-explanation">
      Sending a request for auto parts through <b>MyNextParts</b> does not yet constitute placing an order. It simply
      provides you with the opportunity to quickly find a seller offering the best offer.</span
    >
    <div class="btn-wrapper">
      <NuxtLink to="/part-request" class="yellow-btn">Send Request</NuxtLink>
    </div>

    <div class="faq-link-wrapper">
      <p>
        <span class="question-sign">?</span>
        Still have a lot of questions? Check <NuxtLink to="/faq">FAQ</NuxtLink> page and read the answers of the most
        common of them.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.content-wrapper {
  min-height: 60vh;
  font-size: 18px;

  @media (max-width: 1024px) {
    font-size: 16px;
  }

  h1 {
    font-size: 50px;
    font-weight: 300;
    text-align: center;

    @media (max-width: 834px) {
      font-size: 35px;
    }

    @media (max-width: 382px) {
      font-size: 28px;
    }
  }

  .how-it-work-content {
    .how-it-work-step {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 40px;
      border-radius: 20px;
      margin-bottom: 20px;
      background-color: $blue-250;

      @media (max-width: 1024px) {
        padding: 20px;
      }

      @media (max-width: 768px) {
        flex-direction: column;
        padding: 30px 20px;
        text-align: center;
      }

      a {
        text-decoration: none;
        color: $blue;
        font-weight: 600;
      }

      .step-number {
        background-color: $yellow;
        color: $black;
        padding: 10px 17px;
        font-size: 20px;
        border-radius: 50%;

        @media (max-width: 402px) {
          padding: 10px 15px;
          font-size: 13px;
        }
      }

      .step-description {
        width: 93%;

        @media (max-width: 1024px) {
          width: 92%;
        }

        @media (max-width: 768px) {
          width: 100%;
          margin-top: 20px;
        }
      }
    }
  }

  .video-wrapper {
    text-align: center;
    margin-bottom: 50px;

    iframe {
      width: 560px;
      height: 315px;

      @media (max-width: 768px) {
        width: 506px;
        height: 284px;
      }

      @media (max-width: 550px) {
        width: 404px;
        height: 226px;
      }

      @media (max-width: 505px) {
        width: 283px;
        height: 158px;
      }
    }

    h2 {
      font-size: 40px;
      font-weight: 300;
      text-align: center;

      @media (max-width: 834px) {
        font-size: 28px;
      }

      @media (max-width: 382px) {
        font-size: 20px;
      }
    }
  }

  .btn-wrapper {
    text-align: center;
    padding: 20px 0;

    a {
      font-size: 14px;
      font-weight: 500;
    }
  }

  .faq-link-wrapper {
    margin-top: 50px;
    .question-sign {
      background-color: $blue;
      margin-right: 4px;
      color: $black;
      padding: 4px 13px;
      font-size: 20px;
      border-radius: 50%;

      @media (max-width: 402px) {
        padding: 3px 9px;
        font-size: 14px;
      }
    }

    a {
      text-decoration: none;
      color: $blue;
      font-weight: 600;
    }
  }

  .important {
    color: $red;
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
  .additional-explanation {
    font-size: 14px;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
}
</style>
