<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const defaultValue = 'item-1'

const accordionItems = [
  {
    value: 'item-1',
    title: 'Apa saja kategori lomba yang tersedia?',
    content:
      'Kategori lomba meliputi Web Development, UI/UX Design, Cyber Security, dan Data Science.',
  },
  {
    value: 'item-2',
    title: 'Siapa yang dapat mengikuti perlombaan ini?',
    content: 'Perlombaan ini terbuka untuk mahasiswa dan pelajar tingkat SMA/SMK sederajat.',
  },
  {
    value: 'item-3',
    title: 'Bagaimana cara mendaftar lomba?',
    content:
      'Peserta dapat mendaftar melalui website resmi dengan mengisi formulir pendaftaran dan membayar biaya registrasi.',
  },
  {
    value: 'item-4',
    title: 'Apakah ada biaya pendaftaran?',
    content: 'Ya. Terdapat biaya pendaftaran yang berbeda untuk setiap kategori lomba.',
  },
  {
    value: 'item-5',
    title: 'Apa hadiah yang bisa didapatkan?',
    content:
      'Hadiah berupa uang tunai, sertifikat, merchandise eksklusif, serta kesempatan magang di perusahaan teknologi.',
  },
  {
    value: 'item-6',
    title: 'Bagaimana sistem penilaian lomba?',
    content:
      'Penilaian dilakukan oleh juri profesional berdasarkan kriteria seperti kreativitas, fungsionalitas, dan kesesuaian dengan tema lomba.',
  },
  {
    value: 'item-7',
    title: 'Apakah lomba ini bisa diikuti secara individu atau tim?',
    content:
      'Tergantung pada kategori lomba, beberapa lomba bisa diikuti secara individu atau dalam tim dengan jumlah anggota tertentu.',
  },
  {
    value: 'item-8',
    title: 'Kapan pengumuman pemenang akan dilakukan?',
    content:
      'Pengumuman pemenang akan dilakukan setelah tahap final, sesuai dengan jadwal yang telah ditentukan.',
  },
  {
    value: 'item-9',
    title: 'Apakah ada sesi mentoring sebelum lomba dimulai?',
    content:
      'Ya! Akan ada sesi mentoring dan webinar bagi peserta untuk membantu persiapan mereka dalam perlombaan.',
  },
  {
    value: 'item-10',
    title: 'Bagaimana jika ada pertanyaan lebih lanjut?',
    content:
      'Peserta dapat menghubungi panitia melalui email resmi atau grup komunitas yang disediakan setelah pendaftaran.',
  },
]
</script>

<template>
  <section class="container mx-auto flex justify-center items-center flex-col mt-16">
    <h2
      class="mt-10 scroll-m-20 border-b pb-2 sm:text-base md:text-md lg:text-xl font-semibold tracking-tight transition-colors first:mt-0 gradient-text"
    >
      FAQ
    </h2>
    <h1
      class="mb-12 text-center scroll-m-20 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight"
    >
      Pertanyaan yang Sering Diajukan
    </h1>

    <Accordion type="single" class="w-full mb-32" collapsible :default-value="defaultValue">
      <AccordionItem v-for="item in accordionItems" :key="item.value" :value="item.value">
        <AccordionTrigger
          class="scroll-m-20 text-start lg:text-xl tracking-tight text-sm md:text-lg"
        >
          {{ item.title }}
        </AccordionTrigger>
        <AccordionContent class="leading-7 [&:not(:first-child)]:mt-6">
          {{ item.content }}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </section>
</template>
