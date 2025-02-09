<script setup lang="ts"></script>

<template>
  <Transition name="fade">
    <div class="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-md z-50">
      <div
        class="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
      ></div>
    </div>
  </Transition>
</template>

<style scoped></style>
