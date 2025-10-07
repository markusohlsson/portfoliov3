<template>
    <div class="row">
        <div class="left">
            <h1><span class="stroke-text">Ohlsson</span>.dev</h1>
        </div>
        <div class="right">
            <a  class="icon-wrapper" href="https://github.com/markusohlsson" target="_blank" rel="noopener noreferrer"><Github class="icon"/></a>
            <a  class="icon-wrapper" href="https://www.linkedin.com/in/markusohlsson/" target="_blank" rel="noopener noreferrer"><Linkedin class="icon"/></a>
            <a  class="icon-wrapper" href="mailto:hello@ohlsson.dev"><Mail class="icon"/></a>
        </div>
    </div>
</template>

<script setup>
  import { Github, Linkedin, Mail } from 'lucide-vue-next';
</script>

<style scoped>
/* --- Base: Mobile first --- */
.row {
  display: flex;
  flex-direction: column-reverse; /* mobile default: stacked */
  justify-content: space-between;
  max-width: 95vw;
  margin: 0 auto;
}

.left h1 {
  margin: 0;
  font-size: calc(1.575rem + 3.9vw); /* responsive for small screens */
  font-weight: 500;
  line-height: 1.2;
  margin-left: 1rem;
}

.right {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  padding-right: 20px;
  padding-top: 10px;
}

.icon-wrapper {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.icon {
  color: var(--text-color);
  width: 25px;
  height: 25px;
  transition: transform 0.2s ease, color 0.2s ease;
}

.icon:hover {
  color: rgba(0, 0, 0, 0.85);
  transform: scale(1.1);
}

/* --- Larger screens --- */
@media (min-width: 1100px) {
  .row {
    flex-direction: row;
    max-width: 80vw;
  }

  .left h1 {
    font-size: 4.5rem;
    line-height: 1.2;
  }

  .right {
    justify-content: flex-start;
  }

  .icon-wrapper {
    width: 40px;
    height: 40px;
  }

  .icon {
    width: auto;
    height: auto;
  }
}
@media (min-width: 1600px) {
  .row {
    max-width: 70vw;
  }
}
</style>