<script setup lang="ts">
import { ref, onMounted } from 'vue'

const sponsors = ref([])
const mainImage = ref('/images/gallery-1.jpg')

onMounted(async () => {
  const response = await fetch('/src/datas/sponsor.json')
  sponsors.value = await response.json()
})

const changeMainImage = (imagePath: string) => {
  mainImage.value = imagePath
}
</script>

<template>
  <div class="w-full flex flex-col justify-start items-start gap-6 mt-12 md:mt-16">
    <div class="container flex flex-col justify-start items-start w-full gap-8">
      <!-- HEAD -->
      <div class="flex flex-col justify-start items-start gap-4">
        <h2
          class="mt-10 scroll-m-20 border-b pb-2 sm:text-base md:text-md lg:text-xl font-semibold tracking-tight transition-colors first:mt-0 gradient-text"
        >
          Photo Gallery
        </h2>
        <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Galeri Acara Sitefest
        </h1>
      </div>
      <!-- BODY -->
      <div class="flex flex-col md:flex-row justify-stretch items-stretch gap-4 w-full h-fit">
        <!-- MAIN PHOTO -->
        <div
          class="flex flex-[3_1_auto] aspect-video relative bg-slate-100 rounded-xl overflow-hidden md:w-min"
        >
          <img :src="mainImage" alt="gallery image" class="w-full" />
        </div>
        <!-- NAVIGATION PHOTO -->
        <div
          class="flex flex-[2_1_auto] gap-3 relative overflow-scroll md:overflow-x-hidden md:overflow-y-scroll overflow-x-scroll overflow-y-hidden no-scrollbar"
        >
          <div
            class="md:absolute w-full top-0 left-0 h-full flex flex-row justify-start items-start gap-3"
          >
            <div
              class="flex flex-row md:flex-col md:flex-1 justify-start items-start gap-3 top-0 left-0"
            >
              <div
                v-for="index in 5"
                :key="index"
                class="w-full aspect-video rounded-md bg-slate-100 cursor-pointer overflow-hidden relative"
                @click="changeMainImage(`/images/gallery-${index}.jpg`)"
              >
                <img
                  :src="`/images/gallery-${index}.jpg`"
                  alt="gallery image"
                  class="min-w-32 sm:min-w-48 md:min-w-0"
                />
                <div
                  class="w-full h-full absolute top-0 left-0 bg-black opacity-0 transition-opacity duration-200 hover:opacity-20"
                ></div>
              </div>
            </div>
            <div
              class="flex flex-row md:flex-col md:flex-1 justify-start items-start gap-3 top-0 left-0"
            >
              <div
                v-for="index in [6, 7, 8, 9, 10]"
                :key="index"
                class="w-full aspect-video rounded-md bg-slate-100 cursor-pointer overflow-hidden relative"
                @click="changeMainImage(`/images/gallery-${index}.jpg`)"
              >
                <img
                  :src="`/images/gallery-${index}.jpg`"
                  alt="gallery image"
                  class="min-w-32 sm:min-w-48 md:min-w-0"
                />
                <div
                  class="w-full h-full absolute top-0 left-0 bg-black opacity-0 transition-opacity duration-200 hover:opacity-20"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
