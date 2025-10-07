import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import AboutSection from '../components/AboutSection.vue';
import Resume from '../components/Resume.vue';
import ProjectSection from '../components/ProjectSection.vue';
import Awards from '../components/Awards.vue';
import Contact from '../components/Contact.vue';

const routes = [
  { path: '/', component: AboutSection },
  { path: '/about', component: AboutSection },
  { path: '/resume', component: Resume },
  { path: '/portfolio', component: ProjectSection },
  { path: '/portfolio/:id', component: ProjectSection },
  { path: '/awards', component: Awards },
  { path: '/contact', component: Contact },
];


const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(), // Temporarily switched to hash history for ghpages
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path === '/' && window.innerWidth > 768) {
    next('/about');   // desktop → go straight to /about
  } else {
    next();           // mobile → stay on /
  }
});

export default router;
