<script setup>
definePageMeta({
  layout: "default",
});

useHead({
  title: "MyNextParts - the biggest used car parts market in U.S.",
  meta: [
    {
      name: "Market - home page",
      content:
        "Your one-stop marketplace for quality used auto parts, connecting car owners across the U.S. with top dismantlers and trusted parts suppliers nationwide.",
    },
  ],
});

import carPartsCategory from "@/assets/json/carPartsCategory";
import carMakes from "@/assets/json/carMakes";

function categoryClicked(href) {
  //Think how to implement pages with iteractiive URL, seo description, but with the same template
  console.log(href);
}
</script>

<template>
  <div class="market-home-wrapper">
    <div class="short-description">
      <h3>Browse from Millions of Used Auto Parts</h3>
    </div>
    <div class="market-top">
      <div class="market-home-header">
        <div class="search-form-block">
          <div class="search-input">
            <label class="mobile-input-label" for="start-input"> SEARCH BY MODEL, PART, BRAND, OR PART NUMBER: </label>
            <label class="desctop-input-label" for="start-input">START HERE</label>
            <NuxtImg src="/images/market-images/right-arrow.png" />
            <div class="search-input-wrapper">
              <input id="start-input" type="text" placeholder="Search by car model, part name, part #, brand, etc." />
            </div>
          </div>

          <div class="search-by-make">
            <span class="filter-title">SELECT VEHICLE</span>

            <select id="car-year" name="car-year">
              <option value="Year">Select Year</option>
              <option>Year</option>
            </select>

            <select id="make" name="make">
              <option value="Select Make">Select Make</option>
              <option>Make</option>
            </select>

            <select id="model" name="model">
              <option value="Select Model">Select Model</option>
              <option>Model</option>
            </select>
          </div>
        </div>

        <div class="basket-wrapper">
          <div class="basket-content">
            <span class="basket-img-wrapper">
              <NuxtImg src="/images/market-images/cart.png" />
            </span>
            <span>Cart | 0</span>
          </div>
        </div>
      </div>
    </div>

    <div class="body-market-wrapper">
      <div class="part-categories-wrapper">
        <h2>FEATURED CATEGORIES</h2>
        <div class="categories-conteiner">
          <div
            v-for="category in carPartsCategory"
            :key="category"
            class="category-card"
            @click="categoryClicked(category.href)"
          >
            <NuxtImg :src="category.image" />
            <p>{{ category.category }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="make-wrapper">
      <h3>SHOP BY VEHICAL MAKE</h3>
      <p>Our partner dismantling companies work with vehicles from the most popular car manufacturers</p>
      <div class="makes-block">
        <NuxtLink v-for="make in carMakes" :key="make" :to="`/market${make.href}`" class="make">
          {{ make.title.toUpperCase() }}
        </NuxtLink>
      </div>
    </div>

    <div class="limited-time-deals-wrapper">
      <h3>Limited Time Deals</h3>
      <div class="limited-deals">
        <div class="single-product">
          <NuxtImg src="https://i.ebayimg.com/thumbs/images/g/dCsAAOSwTT9kSf8p/s-l225.webp" />
          <p>BIG RED Hydraulic Floor Jack with Single Quick Lift Piston Pump, 3 Ton, Red</p>
          <span class="limited-deals-price">$250</span>
        </div>
        <div class="single-product">
          <NuxtImg src="https://i.ebayimg.com/thumbs/images/g/MLIAAOSwafdml0CP/s-l225.webp" />
          <p>BIG RED Hydraulic Floor Jack with Single Quick Lift Piston Pump, 3 Ton, Red</p>
          <span class="limited-deals-price">$155</span>
        </div>
        <div class="single-product">
          <NuxtImg src="https://i.ebayimg.com/thumbs/images/g/7j8AAOSwR6FlP74T/s-l225.webp" />
          <p>BIG RED Hydraulic Floor Jack with Single Quick Lift Piston Pump, 3 Ton, Red</p>
          <span class="limited-deals-price">$110</span>
        </div>
        <div class="single-product">
          <NuxtImg src="https://i.ebayimg.com/thumbs/images/g/O7kAAOSwh6lmH0Af/s-l225.webp" />
          <p>BIG RED Hydraulic Floor Jack with Single Quick Lift Piston Pump, 3 Ton, Red</p>
          <span class="limited-deals-price">$380</span>
        </div>
        <div class="single-product">
          <NuxtImg src="https://i.ebayimg.com/thumbs/images/g/8KUAAOSww21iBDSN/s-l225.webp" />
          <p>BIG RED Hydraulic Floor Jack with Single Quick Lift Piston Pump, 3 Ton, Red</p>
          <span class="limited-deals-price">$80</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.market-home-wrapper {
  .short-description {
    display: flex;
    justify-content: center;
    background-color: $gray-750;
    text-align: center;

    h3 {
      font-size: 22px;
      font-weight: 400;
      color: $gray-150;
      line-height: 1;
      letter-spacing: 2px;

      @media (max-width: 680px) {
        font-size: 16px;
      }
    }
  }

  .market-top {
    display: flex;
    justify-content: center;
    background-color: $gray-300;

    .market-home-header {
      display: flex;
      width: 95%;
      padding: 20px 0 30px 0;

      @media (max-width: 1024px) {
        flex-direction: column-reverse;
        padding: 15px 0 30px 0;
      }

      .search-form-block {
        width: 70%;

        @media (max-width: 1024px) {
          width: 100%;
          margin-top: 20px;
        }

        .search-input {
          display: flex;
          align-items: center;

          @media (max-width: 585px) {
            flex-direction: column;
          }

          label {
            font-weight: 600;
            letter-spacing: 3px;
            color: $blue-500;
            font-size: 20px;

            @media (max-width: 768px) {
              margin-right: 5px;
              font-size: 16px;
            }

            @media (max-width: 585px) {
              margin-right: 0;
              display: none;
              margin-bottom: 5px;
              text-align: center;
              font-size: 14px;
            }
          }

          .mobile-input-label {
            display: none;

            @media (max-width: 585px) {
              display: block;
            }
          }

          .desctop-input-label {
            @media (max-width: 585px) {
              display: none;
            }
          }

          img {
            @media (max-width: 768px) {
              width: 40px;
            }

            @media (max-width: 585px) {
              display: none;
            }
          }

          .search-input-wrapper {
            @media (max-width: 585px) {
              width: 100%;
            }

            input {
              margin-left: 10px;
              width: 400px;

              @media (max-width: 768px) {
                margin-left: 5px;
                width: 370px;
                padding: 5px;
                font-size: 14px;
              }

              @media (max-width: 585px) {
                width: 100%;
                margin-left: 0;
              }
            }
          }
        }

        .search-by-make {
          margin-top: 20px;

          @media (max-width: 585px) {
            display: none;
          }

          .filter-title {
            font-size: 20px;
            font-weight: 600;
            letter-spacing: 3px;
            color: $blue-500;

            @media (max-width: 768px) {
              font-size: 16px;
            }
          }

          select {
            margin-left: 10px;
            width: 150px;
            padding: 2px;

            @media (max-width: 768px) {
              width: 120px;
              padding: 1px;
              font-size: 14px;
            }
          }
        }
      }

      .basket-wrapper {
        width: 30%;
        display: flex;
        justify-content: flex-end;

        @media (max-width: 1024px) {
          width: 100%;
        }

        .basket-content {
          display: flex;

          .basket-img-wrapper {
            margin-right: 5px;
            img {
              width: 25px;

              @media (max-width: 768px) {
                width: 20px;
              }

              @media (max-width: 585px) {
                width: 16px;
              }
            }
          }

          span {
            font-size: 18px;
            font-weight: 600;

            @media (max-width: 768px) {
              font-size: 16px;
            }

            @media (max-width: 585px) {
              font-size: 14px;
            }
          }
        }
      }
    }
  }

  .body-market-wrapper {
    .part-categories-wrapper {
      display: flex;
      flex-direction: column;
      width: 95%;
      margin: 20px auto;
      align-items: center;

      h2 {
        font-size: 22px;
        font-weight: 400;
      }

      .categories-conteiner {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        width: 850px;

        @media (max-width: 1024px) {
          width: 650px;
        }

        @media (max-width: 680px) {
          width: 340px;
        }

        .category-card {
          display: flex;
          flex-direction: column;
          align-content: center;
          text-align: center;
          width: 200px;
          cursor: pointer;

          @media (max-width: 1024px) {
            width: 155px;
          }

          @media (max-width: 680px) {
            width: 110px;
          }

          img {
            width: 100%;
          }
        }
      }
    }
  }

  .make-wrapper {
    display: flex;
    flex-direction: column;
    margin: 60px auto;
    align-items: center;

    h3 {
      font-size: 22px;
      font-weight: 400;
      margin: 0;
      text-align: center;
    }

    p {
      text-align: center;
      font-size: 18px;
      font-weight: 300;
      color: $gray-900;
      margin: 5px auto 20px auto;
    }

    .makes-block {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      background-image: url("/images/market-images/junkyard.webp");
      background-size: cover;
      background-position: center;
      padding: 40px 0;
    }

    .make {
      display: block;
      font-weight: 500;
      margin: 8px;
      border: 1px solid $gray-850;
      border-radius: 5px;
      padding: 10px 20px;
      background-color: $white;
      opacity: 0.8;
    }
  }

  .limited-time-deals-wrapper {
    display: flex;
    flex-direction: column;
    margin: 60px auto;
    align-items: center;
    position: relative;
    overflow: hidden;
    width: 95%;
    padding-bottom: 20px;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 50px;
      height: 100%;
      pointer-events: none;
      background: linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
    }

    h3 {
      font-size: 22px;
      font-weight: 400;
      margin: 0;
      text-align: center;
    }

    .limited-deals {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      overflow-x: auto;
      scrollbar-width: thin;
      padding-bottom: 10px;

      &::-webkit-scrollbar {
        height: 20px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 4px;
      }

      .single-product {
        width: auto;
        display: flex;
        flex-direction: column;
        text-align: center;
        margin-right: 60px;
        cursor: pointer;

        &:last-child {
          margin-right: 0;
        }

        img {
          height: 150px;
          object-fit: contain;
          margin-bottom: 10px;
        }

        p {
          margin: 5px 0;
          flex-grow: 1;
        }

        .limited-deals-price {
          font-weight: bold;
          margin-top: auto;
        }
      }
    }
  }
}
</style>
