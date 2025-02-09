<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import datas from '@/datas/data.json'
import Hero from '@/components/pages/Competition/Hero.vue'
import Fixed from '@/components/pages/Competition/Fixed.vue'
import Timeline from '@/components/pages/Competition/Timeline.vue'
import Prizepool from '@/components/pages/Competition/Prizepool.vue'
import Faq from '@/components/pages/Competition/Faq.vue'
import Contact from '@/components/pages/Competition/Contact.vue'
import NotFound from '@/components/pages/NotFound/NotFound.vue'

interface CompetitionData {
  id: string
  title: string
  description: string
  scale: string
  type: string
  category: string
  registration_link: string
  guidebook_link: string
  period: { startDate: string; endDate: string; step: number; price: string }[]
  requisite: string[]
  timeline: { timeline_name: string; date: string }[]
  FAQ: { question: string; answer: string }[]
  Contact: { name: string; phone: string; line: string }[]
}

const competitionData = ref<CompetitionData | null>(null)
const route = useRoute()

onMounted(() => {
  const id = route.params.id
  competitionData.value = datas.find((comp) => comp.id === id) || null
})
</script>

<template>
  <main
    v-if="competitionData"
    class="flex flex-row justify-between items-stretch gap-12 w-full container pb-24"
  >
    <!-- RELATIVE SIDE -->
    <div class="flex flex-col justify-start items-start gap-8 w-full">
      <!-- HERO -->
      <Hero
        :title="competitionData.title"
        :description="competitionData.description"
        :scale="competitionData.scale"
        :type="competitionData.type"
        :registration_link="competitionData.registration_link"
      />
      <!-- TIMELINE -->
      <Timeline :timelines="competitionData.timeline" />
      <!-- PRIZEPOOL -->
      <Prizepool />
      <!-- FAQ -->
      <Faq :faqs="competitionData.FAQ" />
      <!-- CONTACT -->
      <Contact :contacts="competitionData.Contact" />
    </div>
    <!-- FIXED SIDE -->
    <Fixed
      :category="competitionData.category"
      :periods="competitionData.period"
      :requisites="competitionData.requisite"
      :registration_link="competitionData.registration_link"
      :guidebook_link="competitionData.guidebook_link"
    />
  </main>
  <main v-else>
    <NotFound />
  </main>
</template>
