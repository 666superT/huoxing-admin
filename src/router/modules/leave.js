import layout from '../../layout'

export default {
  path: '/audit',
  name: 'audit',
  component: layout,
  redirect: '/audit/leave',
  meta: { title: '审批管理', icon: 'setting' },
  children: [
    {
      path: '/audit/leave',
      name: 'leave',
      component: () => import('../../views/leave'),
      meta: { title: '休假申请' }
    }
  ]
}
