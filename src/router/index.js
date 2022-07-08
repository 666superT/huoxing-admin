import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '../layout'
import user from './modules/user'
import menu from './modules/menu'
import role from './modules/role'
import dept from './modules/dept'
import salary from './modules/salary'
import staff from './modules/staff'
import approve from './modules/approve'
import leave from './modules/leave'

export const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login')
  },
  {
    path: '/',
    component: layout,
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        name: 'welcome',
        component: () => import('../views/welcome')
      },
      {
        path: '/404',
        name: '404',
        component: () => import('../views/404')
      }
    ]
  }
]

export const privateRoutes = [
  user,
  menu,
  role,
  dept,
  salary,
  staff,
  approve,
  leave
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...routes, ...privateRoutes]
})

export default router
