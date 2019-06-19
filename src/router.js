import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ProjectsIndex from './views/ProjectsIndex.vue'
import ProjectsNew from './views/ProjectsNew.vue'
import ProjectsShow from './views/ProjectsShow.vue'
import ProjectsEdit from './views/ProjectsEdit.vue'
import UsersNew from './views/UsersNew.vue'
import UsersShow from './views/UsersShow.vue'
import UsersEdit from './views/UsersEdit.vue'
import NotificationsIndex from './views/NotificationsIndex.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
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
  ]
})
