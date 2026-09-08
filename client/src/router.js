import { createRouter, createWebHashHistory } from 'vue-router';

const Home = () => import('./pages/Home.vue');
const Products = () => import('./pages/Products.vue');
const ProductDetail = () => import('./pages/ProductDetail.vue'); 
const Services = () => import('./pages/Services.vue');
const Gallery = () => import('./pages/Gallery.vue');
const About = () => import('./pages/About.vue');

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/products', component: Products, name: 'Products' },
  { path: '/products/:id', component: ProductDetail, name: 'ProductDetail' }, 
  { path: '/services', component: Services, name: 'Services' },
  { path: '/gallery', component: Gallery, name: 'Gallery' },
  { path: '/about', component: About, name: 'About' }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
