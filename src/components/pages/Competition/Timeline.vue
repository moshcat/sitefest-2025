<script setup lang="ts">
interface TimelineProps {
  timelines: { timeline_name: string; date: string }[]
}

defineProps<TimelineProps>()
</script>

<template>
  <section class="flex w-full flex-col justify-start items-start gap-10">
    <!-- HEAD -->
    <div class="w-full flex flex-col justify-start items-start gap-2">
      <h2
        class="mt-10 scroll-m-20 border-b pb-2 sm:text-base md:text-md lg:text-xl font-semibold tracking-tight transition-colors first:mt-0 gradient-text"
      >
        Rangkaian Kegiatan
      </h2>
      <h1
        class="scroll-m-20 text-2xl font-extrabold tracking-tight md:text-3xl lg:text-5xl text-mainBlue"
      >
        Timeline Event
      </h1>
    </div>
    <!-- BODY -->
    <div class="flex flex-col justify-start items-start w-full relative">
      <!-- ITEM -->
      <div
        v-for="(timeline, index) in timelines"
        :key="index"
        class="flex flex-row justify-start items-start gap-4 relative z-10 pb-6"
      >
        <!-- CONTENT -->
        <div
          class="w-12 relative -translate-y-1 aspect-square bg-white rounded-full flex justify-center items-center"
        >
          <img
            src="/src/assets/images/sparkle-dark.svg"
            alt="Sparkle Dark"
            class="w-6 aspect-square"
          />
        </div>
        <div class="flex flex-col justify-start items-start gap-2">
          <h2
            class="scroll-m-20 text-lg text-mainBlue font-extrabold tracking-tight md:text-xl lg:text-3xl"
          >
            {{ timeline.timeline_name }}
          </h2>
          <p
            class="leading-7 text-left font-medium gradient-text md:text-md lg:text-lg line-clamp-3 lg:max-w-screen-lg"
          >
            {{ timeline.date }}
          </p>
        </div>
        <!-- BAR -->
        <div
          v-if="index !== timelines.length - 1"
          class="w-4 h-full bg-gradient-to-r from-white to-[#1DCAD3] absolute top-0 left-4 -z-10"
        ></div>
      </div>
    </div>
  </section>
</template>
