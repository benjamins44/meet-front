const routes = [
  {
    path: '/',
    name: 'Home',

    component: () => import('layouts/Main.vue'),
    children: [{ path: '', component: () => import('pages/SearchPage.vue'), meta: { title: 'Accueil' } }]
  },
  {
    path: '/search',
    name: 'Search',

    component: () => import('layouts/Main.vue'),
    children: [{ path: '', component: () => import('pages/SearchPage.vue'), meta: { title: 'Rechercher' } }]
  },
  {
    path: '/post',
    name: 'Post',

    component: () => import('layouts/Main.vue'),
    children: [{ path: '', component: () => import('pages/PostPage.vue'), meta: { title: 'Déposer une annonce' } }]
  },
  {
    path: '/post/confirm',
    name: 'ConfirmPost',

    component: () => import('layouts/Main.vue'),
    children: [{ path: '', component: () => import('pages/ConfirmPostPage.vue'), meta: { title: "Confirmation de l'envoi" } }]
  },
  {
    path: '/alert/confirm',
    name: 'AlertReponse',
    component: () => import('layouts/Main.vue'),
    children: [{ path: '', component: () => import('pages/ConfirmAlertPage.vue'), meta: { title: "Confirmation de l'envoi" } }]
  },
  {
    path: '/response/confirm',
    name: 'ConfirmReponse',
    component: () => import('layouts/Main.vue'),
    children: [{ path: '', component: () => import('pages/ConfirmResponsePage.vue'), meta: { title: "Confirmation de l'envoi" } }]
  },
  {
    path: '/remove/confirm',
    name: 'ConfirmRemove',

    component: () => import('layouts/Main.vue'),
    children: [{ path: '', component: () => import('pages/ConfirmRemovePage.vue'), meta: { title: 'Confirmation de la suppression' } }]
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    props: { default: true },
    component: () => import('layouts/Main.vue'),
    children: [{ path: '', component: () => import('pages/DetailPage.vue'), meta: { title: "Détail de l'annonce" } }]
  },
  {
    path: '/response/:id',
    name: 'Response',
    props: { default: true },
    component: () => import('layouts/Main.vue'),
    children: [{ path: '', component: () => import('pages/ResponsePage.vue'), meta: { title: "Répondre à l'annonce" } }]
  },
  {
    path: '/remove/:id',
    name: 'Remove',
    props: { default: true },
    component: () => import('layouts/Main.vue'),
    children: [{ path: '', component: () => import('pages/RemovePage.vue'), meta: { title: "Supprimer l'annonce" } }]
  },
  {
    path: '/alert/:id',
    name: 'Alert',
    props: { default: true },
    component: () => import('layouts/Main.vue'),
    children: [{ path: '', component: () => import('pages/AlertPage.vue'), meta: { title: "Alerte sur l'annonce" } }]
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
