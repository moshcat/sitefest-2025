<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface MarqueeProps {
  name: string
}

// Menentukan tipe array untuk sponsors
const sponsors = ref<MarqueeProps[]>([])

onMounted(async () => {
  try {
    const response = await fetch('/src/datas/sponsor.json')
    const data: MarqueeProps[] = await response.json()
    sponsors.value = data
  } catch (error) {
    console.error('Failed to load sponsors:', error)
  }
})
</script>

<template>
  <div class="container overflow-hidden w-full py-4 relative">
    <div class="flex animate-scroll">
      <div v-for="(repeat, index) in 2" :key="index" class="flex">
        <div
          v-for="(sponsor, idx) in sponsors"
          :key="idx"
          class="flex items-center justify-center mx-4"
        >
          <img
            :src="`/src/assets/images/logo-sponsor.png`"
            :alt="sponsor.name"
            class="h-3 md:h-4 w-auto object-contain block max-w-none max-h-none"
          />
        </div>
      </div>
    </div>
    <div
      class="absolute h-full w-16 md:w-24 left-0 top-0 bg-gradient-to-r from-white to-[#ffffff00] z-20"
    ></div>
    <div
      class="absolute h-full w-16 md:w-24 right-0 top-0 bg-gradient-to-l from-white to-[#ffffff00] z-20"
    ></div>
  </div>
</template>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  display: flex;
  width: calc(200%);
  animation: scroll 30s linear infinite;
}
</style>
