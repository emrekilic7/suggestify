import HomePage from '../pages/HomePage.vue'
import AboutPage from '../pages/AboutPage.vue'
import NotFoundErrorPage from '../pages/NotFoundErrorPage.vue'

const routes = [
  {
    path: '/',
    component: HomePage,
    name: 'home',
  },
  {
    path: '/about',
    component: AboutPage,
    name: 'about',
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundErrorPage,
    name: 'error.404',
  },
]

export default routes