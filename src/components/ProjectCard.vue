<script setup>
import { ref } from 'vue'
import { Github, SquareArrowOutUpRight } from 'lucide-vue-next'

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['click'])

const isActive = ref(false)
const isMobile = window.matchMedia('(max-width: 768px)').matches

function handleClick(event) {
  if (isMobile) {
    if (!isActive.value) {
      // first tap → activate hover state
      isActive.value = true
      // prevent triggering parent navigation
      event.stopPropagation()

      // optional: reset if no second click within X seconds
      setTimeout(() => (isActive.value = false), 3000)
      return
    }
    // second tap → let click bubble to parent
    isActive.value = false
  }

  // for desktop, just emit normally
  emit('click', props.project)
}
</script>

<template>
  <div
    class="project-card"
    :class="{ active: isActive }"
    @click="handleClick"
  >
    <img class="project-image" :src="project.image" :alt="project.title" loading="lazy" />
    <span class="project-tech">{{ project.tech.join(', ') }}</span>
    <div class="project-caption">
      <h2>{{ project.title }}</h2>
      <div class="project-links">
        <a :href="project.demo" target="_blank" rel="noopener noreferrer"><SquareArrowOutUpRight /></a>
        <a :href="project.repo" target="_blank" rel="noopener noreferrer"><Github /></a>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* --- Base: Mobile first --- */
.project-card {
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  min-height: auto; /* mobile default: auto */
  border-radius: 0.5em;
}

.project-image {
  max-width: 100%;
  object-fit: contain;
  height: auto;
  transition: filter 0.3s ease, scale 0.3s ease;
}

.project-tech {
  position: absolute;
  top: 8px;
  right: 8px;
  display: inline-block;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  border-radius: 2em;
  padding: 0.3em 0.6em;
  color: white;
  font-weight: 400;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.project-caption {
  z-index: 1;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  visibility: hidden;
  opacity: 0;
  margin-bottom: -6px;
  padding: 0 30px 24px;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  color: white;
  font-weight: 500;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.project-caption::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to top, rgba(0,0,0,0.3), transparent);
  z-index: -1;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-caption h2 {
  margin: 0;
  color: white;
  font-weight: 600;
  letter-spacing: 0.5px;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
  font-size: 1.5rem;
  transition: color 0.5s ease;
}

.project-caption h2:hover {
  -webkit-text-fill-color: white;
  -webkit-text-stroke-width: 0px;
  cursor: pointer;
}

.project-card:hover .project-caption {
  visibility: visible;
  opacity: 1;
}

.project-card:hover .project-caption::before {
  opacity: 1;
}

.project-card:hover .project-image {
  filter: blur(1.5px);
  scale: 1.04;
}

.project-card:hover {
  cursor: pointer;
}

.project-card.active .project-caption {
  visibility: visible;
  opacity: 1;
}

.project-card.active .project-caption::before {
  opacity: 1;
}

.project-card.active .project-image {
  filter: blur(1.5px);
  scale: 1.04;
}

.project-card.active h2 {
  -webkit-text-fill-color: white;
  -webkit-text-stroke-width: 0px;
}

.project-links {
  display: flex;
  gap: 15px;
  flex-direction: row;
}

.project-links a {
  color: white;
  transition: color 0.3s ease;
}

.project-links a:hover {
  color: #ffffff5d;
}

/* --- Larger screens --- */
@media (min-width: 1100px) {
  .project-card {
    min-height: 255px;
    max-height: 275px;
  }

  .project-tech {
    font-size: 0.9rem;
    padding: 0.5em 1em;
    top: 16px;
    right: 16px;
  }

  .project-caption h2 {
    font-size: 2.5rem;
  }
}
</style>
