
const routes = [
  {
    path: '/',
    component: () => import('layouts/Homepage.vue'),
    children: [
      { path: '', component: () => import('pages/Homepage/Index.vue') },
      { path: '/create-account', component: () => import('pages/Homepage/CreateAccount.vue') },
    ]
  },
  {
    path: '/home',
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '/', component: () => import('pages/Dashboard/Index.vue') },
      { path: '/settings', component: () => import('pages/Dashboard/Settings.vue') },
      {path: '/whatsapp', component:()=>import('pages/Dashboard/whatsAppChat')},
      {path: '/profile', component:()=>import('pages/Dashboard/Profile')},
      {path: '/message-area', component:()=>import('pages/Dashboard/MessageArea')},
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
