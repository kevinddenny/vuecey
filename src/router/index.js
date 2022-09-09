import { createRouter, createWebHistory } from 'vue-router'
import firebase from 'firebase';
import HomeView from '../views/HomeView.vue'
import Admin from '../views/AdminView.vue'
import HotelProfile from '../views/HotelProfile.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/admin',
    name: 'admin',
    meta: {requiresAuth: true},
    component: Admin,
    children:[
      
      {
        path: "console",
        name: "console",
        component: () => import( '../views/AdminConsole.vue')
      },
     
   
    ]

  },
  {
    path: '/about',
    name: 'about',
  
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/hotelpage',
    name: 'hotelpage',
    meta: {requiresAuth: true},
    component: () => import( '../views/HotelPage.vue'),
    children:[
      
      {
        path: "hotelprofile",
        name: "hotelprofile",
        component: HotelProfile
      },
      {
        path: "hotelsettings",
        name: "hotelsettings",
        component:() => import( '../views/HotelSettings.vue')
      },
      {
        path: "hotelpackages",
        name: "hotelpackages",
        component:() => import( '../views/HotelPackages.vue')
      },
   
    ]
  },
  {
    path: '/touristpage',
    name: 'touristpage',
    meta: {requiresAuth: true},
    component: () => import( '../views/TouristPage.vue'),
    children:[
      
      {
        path: "touristprofile",
        name: "touristprofile",
        component: () => import( '../views/TouristProfile.vue')
      },
      {
        path: "touristsettings",
        name: "touristsettings",
        component:() => import( '../views/TouristSettings.vue')
      },
   
    ]
  },
  {
    path: '/login',
    name: 'login',
  
    component: () => import( '../views/LoginView.vue')
  },
  {
    path: '/paypalpayment',
    name: 'paypalpayment',
  
    component: () => import( '../views/PaypalPayment.vue')
  },
  {
    path: '/RegTourist',
    name: 'RegTourist',
  
    component: () => import( '../views/RegistrationTourist.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/test.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/hotel',
    name: 'hotel',
    component: () => import('../views/HotelView.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/TourismNews.vue')
  },
  {
    path: '/wild',
    name: 'wild',
    component: () => import('../views/WildLife.vue')
  },
  {
    path: '/beach',
    name: 'beach',
    component: () => import('../views/BeachView.vue')
  },
  {
    path: '/heritage',
    name: 'heritage',
    component: () => import('../views/HeritageView.vue')
  },
  {
    path: '/pilgrim',
    name: 'pilgrim',
    component: () => import('../views/PilgrimView.vue')
  },
  {
    path: '/scenic',
    name: 'scenic',
    component: () => import('../views/ScenicView.vue')
  },
  {
    path: '/adventure',
    name: 'adventure',
    component: () => import('../views/AdventureView.vue')
  },
  {
    path: '/relax',
    name: 'relax',
    component: () => import('../views/RelaxationView.vue')
  },
  {
    path: '/cultural',
    name: 'cultural',
    component: () => import('../views/CulturalView.vue')
  },
  {
    path: '/botanical',
    name: 'botanical',
    component: () => import('../views/BotanicalView.vue')
  },
  {
    path: '/offer',
    name: 'offer',
    component: () => import('../views/OfferView.vue')
  },
  {
    path: '/RegHotel',
    name: 'RegHotel',
    component: () => import('../views/RegistrationHotel.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !await firebase.getCurrentUser()){
    next('/');
  }else if(requiresAuth && firebase.getCurrentUser()){
    next();
  }else{
   
    next();
  }
});

export default router

