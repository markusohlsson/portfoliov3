<template>
    <div class="section" :id="id">
    <h5 class="title-heading" data-backdrop-text="Resume">Resume</h5>
    <h1 v-if="!isMobile">Education & Experience</h1>
    <h1 v-else>Education</h1>
    <div class="resume-grid">
        <div class="resume-col">
            <EducationCard :details="education[0]" />
        </div>
        <div class="resume-col">
            <h1 v-if="isMobile">Experience</h1>
            <template v-for="experience in experiences">
                <ResumeCard :details="experience" />    
            </template>
        </div>
    </div>
    </div>
</template>

<style scoped>
/* --- Base: Mobile first --- */
.resume-grid {
  display: grid;
  grid-template-columns: 1fr; /* mobile default: single column */
  gap: 2rem; /* spacing between columns */
  position: relative;
}

.resume-col {
  display: flex;
  flex-direction: column;
}

h1 {
  font-size: 1.4rem; /* mobile default */
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}

/* --- Larger screens --- */
@media (min-width: 1100px) {
  h1 {
    font-size: 2.2rem;
  }

  .resume-grid {
    grid-template-columns: 1fr 1fr; /* 50/50 split on desktop */
  }
}
</style>

<script setup>
import ResumeCard from './ResumeCard.vue';
import EducationCard from './EducationCard.vue';
import { BriefcaseBusiness } from 'lucide-vue-next';
import { ref, onMounted} from 'vue';
const props = defineProps({
  id: String
});

const education = [
    {
        date: '2022 - 2024',
        school: 'Medieinstitutet',
        location: 'Stockholm',
        level: 'Frontend Developer Focus E-Commerce', 
    }
]
const experiences = [
    {
        date: 'May 2024 - Aug 2025',
        workplace: 'Webhallen Sverige AB',
        location: 'Stockholm',
        title: 'Fullstack Developer Consultant',
        icon: BriefcaseBusiness,
    },
    {
        date: 'Oct 2023 - May 2024',
        workplace: 'Webhallen Sverige AB',
        location: 'Stockholm',
        title: 'Fullstack Developer Intern',
    },
    {
        date: 'Sep 2020 - Sep 2022',
        workplace: 'Webhallen Sverige AB',
        location: 'Stockholm',
        title: 'Customer Service Agent'
    }
]
const isMobile = ref(false);
onMounted(() => {
  isMobile.value = window.innerWidth < 768; // or use a resize listener
});
</script>