import HomePage from '../pages/HomePage.vue'
import AboutPage from '../pages/AboutPage.vue'

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
]

export default routes