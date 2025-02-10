<script setup lang="ts">
interface TimelineProps {
  timelines: { timeline_name: string; date: string }[]
}

defineProps<TimelineProps>()
</script>

<template>
  <section class="bg-primary">
    <div
      class="container flex w-full flex-col justify-center md:flex-row pb-16 items-start gap-6 md:gap-10 px-8 sm:px-12"
    >
      <!-- HEAD -->
      <div class="w-full flex flex-col justify-center items-start gap-8 my-16 md:mb-6">
        <h2
          class="mt-10 scroll-m-20 border-b pb-2 sm:text-base md:text-md lg:text-xl font-semibold tracking-tight transition-colors first:mt-0 gradient-text"
        >
          Rangkaian Kegiatan
        </h2>
        <h1
          class="scroll-m-20 text-2xl font-extrabold tracking-tight md:text-3xl lg:text-5xl text-white"
        >
          Timeline Event
        </h1>
        <p
          class="leading-9 text-left font-medium text-white text-sm md:text-base lg:text-lg lg:max-w-screen-lg"
        >
          Yuk, cek jadwal lengkap acara Sitefest 2025! Di sini kamu bisa lihat setiap langkah
          penting mulai dari pendaftaran sampai acara seru di puncaknya. Jangan sampai ketinggalan
          momen-momen asyik yang udah kami siapkan. Ikuti terus, biar semua berjalan lancar dan
          seru!
        </p>
      </div>
      <!-- BODY -->
      <div
        class="flex md:pt-28 pt-0 flex-col justify-center items-start w-full md:max-w-none relative"
      >
        <!-- ITEM -->
        <div
          v-for="(timeline, index) in timelines"
          :key="index"
          class="flex flex-row justify-start items-start gap-2 md:gap-4 relative z-10 pb-6"
        >
          <!-- CONTENT -->
          <div
            class="w-10 md:w-12 relative -translate-y-1 aspect-square bg-white rounded-full flex justify-center items-center"
          >
            <img
              src="/src/assets/images/sparkle-dark.svg"
              alt="Sparkle Dark"
              class="w-5 md:w-6 aspect-square"
            />
          </div>
          <div class="flex flex-col justify-start items-start md:gap-2">
            <h2
              class="scroll-m-20 text-lg text-white font-semibold tracking-tight md:text-xl lg:text-3xl"
            >
              {{ timeline.timeline_name }}
            </h2>
            <p
              class="leading-7 text-left font-medium gradient-text text-sm md:text-base lg:text-lg line-clamp-3 lg:max-w-screen-lg"
            >
              {{ timeline.date }}
            </p>
          </div>
          <!-- BAR -->
          <div
            v-if="index !== timelines.length - 1"
            class="w-2 md:w-4 h-full bg-gradient-to-r from-white to-[#1DCAD3] absolute top-0 left-4 md:left-4 -z-10"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>
