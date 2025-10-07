<template>
  <div class="section" :id="id">
    <h1 class="title-heading" :data-backdrop-text="'Portfolio'"> 
      Portfolio
    </h1>
    <div class="title-wrapper">
      <transition name="fade">
        <h2>{{ selectedProject ? selectedProject.title : 'My Recent Projects' }}</h2>
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

      <SelectedProject 
        v-if="selectedProject" 
        :project="selectedProject" 
        @back="backToGrid" 
      />
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted, onBeforeUnmount, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ProjectCard from './ProjectCard.vue';
import { projects } from '../data/projects.js';
import SelectedProject from './SelectedProject.vue';

const props = defineProps({ id: String });

const router = useRouter();
const route = useRoute();

const scrollContainer = ref(null);
const selectedProject = ref(null);
let sectionObserver = null;

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
      router.push('/portfolio');
    }, 500);
  }
}

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

  const sectionEl = document.getElementById(props.id);
  if (sectionEl) {
    sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio === 0 && selectedProject.value) {
            selectedProject.value = null;
            if (route.path !== '/portfolio') router.replace('/portfolio');
          }
        });
      },
      { threshold: [0] }
    );
    sectionObserver.observe(sectionEl);
  }
});

onBeforeUnmount(() => {
  if (sectionObserver) sectionObserver.disconnect();
});

watch(() => route.params.id, (newId) => {
  if (newId) {
    const project = projects.find(p => p.id === newId);
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
  } else {
    backToGrid();
  }
});
</script>

<style scoped>
/* --- Base: Mobile first --- */
h2 {
  font-size: 1.7rem;
  margin-top: 0;
  margin-bottom: 0.5rem;
  line-height: 1.2;
  text-align: center;
}

.title-wrapper {
  min-height: 3rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.projects-scroll-container {
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  width: 100%;
  height: 100%;
  scrollbar-width: none;
}
.projects-scroll-container::-webkit-scrollbar {
  display: none;
}

.projects-grid-section {
  flex: 0 0 100%;
  scroll-snap-align: start;
  width: 100%;
  display: block;
  height: 100%;
}

.projects-grid {
  display: grid;
  grid-template-columns: 1fr; /* mobile: 1 column */
  gap: 0.5rem;
  width: 100%;
  height: 100%;
}

.project-wrapper {
  width: 100%;
  height: 100%;
}

.title-heading::before {
  transition: all 0.5s ease;
}

/* --- Larger screens --- */
@media (min-width: 1100px) {
  h2 {
    font-size: 2.2rem;
    text-align: left;
  }

  .projects-grid-section {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .projects-grid {
    grid-template-columns: repeat(2, 1fr); /* desktop: 2 columns */
    grid-auto-rows:min-content;
    gap: 1rem;
  }
}
</style>
