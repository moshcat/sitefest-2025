<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <section class="min-h-[60vh]">
    <div
      class="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
    ></div>
    <div class="relative flex flex-col w-full gap-4 justify-start items-start my-24">
      <h2
        class="mt-10 scroll-m-20 border-b pb-2 sm:text-md md:text-lg lg:text-2xl font-semibold tracking-tight transition-colors first:mt-0 gradient-text"
      >
        National / Online
      </h2>
      <h1
        class="scroll-m-20 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-7xl text-mainBlue"
      >
        Website Design Competition
      </h1>
      <p
        class="leading-7 md:text-md lg:text-lg line-clamp-3 lg:max-w-screen-lg opacity-70 text-left"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book.
      </p>
      <div class="flex flex-row justify-start items-center gap-4">
        <Button variant="default" size="lg" class="mt-6">Daftar Sekarang</Button>
        <Button variant="outline" size="lg" class="mt-6">Jelajahi</Button>
      </div>
    </div>
  </section>
</template>
