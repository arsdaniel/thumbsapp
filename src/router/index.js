import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProdukView from '../views/ProduksView.vue'
import TheReview from '../views/TheReview.vue'
import TheLocation from '../views/TheLocation.vue'
import AddProduk from '../views/AddProduk.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth"

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
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/produk',
    name: 'produk',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ProdukView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/review',
    name: 'TheReview',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: TheReview
  },
  {
    path: '/location',
    name: 'TheLocation',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: TheLocation
  },
  {
    path: '/tambahproduk',
    name: 'AddProduk',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AddProduk,
    meta: {
      requiresAuth: true,
    },
  },
  {
  path: "/sign-in",
  component: () => import("../views/SignIn.vue"),
  },
  {
    path: "/register",
    component: () => import("../views/Register.vue")
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) =>{
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    )
  } )
}

router.beforeEach(async(to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth )) {
    if (await getCurrentUser()) {
      next();
    }else {
      alert("Silahkan Login Terlebih Dahulu");
      next("/");
    }
  }else{
    next();
  }
});

export default router
