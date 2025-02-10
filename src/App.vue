<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import { ref } from 'vue'
import MainNav from '@/components/layout/MainNav.vue'
import MainFooter from '@/components/layout/MainFooter.vue'
import PageLoader from '@/components/ui/loader/PageLoader.vue'

const isLoading = ref(false)
const router = useRouter()

router.beforeEach((to, from, next) => {
  isLoading.value = true
  next()
})

router.afterEach(() => {
  setTimeout(() => (isLoading.value = false), 800)
})
</script>

<template>
  <div class="font-figtree">
    <MainNav />
    <Transition name="fade">
      <PageLoader v-if="isLoading" />
    </Transition>
    <RouterView :key="$route.fullPath" />
    <MainFooter />
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
