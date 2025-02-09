<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <section class="relative min-w-[456px] overflow-visible my-24">
    <div class="w-full rounded-xl px-5 py-6 flex flex-col justify-start items-start gap-4">
      <!-- TITLE -->
      <div class="flex flex-col w-full justify-start items-start gap-2">
        <p
          class="leading-7 text-left gradient-text md:text-md lg:text-lg line-clamp-3 lg:max-w-screen-lg"
        >
          Individual / Team
        </p>
        <h2 class="scroll-m-20 text-xl font-extrabold tracking-tight md:text-2xl lg:text-4xl">
          Gelombang 1
        </h2>
      </div>
      <!-- COUNTDOWN -->
      <div class="flex flex-row justify-between items-center gap-3 w-full">
        <!-- DAY COUNT -->
        <div
          class="py-4 flex flex-1 flex-col justify-center items-center gap-1 bg-[#F1F2F6] rounded-md"
        >
          <h3 class="scroll-m-20 text-xl font-extrabold tracking-tight md:text-2xl lg:text-4xl">
            12
          </h3>
          <p
            class="leading-7 text-left opacity-70 md:text-md lg:text-lg line-clamp-3 lg:max-w-screen-lg"
          >
            Hari
          </p>
        </div>
        <!-- HOUR COUNT -->
        <div
          class="py-4 flex flex-1 flex-col justify-center items-center gap-1 bg-[#F1F2F6] rounded-md"
        >
          <h3 class="scroll-m-20 text-xl font-extrabold tracking-tight md:text-2xl lg:text-4xl">
            12
          </h3>
          <p
            class="leading-7 text-left opacity-70 md:text-md lg:text-lg line-clamp-3 lg:max-w-screen-lg"
          >
            Jam
          </p>
        </div>
        <!-- MINUTE COUNT -->
        <div
          class="py-4 flex flex-1 flex-col justify-center items-center gap-1 bg-[#F1F2F6] rounded-md"
        >
          <h3 class="scroll-m-20 text-xl font-extrabold tracking-tight md:text-2xl lg:text-4xl">
            12
          </h3>
          <p
            class="leading-7 text-left opacity-70 md:text-md lg:text-lg line-clamp-3 lg:max-w-screen-lg"
          >
            Menit
          </p>
        </div>
        <!-- SECOND COUNT -->
        <div
          class="py-4 flex flex-1 flex-col justify-center items-center gap-1 bg-[#F1F2F6] rounded-md"
        >
          <h3 class="scroll-m-20 text-xl font-extrabold tracking-tight md:text-2xl lg:text-4xl">
            12
          </h3>
          <p
            class="leading-7 text-left opacity-70 md:text-md lg:text-lg line-clamp-3 lg:max-w-screen-lg"
          >
            Detik
          </p>
        </div>
      </div>
      <!-- REQUIREMENT -->
      <div class="flex flex-col justify-start items-start w-full gap-1">
        <p
          class="leading-7 text-left opacity-70 md:text-md lg:text-lg line-clamp-3 lg:max-w-screen-lg"
        >
          Syarat dan Ketentuan :
        </p>
      </div>
    </div>
  </section>
</template>
