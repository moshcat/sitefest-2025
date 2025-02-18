<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import HeroHome from '@/components/pages/Home/HeroHome.vue'
import VideoLoader from '@/components/ui/loader/VideoLoader.vue'
import Tentang from '@/components/pages/Home/Tentang.vue'
import TimelineHome from '@/components/pages/Home/TimelineHome.vue'
import datas from '@/datas/timeline.json'
import PrizepoolHome from '@/components/pages/Home/PrizepoolHome.vue'

const HeroVideo = defineAsyncComponent({
  loader: () => import('@/components/pages/Home/HeroVideo.vue'),
  delay: 1000,
  timeout: 3000,
  suspensible: true,
})
const FaqSection = defineAsyncComponent({
  loader: () => import('@/components/pages/Home/FaqSection.vue'),
  delay: 1000,
})
</script>

<template>
  <main>
    <!--    hero section -->
    <HeroHome />

    <!--    video section-->
    <Suspense>
      <template #default>
        <HeroVideo />
      </template>
      <template #fallback>
        <VideoLoader />
      </template>
    </Suspense>
    <!--    end video section -->

    <!--    tentang section -->
    <Tentang />
    <!--    end tentang section -->

    <!--    Prizepool -->
    <PrizepoolHome />
    <!--end prizepool-->
    <TimelineHome :timelines="datas" />

    <!--    faq section -->
    <Suspense>
      <template #default>
        <FaqSection />
      </template>
      <template #fallback>
        <h1>loading...</h1>
      </template>
    </Suspense>
    <!--    end faq section -->
  </main>
</template>
