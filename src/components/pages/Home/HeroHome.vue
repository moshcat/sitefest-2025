<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <section class="container">
    <div
      class="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
    ></div>
    <div class="flex flex-col items-center justify-center max-h-screen gap-3 my-24">
      <h2
        class="mt-10 scroll-m-20 border-b pb-2 sm:text-md md:text-lg lg:text-2xl font-semibold tracking-tight transition-colors first:mt-0 text-secondary"
      >
        Hidden Talent, Into Innovation
      </h2>
      <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-7xl">
        SITE<span class="text-secondary">FEST</span> 2025
      </h1>
      <p class="leading-7 text-center md:text-md lg:text-lg line-clamp-3 lg:max-w-screen-lg">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book.
      </p>
      <Button variant="default" size="lg" class="mt-6">Jelajahi</Button>
    </div>
  </section>
</template>
