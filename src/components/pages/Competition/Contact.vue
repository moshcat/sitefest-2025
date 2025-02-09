<script setup lang="ts">
interface ContactProps {
  contacts: { name: string; phone: string; line: string }[]
}
defineProps<ContactProps>()
</script>

<template>
  <section class="w-full flex flex-col justify-start items-start gap-6 mt-16">
    <!-- HEAD -->
    <div class="flex flex-col justify-start items-start w-full gap-2">
      <h2
        class="mt-10 scroll-m-20 border-b pb-2 sm:text-base md:text-md lg:text-xl font-semibold tracking-tight transition-colors first:mt-0 gradient-text"
      >
        Kontak Panitia
      </h2>
      <h1
        class="scroll-m-20 text-2xl font-extrabold tracking-tight md:text-3xl lg:text-5xl text-mainBlue"
      >
        Contact Person
      </h1>
    </div>
    <!-- BODY -->
    <div class="flex flex-row justify-start items-stretch gap-4 w-full">
      <!-- ITEM CONTACT -->
      <div
        v-for="(contact, index) in contacts"
        :key="index"
        class="flex flex-1 bg-white rounded-2xl px-4 py-5 flex-col justify-start items-start gap-3"
      >
        <h2
          class="scroll-m-20 text-md text-mainBlue font-extrabold tracking-tight md:text-lg lg:text-2xl"
        >
          {{ contact.name }}
        </h2>
        <div class="flex flex-row justify-start items-center gap-2">
          <img src="/src/assets/images/whatsapp.svg" alt="Whatsapp Icon" class="w-6" />
          <p class="leading-7 text-center md:text-md lg:text-lg line-clamp-3 lg:max-w-screen-lg">
            {{ contact.phone }}
          </p>
        </div>
        <div class="flex flex-row justify-start items-center gap-2">
          <img src="/src/assets/images/line.svg" alt="Line Icon" class="w-6" />
          <p class="leading-7 text-center md:text-md lg:text-lg line-clamp-3 lg:max-w-screen-lg">
            {{ contact.line }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
