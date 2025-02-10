<script setup lang="ts">
import { computed } from 'vue'
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from 'lucide-vue-next'

const currentYear = computed(() => new Date().getFullYear())

const data = {
  tentang: {
    title: 'Tentang',
    sublink: [
      { name: 'Beranda', path: '/' },
      { name: 'Kompetisi', path: '/kompetisi' },
      { name: 'Timeline', path: '#timeline' },
      { name: 'FAQ', path: '/faq' },
    ],
  },
  kompetisi: {
    title: 'Kompetisi',
    sublink: [
      { name: 'Web Design Mahasiswa', path: '/competition/001' },
      { name: 'UI/UX Mahasiswa', path: '/competition/006' },
      { name: 'Ide Bisnis', path: '/competition/003' },
      { name: 'UI Desain SMA/SMK', path: '/competition/005' },
      { name: 'Poster SMA/SMK', path: '/competition/004' },
      { name: 'Cerdas Cermat Akutansi', path: '/competition/002' },
      { name: 'Cerdas Cermat IT', path: '/competition/007' },
    ],
  },
  kampus: {
    title: 'Kampus kami',
    sublink: [
      { name: 'Penerimaan Mahasiswa Baru', path: 'https://primakara.ac.id/penerimaan' },
      { name: 'Program Pendidikan', path: 'https://primakara.ac.id/pendidikan' },
      { name: 'Tentang Primakara', path: 'https://primakara.ac.id/' },
      // { name: 'info@primakara.ac.id', path: '/' },
      // { name: 'primakara.ac.id', path: '/' },
    ],
  },
  kontak: {
    title: 'Kontak',
    sublink: [
      { name: 'info@sitefest.com', path: '' },
      { name: '+62 8211 4707 8126', path: '' },
      { name: 'Jl. Tukad Badung, Denpasar', path: '' },
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
          <a
            href="https://www.facebook.com/primakara/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-white transition-colors"
          >
            <FacebookIcon class="h-5 w-5" />
          </a>
          <a
            href="https://www.instagram.com/site_festival?igsh=NDk3eWUydDFzd2g3"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-white transition-colors"
          >
            <InstagramIcon class="h-5 w-5" />
          </a>
          <a
            href="https://x.com/stmikprimakara"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-white transition-colors"
          >
            <TwitterIcon class="h-5 w-5" />
          </a>
          <a
            href="https://youtube.com/@primakaratv?si=RbJHdSGG8y9c-9hq"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-white transition-colors"
          >
            <YoutubeIcon class="h-5 w-5" />
          </a>
        </div>
      </div>

      <!-- Navigation Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <!-- Footer Link -->
        <div v-for="(section, key) in data" :key="key">
          <h3 class="text-white font-medium mb-4">{{ section.title }}</h3>
          <ul class="space-y-3">
            <li v-for="(link, index) in section.sublink" :key="index">
              <a
                v-if="section.title !== 'Kontak'"
                :href="link.path.startsWith('#') ? undefined : link.path"
                :target="section.title === 'Kompetisi' ? undefined : '_blank'"
                rel="noopener noreferrer"
                class="text-gray-400 hover:text-white transition-colors"
              >
                {{ link.name }}
              </a>
              <span v-else class="text-gray-400">{{ link.name }}</span>
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
