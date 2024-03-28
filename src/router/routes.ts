import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/',
        component: () => import('layouts/MidLayout.vue'),
        children: [
          {path: '', component: () => import('pages/IndexPage.vue')},
          {path: 'vacancies', component: () => import('pages/VacanciesPage.vue')},
          {path: 'announces', component: () => import('pages/AnnounceListPage.vue')},
          {path: 'contacts', component: () => import('pages/ContactPage.vue')},
          {path: 'announce/:evid', component: () => import('pages/AnnouncePage.vue')},
          {path: 'conductor', component: () => import('pages/ConductorPage.vue')},
          {path: 'history', component: () => import('pages/HistoryPage.vue')},
          {path: 'AlexandrZrazaev', component: () => import('pages/AlexandrZrazaev.vue')},
          {path: 'pdn', component: () => import('pages/PdnInfo.vue')},
          {path: 'video', component: () => import('pages/VideoPage.vue')},
          {path: 'news/:category', component: () => import('pages/NewsPage.vue')},
          {path: 'new/:id', component: () => import('pages/NewPage.vue')},
          {path: 'corrupt', component: () => import('pages/CorruptPage.vue')},
          {path: 'docs', component: () => import('pages/DocsPage.vue')},
          {path: 'staff', component: () => import('pages/StaffPage.vue')},
          {path: 'gallery/:album', component: () => import('pages/GalleryPage.vue')},
          {path: 'gallery', component: () => import('pages/GalleryPage.vue')},
          {path: 'login', component: () => import('pages/LoginPage.vue')}
        ]
      },

      {
        path: '/main',
        component: () => import('layouts/MidLayout.vue'),
        children: [{path: '', component: () => import('pages/MainInfo.vue')}]
      },

      {
        path: '/hall',
        component: () => import('layouts/PhotoLayout.vue'),
        children: [{path: '', component: () => import('pages/tickets/HallEditor.vue')}]
      },
      {
        path: '/event/:id',
        component: () => import('layouts/HallLayout.vue'),
        children: [{path: '', component: () => import('pages/tickets/EventPage.vue')}]
      },
      {
        path: '/login',
        component: () => import('layouts/MidLayout.vue'),
        children: [{path: '', component: () => import('pages/LoginPage.vue')}]
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
];

export default routes;