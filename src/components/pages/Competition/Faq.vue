<script lang="ts">
import { defineComponent, ref } from 'vue'
import type { PropType } from 'vue'

interface FAQItem {
  question: string
  answer: string
}

export default defineComponent({
  props: {
    faqs: {
      type: Array as PropType<FAQItem[]>,
      required: true,
    },
  },
  setup(props) {
    // State untuk open/tutup tiap FAQ item
    const openStates = ref<boolean[]>(props.faqs.map(() => false))

    const toggleFAQ = (index: number) => {
      openStates.value[index] = !openStates.value[index]
    }

    return { openStates, toggleFAQ }
  },
})
</script>

<template>
  <section class="w-full flex flex-col justify-start items-start gap-6 mt-16">
    <!-- HEAD -->
    <div class="flex flex-col justify-start items-start w-full gap-2">
      <h2
        class="mt-10 border-b pb-2 sm:text-base md:text-md lg:text-xl font-semibold gradient-text"
      >
        Pertanyaan Umum
      </h2>
      <h1 class="text-2xl font-extrabold md:text-3xl lg:text-5xl text-mainBlue">FAQ</h1>
    </div>

    <!-- BODY -->
    <div class="flex flex-col justify-start items-start w-full gap-3">
      <div
        v-for="(faq, index) in faqs"
        :key="index"
        class="w-full bg-white rounded-lg shadow-md overflow-hidden"
      >
        <button
          @click="toggleFAQ(index)"
          class="w-full p-4 bg-white flex justify-between items-center"
        >
          <span class="text-lg font-medium text-gray-900">{{ faq.question }}</span>
          <svg
            :class="{ 'rotate-180': openStates[index] }"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-6 h-6 transition-transform duration-300"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div v-if="openStates[index]" class="p-4 pt-0 text-gray-600 rounded-b-lg">
          <div class="w-full h-[1px] bg-black opacity-10 mb-4"></div>
          {{ faq.answer }}
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.rotate-180 {
  transform: rotate(180deg);
}
</style>
