
const routes = [
  {
    path: '/',
    component: () => import('layouts/Homepage.vue'),
    children: [
      { path: '', component: () => import('pages/Homepage/Index.vue') },
      { path: '/create-account', component: () => import('pages/Homepage/CreateAccount.vue') },
    ]
  },
  { path: '/whatsapp', component: () => import('pages/Dashboard/whatsAppChat.vue') },
  {
    path: '/home',
    component: () => import('layouts/Dashboard.vue'),
    children: [
      { path: '/', component: () => import('pages/Dashboard/Index.vue') },
      { path: '/settings', component: () => import('pages/Dashboard/Settings.vue') },

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
