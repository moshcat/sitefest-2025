<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
</script>
<template>
  <section class="container mx-auto">
    <div class="flex justify-center flex-col min-h-[36rem] mb-48 items-center">
      <h1 class="scroll-m-20 text-7xl font-extrabold tracking-tight md:text-8xl lg:text-9xl">
        4<span class="text-secondary">0</span>4
      </h1>
      <p
        class="leading-7 [&:not(:first-child)]:mt-6 text-base lg:text-2xl md:max-w-sm lg:max-w-xl text-center"
      >
        Halaman tidak ditemukan atau dicuri mantan mu?, Yuk balik ke halaman utama
      </p>
      <p class="leading-7 [&:not(:first-child)]:mt-6 text-base lg:text-2xl"></p>

      <router-link to="/">
        <Button variant="default" size="lg">Homepage</Button>
      </router-link>
    </div>
  </section>
</template>
