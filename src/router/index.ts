import { createRouter, createWebHashHistory } from 'vue-router'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/components/home.vue')
    },
    {
      path: '/add',
      component: () => import('@/components/add.vue')
    }
  ]

})