<script setup lang="ts">
import { Button } from '@/components/ui/button'
interface HeroProps {
  title: string
  description: string
  scale: string
  type: string
  registration_link: string
}

defineProps<HeroProps>()
</script>

<template>
  <section class="lg:min-h-[60vh]">
    <div
      class="fixed inset-0 -z-10 h-full w-full bg-sitefest-primary bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
    ></div>
    <div class="relative flex flex-col w-full gap-4 justify-start items-start mb-12 my-16 lg:my-24">
      <h2
        class="mt-10 scroll-m-20 border-b pb-2 sm:text-md md:text-lg lg:text-2xl font-semibold tracking-tight transition-colors first:mt-0 gradient-text"
      >
        {{ scale }} / {{ type }}
      </h2>
      <h1
        class="scroll-m-20 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-7xl text-mainBlue"
      >
        {{ title }}
      </h1>
      <p
        class="leading-7 text-base md:text-md lg:text-lg line-clamp-3 lg:max-w-screen-lg opacity-70 text-left"
      >
        {{ description }}
      </p>
      <div class="flex flex-row justify-start items-center gap-4">
        <Button variant="default" size="lg" class="mt-6">
          <a :href="registration_link" target="_blank">Daftar Sekarang</a>
        </Button>
        <Button variant="outline" size="lg" class="mt-6">Jelajahi</Button>
      </div>
    </div>
  </section>
</template>
