<script setup lang="ts">
interface SpeakerProps {
  speakers: string[]
}
defineProps<SpeakerProps>()
</script>

<template>
  <section
    class="w-full flex flex-col justify-start items-start gap-6 mt-4 md:mt-16 overflow-hidden"
  >
    <!-- HEAD -->
    <div class="flex flex-col justify-start items-start w-full gap-2">
      <h2
        class="mt-10 scroll-m-20 border-b pb-2 sm:text-base md:text-md lg:text-xl font-semibold tracking-tight transition-colors first:mt-0 gradient-text"
      >
        Pembicara Seminar Sitefest 2025
      </h2>
      <h1
        class="scroll-m-20 text-2xl font-extrabold tracking-tight md:text-3xl lg:text-5xl text-mainBlue"
      >
        Our Speaker
      </h1>
    </div>
    <!-- BODY -->
    <div class="w-full max-w-full flex flex-col sm:flex-row justify-between items-center gap-4">
      <img
        v-for="(speaker, index) in speakers"
        :key="index"
        :src="`/src/assets/images/${speaker}`"
        alt="Speaker"
        class="flex w-full sm:w-[30%] flex-1"
      />
    </div>
  </section>
</template>
