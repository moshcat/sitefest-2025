<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainNav from '@/components/layout/MainNav.vue'
</script>

<template>
  <div class="font-figtree">
    <MainNav />
    <RouterView />
  </div>
</template>
