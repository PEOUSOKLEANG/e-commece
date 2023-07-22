import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AccessoriesView from'../views/AccessoriesView.vue'
import ClothesView from'../views/ClothesView.vue'
import DiscountView from'../views/DiscountView.vue'
import GoshopView from'../views/GoshopView.vue'
import NewDropView from'../views/NewDropView.vue'
import ShoesView from'../views/ShoesView.vue'






const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/accessories',
      name: 'accessories',
      component: AccessoriesView
    },
    {
      path: '/clothes',
      name: 'clothes',
      component: ClothesView
    },
    {
      path: '/discount',
      name: 'discount',
      component: DiscountView
    },
    {
      path: '/goshop',
      name: 'goshop',
      component: GoshopView
    },
    {
      path: '/newdrop',
      name: 'newdrop',
      component: NewDropView
    },
    {
      path: '/shoes',
      name: 'shoes',
      component: ShoesView
    },
    

    // {
    //   path: '/about',
    //   name: 'about',
      
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
