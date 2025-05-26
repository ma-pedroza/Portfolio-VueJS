import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutMe from '../views/AboutMe.vue'
import Contact from '../views/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/aboutMe',
      name: 'aboutMe',
      component: AboutMe
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ],
})

export default router
