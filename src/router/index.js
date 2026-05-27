import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Posts from '../pages/Posts.vue'
import PostDetail from '../pages/PostDetail.vue'
import SocialImpact from '../pages/SocialImpact.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/sobre', name: 'Sobre', component: About },
  { path: '/posts', name: 'Posts', component: Posts },
  { path: '/posts/:id', name: 'PostDetail', component: PostDetail, props: true },
  { path: '/projetos-sociais', name: 'ProjetosSociais', component: SocialImpact },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
