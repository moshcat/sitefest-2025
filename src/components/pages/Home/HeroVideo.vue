<!-- 📂 src/components/VideoComponent.vue -->
<script setup lang="ts"></script>

<template>
  <video
    class="mb-16 rounded-xl overflow-hidden bg-gray-300 aspect-video max-w-sm md:max-w-2xl lg:max-w-[58rem] xl:max-w-6xl mx-auto flex items-center justify-center"
    loop
    autoplay
    muted
  >
    <source src="@/assets/video/herovid.mp4" type="video/mp4" />
    Browser Anda tidak mendukung pemutaran video.
  </video>
</template>
