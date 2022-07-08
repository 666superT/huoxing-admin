import layout from '../../layout'

export default {
  path: '/system',
  name: 'system',
  component: layout,
  redirect: '/system/user',
  meta: { title: '系统管理', icon: 'setting' },
  children: [
    {
      path: '/system/user',
      name: 'user',
      component: () => import('../../views/user'),
      meta: { title: '用户管理' }
    }
  ]
}
