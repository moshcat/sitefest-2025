<script setup lang="ts">
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
  <section class="container mx-auto px-6 py-12">
    <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 items-center">
      <!--      kiri text -->
      <div class="pb-36 rounded-lg p-6 flex flex-col justify-center items-start gap-4">
        <h1
          class="scroll-m-20 text-md text-secondary font-semibold tracking-tight text-md lg:text-xl"
        >
          {{ content.subtitle }}
        </h1>
        <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {{ content.title }}
        </h1>
        <p class="leading-7 [&:not(:first-child)]:mt-6">
          {{ content.description }}
        </p>
      </div>
      <!--      kanan image-->
      <div class="rounded-lg p-6 flex justify-center items-center">
        <img src="@/assets/images/about-img.png" class="w-full object-cover" alt="" />
      </div>
    </div>
  </section>
</template>
