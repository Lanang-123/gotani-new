import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "../views/HomePage.vue"
import AboutPage from "../views/AboutPage.vue"
import StorePage from '../views/StorePage.vue'
import EducationPage from '../views/EducationPage.vue'
import ProductDetail from '../components/ProductDetail.vue'
import VideoDetail from '../components/VideoDetail.vue'
import JasaPage from "../views/JasaPage.vue"
import EventPage from "../views/EventPage.vue"
import Register from "../views/Register.vue"
import Login from "../views/Login.vue"
import CartPage from '../views/CartPage.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/store',
      name: 'store',
      component: StorePage
    },
    {
      path: '/education',
      name: 'education',
      component: EducationPage
    },
    {
      path: '/jasa',
      name: 'jasa',
      component: JasaPage
    },
    {
      path: '/event',
      name: 'event',
      component: EventPage
    },
    {
      path: '/productDetail/:id',
      name: 'product-detail',
      component: ProductDetail
    },
    {
      path: '/eduDetail/:id',
      name: 'edu-detail',
      component: VideoDetail
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartPage
    },
  ]
})

export default router
