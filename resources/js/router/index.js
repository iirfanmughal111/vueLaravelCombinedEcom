import { createWebHistory, createRouter } from 'vue-router'

import Contact from '@/components/Contact.vue';
import About from '@/components/About.vue';
import Home from '@/components/HomeView.vue';
import SingleProduct from '@/components/Products/SingleProduct.vue';
import Categories from '@/components/Products/SingleProduct.vue';

const routes = [
  { path: '/', name:'home', component: Home },

  { path: '/about', name:'about', component: About },
  { path: '/contact', name:'contact', component: Contact },
  { path: '/products/:id', name:'productView', component: SingleProduct,props:true },
  { path: '/category/:id?', name:'categoryArchive', component: Categories,props:true },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;