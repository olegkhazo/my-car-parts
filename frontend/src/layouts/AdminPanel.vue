<template>
  <div class="admin-panel-wrapper">
    <div
      class="admin-side-menu"
      :class="{ 'collapsed-admin-side-menu': sideMenuView }"
    >
      <div class="collapse-btn-wrapper" @click="collapseSideMenu">
        <img
          src="@/assets/images/keyboard_arrow_left_black_36dp.svg"
          alt="arrow"
        />
      </div>
      <div class="side-menu-header">
        <div class="avatar-wrapper">
          <img src="@/assets/images/cat.webp" alt="avatar" />
        </div>
        <div class="user-text-info">
          <span class="user-info"> Oleg Zh. </span>
          <span class="user-info"> 28.06.2023 </span>
        </div>
      </div>

      <nav class="admin-navigation">
        <ul>
          <router-link :to="{ path: '/admin-panel' }">
            <li>
              <img
                src="@/assets/images/person_outline_black_24dp.svg"
                alt="my-account"
              />
              <span class="nav-item-title">My Account</span>
            </li>
          </router-link>
          <router-link :to="{ path: '/admin-panel/my-answers' }">
            <li>
              <img
                src="@/assets/images/question_answer_black_24dp.svg"
                alt="my-answers"
              />
              <span class="nav-item-title">My Answers</span>
            </li>
          </router-link>
          <router-link :to="{ path: '/admin-panel/my-requests' }">
            <li>
              <img
                src="@/assets/images/shopping_basket_black_24dp.svg"
                alt="my-requests"
              />
              <span class="nav-item-title">My Requests</span>
            </li>
          </router-link>
          <router-link :to="{ path: '/part-request' }">
            <li>
              <img
                src="@/assets/images/add_comment_black_24dp.svg"
                alt="send-request"
              />
              <span class="nav-item-title">Send Request</span>
            </li>
          </router-link>
        </ul>
      </nav>
    </div>

    <div class="admin-content-wrapper" :class="{ 'full-width': sideMenuView }">
      <div class="content">
        <slot></slot>
      </div>

      <div class="admin-bottom-info">
        <span>© 2023 — MyCarParts Inc.</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const sideMenuView = ref(false);
const screenWidth = ref(null);

function collapseSideMenu() {
  sideMenuView.value = sideMenuView.value ? false : true;
}

// The mechanism for watching for screen sizing
function displayWindowSize() {
  screenWidth.value = document.documentElement.clientWidth;
}

window.addEventListener("resize", displayWindowSize);

displayWindowSize();

watch(screenWidth, (newVal, oldVal) => {
  if (newVal < 720 && oldVal > 720) {
    sideMenuView.value = true;
  }
});
</script>

<style lang="sass" scoped>
@import "@/styles/layouts/_admin-panel.scss"
</style>
