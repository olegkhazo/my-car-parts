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
</script>

<template>
  <div class="market-home-wrapper">
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
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.market-home-wrapper {
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
}
</style>
