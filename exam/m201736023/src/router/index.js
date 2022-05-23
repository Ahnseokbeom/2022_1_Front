import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/exam1',
    name: 'exam1',
    component: () => import(/* webpackChunkName: "about" */ '../views/Exam1View.vue')
  },
  {
    path: '/exam2',
    name: 'exam2',
    component: () => import(/* webpackChunkName: "about" */ '../views/Exam2View.vue')
  },
  {
    path: '/exam3',
    name: 'exam3',
    component: () => import(/* webpackChunkName: "about" */ '../views/Exam3View.vue')
  },
  {
    path: '/exam4',
    name: 'exam4',
    component: () => import(/* webpackChunkName: "about" */ '../views/Exam4View.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
