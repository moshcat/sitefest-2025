<script setup lang="ts">
import { computed } from 'vue'
import { FacebookIcon, InstagramIcon, TwitterIcon, GithubIcon, YoutubeIcon } from 'lucide-vue-next'

const currentYear = computed(() => new Date().getFullYear())

const data = {
  tentang: {
    title: 'Tentang',
    sublink: [
      { name: 'Beranda', path: '/' },
      { name: 'Kompetisi', path: '/kompetisi' },
      { name: 'FAQ', path: '/faq' },
    ],
  },
  kompetisi: {
    title: 'Kompetisi',
    sublink: [
      { name: 'Web Design Mahasiswa', path: '/' },
      { name: 'UI/UX Mahasiswa', path: '/' },
      { name: 'Ide Bisnis', path: '/' },
      { name: 'UI Desain SMA/SMK', path: '/' },
      { name: 'Poster SMA/SMK', path: '/' },
      { name: 'Cerdas Cermat Akutansi', path: '/' },
      { name: 'Cerdas Cermat IT', path: '/' },
    ],
  },
  kampus: {
    title: 'Kampus kami',
    sublink: [
      { name: 'Penerimaan Mahasiswa Baru', path: '/' },
      { name: 'Program Pendidikan', path: '/' },
      { name: 'Tentang Primakara', path: '/' },
      // { name: 'info@primakara.ac.id', path: '/' },
      // { name: 'primakara.ac.id', path: '/' },
    ],
  },
  kontak: {
    title: 'Kontak',
    sublink: [
      { name: 'info@sitefest.com' },
      { name: '+62 8211 4707 8126' },
      { name: 'Jl. Tukad Badung, Denpasar' },
    ],
  },
}
</script>

<template>
  <footer class="bg-primary py-16 px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Logo and Description Section -->
      <div class="mb-12">
        <img src="../../assets/logo.svg" alt="Logo" class="mb-6" />
        <p class="text-gray-400 max-w-xs">
          Making the world a better place through constructing elegant hierarchies.
        </p>

        <!-- Social Links -->
        <div class="flex gap-6 mt-6">
          <a href="#" class="text-gray-400 hover:text-white transition-colors">
            <FacebookIcon class="h-5 w-5" />
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors">
            <InstagramIcon class="h-5 w-5" />
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors">
            <TwitterIcon class="h-5 w-5" />
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors">
            <YoutubeIcon class="h-5 w-5" />
          </a>
        </div>
      </div>

      <!-- Navigation Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <!-- Solutions -->
        <div v-for="(section, key) in data" :key="key">
          <h3 class="text-white font-medium mb-4">{{ section.title }}</h3>
          <ul class="space-y-3">
            <li v-for="link in section.sublink" :key="link.path">
              <router-link :to="link.path" class="text-gray-400 hover:text-white transition-colors">
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Support -->
      </div>

      <!-- Copyright -->
      <div class="pt-8 border-t border-gray-800">
        <p class="text-gray-400 text-sm">© {{ currentYear }} Sitefest, All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
