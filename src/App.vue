<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainNav from '@/components/layout/MainNav.vue'
import MainFooter from '@/components/layout/MainFooter.vue'
</script>

<template>
  <div class="font-figtree">
    <MainNav />
    <RouterView />
    <MainFooter />
  </div>
</template>
