import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/home/Home.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/favor',
      name: 'favor',
      component: () => import('@/views/favor/Favor.vue')
    },
    {
      path: '/message',
      name: 'message',
      component: () => import('@/views/message/Message.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('@/views/order/Order.vue')
    }
  ]
})

export default router
