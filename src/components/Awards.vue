<template>
    <div class="section" :id="id">
        <h1 class="title-heading" data-backdrop-text="Awards">Awards & Honors</h1>
        <div>
            <template v-for="award in awards">
                <AwardCard :award="award" />
            </template>
        </div>
    </div>
</template>

<script setup>
import { Award } from 'lucide-vue-next';
import AwardCard from './AwardCard.vue';
const props = defineProps({
  id: String
});
const awards = [
    {
        title: 'Rookie Of The Year',
        issuedBy: 'Webhelp',
        year: '2018',
        description: 'Stable, independent, flexible and qualitative. Very quick to get into the work as well as the team. Has in a short time become a person to trust, takes responsibility for his own work and carries it out in a satisfactory manner.',
        icon: Award,
    },
    {
        title: 'Star Award Of The Month',
        issuedBy: 'Webhelp',
        year: '2018',
        description: 'This person hasnt worked with us for long, and during this very short time, he has shown his skills with a lot of surprises. Hes extremely good in both assignments and delivers exceptionally well. I am extremely grateful that this person is in my team.'
    },
    {
        title: 'Employee Of The Month',
        issuedBy: 'McDonalds',
        year: '2017',
        description: 'Markus Ohlsson is a lovely and nice guy who always does a 100% job at his stations in production. Encourages and leads other employees to do better work. Coaches and helps others. Markus strength is his high work ethic to strive to always carry out the right operational routines and deliver high KSR in his area. A good role model for other employees!'
    }
]
</script>
