// import TasksPage from '../pages/TasksPage.vue'
// import LoginPage from '../pages/LoginPage.vue'
// import RegisterPage from '../pages/RegisterPage.vue'
// import SummaryPage from '../pages/SummaryPage.vue'
// import NotFoundErrorPage from '../pages/errors/NotFoundErrorPage.vue'
import HomePage from '../pages/HomePage.vue'
import AboutPage from '../pages/AboutPage.vue'
import TestPage from '../pages/TestPage.vue'

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
    path: '/test',
    component: TestPage,
    name: 'test',
  },
  //   {
  //     path: '/tasks',
  //     component: TasksPage,
  //     name: 'tasks',
  //     meta: {
  //       auth: true,
  //     },
  //   },
  //   {
  //     path: '/login',
  //     component: LoginPage,
  //     name: 'login',
  //     meta: {
  //       guest: true,
  //     },
  //   },
  //   {
  //     path: '/register',
  //     component: RegisterPage,
  //     name: 'register',
  //     meta: {
  //       guest: true,
  //     },
  //   },
  //   {
  //     path: '/summary',
  //     component: SummaryPage,
  //     name: 'summary',
  //     meta: {
  //       auth: true,
  //     },
  //   },
  //   {
  //     path: '/:notFound(.*)',
  //     component: NotFoundErrorPage,
  //     name: 'error.404',
  //   },

]

export default routes