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
import { getTimeAgo } from "@/utils";
import { API_URL } from "@/utils/constants";

const firstTenRequests = ref(null);

const { data: allRequests, error } = await useFetch(API_URL + "all-spare-part-requests-data");

if (allRequests.value) {
  allRequests.value.sort((a, b) => {
    // Compare the created_date in descending order
    return new Date(b.created_date) - new Date(a.created_date);
  });

  firstTenRequests.value = allRequests.value.slice(0, 10);
} else {
  // should to think how better to show errors
  console.log("something wrong:" + error.value);
}
</script>

<template>
  <div class="content-wrapper request-form-wrapper">
    <div class="request-form">
      <h3>
        Search for any auto parts<br />
        <span>in the US</span>
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
      <NuxtImg src="https://i.ibb.co/YdDCgxP/strange-car.png" title="car" />
    </div>
  </div>

  <div class="content-wrapper how-it-works-wrapper">
    <span class="how-it-works-header">DO YOU WANT TO FIND AND BUY SPARE PARTS QUICKLY?</span>
    <div class="how-it-works">
      <div class="how-it-works-step">
        <span class="step-header">Submit a form</span>
        <span class="step-body">
          <NuxtLink to="/part-request" class="text-link">Submit</NuxtLink> a short request form, indicating the required
          auto part and information about your car.
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
          <tbody v-for="request in firstTenRequests" id="tbody" :key="request._id">
            <tr>
              <td>
                <div class="green-wheel-img-wrapper">
                  <NuxtImg src="/images/green-wheel.svg" title="green-gear" />
                </div>
              </td>
              <td>
                {{ request.part_name }} for {{ request.car_make }} {{ request.car_model }} {{ request.engine_volume }}
                {{ request.fuel_type }}
                <div class="block-for-mobile-screen">
                  {{ request.city }} -
                  {{ getTimeAgo(request.created_date) }}
                </div>
              </td>
              <td class="form-area-column">{{ request.city }}</td>
              <td class="form-date-column">
                {{ getTimeAgo(request.created_date) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="last-requests-sm-screen-wrapper" v-for="request in firstTenRequests" id="tbody" :key="request._id">
        <ul>
          <li>
            <div class="single-request-wrapper">
              <NuxtImg src="/images/green-wheel.svg" title="" />
              <div class="request-description">
                <p>
                  {{ request.part_name }} for {{ request.car_make }} {{ request.car_model }}
                  {{ request.engine_volume }}
                </p>
                <span>{{ request.city }} - {{ getTimeAgo(request.created_date) }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="table-button-wrapper">
        <NuxtLink to="/part-request" class="yellow-btn">Send Your Request</NuxtLink>
      </div>

      <div class="info-for-sellers">
        <div class="info-for-sellers-img">
          <NuxtImg src="/images/price.svg" title="price" class="price-label-img" />
        </div>
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
  </div>

  <div class="content-wrapper simple-project-decription-wrapper">
    <p>
      <b>MyNextParts</b> is a service dedicated to helping you find auto parts effortlessly, swiftly, and affordably in
      the USA. Whether you're in search of new or used parts, we connect you with online stores and car yards.
    </p>
    <p>
      By <NuxtLink to="/part-request">submiting a request</NuxtLink> for auto parts through our website, you no longer
      need to worry about where to order spare parts online, spend time on phone calls, or make trips to car markets,
      auto parts stores, or auto dismantlers. Once your request is sent, sellers will reach out to you, providing their
      prices and terms of sale.
    </p>
    <p>
      We collaborate with online auto parts retailers and dismantling stores across the USA, offering you access to a
      wide range of spare parts in stock and available for order. This allows you to choose a seller with the most
      competitive prices. With our service, you not only save time but also cut down on costs!
    </p>
  </div>

  <div class="content-wrapper call-to-action-wrapper">
    <div class="buyer-call-to-action">
      <div class="buyer-img-wrapper">
        <NuxtImg src="https://i.ibb.co/HxbHzB7/buyer.png" title="buyer" />
      </div>
      <div class="buyer-text">
        <span class="action-card-header">In search of specific parts? </span>
        <span class="action-card-body"
          >Simply submit a request for the spare parts you need, and your inquiry will be visible to hundreds of sellers
          who will provide you with lucrative options.
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
          >Review all buyer requests and propose your offerings. Many people are actively searching for the products you
          have!
        </span>
        <span>
          <NuxtLink to="/all-spare-part-requests" class="yellow-btn">Send An Offer</NuxtLink>
        </span>
      </div>
      <div class="sellesman-img">
        <NuxtImg src="https://i.ibb.co/1fBnyKb/sallesman.png" title="sallesman" />
      </div>
    </div>
  </div>

  <div class="content-wrapper user-reviews-wrapper">
    <span class="reviews-block-header">We bring together!</span>
    <span class="user-reviews-description">Connecting those in need with those who have spare parts.</span>
    <div class="reviews-main-wrapper">
      <div class="single-review">
        <NuxtImg src="https://i.ibb.co/zX6pBV4/review-avatar.png" title="review avatar" />
        <span class="review-header">Arash Singh</span>
        <span class="review-car-model">Dodge Challenger</span>
        <span class="review-content">
          "I needed a belt and rollers for my Dodge Challenger, and a friend recommended the MyNextParts service. The
          simplicity of the search was crucial for me—I filled out a form and started receiving offers from sellers via
          email."
        </span>
      </div>
      <div class="single-review">
        <NuxtImg src="https://i.ibb.co/3vSjmDK/li-meili.png" title="review avatar" />
        <span class="review-header">Li Meili</span>
        <span class="review-car-model">Mazda CX-5</span>
        <span class="review-content">
          "MyNextParts was incredibly helpful. Quick search, big savings compared to my last spare part purchase. Highly
          recommend!"
        </span>
      </div>
      <div class="single-review">
        <NuxtImg src="https://i.ibb.co/2KqZTDg/lukas-m.png" title="review avatar" />
        <span class="review-header">Lukas M.</span>
        <span class="review-car-model">Toyota Camry</span>
        <span class="review-content">
          "Amazing service, so simple to use and hassle-free! I got a WOF and service done super fast, and I found parts
          for my Toyota Camry at the best price. Highly recommend!"
        </span>
      </div>
      <div class="single-review">
        <NuxtImg src="https://i.ibb.co/4JNz7k0/lenny-j.png" title="review avatar" />
        <span class="review-header">Lenny Johnson</span>
        <span class="review-car-model">Dodge Ram 2500</span>
        <span class="review-content">
          "Found all the chassis parts for my Dodge in just half a day. I simply filled out the form and it took me only
          5 minutes. It's the best service I've ever used! I didn't have to disrupt my routine at all."
        </span>
      </div>
    </div>
  </div>

  <div class="content-wrapper additional-information">
    <h3>Fast search for auto parts</h3>
    <p>
      On <b>mynextparts.com</b>, you can purchase any auto parts and consumables for all car brands. Submitting an order
      on our website will replace dozens of searches in online auto parts stores and offline auto shops. This
      significantly simplifies the search and offers its advantages. One of them is acquiring high-quality spare parts
      in the US at the most favorable price. Our website ensures that you can quickly buy everything you need, stay
      within budget, and be satisfied with the purchased parts.
    </p>

    <h3>Why is it convenient and beneficial to buy parts through our search service?</h3>
    <ul>
      <li>
        Because by submitting a request on our website, you are not yet making a purchase. You can complete the purchase
        later with the chosen seller.
      </li>
      <li>You can go about your business, and our registered online stores will meanwhile send you their offers.</li>
      <li>
        After receiving responses from several auto shops, you can choose the most suitable option based on price and
        delivery terms.
      </li>
      <li>
        You can quickly find the necessary part even if you are not familiar with the car's structure and don't have the
        part code. Our partners will accurately select the product based on the VIN code you provide for your car.
      </li>
    </ul>

    <h3>Parts for any type of vehicles</h3>
    <p>
      Through our search service, you can purchase parts for vehicles of any year of manufacture, with all types of
      engines and body types. We will help you find rare components and popular auto parts at the best prices. Sellers
      will assist you in selecting parts by part number or VIN code using electronic catalogs.
    </p>

    <h4>You able to order:</h4>
    <ul>
      <li>Original parts;</li>
      <li>Analogues of components;</li>
      <li>New or used automotive parts.</li>
    </ul>
    <p>
      The search is conducted across all states. To order the necessary spare parts from the catalog, you need to
      specify in the request the make and model of the car, the name of the auto parts, body type, engine capacity, year
      of manufacture, VIN, and other requested parameters. Registered stores and auto dismantlers on the website will
      receive this information. If they have the specified spare parts, they will send you responses with sales
      conditions.
    </p>

    <h3>Purchasing original parts in the US</h3>
    <p>
      Automakers recommend using original auto parts. They are produced either by the car manufacturers themselves or by
      third-party factories on special orders. These parts are identical to those installed on vehicles during assembly.
      They are more durable than aftermarket parts and leave no doubts about compatibility with adjacent mechanisms.
      Branded parts are more expensive than aftermarket alternatives, but they quickly pay off due to their high quality
      and reliability. These components deliver better results in the repair and maintenance of vehicles.
    </p>

    <h3>How to buy genuine original parts online?</h3>
    <p>
      The easiest way to do this is on our website. Your request will be received by trusted online stores in the USA.
      Sellers will search for all the parts for your car using online catalogs or electronic catalogs of the car
      manufacturer. As a result, you will get accurate search results. This approach will save you from the mistakes of
      choice and, subsequently, product returns. You can place an order with any supplier that offers the best sales
      conditions, and you can be confident that you will receive a quality product, not a counterfeit.
    </p>
    <p>
      Benefits: quick search through electronic catalogs, quality guarantee, prompt delivery across the USA, purchasing
      without overpayments.
    </p>

    <h3>The most affordable auto parts</h3>
    <p>
      Through our service, it is possible to buy affordable alternatives to original auto parts for commercial and
      passenger vehicles. You can order substitutes that match the quality of originals and save up to 30% of your own
      funds. Our partners will offer you reliable licensed parts, help you choose a manufacturer, and provide guidance
      on the payment amount.
    </p>
    <p>
      If you want to buy used spare parts, specify in your request that you need second-hand auto parts. Auto
      dismantlers from different states in the USA will find suitable options for you. Parts from dismantled vehicles
      are often ordered for older cars. In addition, they are purchased to replace expensive components or to reduce
      repair costs. The savings can indeed be substantial. Such parts cost on average 60% less than originals. We will
      help you buy them with maximum benefits.
    </p>

    <h3>How to select parts by VIN code without the catalog or part number?</h3>
    <p>
      The vehicle identification number (VIN) is a 17-character combination of numbers and Latin letters that contains
      all the information about the vehicle. Using the VIN code, you can select any parts, even without knowing the
      catalog number. The VIN can be found in a specific location on the windshield, under the hood, on non-removable
      body parts, chassis, under the floor lining, or in the vehicle's technical passport. In an online parts catalog,
      you enter the requested data and then select the necessary options. Therefore, even if you do not specify the part
      number in the request, auto shops from all states will find it for you based on the VIN number.
    </p>
    <p>
      <b>Advantages:</b> Selection by VIN code eliminates errors, ensures full compatibility of all vehicle mechanisms,
      and saves time on searching.
    </p>

    <h3>The opportunity to purchase automotive parts without intermediaries.</h3>
    <p>
      Independent selection of auto parts does not always yield the desired results. Searching on numerous websites of
      online parts sellers increases the risk of purchasing through intermediaries. This leads to vehicle owners
      receiving low-quality parts or paying an inflated cost. Such orders often result in significant expenses and
      complaints against online stores. As a result, the buyer loses time on returns and exchanges, and sometimes ends
      up with nothing.
    </p>
    <p>
      We will help eliminate such risks. Through our service, you will directly connect with trusted online stores and
      dismantlers. If necessary, discuss all the details of the sale, cost, delivery times with them, and after
      completing the purchase, receive your order in a short time.
    </p>

    <h3>Buying car parts from online stores.</h3>
    <p>
      Selling auto parts online through catalogs offers several advantages. Choosing products online is more convenient
      and faster. The assortment of online stores is available almost around the clock. Moreover, purchasing items
      online can be done in just a few clicks. Additionally, there is no obligation to pay for the order immediately;
      you can transfer the money to the seller upon receipt. You can read reviews, use catalogs, compare specifications,
      and order auto parts on the best terms. Our website will further expand your search options and make your online
      purchase as comfortable and advantageous as possible.
    </p>

    <h2>5 reasons to order parts through <b>mynextparts.com</b></h2>
    <ol>
      <li>Receiving offers from all US states</li>
      <li>
        Minimal time investment (only for
        <a href="https://mynextparts.com/part-request"><b>submitting the request</b></a
        >)
      </li>
      <li>Instant selection of parts by experienced sellers without your involvement</li>
      <li>Easy selection of the best sales conditions</li>
      <li>Protection against unscrupulous sellers</li>
    </ol>
    <p>
      Through our search service, you can purchase parts for repairing all auto systems, restoring the body, materials
      for technical maintenance, tuning, fluids, oils, tires, wheels, and other goods.
    </p>

    <h3>Low prices on auto parts</h3>
    <p>
      The prices for auto parts depend on several factors, including their condition (new or used), type (original or
      aftermarket), quality characteristics, and brand. To purchase suitable components and mechanisms for a foreign
      car, it is essential to consider all these aspects. We will help you choose and order affordable original parts or
      their alternatives without compromising quality.
    </p>
    <p>
      As a result, you will be able to order any automotive products in the USA without risks, intermediaries, and
      overpayments. The good quality of the parts will extend the service life of your car, ensure operational safety,
      and protect against unforeseen events on the road.
    </p>
    <p>
      Additionally, you can visit our <a href="https://blog.mynextparts.com" target="_blank"><b>BLOG</b></a
      >, where you'll find a wealth of useful information on car maintenance, repairs, travel, automotive life hacks,
      and more.
    </p>
  </div>
</template>

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

    .block-for-mobile-screen {
      display: none;

      @media (max-width: 720px) {
        display: block;
        color: $gray-700;
      }
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

    info-for-sellers-img {
      width: 50%;
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

    .buyer-img-wrapper {
      width: 50%;

      @media (max-width: 1020px) {
        width: 90%;
      }
    }

    img {
      width: 100%;
    }

    @media (max-width: 1020px) {
      align-items: center;
      flex-direction: column;
    }

    .buyer-text {
      display: flex;
      width: 50%;
      flex-direction: column;
      justify-content: center;
      padding: 0 20px 0 60px;

      @media (max-width: 1020px) {
        padding: 0;
        width: 90%;
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
      align-items: center;
      flex-direction: column-reverse;
    }

    .sallesman-text {
      display: flex;
      width: 50%;
      flex-direction: column;
      justify-content: center;
      padding: 0 85px 0 0;

      @media (max-width: 1020px) {
        padding: 0;
        width: 90%;
        align-items: center;
        text-align: center;
      }
    }

    .sellesman-img {
      width: 50%;

      @media (max-width: 1020px) {
        width: 90%;
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

.additional-information {
  margin-top: 50px;

  ul li {
    margin-left: 20px;
    list-style: inside;
  }
}
</style>
