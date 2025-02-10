<script setup lang="ts">
interface FAQItem {
  faqs: { question: string; answer: string }[]
}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
const defaultValue = 'item-1'
defineProps<FAQItem>()
</script>

<template>
  <section class="w-full flex flex-col justify-start items-start gap-6 mt-0 md:mt-16">
    <!-- HEAD -->
    <div class="flex flex-col justify-start items-start w-full gap-2">
      <h2
        class="mt-4 md:mt-10 border-b pb-2 sm:text-base md:text-md lg:text-xl font-semibold gradient-text"
      >
        Pertanyaan Umum
      </h2>
      <h1 class="text-2xl font-extrabold md:text-3xl lg:text-5xl text-mainBlue">FAQ</h1>
    </div>

    <!-- BODY -->
    <Accordion type="single" class="w-full" collapsible :default-value="defaultValue">
      <AccordionItem v-for="(item, index) in faqs" :key="index" :value="item.question">
        <AccordionTrigger class="scroll-m-20 lg:text-xl tracking-tight text-sm md:text-lg">
          {{ item.question }}
        </AccordionTrigger>
        <AccordionContent class="leading-7 [&:not(:first-child)]:mt-6">
          {{ item.answer }}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </section>
</template>

<style scoped>
.rotate-180 {
  transform: rotate(180deg);
}
</style>
