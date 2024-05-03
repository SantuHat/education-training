import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Front',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: '*',
        redirect: '/'
      },
      {
        path: '',
        name: 'Index',
        component: () => import('../views/HomeView.vue')
      },
      {
        path: '/commonProblem',
        name: 'CommonProblem',
        component: () => import('../views/CommonProblem.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
