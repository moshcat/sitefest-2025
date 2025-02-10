<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'

const content = {
  subtitle: 'Tentang',
  title: 'Apa itu Sitefest?',
  description:
    'Merupakan kegiatan festival yang mengarah ke bidang ilmu untuk membentuk, meningkatkan dan mengkreasikan kemampuan para generasi muda di masa depan dengan kemajuan teknologi. Melalui\n' +
    'SITEFEST diharapkan kegiatan ini mampu menjadi wadah untuk mengembangkan dan mengasah kemampuan hard skill dan soft\n' +
    'skill di bidang teknologi melalui kreativitas guna terciptanya generasi yang mampu memanfaatkan teknologi di masa depan.',
}
</script>

<template>
  <section class="container mx-auto py-12">
    <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 items-center">
      <!--      kiri text -->
      <div class="pb-8 sm:pb-36 rounded-lg flex flex-col justify-center items-start gap-4">
        <h2
          class="mt-10 scroll-m-20 border-b pb-2 sm:text-base md:text-md lg:text-xl font-semibold tracking-tight transition-colors first:mt-0 gradient-text"
        >
          {{ content.subtitle }}
        </h2>
        <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {{ content.title }}
        </h1>
        <p class="leading-7 [&:not(:first-child)]:mt-6">
          {{ content.description }}
        </p>

        <Button variant="default" class="my-6" size="lg">Daftar Sekarang</Button>
      </div>
      <!--      kanan image-->
      <div class="rounded-lg sm:p-6 flex justify-center items-center">
        <img src="@/assets/images/about-img.png" class="w-full object-cover" alt="" />
      </div>
    </div>
  </section>
</template>
