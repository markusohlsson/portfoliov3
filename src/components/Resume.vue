<template>
    <div class="section" :id="id">
    <h1 class="title-heading" data-backdrop-text="Resume">Resume</h1 >
    <h2 v-if="!isMobile">Education & Experience</h2>
    <h2 v-else>Education</h2>
    <div class="resume-grid">
        <div class="resume-col">
            <EducationCard :details="education[0]" />
        </div>
        <div class="resume-col">
            <h2 v-if="isMobile">Experience</h2>
            <ResumeCard
              v-for="(experience, index) in experiences"
              :key="index"
              :details="experience"
              :expandedIndex="expandedIndex"
              :currentIndex="index"
              @toggle="handleToggle(index)"
            />
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

h2 {
  font-size: clamp(1rem, 1rem + 1vw, 2.2rem);
  margin-top: 0;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}

/* --- Larger screens --- */
@media (min-width: 1100px) {

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
        description: 'A two-year vocational education with a focus on frontend development, e-commerce, and web design. Gained practical skills in HTML, CSS, JavaScript, and popular frameworks like React and Vue.js. Completed several projects including building responsive websites and e-commerce platforms.', 
    }
]
const experiences = [
    {
        date: 'May 2024 - Aug 2025',
        workplace: 'Webhallen Sverige AB',
        location: 'Stockholm',
        title: 'Fullstack Developer Consultant',
        icon: BriefcaseBusiness,
        description: 'Contributed to enhancing the company’s webshop as part of an agile team, collaborating with developers, UX designers, and other internal teams to deliver user-focused, business-aligned solutions. Developed and maintained core features using Laravel, Vue.js, MySQL, and SCSS, while leveraging Git for version control and JIRA for agile task management.'
    },
    {
        date: 'Oct 2023 - May 2024',
        workplace: 'Webhallen Sverige AB',
        location: 'Stockholm',
        title: 'Fullstack Developer Intern',
        description: 'Gained full-stack experience in an agile team, contributing to webshop development with Laravel, Vue.js, PHP, JavaScript, and MySQL. Managed version control using Git and later transitioned into a consultant role.'
    },
    {
        date: 'Sep 2020 - Sep 2022',
        workplace: 'Webhallen Sverige AB',
        location: 'Stockholm',
        title: 'Customer Service Agent',
        description: 'Provided support via chat, email, phone, and forums, troubleshooting and resolving order and delivery issues while ensuring a positive customer experience through effective communication and customer-focused problem-solving.',
    }
]
const isMobile = ref(false);
const expandedIndex = ref(null);

function handleToggle(index) {
  expandedIndex.value = expandedIndex.value === index ? null : index;
}
onMounted(() => {
  isMobile.value = window.innerWidth < 768; // or use a resize listener
});
</script>