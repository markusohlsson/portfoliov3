<template>
<div class="project-detail-section">
    <div class="link-container">
        <button class="back-btn" @click="$emit('back')">
          <ArrowLeft />
        </button>
        <div class="link-group">
          <a class="link" :href="project.demo" target="_blank" rel="noopener noreferrer"><ExternalLink/></a>
          <a class="link" :href="project.repo" target="_blank" rel="noopener noreferrer"><Github/></a>
        </div>
    </div>
    <img 
      class="detail-image"
      :src="project.images.m"
      :alt="project.title + ' Screenshot'"
      loading="lazy"
      :srcset="`
        ${project.images.xs} 480w,
        ${project.images.s} 768w,
        ${project.images.m} 1024w,
        ${project.images.l} 1920w
      `"
      sizes="(max-width: 480px) 90vw,
            (max-width: 768px) 80vw,
            (max-width: 1024px) 60vw,
            50vw"
    />
    <p>{{ project.description }}</p>
    <div class="tech-container">
        <h3>Built with:</h3>
        <ul>
            <li v-for="tech in project.fullTech">{{ tech }}</li>
        </ul>
    </div>
</div>
</template>

<script setup>
import { ArrowLeft, Github, ExternalLink } from 'lucide-vue-next';
defineProps({
    project: {
        type: Object,
        default: ()=>{},
    }
})
</script>

<style scoped>
/* --- Base: Mobile first --- */
.tech-container {
  width: 95%;
  margin: 0 auto;
}

.tech-container h3 {
  width: 100%;
  margin: 10px auto;
  font-size: 1rem;
  text-align: center;
}

.link-container {
  position: static;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.link-group {
  display: flex;
  gap: 20px;
}

.link svg {
  height: 25px;
  width: 25px;
  color: black;
  transition: transform 0.3s ease, color 0.2s ease;
}

.link svg:hover {
  color: rgba(0, 0, 0, 0.85);
  scale: 1.1;
}

ul {
  width: 100%;
  padding-left: 0;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}

li {
  display: inline-flex;
  align-items: center;
  border: 1px dashed rgba(0, 0, 0, 0.2);
  border-radius: 2em;
  margin: 0 5px 7px 0;
  padding: 0.25em 0.5em;
  transition: linear 0.1s;
}

.detail-image {
  width: clamp(250px, 80%, 400px);
  height: auto;
  object-fit: cover;
  border-radius: 0.5em;
}

.detail-title {
  margin: 0;
  font-weight: 600;
  font-size: 1.5rem;
  text-align: center;
}

.project-detail-section {
  margin-left: 10px;
  flex: 0 0 100%;
  height: 100%;
  scroll-snap-align: start;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.project-detail-section p {
  width: 90%;
  font-size: 0.9rem;
}

.back-btn {
  position: static;
  top: 1rem;
  left: 1rem;
  background: transparent;
  border: none;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10;
  transition: transform 0.3s ease;
  color: var(--text-color);
}
.back-btn svg {
  height: 40px;
  width: 40px;
}
.back-btn:hover {
  transform: scale(1.1);
}
/* --- Larger screens --- */
@media (min-width: 1100px) {
  .tech-container {
    width: 90%;
  }

  .tech-container h3 {
    width: 80%;
    font-size: 1.5rem;
    text-align: left;
  }

  .link svg {
    height: 40px;
    width: 40px;
  }

  ul {
    width: 80%;
  }

  li {
    font-size: 0.9rem;
    padding: 0.5em 1em;
    margin: 0 7px 10px 0;
  }
  .detail-title {
    font-size: 2.5rem;
  }
  .back-btn {
    width: 3.5rem;
    height: 3.5rem;
  }
  .back-btn svg {
    height: 100%;
    width: 100%;
  }
}
</style>