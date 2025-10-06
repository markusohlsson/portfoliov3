<template>
  <div class="intro-container" :class="{ fadeOut: fadeContainer }" v-if="showIntro">
    <h1 ref="typedElement" class="logo-full"></h1>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import Typed from 'typed.js'

const typedElement = ref(null)
const showIntro = ref(false)
const fadeContainer = ref(false)

onMounted(async () => {
  // Only show intro if not already shown in this session
  if (!sessionStorage.getItem('introShown')) {
    showIntro.value = true

    // Wait for DOM to render the element
    await nextTick()

    if (typedElement.value) {
      const typed = new Typed(typedElement.value, {
        strings: ['<span class="stroke-text">Ohlsson</span>.dev'],
        typeSpeed: 50,
        backSpeed: 0,
        startDelay: 300,
        showCursor: false,
        onComplete: () => {
          fadeContainer.value = true
          setTimeout(() => (showIntro.value = false), 800)
        },
        html: true
      })
    }

    sessionStorage.setItem('introShown', 'true')
  }
})
</script>



<style scoped>
.intro-container {
  position: fixed;
  inset: 0;
  background: #0d0d0d17;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  overflow: hidden;
  transition: opacity 0.8s ease, backdrop-filter 0.8s ease;
  opacity: 1;
}

.intro-container.fadeOut {
  opacity: 0;
  backdrop-filter: blur(0);
}

h1.logo-full {
  font-size: 10rem;
  font-weight: 700;
  color: var(--text-color);
  margin: 0;
  white-space: nowrap;
}
</style>
