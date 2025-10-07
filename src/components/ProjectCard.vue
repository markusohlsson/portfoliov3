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
      isActive.value = true
      event.stopPropagation()
      setTimeout(() => (isActive.value = false), 3000)
      return
    }
    isActive.value = false
  }

  emit('click', props.project)
}

// --- Compute srcset string dynamically ---
const srcset = `
  ${props.project.images.xs} 480w,
  ${props.project.images.s} 768w,
  ${props.project.images.m} 1024w,
  ${props.project.images.l} 1920w
`
</script>

<template>
  <div
    class="project-card"
    :class="{ active: isActive }"
    @click="handleClick"
  >
  <div class="project-image-wrapper">
    <img
      class="project-image"
      :src="props.project.images.m"
      :alt="props.project.title"
      loading="lazy"
      :srcset="srcset"
      sizes="(max-width: 480px) 100vw,
            (max-width: 768px) 75vw,
            (max-width: 1024px) 50vw,
            33vw"
    />
  </div>
    <span class="project-tech">{{ project.tech.join(', ') }}</span>
    <div class="project-caption">
      <h3>{{ project.title }}</h3>
      <div class="project-links">
        <a :href="project.demo" target="_blank" rel="noopener noreferrer"><SquareArrowOutUpRight /></a>
        <a :href="project.repo" target="_blank" rel="noopener noreferrer"><Github /></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* --- Your existing styling remains exactly the same --- */
.project-card {
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  min-height: auto;
  border-radius: 0.5em;
}

.project-image-wrapper {
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* fill the wrapper exactly */
  display: block;
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

.project-caption h3 {
  margin: 0;
  color: white;
  font-weight: 600;
  letter-spacing: 0.5px;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
  font-size: clamp(1.5rem, 2vw + 1rem, 2rem);
  transition: color 0.5s ease;
}

.project-caption h3:hover {
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

@media (min-width: 1100px) {
  .project-card {
    max-height: 275px;
  }

  .project-tech {
    font-size: 0.9rem;
    padding: 0.5em 1em;
    top: 16px;
    right: 16px;
  }
}
</style>
