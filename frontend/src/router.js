/* eslint-disable */
import { createWebHistory, createRouter } from 'vue-router'

import HomePage from '@/pages/HomePage'
import FaqPage from '@/pages/FaqPage'
import PartRequest from '@/pages/PartRequest'

// Admin pages
import MyAccount from '@/pages/adminPages/MyAccount'
import MyAnswers from '@/pages/adminPages/MyAnswers.vue'
import MyRequests from '@/pages/adminPages/MyRequests'

const publicAccessRoutes = [
  {
    path: '/',
    component: HomePage,
    name: 'home-page',
    title: 'home-page'
  },
  {
    path: '/part-request/:userId?',
    component: PartRequest,
    name: 'part-request',
    title: 'part-request'
  },
  {
    path: '/faq',
    component: FaqPage,
    name: 'faq',
    title: 'faq'
  },
  {
    path: '/admin-panel',
    component: MyAccount,
    name: 'my-account',
    title: 'my-account',
  },
  {
    path: '/admin-panel/my-answers',
    component: MyAnswers,
    name: 'my-answers',
    title: 'my-answers'
  },
  {
    path: '/admin-panel/my-requests',
    component: MyRequests,
    name: 'my-requests',
    title: 'my-requests'
  },
];

const protectedRoutes = [];

for (const r of publicAccessRoutes) {
  r.meta = { title: r.title || 'MyCarParts' }
}

for (const r of protectedRoutes) {
  r.meta = { loginRequired: true, title: r.title || 'MyCarParts' }
}

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  routes: publicAccessRoutes.concat(protectedRoutes),
})

export default router
