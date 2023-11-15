<template>
  <div>
    <div class="content-wrapper request-form-wrapper">
      <div class="request-form">
        <h3>
          Search for any auto parts<br />
          <span>in the USA</span>
        </h3>
        <div class="part-request-input">
          <div class="input-btn">
            <input
              v-model="dataFromFirstFormStep.part_name"
              type="text"
              class="part-naming"
              placeholder="Enter the name of the auto part"
            />
            <NuxtLink to="/part-request" class="yellow-btn">Start Searching</NuxtLink>
          </div>
          <div class="example">
            <span>For example: <span class="example-bold">Left headlight</span></span>
          </div>
        </div>
      </div>
      <div class="img-wrapper">
        <NuxtImg src="/images/strange-car.png" alt="car" />
      </div>
    </div>

    <div class="content-wrapper how-it-works-wrapper">
      <span class="how-it-works-header">DO YOU WANT TO FIND AND BUY SPARE PARTS QUICKLY?</span>
      <div class="how-it-works">
        <div class="how-it-works-step">
          <span class="step-header">Submit a form</span>
          <span class="step-body">
            <NuxtLink to="part-request" class="text-link">Submit</NuxtLink> a short request form, indicating the
            required auto part and information about your car.
          </span>
        </div>
        <div class="how-it-works-step">
          <span class="step-header">Receive answers</span>
          <span class="step-body"
            >After sending the request, you will almost immediately receive answers with quotations from the sellers of
            spare parts and auto shops that are registered in <b>MyNextParts</b>.
          </span>
        </div>
        <div class="how-it-works-step">
          <span class="step-header">Choose the best</span>
          <span class="step-body"> Choose from the received offers the most profitable! </span>
        </div>
      </div>
    </div>

    <hr />

    <div class="content-wrapper">
      <div class="last-requests-table-wrapper">
        <div class="table-pre-header">
          <span>New requests for auto parts</span>
          <NuxtLink to="/part-request">+send request</NuxtLink>
        </div>
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Car part description</th>
                <th>Area/Region</th>
                <th>Sent</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="green-wheel-img-wrapper">
                    <NuxtImg src="/images/green-wheel.svg" alt="" />
                  </div>
                </td>
                <td>Rear silencer for 2008 Volkswagen Multivan 3.2 petrol</td>
                <td>Orlando</td>
                <td>2 minutes ago</td>
              </tr>
              <tr>
                <td>
                  <div class="green-wheel-img-wrapper">
                    <NuxtImg src="/images/green-wheel.svg" alt="" />
                  </div>
                </td>
                <td>Rear silencer for 2008 Volkswagen Multivan 3.2 petrol</td>
                <td>Orlando</td>
                <td>2 minutes ago</td>
              </tr>
              <tr>
                <td>
                  <div class="green-wheel-img-wrapper">
                    <NuxtImg src="/images/green-wheel.svg" alt="" />
                  </div>
                </td>
                <td>Rear silencer for 2008 Volkswagen Multivan 3.2 petrol</td>
                <td>Orlando</td>
                <td>2 minutes ago</td>
              </tr>
              <tr>
                <td>
                  <div class="green-wheel-img-wrapper">
                    <NuxtImg src="/images/green-wheel.svg" alt="" />
                  </div>
                </td>
                <td>Rear silencer for 2008 Volkswagen Multivan 3.2 petrol</td>
                <td>Orlando</td>
                <td>2 minutes ago</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="last-requests-sm-screen-wrapper">
          <ul>
            <li>
              <div class="single-request-wrapper">
                <NuxtImg src="/images/green-wheel.svg" alt="" />
                <div class="request-description">
                  <p>Rear silencer for 2008 Volkswagen Multivan 3.2 petrol</p>
                  <span>Orlando - 2 minutes ago</span>
                </div>
              </div>
            </li>
            <li>
              <div class="single-request-wrapper">
                <NuxtImg src="/images/green-wheel.svg" alt="" />
                <div class="request-description">
                  <p>Rear silencer for 2008 Volkswagen Multivan 3.2 petrol</p>
                  <span>Orlando - 2 minutes ago</span>
                </div>
              </div>
            </li>
            <li>
              <div class="single-request-wrapper">
                <NuxtImg src="/images/green-wheel.svg" alt="" />
                <div class="request-description">
                  <p>Rear silencer for 2008 Volkswagen Multivan 3.2 petrol</p>
                  <span>Orlando - 2 minutes ago</span>
                </div>
              </div>
            </li>
            <li>
              <div class="single-request-wrapper">
                <NuxtImg src="/images/green-wheel.svg" alt="" />
                <div class="request-description">
                  <p>Rear silencer for 2008 Volkswagen Multivan 3.2 petrol</p>
                  <span>Orlando - 2 minutes ago</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="table-button-wrapper">
          <NuxtLink to="/part-request" class="yellow-btn">Send Your Request</NuxtLink>
        </div>

        <div class="info-for-sellers">
          <NuxtImg src="/images/price.svg" alt="price" class="price-label-img" />
          <div class="info-for-sellers-right">
            <span class="red-seller-info"> Do you sell auto parts?</span>
            <br />
            <span
              ><NuxtLink to="/all-spare-part-requests">Suggest</NuxtLink> your one or more variants of hundreds
              buyers!</span
            >
          </div>
        </div>
      </div>
    </div>

    <div class="content-wrapper simple-project-decription-wrapper">
      <p>
        <b>MyNextParts</b> is a service dedicated to helping you find auto parts effortlessly, swiftly, and affordably
        in the USA. Whether you're in search of new or used parts, we connect you with online stores and car yards.
      </p>
      <p>
        By <NuxtLink to="/part-request">submiting a request</NuxtLink> for auto parts through our website, you no longer
        need to worry about where to order spare parts online, spend time on phone calls, or make trips to car markets,
        auto parts stores, or auto dismantlers. Once your request is sent, sellers will reach out to you, providing
        their prices and terms of sale.
      </p>
      <p>
        We collaborate with online auto parts retailers and dismantling stores across the USA, offering you access to a
        wide range of spare parts in stock and available for order. This allows you to choose a seller with the most
        competitive prices. With our service, you not only save time but also cut down on costs!
      </p>
    </div>

    <div class="content-wrapper call-to-action-wrapper">
      <div class="buyer-call-to-action">
        <NuxtImg src="/images/buyer.png" alt="buyer" />
        <div class="buyer-text">
          <span class="action-card-header">In search of specific parts? </span>
          <span class="action-card-body"
            >Simply submit a request for the spare parts you need, and your inquiry will be visible to hundreds of
            sellers who will provide you with lucrative options.
          </span>
          <span>
            <NuxtLink to="/part-request" class="yellow-btn">Send Request</NuxtLink>
          </span>
        </div>
      </div>
      <div class="sellesman-call-to-action">
        <div class="sallesman-text">
          <span class="action-card-header">Do you have parts to sell?</span>
          <span class="action-card-body"
            >Review all buyer requests and propose your offerings. Many people are actively searching for the products
            you have!
          </span>
          <span>
            <NuxtLink to="/part-request" class="yellow-btn">Send An Offer</NuxtLink>
          </span>
        </div>
        <NuxtImg src="/images/sallesman.png" alt="sallesman" />
      </div>
    </div>

    <div class="content-wrapper user-reviews-wrapper">
      <span class="reviews-block-header">We bring together!</span>
      <span class="user-reviews-description">Connecting those in need with those who have spare parts.</span>
      <div class="reviews-main-wrapper">
        <div class="single-review">
          <NuxtImg src="/images/review_avatar.png" alt="review avatar" />
          <span class="review-header">Arash Singh</span>
          <span class="review-car-model">Dodge Challenger</span>
          <span class="review-content">
            "I needed a belt and rollers for my Dodge Challenger, and a friend recommended the MyNextParts service. The
            simplicity of the search was crucial for me—I filled out a form and started receiving offers from sellers
            via email."
          </span>
        </div>
        <div class="single-review">
          <NuxtImg src="/images/li_meili.png" alt="review avatar" />
          <span class="review-header">Li Meili</span>
          <span class="review-car-model">Mazda CX-5</span>
          <span class="review-content">
            "MyNextParts was incredibly helpful. Quick search, big savings compared to my last spare part purchase.
            Highly recommend!"
          </span>
        </div>
        <div class="single-review">
          <NuxtImg src="/images/lukas_m.png" alt="review avatar" />
          <span class="review-header">Lukas M.</span>
          <span class="review-car-model">Toyota Camry</span>
          <span class="review-content">
            "Amazing service, so simple to use and hassle-free! I got a WOF and service done super fast, and I found
            parts for my Toyota Camry at the best price. Highly recommend!"
          </span>
        </div>
        <div class="single-review">
          <NuxtImg src="/images/lenny_j.png" alt="review avatar" />
          <span class="review-header">Lenny Johnson</span>
          <span class="review-car-model">Dodge Ram 2500</span>
          <span class="review-content">
            "Found all the chassis parts for my Dodge in just half a day. I simply filled out the form and it took me
            only 5 minutes. It's the best service I've ever used! I didn't have to disrupt my routine at all."
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "MyNextParts - Easy search for car parts",
  meta: [
    {
      name: "description",
      content: "Home page of a service for searching and selling car parts, both new and used",
    },
  ],
});
const { dataFromFirstFormStep } = storeToRefs(usePartRequestFormStore());
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

hr {
  border: 1px solid $gray-100;
  margin-top: 60px;

  @media (max-width: 1020px) {
    margin-top: 30px;
  }
}

.request-form-wrapper {
  display: flex;

  @media (max-width: 1020px) {
    flex-direction: column;
    align-items: center;
  }

  .request-form {
    width: 50%;
    padding: 10px 0;

    @media (max-width: 1020px) {
      text-align: center;
      width: 460px;
      padding: 10px 0px;
    }

    @media (max-width: 500px) {
      width: 100%;
    }

    h3 {
      font-weight: 300;
      font-size: 42px;
      line-height: 1;

      @media (max-width: 500px) {
        font-size: 35px;
        line-height: 2.5rem;
      }

      @media (max-width: 400px) {
        font-size: 30px;
        line-height: 2.5rem;
      }

      span {
        font-weight: 600;
        font-size: 40px;

        @media (max-width: 500px) {
          font-size: 30px;
        }
      }
    }

    .part-request-input {
      background-color: $gray-100;
      padding: 15px 15px 20px 15px;
      border-radius: 5px;
      margin-top: -20px;

      .input-btn {
        display: flex;
        justify-content: space-between;

        @media (max-width: 500px) {
          flex-direction: column;
        }

        .part-naming {
          border: none;
          outline: none;
          border-radius: 5px;
          padding: 5px;
          width: 64%;

          @media (max-width: 500px) {
            width: 97%;
            padding: 10px 5px;
          }

          &::placeholder {
            color: $gray-800;
            font-size: 15px;
            font-weight: 300;
          }
        }

        .yellow-btn {
          padding: 10px 17px;
          font-size: 15px;
          font-weight: 500;

          @media (max-width: 500px) {
            margin-top: 10px;
          }
        }
      }
    }

    .example {
      font-size: 15px;
      margin-top: 5px;

      @media (max-width: 1020px) {
        text-align: left;
      }

      .example-bold {
        font-weight: 500;
      }
    }
  }

  .img-wrapper {
    width: 50%;
    box-sizing: border-box;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

    @media (max-width: 1080px) {
      width: 45%;
    }

    @media (max-width: 1020px) {
      padding: 0;
      width: 100%;
      align-items: center;
      justify-content: center;
    }

    img {
      width: 90%;

      @media (max-width: 1020px) {
        width: 50%;
      }

      @media (max-width: 796px) {
        width: 65%;
      }

      @media (max-width: 580px) {
        width: 80%;
      }

      @media (max-width: 500px) {
        width: 90%;
      }
    }
  }
}

.how-it-works-wrapper {
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  @media (max-width: 768px) {
    margin-top: 10px;
  }

  .how-it-works-header {
    text-align: center;
    font-weight: 400;
    font-size: 32px;

    @media (max-width: 700px) {
      font-size: 28px;
    }

    @media (max-width: 500px) {
      font-size: 24px;
    }

    @media (max-width: 400px) {
      font-size: 22px;
    }
  }

  .how-it-works {
    display: flex;
    justify-content: space-between;
    margin-top: 25px;

    @media (max-width: 1020px) {
      flex-direction: column;
      align-items: center;
    }

    span {
      display: block;
      text-align: center;
      width: 300px;
    }

    .step-header {
      font-size: 22px;
      font-weight: 500;
      margin-bottom: 15px;

      @media (max-width: 1020px) {
        margin-bottom: 10px;
      }

      @media (max-width: 500px) {
        font-size: 18px;
      }
    }

    .step-body {
      font-size: 16px;
      font-weight: 400px;
      color: $gray-800;

      @media (max-width: 1020px) {
        margin-bottom: 20px;
      }

      @media (max-width: 500px) {
        font-size: 16px;
      }

      .text-link {
        text-decoration: underline;
      }
    }
  }
}

.last-requests-table-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  position: relative;

  .table-pre-header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: 20px;
    font-weight: 400;

    span {
      color: $black;

      @media (max-width: 720px) {
        font-weight: 500;
      }
    }

    a {
      color: $blue;
      text-decoration: none;

      @media (max-width: 375px) {
        display: none;
      }
    }

    @media (max-width: 1020px) {
      font-size: 16px;
    }
  }

  .table-wrapper {
    width: 100%;
    padding-top: 11px;

    @media (max-width: 720px) {
      display: none;
    }
  }

  .last-requests-sm-screen-wrapper {
    width: 100%;
    padding-top: 10px;
    display: none;

    @media (max-width: 720px) {
      display: block;
    }

    ul {
      padding-inline-start: 0;
      margin-block-start: 0;
      margin-block-end: 0;

      li {
        list-style: none;
        padding: 5px 0;
        border-bottom: 1px solid $gray-100;

        .single-request-wrapper {
          display: flex;
          align-items: flex-start;

          .request-description {
            margin-left: 10px;

            p {
              margin: 0;
            }

            span {
              font-size: 12px;
              color: $gray-800;
            }
          }
        }
      }
    }
  }

  .table-button-wrapper {
    margin-top: 40px;

    .yellow-btn {
      font-weight: 500;
    }
  }

  .info-for-sellers {
    width: 100%;
    display: flex;
    margin-top: 50px;

    .price-label-img {
      width: 45px;
    }

    .info-for-sellers-right {
      margin-left: 20px;

      .red-seller-info {
        color: $red;
        font-weight: 600;
      }

      a {
        text-decoration: none;
        color: $blue;
        font-weight: 600;
      }
    }
  }
}

.simple-project-decription-wrapper {
  background-color: $blue-250;
  margin-top: 65px;
  font-size: 18px;
  color: $gray-800;
  padding: 50px 25px;
  border-radius: 10px;

  @media (max-width: 1020px) {
    font-size: 16px;
    padding: 40px 15px;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: $blue;
    font-weight: 600;
  }
}

.call-to-action-wrapper {
  margin-top: 80px;

  img {
    width: 50%;

    @media (max-width: 1020px) {
      width: 100%;
    }
  }

  .buyer-call-to-action {
    display: flex;

    img {
      width: 100%;
    }

    @media (max-width: 1020px) {
      flex-direction: column;
    }

    .buyer-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 20px 0 60px;

      @media (max-width: 1020px) {
        padding: 0;
        align-items: center;
        text-align: center;
      }
    }
  }

  .sellesman-call-to-action {
    display: flex;

    img {
      width: 100%;
    }

    @media (max-width: 1020px) {
      margin-top: 40px;
      flex-direction: column-reverse;
    }

    .sallesman-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 85px 0 0;

      @media (max-width: 1020px) {
        padding: 0;
        align-items: center;
        text-align: center;
      }
    }
  }

  .action-card-header {
    font-weight: 500;
    font-size: 40px;

    @media (max-width: 500px) {
      font-size: 35px;
    }

    @media (max-width: 350px) {
      font-size: 30px;
    }
  }

  .action-card-body {
    font-size: 16px;
    color: $gray-800;
    margin: 10px 0 30px 0;

    @media (max-width: 1020px) {
      font-size: 14px;
    }
  }

  .yellow-btn {
    font-weight: 500;
  }
}

.user-reviews-wrapper {
  background-color: $gray-300;
  margin-top: 65px;
  color: $gray-800;
  padding: 50px 25px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1020px) {
    font-size: 16px;
    padding: 40px 15px 20px 15px;
  }

  .reviews-block-header {
    font-weight: 500;
    font-size: 40px;
    color: $black;

    @media (max-width: 500px) {
      font-size: 35px;
    }

    @media (max-width: 350px) {
      font-size: 25px;
      text-align: center;
    }
  }

  .user-reviews-description {
    text-align: center;
  }

  .reviews-main-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 60px;

    @media (max-width: 1020px) {
      flex-wrap: wrap;
    }

    .single-review {
      width: 220px;
      padding: 30px 5px;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      background-color: $white;

      @media (max-width: 1020px) {
        margin-bottom: 30px;
        width: 45%;
      }

      @media (max-width: 500px) {
        margin-bottom: 30px;
        width: 95%;
      }

      .review-header {
        margin: 15px 0 0 0;
        color: $black;
        font-weight: 500;
      }

      .review-car-model {
        font-size: 12px;
        color: $black;
        font-style: italic;
        margin-bottom: 10px;
      }

      .review-content {
        width: 85%;
      }

      img {
        width: 100px;
      }
    }
  }
}
</style>
