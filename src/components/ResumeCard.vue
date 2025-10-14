<template>
    <div class="resume-card">
        <div class="resume-icon" v-if="details.icon">
            <BriefcaseBusiness />
        </div>
        <div class="resume-section">
            <span class="resume-date">{{ details.date }}</span>
            <h3 class="resume-level">{{ details.title }}</h3>
            <span class="resume-location">@ {{ details.workplace }}, {{ details.location }}</span>
            <p class="resume-description">
              {{ displayedDescription }}
              <span v-if="isTruncated" class="read-more" @click="toggleReadMore">
                {{ expanded ? ' Show less' : '... Read more' }}
              </span>
            </p>
        </div>
    </div>
</template>
<style scoped>
/* --- Base: Mobile first --- */
.resume-card {
  position: relative;
  padding-left: clamp(12px, 1.5vw, 18px);
  padding-bottom: clamp(18px, 2.5vh, 28px);
}
.resume-description {
    font-size: clamp(0.7rem, 0.6rem + 1vw, 0.8rem);
    margin: 0;
    margin-top: 0.5rem;
    line-height: 1.25;
}
.resume-location {
  font-style: italic;
}
.resume-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  border-left: 1px dashed rgba(0, 0, 0, 0.2);
}

.resume-date {
  position: relative;
  display: inline-block;
  border: 1px dashed rgba(0, 0, 0, 0.2);
  border-radius: 2em;
  margin-bottom: 0.5em;
  padding: 0.5em 0.7em;
  font-size: 0.85rem; /* mobile default */
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
  font-size: 1.2rem; /* mobile default */
  letter-spacing: -0.3px;
  margin: 0.2rem 0;
}

.resume-icon svg {
  height: 25px; /* mobile default */
  width: 25px;
  padding-bottom: 0.3rem;
}
.read-more {
  font-size: clamp(0.7rem, 0.6rem + 1vw, 0.8rem);
  color: #000000;
  cursor: pointer;
  user-select: none;
}
.read-more:hover {
  text-decoration: underline;
}

/* --- Larger screens --- */
@media (min-width: 1100px) {
  .resume-level {
    font-size: 1.25rem;
  }


  .resume-icon svg {
    height: 30px;
    width: 30px;
    padding-bottom: 0.5rem;
  }

}
</style>

<script setup>
import { computed } from 'vue';
import { BriefcaseBusiness } from 'lucide-vue-next';

const props = defineProps({
  details: Object,
  expandedIndex: Number,
  currentIndex: Number,
});

const emit = defineEmits(['toggle']);

const maxWords = 15;

// Only expanded if this card’s index matches parent state
const expanded = computed(() => props.expandedIndex === props.currentIndex);

// Truncated text
const displayedDescription = computed(() => {
  if (!props.details.description) return '';
  const words = props.details.description.split(' ');
  if (expanded.value || words.length <= maxWords) return props.details.description;
  return words.slice(0, maxWords).join(' ');
});

// Show "Read more" only if text is longer than maxWords
const isTruncated = computed(() => {
  if (!props.details.description) return false;
  return props.details.description.split(' ').length > maxWords;
});

function toggleReadMore() {
  // emit to parent to update expandedIndex
  emit('toggle');
}
</script>