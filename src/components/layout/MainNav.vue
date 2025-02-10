<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { ref, watch } from 'vue'
import { X, ChevronsUpDown } from 'lucide-vue-next'
import datas from '@/datas/data.json'
import { useRouter } from 'vue-router'

const isOpen = ref(false)

const mainLink = {
  beranda: {
    title: 'Beranda',
    path: '/',
  },
  tentang: {
    title: 'Tentang',
    path: '#tentang',
  },
  kompetisi: {
    title: 'Kompetisi',
    path: '',
  },
  timeline: {
    title: 'Timeline',
    path: '#timeline',
  },
  faq: {
    title: 'FAQ',
    path: '#faq',
  },
}
const components: { title: string; path: string; description: string }[] = [
  {
    title: 'Web Desain Mahasiswa',
    path: '/competition/001',
    description: datas[0].description,
  },
  {
    title: 'UI/UX Desain Mahasiswa',
    path: '/competition/006',
    description: datas[5].description,
  },
  {
    title: 'Ide Bisnis',
    path: '/competition/003',
    description: datas[2].description,
  },
  {
    title: 'UI Desain SMA/SMK',
    path: '/competition/005',
    description: datas[4].description,
  },
  {
    title: 'Cerdas Cermat IT',
    path: '/competition/004',
    description: datas[3].description,
  },
  {
    title: 'Cerdas Cermat Akutansi',
    path: '/competition/002',
    description: datas[1].description,
  },
  {
    title: 'Poster SMA/SMK',
    path: '/competition/007',
    description: datas[6].description,
  },
]

// mobile menu trigger
const isMobileOpen = ref<boolean | null>(null)
const toggleMobileMenu = () => {
  isMobileOpen.value = !isMobileOpen.value
  console.log(isMobileOpen.value)
}
</script>

<template>
  <header
    class="sticky top-0 z-50 bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50"
  >
    <nav class="flex justify-between items-center p-4 px-12 2xl:container">
      <RouterLink to="/">
        <div class="flex items-center space-x-2" v-if="!isMobileOpen">
          <img src="../../assets/logo.svg" class="h-7" alt="logo-sitefest" />
        </div>
      </RouterLink>

      <!--      mobile button-->
      <Button class="md:hidden" variant="default" @click="toggleMobileMenu" v-show="!isMobileOpen">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </Button>

      <!--      desktop menu -->
      <div class="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink :class="navigationMenuTriggerStyle()">
                <RouterLink :to="mainLink.beranda.path"> {{ mainLink.beranda.title }}</RouterLink>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink :class="navigationMenuTriggerStyle()">
                <RouterLink :to="mainLink.tentang.path"> {{ mainLink.tentang.title }}</RouterLink>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Kompetisi</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li v-for="component in components" :key="component.title">
                    <NavigationMenuLink as-child>
                      <RouterLink
                        :to="component.path"
                        @click="isMobileOpen = false"
                        class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div class="text-sm font-medium leading-none">{{ component.title }}</div>
                        <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {{ component.description }}
                        </p>
                      </RouterLink>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink :class="navigationMenuTriggerStyle()">
                <RouterLink :to="mainLink.timeline.path"> {{ mainLink.timeline.title }}</RouterLink>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink :class="navigationMenuTriggerStyle()">
                <RouterLink :to="mainLink.faq.path"> {{ mainLink.faq.title }}</RouterLink>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div class="flex items-center space-x-4 hidden md:block">
        <Button :variant="'default'" :size="'lg'">Kontak</Button>
      </div>

      <!--      mobile menu -->
      <div
        class="md:hidden overflow-y-auto h-[calc(100vh-60px)] w-full no-scrollbar"
        v-if="isMobileOpen"
      >
        <div class="flex mb-8 justify-between items-center">
          <div class="space-x-2">
            <img src="../../assets/logo.svg" class="h-7" alt="logo-sitefest" />
          </div>
          <div class="">
            <Button class="md:hidden" variant="default" @click="toggleMobileMenu">
              <X />
            </Button>
          </div>
        </div>
        <div
          class="px-2 pt-2 pb-3 space-y-1 sm:px-3"
          v-for="[key, item] in Object.entries(mainLink).filter(([key]) => key !== 'kompetisi')"
          :key="key"
        >
          <RouterLink
            :to="item.path"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            {{ item.title }}
          </RouterLink>
        </div>
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Collapsible v-model:open="isOpen" class="w-full space-y-2">
            <div class="flex items-center justify-between">
              <CollapsibleTrigger
                class="block text-start w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900"
                @click="isOpen === true"
              >
                {{ mainLink.kompetisi.title }}
              </CollapsibleTrigger>
              <CollapsibleTrigger as-child>
                <Button variant="ghost" size="sm" class="w-9 p-0">
                  <ChevronsUpDown class="h-4 w-4" />
                  <span class="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent
              class="space-y-2"
              v-for="component in components"
              :key="component.title"
            >
              <RouterLink
                :to="component.path"
                @click="isMobileOpen = false"
                class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                {{ component.title }}
              </RouterLink>
            </CollapsibleContent>
          </Collapsible>
        </div>
        <div class="pt-4 pb-3 border-t border-gray-200">
          <Button :variant="'default'" :size="'lg'" class="w-full">Kontak</Button>
        </div>
      </div>
    </nav>
  </header>
</template>
