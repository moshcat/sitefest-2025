<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import datas from '@/datas/seminar.json'
import Hero from '@/components/pages/Seminar/Hero.vue'
import Speaker from '@/components/pages/Seminar/Speaker.vue'
import Fixed from '@/components/pages/Seminar/Fixed.vue'
import Timeline from '@/components/pages/Seminar/Timeline.vue'
import Faq from '@/components/pages/Seminar/Faq.vue'
import Contact from '@/components/pages/Seminar/Contact.vue'
import NotFound from '@/components/pages/NotFound/NotFound.vue'

interface SeminarData {
  title: string
  description: string
  speakers: string[]
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

const seminarData = ref<SeminarData | null>(null)
const route = useRoute()

onMounted(() => {
  const id = route.params.id
  seminarData.value = datas
})
</script>

<template>
  <main
    v-if="seminarData"
    class="flex flex-row justify-between items-stretch gap-12 w-full container pb-24"
  >
    <!-- RELATIVE SIDE -->
    <div class="flex flex-col justify-start items-start gap-8 w-full">
      <!-- HERO -->
      <Hero
        :title="seminarData.title"
        :description="seminarData.description"
        :scale="seminarData.scale"
        :type="seminarData.type"
        :registration_link="seminarData.registration_link"
      />
      <!-- SPEAKERS -->
      <Speaker :speakers="seminarData.speakers" />
      <!-- TIMELINE -->
      <Timeline :timelines="seminarData.timeline" />
      <!-- FAQ -->
      <Faq :faqs="seminarData.FAQ" />
      <!-- CONTACT -->
      <Contact :contacts="seminarData.Contact" />
    </div>
    <!-- FIXED SIDE -->
    <Fixed
      :category="seminarData.category"
      :periods="seminarData.period"
      :requisites="seminarData.requisite"
      :registration_link="seminarData.registration_link"
      :guidebook_link="seminarData.guidebook_link"
    />
  </main>
  <main v-else>
    <NotFound />
  </main>
</template>
