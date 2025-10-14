<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Typed from 'typed.js'

const props = defineProps({
  id: String
});

const typedElement = ref(null)
let typedInstance = null


onMounted(() => {
  typedInstance = new Typed(typedElement.value, {
    strings: ['Hello there!', 'I’m Markus'],
    typeSpeed: 60,
    backSpeed: 30,
    loop: true,
  });

})

onUnmounted(() => {
  if (typedInstance) {
    typedInstance.destroy()
  }
})

const workTech = [
  'Vue',
  'Laravel',
  'MySQL',
  'JavaScript',
  'CSS',
  'SCSS',
  'PHP',
  'Axios',
];
const famTech = [
  'Tailwind',
  'Pinia',
  'Node.js',
  'Express 5',
  'CORS',
  'Apache Kafka',
  'Express Rate Limit',
  'Node-Cache',
  'Nodemon',
  'ESLint',
];
const tools = [
  'Visual Studio Code',
  'Jira',
  'Git',
  'GitHub',
  'Postman',
  'npm',
  'dotenv',
];
</script>

<template>
    <div class="section" :id="id">
        <div class="avatar-section">
          <div class="avatar-wrapper">
              <img class="avatar-image" src="../assets/main.webp" alt="Image of me" loading="lazy">
              <div class="avatar-text">
              <span ref="typedElement" class="typed"></span>
              </div>
          </div>
        </div>
        <div>
            <h1 class="title-heading" data-backdrop-text="About Me">About Me</h1>
            <h2>Junior Fullstack Developer</h2> 
            <p>I’m a junior web developer with experience in PHP, Laravel, MySQL, Vue, and JavaScript. I’m passionate about building efficient and user-friendly web solutions, always striving for high quality—both in independent projects and team collaborations. I enjoy building practical solutions, solving problems, and staying curious. Off-screen, I play golf, follow football, and explore new tech.</p>
            <ul>
                <li><a href="https://www.linkedin.com/in/markusohlsson/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://github.com/markusohlsson" target="_blank" rel="noopener noreferrer">Github</a></li>
                <li><a href="mailto:hello@ohlsson.dev">Mail</a></li>
            </ul>
        </div>
        <div>
          <h3>Currently Learning</h3>
        <p>
          I’m currently studying for the <strong>AWS Certified Cloud Practitioner (CLF-C02)</strong> certification.  
          My goal is to deepen my understanding of cloud computing fundamentals, AWS services, and deployment workflows  
          to better integrate scalable and reliable cloud solutions into projects and applications of any kind.
        </p>
        </div>
        <div>
            <h4>Core Tech Stack</h4>
            <ul>
                <li v-for="tech in workTech"> {{ tech }}</li>
            </ul>
        </div>
          <div>
          <h4>Tools</h4>
          <ul>
            <li v-for="tool in tools">{{ tool }}</li>
          </ul>
        </div>
        <div>
            <h4>Explored / Learning</h4>
            <ul>
                <li v-for="tech in famTech"> {{ tech }}</li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
/* --- Base: Mobile first --- */
h2 {
  font-size: clamp(1rem, 1rem + 1vw, 2.2rem);
  margin-top: 0;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}

h3 {
  font-size: clamp(1.2rem, 1rem + 0.6vw, 1.5rem);
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}
h4 {
  font-size: clamp(1rem, 1rem + 0.4vw, 1.2rem);
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}

p {
  font-size: clamp(0.85rem, 0.7rem + 0.3vw, 1rem);
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  line-height: 1.25;
}

ul {
  width: 100%;  
  padding-left: 0;
}

li {
  display: inline-flex;
  align-items: center;
  border: 1px dashed rgba(0, 0, 0, 0.2);
  border-radius: 2em;
  margin: 0 clamp(4px, 2px + 0.5vw, 7px) clamp(7px, 4px + 0.5vw, 10px) 0;
  padding: clamp(0.25em, 0.2em + 0.3vw, 0.5em) clamp(0.5em, 0.3em + 0.5vw, 1em);
  font-size: clamp(0.8rem, 0.7rem + 0.2vw, 1rem);
  transition: transform linear 0.1s;
  position: relative;
}

li a {
  color: black;
  text-decoration: none;
  font-size: 0.9rem;
  padding: 0.3em 0.6em;
}

li:hover {
  transform: scale(1.1);
}

.section {
  display: flex;
  flex-direction: column;
}

.tools-tech {
  display: block;
}

.avatar-wrapper {
  position: relative;
  display: inline-block;
}

.avatar-image {
  width: clamp(200px, 140px + 5vw, 250px);
  height: clamp(200px, 140px + 5vw, 250px);
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  border: 1px dashed rgba(0, 0, 0, 0.2);
  display: block;
  filter: grayscale(1);
}

.avatar-text {
  position: absolute;
  bottom: 1em;
  left: 0.5em;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  border-radius: 2em;
  padding: 0.5em 1em;
  color: white;
  font-weight: 400;
  font-size: 0.9em;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 8px 26px 0 rgba(22, 24, 26, 0.11);
}

.typed {
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 0.5px;
  font-size: 0.9rem;
}

.avatar-section {
  position: relative;
}

/* --- Larger screens --- */
@media (min-width: 1100px) {
  .section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto auto;
  }

  /* Avatar */
  .section > :nth-child(1) {
    grid-column: 1 / 2;
    grid-row: 1;
  }

  /* About text */
  .section > :nth-child(2) {
    grid-column: 2 / 4;
    grid-row: 1;
  }

  /* NEW: Currently Learning */
  .section > :nth-child(3) {
    grid-column: 1 / 4;
    grid-row: 2;
  }

  /* Core Tech Stack */
  .section > :nth-child(4) {
    grid-column: 1 / 2;
    grid-row: 3;
  }

  /* Tools */
  .section > :nth-child(5) {
    grid-column: 2 / 3;
    grid-row: 3;
  }

  /* Explored / Learning */
  .section > :nth-child(6) {
    grid-column: 3 / 4;
    grid-row: 3;
  }
}

@media (min-width: 1921px) {
  
}
</style>