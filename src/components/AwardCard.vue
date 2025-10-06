<template>
    <div class="award-card">
        <div class="award-icon" v-if="award.icon">
            <AwardIcon />
        </div>
        <div class="award-section">
            <span class="award-date">{{ award.year }}</span>
            <h5 class="award-title">{{ award.title }} @ {{ award.issuedBy }}</h5>
            <p class="award-description">”{{ award.description }}”</p> 
        </div>
    </div>
</template>
<style scoped>
/* --- Base: Mobile first --- */
.award-card {
  position: relative;
  padding-left: 20px;
  padding-bottom: 30px;
  box-sizing: border-box;
}

.award-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  border-left: 1px dashed rgba(0, 0, 0, 0.2);
}

.award-date {
  position: relative;
  display: inline-block;
  border: 1px dashed rgba(0, 0, 0, 0.2);
  border-radius: 2em;
  padding: 0.4em 0.8em;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 500;
}

.award-date::before {
  content: '';
  position: absolute;
  top: 50%;
  left: -20px;
  transform: translateY(-50%);
  width: 20px;
  height: 1px;
  border-top: 1px dashed rgba(0, 0, 0, 0.2);
}

.award-date::after {
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

.award-title {
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: -0.3px;
  margin: 0.2rem 0;
}

.award-description {
  font-weight: 400;
  font-size: 0.75rem;
}

.award-icon svg {
  height: 25px;
  width: 25px;
  padding-bottom: 0.3rem;
}

/* --- Larger screens --- */
@media (min-width: 1100px) {
  .award-date {
    padding: 0.5em 1em;
    font-size: 0.9rem;
  }

  .award-title {
    font-size: 1.25rem;
  }

  .award-description {
    font-size: 0.8rem;
  }

  .award-icon svg {
    height: 30px;
    width: 30px;
    padding-bottom: 0.5rem;
  }
}
</style>
<script setup>
import { AwardIcon, Quote} from 'lucide-vue-next';
defineProps({
    award: {
        type: Object,
        default: ()=>{},
    }
})
</script>