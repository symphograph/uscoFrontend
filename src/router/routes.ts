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
          {
            path: '',
            component: () => import('layouts/IndexLayout.vue'),
            children: [{path: '', component: () => import('pages/IndexPage.vue')}]
          },
          {
            path: '',
            component: () => import('layouts/WindowLayout.vue'),
            children: [
              {path: 'vacancies', component: () => import('pages/VacanciesPage.vue')},
              {path: 'contacts', component: () => import('pages/ContactPage.vue')},
              {path: 'announces', component: () => import('pages/AnnounceListPage.vue')},
              {path: 'staff', component: () => import('pages/StaffPage.vue')},
              {path: 'stafft', component: () => import('pages/StaffPageTest.vue')},
              {path: 'announce/:evid', component: () => import('pages/AnnouncePage.vue')},
              {path: 'news/:category', component: () => import('pages/NewsPage.vue')},
              {path: 'conductor', component: () => import('pages/ConductorPage.vue')},
              {path: 'history', component: () => import('pages/HistoryPage.vue')},
              {path: 'AlexandrZrazaev', component: () => import('pages/AlexandrZrazaev.vue')},
              {path: 'pdn', component: () => import('pages/PdnInfo.vue')},
              {path: 'video', component: () => import('pages/VideoPage.vue')},
              {path: 'new/:id', component: () => import('pages/NewPage.vue')},
              {path: 'corrupt', component: () => import('pages/CorruptPage.vue')},
              {path: 'docs', component: () => import('pages/DocsPage.vue')},
              {path: 'gallery/:album', component: () => import('pages/GalleryPage.vue')},
              {path: 'gallery', component: () => import('pages/GalleryPage.vue')},
              {path: '/main', component: () => import('pages/MainInfo.vue')},
              {
                path: '/lib',
                component: () => import('layouts/LibLayout.vue'),
                children: [
                  {path: 'works', component: () => import('pages/lib/WorkListPage.vue')},
                  { path: 'works/:authorId', component: () => import('pages/lib/WorkListPage.vue') },
                  {path: '/work/:id', component: () => import('pages/lib/WorkPage.vue')},
                  {path: 'author/:id', component: () => import('pages/lib/AuthorPage.vue')},
                  {path: 'videos', component: () => import('pages/lib/VKVideoPage.vue')},
                ]
              },
            ]
          }
        ]
      },
      {
        path: '/hall',
        component: () => import('layouts/MidLayout.vue'),
        children: [{path: '', component: () => import('pages/tickets/HallEditor.vue')}]
      },
      {
        path: '/event/:id',
        component: () => import('layouts/MidLayout.vue'),
        children: [{path: '', component: () => import('pages/tickets/EventPage.vue')}]
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
    component: () => import('layouts/RootLayout.vue'),
    children: [{path: '', component: () => import('pages/service/Error404Page.vue')}]
  }
];

export default routes;
