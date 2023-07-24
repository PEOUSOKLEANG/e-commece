import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AccessoriesView from'../views/AccessoriesView.vue'
import ClothesView from'../views/ClothesView.vue'
import DiscountView from'../views/DiscountView.vue'
import GoshopView from'../views/GoshopView.vue'
import NewDropView from'../views/NewDropView.vue'
import ShoesView from'../views/ShoesView.vue'
// import SelecteOrder from'../components/SelecteOrder.vue'






const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      method:{
        goshop(){
          GoshopView;
        },
        promotion(){
          DiscountView;
        },
        Clothes(){
          ClothesView;
        },

      }
    },
    {
      path: '/accessories',
      name: 'accessories',
      component: AccessoriesView
    },
    {
      path: '//clothes',
      name: 'clothes',
      component: ClothesView
    },
    {
      path: '/discount',
      name: 'discount',
      component: DiscountView
    },
    {
      path: '//goshop',
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
    

    {
      path: '/seclectOrder',
      name: 'seclectOrder',
      
      component: () => import('../components/SelecteOrder.vue')
    },
    {
      path: '/seclectOrder/payment',
      name: 'payment',
      
      component: () => import('../components/Payment.vue')
    }
  ]
})

export default router
