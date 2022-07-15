export const basicRoutes = [
  {
    name: 'LOGIN',
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    isHidden: true,
    meta: { title: '登陆页' },
  },
  {
    name: 'Dashboard',
    path: '/',
    component: () => import('@/views/dashboard/index.vue'),
    meta: {
      title: 'Dashboard',
    },
  },

  {
    name: 'TestUnocss',
    path: '/test/unocss',
    component: () => import('@/views/test-page/unocss/index.vue'),
    meta: {
      title: '测试unocss',
    },
  },
];
