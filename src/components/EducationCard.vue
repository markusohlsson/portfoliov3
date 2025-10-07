<template>
    <div class="resume-card">
        <div class="resume-icon">
            <GraduationCap />
        </div>
        <div class="resume-section">
            <span class="resume-date">{{ details.date }}</span>
            <h3 class="resume-level">{{ details.level }}</h3>
            <span class="resume-location">@ {{ details.school }}, {{ details.location }}</span>
            <p class="resume-description">{{ details.description }}</p>
        </div>
    </div>
</template>
<style scoped>
/* --- Base: Mobile first --- */
.resume-card {
  position: relative;
  padding-left: 20px;
  box-sizing: border-box;
}

.resume-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  border-left: 1px dashed rgba(0, 0, 0, 0.2);
}
.resume-description {
    font-size: clamp(0.80rem, 0.7rem + 0.3vw, 0.9rem);
    margin: 0;
    margin-top: 0.5rem;
    line-height: 1.25;
}
.resume-location {
  font-style: italic;
}

.resume-date {
  position: relative;
  display: inline-block;
  border: 1px dashed rgba(0, 0, 0, 0.2);
  border-radius: 2em;
  margin-bottom: 1em;
  padding: 0.4em 0.8em;
  font-family: "Poppins", sans-serif;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 500;
}

.resume-date::before {
  content: '';
  position: absolute;
  top: 50%;
  left: -20px;
  transform: translateY(-50%);
  width: 20px;
  height: 1px;
  border-top: 1px dashed rgba(0, 0, 0, 0.2);
}

.resume-date::after {
  content: '';
  position: absolute;
  top: 50%;
  left: -23px;
  transform: translateY(-50%);
  background: black;
  width: 5px;
  height: 5px;
  border-radius: 50%;
}

.resume-level {
  font-weight: 500;
  font-size: 1.2rem;
  letter-spacing: -0.3px;
  margin: 0.2rem 0;
}

.resume-icon svg {
  height: 25px;
  width: 25px;
  padding-bottom: 0.3rem;
}

/* --- Larger screens --- */
@media (min-width: 1100px) {
  .resume-level {
    font-size: 1.25rem;
  }
  span {
    font-size: 1rem;
  }

  .resume-date {
    padding: 0.5em 1em;
    font-size: 0.9rem;
  }

  .resume-icon svg {
    height: 30px;
    width: 30px;
    padding-bottom: 0.5rem;
  }
}
</style>
<script setup>
import { GraduationCap } from 'lucide-vue-next';
defineProps({
    details: {
        type: Object,
        default: ()=>{},
    }
})
</script>