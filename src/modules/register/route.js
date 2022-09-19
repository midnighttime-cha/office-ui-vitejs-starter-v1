export default [
  {
    path: "/",
    name: "SigninLayout",
    component: () => import('./Layout.vue'),
    children: [
      {
        path: "/",
        name: "SigninPage",
        component: () => import('./pages/Index.vue'),
      },
    ]
  },
]