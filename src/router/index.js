import { createRouter, createWebHistory } from 'vue-router';
import AboutSection from '../components/AboutSection.vue';
import Resume from '../components/Resume.vue';
import ProjectSection from '../components/ProjectSection.vue';
import Awards from '../components/Awards.vue';
import Contact from '../components/Contact.vue';

const routes = [
  { path: '/', component: AboutSection, meta: { title: 'About Me', description: 'Welcome to my developer portfolio.' } },
  { path: '/about', component: AboutSection, meta: { title: 'About Me', description: 'Learn about me, my skills, and experience.' } },
  { path: '/resume', component: Resume, meta: { title: 'Resume', description: 'View my professional resume and experience.' } },
  { path: '/portfolio', component: ProjectSection, meta: { title: 'Portfolio', description: 'Check out my projects and work.' } },
  { path: '/portfolio/:id', component: ProjectSection, meta: { title: 'Project Details', description: 'Detailed view of a specific project.' } },
  { path: '/awards', component: Awards, meta: { title: 'Awards', description: 'See the awards and recognition I’ve received.' } },
  { path: '/contact', component: Contact, meta: { title: 'Contact', description: 'Get in touch with me.' } },
];

const router = createRouter({
  history: createWebHistory(), 
  routes,
});

// Optional: redirect '/' to '/about' on desktop
router.beforeEach((to, from, next) => {
  if (to.path === '/' && window.innerWidth > 768) {
    next('/about');
  } else {
    next();
  }
});

// Update <title> and <meta name="description"> dynamically
router.afterEach((to) => {
  if (to.meta.title) {
    document.title = `${to.meta.title} | Ohlsson.dev`;
  }

  let meta = document.querySelector('meta[name="description"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', 'description');
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', `${to.meta.description || ''} | Ohlsson.dev`);
});
export default router;
