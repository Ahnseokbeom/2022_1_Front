import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TodoListView from '../views/TodoListView.vue'
import TodoView from '../views/TodoView.vue'
const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    }, {
        path: '/todolist',
        name: 'todolist',
        component: TodoListView
    }, {
        path: '/todo',
        name: 'todo',
        component: TodoView
    }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router