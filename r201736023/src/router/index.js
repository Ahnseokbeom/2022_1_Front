import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Exam1View from '../views/Exam1View.vue'
import Exam1ProductView from '../views/Exam1ProductView.vue'
import Exam2View from '../views/Exam2View.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path : '/exam1',
    name : 'exam1',
    component : Exam1View,
  },
  {
    path : '/product',
    name : 'product',
    component : Exam1ProductView
  },
  {
    path : '/exam2',
    name : 'exam2',
    component : Exam2View,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
