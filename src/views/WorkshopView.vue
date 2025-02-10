<script setup lang="ts">
import { ref, onMounted } from 'vue'
import datas from '@/datas/workshop.json'
import Hero from '@/components/pages/Workshop/Hero.vue'
import Speaker from '@/components/pages/Workshop/Speaker.vue'
import Fixed from '@/components/pages/Workshop/Fixed.vue'
import Timeline from '@/components/pages/Workshop/Timeline.vue'
import Faq from '@/components/pages/Workshop/Faq.vue'
import Contact from '@/components/pages/Workshop/Contact.vue'
import NotFound from '@/components/pages/NotFound/NotFound.vue'

interface WorkshopData {
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

const workshopData = ref<WorkshopData | null>(null)

onMounted(() => {
  workshopData.value = datas
})
</script>

<template>
  <main
    v-if="workshopData"
    class="flex flex-row justify-between items-stretch gap-12 w-full container pb-24"
  >
    <!-- RELATIVE SIDE -->
    <div class="flex flex-col justify-start items-start gap-8 w-full">
      <!-- HERO -->
      <Hero
        :title="workshopData.title"
        :description="workshopData.description"
        :scale="workshopData.scale"
        :type="workshopData.type"
        :registration_link="workshopData.registration_link"
      />
      <!-- SPEAKERS -->
      <Speaker :speakers="workshopData.speakers" />
      <!-- TIMELINE -->
      <Timeline :timelines="workshopData.timeline" />
      <!-- FAQ -->
      <Faq :faqs="workshopData.FAQ" />
      <!-- CONTACT -->
      <Contact :contacts="workshopData.Contact" />
    </div>
    <!-- FIXED SIDE -->
    <Fixed
      :category="workshopData.category"
      :periods="workshopData.period"
      :requisites="workshopData.requisite"
      :registration_link="workshopData.registration_link"
      :guidebook_link="workshopData.guidebook_link"
    />
  </main>
  <main v-else>
    <NotFound />
  </main>
</template>
