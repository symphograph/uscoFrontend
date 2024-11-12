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
            component: () => import('layouts/WindowLayout.vue'),
            children: [
              {
                path: '',
                component: () => import('pages/IndexPage.vue')
              },
              {
                path: 'vacancies',
                component: () => import('pages/VacanciesPage.vue')
              },
              {
                path: 'contacts',
                component: () => import('components/contacts/ContactPage.vue')
              },
              {
                path: 'announces',
                name: 'announces',
                meta: { allowedPowers: [14] },
                component: () => import('components/announсes/AnnounceListPage.vue')
              },
              {
                path: 'staff',
                name: 'staff',
                meta: { allowedPowers: [18] },
                component: () => import('components/staff/StaffPage.vue')
              },
              {
                path: 'stafft',
                component: () => import('pages/StaffPageTest.vue')
              },
              {
                path: 'announce/:evid',
                name: 'announce',
                meta: { allowedPowers: [14] },
                component: () => import('components/announсes/AnnouncePage.vue')
              },
              {
                path: 'news/:category',
                name: 'news',
                meta: { allowedPowers: [13] },
                component: () => import('components/news/EntryListPage.vue')
              },
              {
                path: 'new/:id',
                name: 'new',
                meta: { allowedPowers: [13] },
                component: () => import('components/news/EntryPage.vue')
              },
              {
                path: 'conductor',
                component: () => import('pages/ConductorPage.vue')
              },
              {
                path: 'history',
                component: () => import('pages/HistoryPage.vue')
              },
              {
                path: 'AlexandrZrazaev',
                component: () => import('pages/AlexandrZrazaev.vue')
              },
              {
                path: 'pdn',
                component: () => import('pages/PdnInfo.vue')
              },
              {
                path: 'video',
                component: () => import('pages/VideoPage.vue')
              },
              {
                path: 'corrupt',
                component: () => import('pages/CorruptPage.vue')
              },
              {
                path: 'docs',
                name: 'docs',
                meta: { allowedPowers: [15] },
                component: () => import('components/docs/DocsPage.vue')
              },
              {
                path: 'gallery/:album',
                component: () => import('pages/GalleryPage.vue')
              },
              {
                path: 'gallery',
                component: () => import('pages/GalleryPage.vue')
              },
              {
                path: '/main',
                component: () => import('pages/MainInfo.vue')
              },
              {
                path: '/lib',
                component: () => import('layouts/LibLayout.vue'),
                children: [
                  {
                    path: 'works',
                    component: () => import('components/lib/work/WorkListPage.vue')
                  },
                  {
                    name: 'libWorks',
                    meta: { allowedPowers: [5] },
                    path: 'works/:authorId',
                    component: () => import('components/lib/work/WorkListPage.vue')
                  },
                  {
                    name: 'libWork',
                    meta: { allowedPowers: [5] },
                    path: '/work/:id',
                    component: () => import('components/lib/work/WorkPage.vue')
                  },
                  {
                    name: 'libAuthor',
                    meta: { allowedPowers: [5] },
                    path: 'author/:id?',
                    component: () => import('components/lib/author/AuthorPage.vue')
                  },
                  {
                    path: 'videos',
                    name: 'libVideo',
                    meta: { allowedPowers: [25] },
                    component: () => import('components/lib/video/VKVideoPage.vue')
                  },
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
    path: '/mainfinance',
    component: () => import('layouts/RootLayout.vue'),
    children: [{path: '', component: () => import('pages/service/MainTenance.vue')}]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('layouts/RootLayout.vue'),
    children: [{path: '', component: () => import('pages/service/Error404Page.vue')}]
  }
];

export default routes;
