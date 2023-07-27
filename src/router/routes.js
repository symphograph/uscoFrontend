const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/',
        component: () => import('layouts/MidLayout.vue'),
        children: [{path: '', component: () => import('pages/IndexPage.vue')}]
      },
      {
        path: 'vacancies',
        component: () => import('layouts/MidLayout.vue'),
        children: [{path: '', component: () => import('pages/VacanciesPage.vue')}]
      },
      {
        path: '/main',
        component: () => import('layouts/MidLayout.vue'),
        children: [{path: '', component: () => import('pages/MainInfo.vue')}]
      },
      {
        path: '/contacts',
        component: () => import('layouts/MidLayout.vue'),
        children: [{path: '', component: () => import('pages/ContactPage.vue')}]
      },

      {
        path: '/pdn',
        component: () => import('layouts/MidLayout.vue'),
        children: [{path: '', component: () => import('pages/PdnInfo.vue')}]
      },
      {
        path: '/announces',
        component: () => import('layouts/MidLayout.vue'),
        children: [{path: '', component: () => import('pages/AnnounceListPage.vue')}]
      },
      {
        path: '/announce/:evid',
        component: () => import('layouts/MidLayout.vue'),
        children: [{path: '', component: () => import('pages/AnnouncePage.vue')}]
      },
      {
        path: '/conductor',
        component: () => import('layouts/MidLayout.vue'),
        children: [{path: '', component: () => import('pages/ConductorPage.vue')}]
      },
      {
        path: '/history',
        component: () => import('layouts/MidLayout.vue'),
        children: [{path: '', component: () => import('pages/HistoryPage.vue')}]
      },
      {
        path: '/AlexandrZrazaev',
        component: () => import('layouts/MidLayout.vue'),
        children: [{path: '', component: () => import('pages/AlexandrZrazaev.vue')}]
      },
      {
        path: '/video',
        component: () => import('layouts/MidLayout.vue'),
        children: [{path: '', component: () => import('pages/VideoPage.vue')}]
      },
      {
        path: '/news/:category',
        component: () => import('layouts/MidLayout.vue'),
        children: [{path: '', component: () => import('pages/NewsPage.vue')}]
      },
      {
        path: '/new/:id',
        component: () => import('layouts/MidLayout.vue'),
        children: [{path: '', component: () => import('pages/NewPage.vue')}]
      },
      {
        path: '/swiper',
        component: () => import('layouts/MidLayout.vue'),
        children: [{path: '', component: () => import('pages/SwiperPage.vue')}]
      },
      {
        path: '/corrupt',
        component: () => import('layouts/MidLayout.vue'),
        children: [{path: '', component: () => import('pages/CorruptPage.vue')}]
      },
      {
        path: '/docs',
        component: () => import('layouts/MidLayout.vue'),
        children: [{path: '', component: () => import('pages/DocsPage.vue')}]
      },
      {
        path: '/staff',
        component: () => import('layouts/MidLayout.vue'),
        children: [{path: '', component: () => import('pages/StaffPage.vue')}]
      },
      {
        path: '/gallery/:album',
        component: () => import('layouts/PhotoLayout.vue'),
        children: [{path: '', component: () => import('pages/GalleryPage.vue')}]
      },
      {
        path: '/gallery',
        component: () => import('layouts/PhotoLayout.vue'),
        children: [{path: '', component: () => import('pages/GalleryPage.vue')}]
      },
      {
        path: '/hall',
        component: () => import('layouts/PhotoLayout.vue'),
        children: [{path: '', component: () => import('pages/tickets/HallEditor.vue')}]
      },
    ]
  },
  {
    path: '/auth/callback',
    component: () => import('layouts/RootLayout.vue'),
    children: [{path: '', component: () => import('pages/service/AuthCallback.vue')}]
  },
  {
    path: '/maintenance',
    component: () => import('layouts/RootLayout.vue'),
    children: [{path: '', component: () => import('pages/service/MainTenance.vue')}]
  },


  // Always leave this as last one,
  // but you can also remove it AlexandrZrazaev
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/service/Error404Page.vue')
  }
]

export default routes
