/* eslint-disable */
import { createWebHistory, createRouter } from 'vue-router'

import MyAccount from '@/pages/MyAccount'
import PartRequest from '@/pages/PartRequest'
import MyAnswers from '@/pages/MyAnswers.vue'
import FaqPage from '@/pages/FaqPage'
import HomePage from '@/pages/HomePage'
import MyRequests from '@/pages/MyRequests'

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
  {
    path: '/admin-panel/faq',
    component: FaqPage,
    name: 'faq',
    title: 'faq'
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
