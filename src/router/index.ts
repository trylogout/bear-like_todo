import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import ToDoApp from '../views/ToDo.vue'
import Vue from 'vue'
import SignIn from '@/components/SignIn.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'ToDo',
    component: ToDoApp,
    meta: { 
      requiresAuth: true
    }
  },
  {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: { 
          requiresAuth: true,
          is_admin : true
      }
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn,
    meta: { 
      guest: true
  }
  },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/signin',
        params: { nextUrl: to.fullPath }
      })
    } else {
      let user = JSON.parse(localStorage.getItem('user'))
      if(to.matched.some(record => record.meta.is_admin)) {
        if(user.is_admin == 1){
            next()
        }
        else{
            next({ name: 'ToDo'})
        }
      }
      else {
      	next()
      }
    }
  } else if(to.matched.some(record => record.meta.guest)) {
	    if(localStorage.getItem('jwt') == null){
	        next()
	    }
	    else{
	        next({ name: 'ToDo'})
	    }
    }else {
    next() 
  }
})

export default router
