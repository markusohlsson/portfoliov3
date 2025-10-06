<template>
  <div class="section" :id="id">
    <h5 class="title-heading" :data-backdrop-text="'Portfolio'">  <span class="heading-text">
      Portfolio
  </span></h5>
    <div class="title-wrapper">
      <transition name="fade">
        <h1>{{ selectedProject ? selectedProject.title : 'My Recent Projects' }}</h1>
      </transition>
    </div>
    <div class="projects-scroll-container" ref="scrollContainer">
      <!-- Grid section -->
      <div class="projects-grid-section">
        <div class="projects-grid">
          <template v-for="project in projects" :key="project.id">
            <div class="project-wrapper">
              <ProjectCard 
                :project="project" 
                @click="selectProject(project)"
              />
            </div>
          </template>
        </div>
      </div>

       <SelectedProject v-if="selectedProject" :project="selectedProject" @back="backToGrid" />
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ProjectCard from './ProjectCard.vue';
import { projects } from '../data/projects.js';

import SelectedProject from './SelectedProject.vue';
const props = defineProps({
  id: String
});


const router = useRouter();
const route = useRoute();


const scrollContainer = ref(null);
const selectedProject = ref(null);

function selectProject(project) {
  selectedProject.value = project;
  router.push(`/portfolio/${project.id}`);

  nextTick(() => {
    if (scrollContainer.value) {
      const detailSection = scrollContainer.value.children[1];
      if (detailSection) {
        scrollContainer.value.scrollTo({ left: detailSection.offsetLeft, behavior: 'smooth' });
      }
    }
  });
}

function backToGrid() {
  if (scrollContainer.value) {
    scrollContainer.value.scrollTo({ left: 0, behavior: 'smooth' });
    setTimeout(() => {
      selectedProject.value = null;
      router.push('/portfolio'); // go back to base projects route
    }, 500);
  }
}

/* -------------------------
   Auto-select project if URL has ID
--------------------------*/
onMounted(() => {
  const projectId = route.params.id;
  if (projectId) {
    const project = projects.find(p => p.id === projectId);
    if (project) {
      selectedProject.value = project;
      nextTick(() => {
        if (scrollContainer.value) {
          const detailSection = scrollContainer.value.children[1];
          if (detailSection) {
            scrollContainer.value.scrollTo({ left: detailSection.offsetLeft, behavior: 'auto' });
          }
        }
      });
    }
  }
});

/* -------------------------
   Watch route changes (optional: handle back button)
--------------------------*/
watch(
  () => route.params.id,
  (newId) => {
    if (newId) {
      const project = projects.find(p => p.id === newId);
      if (project) {
        selectedProject.value = project;
        nextTick(() => {
          if (scrollContainer.value) {
            const detailSection = scrollContainer.value.children[1];
            if (detailSection) {
              scrollContainer.value.scrollTo({
                left: detailSection.offsetLeft,
                behavior: 'auto'
              });
            }
          }
        });
      }
    } else {
      backToGrid();
    }
  }
);
</script>

<style scoped>
/* --- Base: Mobile first --- */
h1 {
  font-size: 1.7rem; /* mobile default */
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
  text-align: center;
}

.title-wrapper {
  min-height: 3rem; /* adjust to your h1 height */
}

/* Fade transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Heading text animations */
.heading-text {
  display: inline-block;
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.heading-text-enter-active,
.heading-text-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.heading-text-enter-from,
.heading-text-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Projects horizontal scroll container */
.projects-scroll-container {
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  width: 100%;
  scrollbar-width: none;
}
.projects-scroll-container::-webkit-scrollbar {
  display: none;
}

/* Grid section */
.projects-grid-section {
  flex: 0 0 100%;
  scroll-snap-align: start;
  display: block; /* mobile default: block */
}

.projects-grid {
  display: grid;
  grid-template-columns: 1fr; /* mobile default: single column */
  gap: 0.2rem;
}

.title-heading::before {
  transition: all 0.5s ease;
}

/* --- Larger screens --- */
@media (min-width: 1100px) {
  h1 {
    font-size: 2.2rem;
    text-align: left;
  }

  .projects-grid-section {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
