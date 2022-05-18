import { createRouter, createWebHistory } from 'vue-router'
// 위 아래와 같이 ../ 또는 @ 아무거나 사용해도 무관하다
import HomeView from '../views/HomeView.vue'
// import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import TodoView from '../views/TodoView.vue'
import NoticeView from '../views/NoticeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 이처럼 사용하려면 상단의 그 페이지를 임포트 해주어야 한다.
    // component: () => import(/* webpackChunkName: "about" */ '@/views/AboutView.vue')
    component: AboutView
  },
  {
    path: '/todo',
    name: 'todo',
    component: TodoView
  },
  {
    path: '/notice',
    name: 'notice',
    component: NoticeView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
