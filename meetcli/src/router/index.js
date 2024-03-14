import Vue from 'vue'
import VueRouter from 'vue-router'
import mainPageComponent from "@/pages/mainPageComponent.vue";
import allBlogPostsPageComponent from "@/pages/allBlogPostsPageComponent.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: mainPageComponent
  },
  {
    path: '/blog',
    name: 'blog',
    component: allBlogPostsPageComponent
  },
  {
    path: '/blog/:id',
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
