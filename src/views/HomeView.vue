<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import Hero from '@/components/pages/Home/Hero.vue'
import VideoLoader from '@/components/ui/loader/VideoLoader.vue'
import Tentang from '@/components/pages/Home/Tentang.vue'

const HeroVideo = defineAsyncComponent({
  loader: () => import('@/components/pages/Home/HeroVideo.vue'),
  delay: 1000,
  timeout: 3000,
  suspensible: true,
})
</script>

<template>
  <main>
    <!--    hero section -->
    <Hero />

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
  </main>
</template>
