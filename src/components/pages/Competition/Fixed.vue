<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { ref, computed, onMounted, onUnmounted } from 'vue'

interface FixedProps {
  category: string
  periods: { startDate: string; endDate: string; step: number; price: string }[]
  requisites: string[]
  registration_link: string
  guidebook_link: string
}

const props = defineProps<FixedProps>()

const countdown = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
})
const activePeriod = ref<{
  startDate: string
  endDate: string
  step: number
  price: string
} | null>(null)
const fixedArea = ref<HTMLElement | null>(null)
const fixedContainer = ref<HTMLElement | null>(null)
const footer = ref<HTMLElement | null>(null)
const topOffset = ref(0)

const findActivePeriod = () => {
  const now = new Date()
  activePeriod.value =
    props.periods.find((period) => {
      const start = new Date(period.startDate)
      const end = new Date(period.endDate)
      return now >= start && now <= end
    }) || null
}

const updateCountdown = () => {
  if (activePeriod.value) {
    const endDate = new Date(activePeriod.value.endDate)
    const now = new Date()
    const timeDiff = endDate.getTime() - now.getTime()

    if (timeDiff > 0) {
      countdown.value = {
        days: Math.floor(timeDiff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((timeDiff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((timeDiff / (1000 * 60)) % 60),
        seconds: Math.floor((timeDiff / 1000) % 60),
      }
    } else {
      findActivePeriod()
    }
  }
}

const handleScroll = () => {
  if (fixedContainer.value && fixedArea.value) {
    const fixedContainerRect = fixedContainer.value.getBoundingClientRect()
    const fixedContainerArea = fixedArea.value.getBoundingClientRect()
    const isOverlapping = scrollY + fixedContainerRect.height >= fixedContainerArea.height

    isOverlapping
      ? (fixedContainer.value.style.transform = `translateY(${fixedContainerArea.height - fixedContainerRect.height}px)`)
      : (fixedContainer.value.style.transform = `translateY(${window.scrollY}px)`)
  }
}

onMounted(() => {
  findActivePeriod()
  const interval = setInterval(updateCountdown, 1000)
  onUnmounted(() => clearInterval(interval))

  fixedContainer.value = document.querySelector('.fixed-container')
  fixedArea.value = document.querySelector('.fixed-area')
  footer.value = document.querySelector('footer')
  topOffset.value = fixedContainer.value?.offsetTop || 0
  window.addEventListener('scroll', handleScroll)
})

const step = computed(() => activePeriod.value?.step || 0)
const price = computed(() => activePeriod.value?.price || 'N/A')
</script>

<template>
  <section ref="fixedArea" class="relative min-w-[456px] overflow-visible mt-24">
    <div
      ref="fixedContainer"
      class="w-full bg-white rounded-xl px-5 py-6 flex flex-col justify-start items-start gap-4"
    >
      <!-- TITLE -->
      <div class="flex flex-col w-full justify-start items-start gap-2">
        <p
          class="leading-7 text-left gradient-text md:text-md lg:text-lg line-clamp-3 lg:max-w-screen-lg"
        >
          {{ category }}
        </p>
        <h2
          class="scroll-m-20 text-xl text-mainBlue font-extrabold tracking-tight md:text-2xl lg:text-4xl"
        >
          Gelombang {{ step }}
        </h2>
      </div>
      <!-- COUNTDOWN -->
      <div class="flex flex-row justify-between items-center gap-3 w-full">
        <!-- DAY COUNT -->
        <div
          class="py-4 flex flex-1 flex-col justify-center items-center gap-1 bg-[#F1F2F6] rounded-md"
        >
          <h3 class="scroll-m-20 text-xl font-extrabold tracking-tight md:text-2xl lg:text-4xl">
            {{ countdown.days }}
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
            {{ countdown.hours }}
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
            {{ countdown.minutes }}
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
            {{ countdown.seconds }}
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
          class="leading-7 text-left opacity-70 text-base md:text-md lg:text-lg line-clamp-3 lg:max-w-screen-lg"
        >
          Syarat dan Ketentuan :
        </p>
        <div
          v-for="(requisite, index) in requisites"
          :key="index"
          class="w-full flex flex-row justify-start items-start gap-2"
        >
          <img
            src="/src/assets/images/sparkle.svg"
            alt="Sprkle"
            class="min-w-6 mt-1 aspect-square"
          />
          <p
            class="leading-7 text-left opacity-70 text-base md:text-md lg:text-lg line-clamp-3 lg:max-w-screen-lg"
          >
            {{ requisite }}
          </p>
        </div>
      </div>
      <!-- ACTION -->
      <div class="flex flex-col justify-start items-start gap-2 w-full">
        <Button variant="default" size="lg" class="w-full">
          <a :href="registration_link" target="_blank">{{ price }}</a>
        </Button>
        <Button variant="outline" size="lg" class="w-full">
          <a :href="guidebook_link" target="_blank">Guide Book</a>
        </Button>
      </div>
    </div>
  </section>
</template>
