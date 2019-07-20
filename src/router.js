import Vue from 'vue'
import Router from 'vue-router'
import ProjectsIndex from './views/Projects/Index.vue'
import ProjectsNew from './views/Projects/New.vue'
import ProjectsShow from './views/Projects/Show.vue'
import ProjectsEdit from './views/Projects/Edit.vue'
import UsersIndex from './views/Users/Index.vue'
import UsersNew from './views/Users/New.vue'
import UsersShow from './views/Users/Show.vue'
import UsersEdit from './views/Users/Edit.vue'
import NotificationsIndex from './views/Notifications/Index.vue'
import Signup from './views/Signup.vue'
import Login from './views/Login.vue'
import Logout from './views/Logout.vue'
import Test from './views/Test.vue'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/projects',
      name: 'projects-index',
      component: ProjectsIndex
    },
    {
      path: '/projects/new',
      name: 'projects-new',
      component: ProjectsNew
    },
    {
      path: '/projects/:id',
      name: 'projects-show',
      component: ProjectsShow
    },
    {
      path: '/projects/:id/edit',
      name: 'projects-edit',
      component: ProjectsEdit
    },
    {
      path: '/users/new',
      name: 'users-new',
      component: UsersNew
    },
    {
      path: '/users',
      name: 'users-index',
      component: UsersIndex
    },
    {
      path: '/users/:id',
      name: 'users-show',
      component: UsersShow
    },
    {
      path: '/users/:id/edit',
      name: 'users-edit',
      component: UsersEdit
    },
    {
      path: '/notifications',
      name: 'notifications-index',
      component: NotificationsIndex
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
