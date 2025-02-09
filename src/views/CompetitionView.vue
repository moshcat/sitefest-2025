<script setup lang="ts">
import Hero from '@/components/pages/Competition/Hero.vue'
import Fixed from '@/components/pages/Competition/Fixed.vue'
</script>

<template>
  <main class="flex flex-row justify-between items-stretch gap-12 w-full container">
    <!-- RELATIVE SIDE -->
    <div class="flex flex-col justify-start items-start gap-8 w-full">
      <!-- HERO -->
      <Hero />
    </div>
    <!-- FIXED SIDE -->
    <Fixed />
  </main>
</template>
