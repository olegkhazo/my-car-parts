<template>
  <div class="admin-panel-wrapper">
    <div class="admin-side-menu">
      <div class="side-menu-header">
        <div class="avatar-wrapper">
          <img src="@/assets/images/cat.webp" alt="avatar" />
        </div>
        <span class="user-info"> Oleg Zh. </span>
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

    <div class="admin-content-wrapper">
      <div class="content">
        <slot></slot>
      </div>

      <div class="admin-bottom-info">
        <span>© 2023 — MyCarParts Inc.</span>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="sass" scoped>
@import "@/styles/layouts/_admin-panel.scss"
</style>
