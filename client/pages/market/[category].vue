<script setup>
import carPartsCategory from "@/assets/json/carPartsCategory.json";
import BreadCrumbs from "@/components/market/common/breadCrumbs";
import ProductCard from "@/components/market/product-components/productCard";

const route = useRoute();
const categoryParam = ref(route.params.category);

function removeDashes(str) {
  return str.replace(/-/g, " ");
}

const categories = ref(carPartsCategory);
const openCategories = ref(categories.value.map(() => false));

function toggleCategory(index) {
  openCategories.value[index] = !openCategories.value[index];
}

function openCategory() {
  const index = categories.value.findIndex((cat) => cat.href === categoryParam.value);
  if (index !== -1) {
    openCategories.value[index] = true;
  }
}

onMounted(() => {
  openCategory();
  console.log(categoryParam.value);
});

watch(
  () => route.params.category,
  (newCategory) => {
    categoryParam.value = newCategory;
    openCategory();
  }
);
</script>

<template>
  <div class="catalog-wrapper">
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

    <div class="bread-crumbs-wrapper">
      <BreadCrumbs :url="categoryParam" />
    </div>

    <div class="header-title">
      <h1>{{ removeDashes(categoryParam) }}</h1>
    </div>

    <div class="main-content-wrapper">
      <div class="sidebar">
        <h2>Shop by Category</h2>
        <ul class="category-list">
          <li v-for="(category, index) in categories" :key="index" class="category">
            <button class="category-button" @click="toggleCategory(index)">
              {{ category.category }}
              <span class="arrow" :class="{ active: openCategories[index] }"></span>
            </button>
            <ul v-if="openCategories[index]" class="subcategory-list">
              <li v-for="(sub, subIndex) in category.subcategory" :key="subIndex">
                <NuxtLink :to="`/market/${category.href}${sub.href}`">{{ sub.title }}</NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="content">
        <ProductCard />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.catalog-wrapper {
  display: flex;
  flex-direction: column;

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

  .header-title {
    background-color: $gray-750;
    width: 98%;
    margin: 0 auto;
    border-radius: 5px;

    h1 {
      color: $white;
      font-weight: 400;
      letter-spacing: 2px;
      margin-left: 20px;

      @media (max-width: 768px) {
        font-size: 22px;
        margin-left: 15px;
      }

      @media (max-width: 585px) {
        font-size: 20px;
        margin-left: 10px;
      }
    }
  }

  .bread-crumbs-wrapper {
    width: 98%;
    margin: 30px auto 10px auto;
  }

  .main-content-wrapper {
    display: flex;
    .sidebar {
      width: 230px;
      padding: 10px;

      @media (max-width: 768px) {
        width: 190px;
      }

      h2 {
        font-size: 18px;
        margin-bottom: 10px;

        @media (max-width: 768px) {
          font-size: 16px;
        }
      }

      .category-list {
        .category {
          .category-button {
            margin-top: 15px;
            background: none;
            border: none;
            font-size: 15px;
            color: $gray-850;
            width: 100%;
            cursor: pointer;
            outline: none;
            display: flex;
            justify-content: space-between;
            align-items: center;

            @media (max-width: 768px) {
              font-size: 14px;
            }

            .arrow {
              display: inline-block;
              width: 0;
              height: 0;
              margin-left: 8px;
              border-left: 5px solid transparent;
              border-right: 5px solid transparent;
              border-top: 5px solid $blue-500;
              transition: transform 0.3s ease;
            }

            .arrow.active {
              transform: rotate(180deg);
            }
          }

          .subcategory-list {
            padding-left: 15px;
            margin-top: 5px;
            overflow: hidden;

            li {
              padding: 5px 0;
              font-size: 14px;

              @media (max-width: 768px) {
                font-size: 12px;
              }
            }

            a {
              color: $gray-700;

              &:hover {
                color: #000;
                text-decoration: underline;
              }
            }
          }
        }
      }
    }

    .content {
    }
  }
}
</style>
