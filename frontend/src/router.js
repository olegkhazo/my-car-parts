/* eslint-disable */
import { createWebHistory, createRouter } from 'vue-router'

import MyAccount from '@/pages/MyAccount'
import PartRequestAdmin from '@/pages/PartRequestAdmin'
import MyAnswers from '@/pages/MyAnswers.vue'
import FaqPage from '@/pages/FaqPage'
import HomePage from '@/pages/HomePage'
import SendRequestPage from '@/pages/SendRequestPage'

const publicAccessRoutes = [
  {
    path: '/',
    component: HomePage,
    name: 'home-page',
    title: 'home-page'
  },
  {
    path: '/part-request-admin',
    component: PartRequestAdmin,
    name: 'part-request-admin',
    title: 'part-request-admin'
  },
  {
    path: '/admin-panel',
    component: MyAccount,
    name: 'my-account',
    title: 'my-account'
  },
  {
    path: '/admin-panel/my-answers',
    component: MyAnswers,
    name: 'my-answers',
    title: 'my-answers'
  },
  {
    path: '/admin-panel/send-request',
    component: SendRequestPage,
    name: 'send-request',
    title: 'send-request'
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
