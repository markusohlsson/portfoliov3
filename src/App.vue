<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import Navigation from './components/Navigation.vue';
import Header from './components/Header.vue';
import AboutSection from './components/AboutSection.vue';
import Resume from './components/Resume.vue';
import ProjectSection from './components/ProjectSection.vue';
import Awards from './components/Awards.vue';
import Contact from './components/Contact.vue';
import IntroLanding from './components/IntroLanding.vue';

const showIntro = ref(true);
const router = useRouter();
const route = useRoute();

function handleIntroFinished() {
  showIntro.value = false;
}

const sections = ['about', 'resume', 'portfolio', 'awards', 'contact'];
const currentSection = ref(route.path === '/' ? null : route.path.split('/')[1] || 'about');
const containerOffset = ref(0); // desktop translateY snap

// Helper
function getIndex(section) {
  return sections.indexOf(section);
}

// --- Desktop: handle wheel snap scrolling ---
function handleWheel(event) {
  if (window.innerWidth <= 768) return;

  // Exit detail view if open
  if (route.path.startsWith('/portfolio/') && route.params.id) {
    router.push('/portfolio');
    return;
  }

  const currentIndex = getIndex(currentSection.value);
  if (event.deltaY > 0 && currentIndex < sections.length - 1) {
    const next = sections[currentIndex + 1];
    currentSection.value = next;
    containerOffset.value = currentIndex + 1;
    router.push(`/${next}`);
  } else if (event.deltaY < 0 && currentIndex > 0) {
    const prev = sections[currentIndex - 1];
    currentSection.value = prev;
    containerOffset.value = currentIndex - 1;
    router.push(`/${prev}`);
  }
}

// --- Watch for URL changes (Desktop only) ---
watch(route, (newRoute) => {
  if (window.innerWidth <= 768) return; // ❗ mobile ignores this entirely

  if (newRoute.path === "/") {
    currentSection.value = null;
    return;
  }

  const newSection = newRoute.path.split('/')[1];
  const newIndex = getIndex(newSection);

  // Background gradient scroll effect
  const sectionCount = sections.length;
  const percentage = (newIndex / (sectionCount - 1)) * 100;
  document.body.style.backgroundPosition = `0% ${percentage}%`;

  if (newIndex !== containerOffset.value) {
    containerOffset.value = newIndex;
    currentSection.value = newSection;
  }
});

onMounted(() => {
  // Desktop snap scroll only
  if (window.innerWidth > 768) {
    window.addEventListener('wheel', handleWheel, { passive: true });

    if (currentSection.value) {
      containerOffset.value = getIndex(currentSection.value);
    }
  }

  // ❌ Mobile: no observer, no scroll listener, no auto scroll
});

onBeforeUnmount(() => {
  window.removeEventListener('wheel', handleWheel);
});
</script>

<template>
  <IntroLanding v-if="showIntro" @finished="handleIntroFinished" />
  <Header />
  <div class="main-container">
    <div class="main-left">
      <Navigation :current-section="currentSection" />
    </div>
    <div class="main-right">
      <div
        class="sections-wrapper"
        :style="{ transform: `translateY(-${containerOffset * 100}%)` }"
      >
        <AboutSection id="about" />
        <Resume id="resume" />
        <ProjectSection id="portfolio" />
        <Awards id="awards" />
        <Contact id="contact" />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* --- Base: Mobile first --- */
.main-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 95vw;
  box-sizing: border-box;
  padding: 1rem;
  margin: 0 auto;
  height: auto;
  gap: 1rem;
}

.main-left {
  flex: 0 0 auto;
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
  position: sticky;
  top: 24px;
  z-index: 111;
  align-self: flex-start;
}

.main-right {
  flex: 1 0 auto;
  width: 100%;
  height: auto;
  overflow: visible;
  border: none;
  box-shadow: none;
  border-radius: 0.5em;
  position: relative;
}

.sections-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: auto;
}

.sections-wrapper > * {
  padding: 1em;
  box-sizing: content-box;
  border-radius: 0.5em;
}

/* --- Tablet & Desktop --- */
@media (min-width: 1100px) {
  .main-container {
    flex-direction: row;
    max-width: 80vw;
    gap: 2%;
    height: auto;
  }
  .row {
    max-width: 80vw;
  }

  .main-left {
    flex: 0 0 20%;
    max-width: 20%;
    margin-bottom: 0;
    position: static;
    top: auto;
  }

  .main-right {
    flex: 1;
    overflow: hidden;
    height: 80vh;
    box-shadow: 0 8px 26px rgba(22, 24, 26, 0.07);
  }

  .sections-wrapper {
    transition: transform 0.6s ease;
    height: 100%;
    gap: 0;
  }

  .sections-wrapper > * {
    height: 100%;
    min-height: 100%;
    max-height: 100%;
    padding: 3em;
    box-sizing: border-box;
  }
}
@media (min-width: 1921px) {
  .main-container {
    max-width: 70vw;
  }
  .row {
    max-width: 70vw;
  }
}
</style>

