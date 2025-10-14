<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { User, FileText, Grid, Award, Mail } from 'lucide-vue-next';

const router = useRouter();
const route = useRoute();
const isMobile = ref(false);

const links = [
  { text: 'About', path: '/about', icon: User },
  { text: 'Resume', path: '/resume', icon: FileText },
  { text: 'Portfolio', path: '/portfolio', icon: Grid },
  { text: 'Awards', path: '/awards', icon: Award },
  { text: 'Contact', path: '/contact', icon: Mail },
];

const currentPath = computed(() => route.path);

onMounted(() => {
  isMobile.value = window.innerWidth <= 768;
});

function goToSection(path, id) {
  if (isMobile.value) {
    const el = document.getElementById(id);
    const offset = 70; // sticky header height
    if (!el) return;

    const rectTop = el.getBoundingClientRect().top;
    if (Math.abs(rectTop - offset) > 5) {
      const top = rectTop + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }

    setTimeout(() => {
      if (route.path !== path) router.replace(path);
    }, 50);
  } else {
    router.push(path); // desktop: trigger translateY
  }
}
</script>

<template>
  <nav>
    <ul>
      <li v-for="link in links" :key="link.path">
        <router-link
          :to="link.path"
          :class="{ active: currentPath === link.path }"
          @click.native.prevent="goToSection(link.path, link.path.slice(1))"
        >
          <span>{{ link.text }}</span>
          <span class="nav-dot"></span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>


<style scoped>
/* --- Base: Mobile first --- */
nav {
  width: 100%;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  box-shadow: 0 8px 26px 0 rgba(22, 24, 26, 0.07);
  border-radius: 0.5em;
  display: flex;
  flex-direction: row; /* horizontal menu on mobile */
  justify-content: space-between;
  overflow: hidden;
  position: sticky;
  top: 24px;
  font-family: 'Roboto Mono', monospace !important;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row; /* horizontal list on mobile */
  justify-content: space-between;
  gap: 0.5rem;
  width: 100%;
}

li {
  display: flex;
  align-items: center;
  height: 40px;
}

a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.3rem 0;
  text-decoration: none;
  color: #0000005d;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.nav-dot {
  display: none; /* hidden by default on mobile */
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  margin-left: 10px;
  align-items: center;
  justify-content: center;
  position: relative;
}

.nav-dot::before {
  content: '';
  width: 6px;
  height: 6px;
  background-color: #0000005d;
  border-radius: 50%;
  display: block;
  transition: all 0.3s ease;
}

a:not(.active):hover .nav-dot::before {
  background-color: #000000;
}

a.active .nav-dot::before {
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: 2px dotted #000000;
  border-radius: 50%;
  animation: spin 10s linear infinite;
  aspect-ratio: 1 / 1;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

a.active,
a:hover {
  color: #000000;
}
/* --- Desktop: show nav-dots --- */
@media (min-width: 1100px) {
  nav {
    flex-direction: column;
    padding: 1.5em;
  }

  ul {
    flex-direction: column;
    gap: 0.8rem;
  }

  .nav-dot {
    display: flex; /* show dots only on desktop */
  }
}


@media (min-width: 1921px) {
  a {
    font-size:1rem;
  }
}
</style>