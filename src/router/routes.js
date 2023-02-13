
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }]
  },
  {
    path: '/vacancies',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/VacanciesPage.vue') }]
  },
  {
    path: '/main',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/MainInfo.vue') }]
  },
  {
    path: '/contacts',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/ContactPage.vue') }]
  },
  {
    path: '/pdn',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/PdnInfo.vue') }]
  },
  {
    path: '/announces',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/AnnounceListPage.vue') }]
  },
  {
    path: '/announce/:evid',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/AnnouncePage.vue') }]
  },
  {
    path: '/conductor',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/ConductorPage.vue') }]
  },
  {
    path: '/history',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/HistoryPage.vue') }]
  },
  {
    path: '/AlexandrZrazaev',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/AlexandrZrazaev.vue') }]
  },
  {
    path: '/video',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/VideoPage.vue') }]
  },
  {
    path: '/news/:category',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/NewsPage.vue') }]
  },
  {
    path: '/new/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/NewPage.vue') }]
  },
  {
    path: '/gallery/:album',
    component: () => import('layouts/PhotoLayout.vue'),
    children: [{ path: '', component: () => import('pages/GalleryPage.vue') }]
  },
  {
    path: '/corrupt',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/CorruptPage.vue') }]
  },
  {
    path: '/docs',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/DocsPage.vue') }]
  },
  {
    path: '/staff',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/StaffPage.vue') }]
  },
  {
    path: '/auth',
    component: () => import('layouts/AuthLayout.vue'),
    children: [{ path: '', component: () => import('pages/AuthPage.vue') }]
  },


  // Always leave this as last one,
  // but you can also remove it AlexandrZrazaev
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404Page.vue')
  }
]

export default routes
