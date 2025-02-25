<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Button } from '@/components/ui/button'
import datas from '@/datas/data.json'

interface CardProps {
  id: string
  title: string
  description: string
  grade: string
}

const cardData = ref<CardProps | null>(null)

onMounted(async () => {
  try {
    console.log(datas)
  } catch (error) {
    console.error('Failed to load sponsors:', error)
  }
})
</script>

<template>
  <div class="flex flex-col justify-start items-start gap-1 md:gap-6 w-full mt-0 md:mt-16 mb-16">
    <!-- HEAD -->
    <div class="flex flex-col container justify-start items-start w-full gap-2">
      <h2
        class="mt-10 scroll-m-20 border-b pb-2 sm:text-base md:text-md lg:text-xl font-semibold tracking-tight transition-colors first:mt-0 gradient-text"
      >
        Kompetisi
      </h2>
      <h1
        class="scroll-m-20 text-2xl font-extrabold tracking-tight md:text-3xl lg:text-5xl text-mainBlue"
      >
        Competitions
      </h1>
    </div>
    <!-- BODY -->
    <div
      class="flex container flex-row justify-start items-stretch gap-4 w-full overflow-x-scroll mt-4 no-scrollbar"
    >
      <!-- CARD -->
      <a
        v-for="data in datas"
        v-bind:href="'competition/' + data.id"
        :key="data.id"
        class="flex flex-col justify-start items-start gap-4 overflow-hidden rounded-md bg-white cursor-pointer min-w-72 w-72 md:min-w-96 md:w-96 group"
      >
        <!-- IMAGE -->
        <div class="w-full flex justify-center items-center overflow-hidden">
          <img v-bind:src="'/images/' + data.img" alt="" />
        </div>
        <!-- BODY -->
        <div
          class="flex flex-col justify-start items-start gap-1 px-4 pb-4 w-full group-hover:px-5 transition-all ease-in-out duration-300"
        >
          <p
            class="sm:text-xs md:text-sm lg:text-base font-semibold transition-colors gradient-text"
          >
            {{ data.grade }}
          </p>
          <h1 class="text-lg font-extrabold md:text-xl lg:text-2xl text-mainBlue">
            {{ data.title }}
          </h1>
          <p
            class="my-1 sm:text-xs md:text-sm lg:text-base font-normal text-mainBlue opacity-60 line-clamp-2"
          >
            {{ data.description }}
          </p>
          <Button variant="default" class="w-full my-2">Detail</Button>
        </div>
      </a>
    </div>
  </div>
</template>
