import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import SignUp from '../views/SignUp.vue';
import Posts from '../views/Posts.vue';


const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignUp,
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts,
    // beforeEnter: ()=>{}
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
