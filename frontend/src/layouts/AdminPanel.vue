<template>
  <div class="admin-panel-wrapper">
    <div class="admin-side-menu">
      <div class="side-menu-header">
        <div class="avatar-wrapper">
          <img src="@/assets/images/cat-oleg.jpg" alt="avatar" />
        </div>
        <span class="user-info"> Oleg Zh. </span>
      </div>

      <nav class="admin-navigation">
        <ul>
          <li>
            <img src="" alt="" />
            <span class="nav-item-title">My Account</span>
          </li>
          <li>
            <img src="" alt="" />
            <span class="nav-item-title">My Answers</span>
          </li>
          <li>
            <img src="" alt="" />
            <span class="nav-item-title">My Requests</span>
          </li>
          <li>
            <img src="" alt="" />
            <span class="nav-item-title">Send Request</span>
          </li>
        </ul>
      </nav>
    </div>

    <div class="admin-content-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script setup></script>

<style lang="sass" scoped>
@import "@/styles/layouts/_admin-panel.scss"
</style>
