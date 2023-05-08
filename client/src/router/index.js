import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import loginView from '../views/loginView.vue'
import registerView from '../views/registerView.vue'
import bookmarkView from '../views/bookmarkView.vue'
import detailView from '../views/detailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: loginView
    },
    {
      path: '/register',
      name: 'register',
      component: registerView
    },
    {
      path: '/bookmark',
      name: 'bookmark',
      component: bookmarkView
    },
    {
      path: '/cuisines/:id',
      name: 'detail',
      component: detailView
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.access_token

  if (to.name == 'bookmark' && !isAuthenticated) {
    next('login')
  } else if (
    (to.name == 'login' && isAuthenticated) ||
    (to.name == 'register' && isAuthenticated)
  ) {
    next('/')
  } else {
    next()
  }
})

export default router
