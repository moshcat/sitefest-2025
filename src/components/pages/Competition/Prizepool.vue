<script setup lang="ts"></script>

<template>
  <section class="flex flex-col justify-start items-start gap-6 w-full mt-16">
    <!-- HEAD -->
    <div class="flex flex-col justify-start items-start w-full gap-2">
      <h2
        class="mt-10 scroll-m-20 border-b pb-2 sm:text-base md:text-md lg:text-xl font-semibold tracking-tight transition-colors first:mt-0 gradient-text"
      >
        Total Hadiah Sitefest 2025
      </h2>
      <h1
        class="scroll-m-20 text-2xl font-extrabold tracking-tight md:text-3xl lg:text-5xl text-mainBlue"
      >
        Prize Pool
      </h1>
    </div>
    <!-- BODY -->
    <div
      class="w-full rounded-2xl bg-gradient-to-b from-[#000406] to-[#032038] px-4 py-6 relative overflow-hidden flex justify-center items-center gap-2"
    >
      <!-- BACKGROUND -->
      <div class="w-full relative h-full flex justify-center items-center z-20">
        <img src="/src/assets/images/bg-sparkle.svg" alt="Background Sparkle" />
      </div>
      <!-- CONTENT -->
      <div class="w-full flex justify-center items-center flex-col gap-4 absolute z-10">
        <p
          class="leading-7 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#ABABAB] to-[#1DCAD3] font-medium md:text-lg lg:text-xl line-clamp-3 lg:max-w-screen-xl"
        >
          Total Hadiah Sitefest 2025
        </p>
        <h1
          class="scroll-m-20 text-2xl font-extrabold tracking-tight md:text-3xl lg:text-5xl text-white"
        >
          Rp 15.000.000+
        </h1>
      </div>
      <!-- PLANET -->
      <div
        class="absolute h-full top-1/2 aspect-square rounded-full bg-gradient-to-br from-[#02192C] to-[#072D46] z-0"
      ></div>
    </div>
    <!-- FOOT -->
    <div class="flex flex-col justify-start items-start w-full gap-4">
      <div
        class="w-full bg-white px-6 py-8 rounded-2xl flex flex-row justify-start items-center gap-4"
      >
        <img
          src="/src/assets/images/first-place.svg"
          alt="Place Reward Icon"
          class="w-16 aspect-square"
        />
        <div class="flex flex-col justify-start items-start gap-1">
          <h2
            class="scroll-m-20 text-md text-mainBlue font-extrabold tracking-tight md:text-lg lg:text-2xl"
          >
            Uang Pembinaan, Piala, Sertifikat
          </h2>
          <p
            class="leading-7 text-left font-medium opacity-70 md:text-md lg:text-lg line-clamp-3 lg:max-w-screen-lg"
          >
            Per tim
          </p>
        </div>
      </div>
      <div
        class="w-full bg-white px-6 py-8 rounded-2xl flex flex-row justify-start items-center gap-4"
      >
        <img
          src="/src/assets/images/second-place.svg"
          alt="Place Reward Icon"
          class="w-16 aspect-square"
        />
        <div class="flex flex-col justify-start items-start gap-1">
          <h2
            class="scroll-m-20 text-md text-mainBlue font-extrabold tracking-tight md:text-lg lg:text-2xl"
          >
            Uang Pembinaan, Piala, Sertifikat
          </h2>
          <p
            class="leading-7 text-left font-medium opacity-70 md:text-md lg:text-lg line-clamp-3 lg:max-w-screen-lg"
          >
            Per tim
          </p>
        </div>
      </div>
      <div
        class="w-full bg-white px-6 py-8 rounded-2xl flex flex-row justify-start items-center gap-4"
      >
        <img
          src="/src/assets/images/third-place.svg"
          alt="Place Reward Icon"
          class="w-16 aspect-square"
        />
        <div class="flex flex-col justify-start items-start gap-1">
          <h2
            class="scroll-m-20 text-md text-mainBlue font-extrabold tracking-tight md:text-lg lg:text-2xl"
          >
            Uang Pembinaan, Piala, Sertifikat
          </h2>
          <p
            class="leading-7 text-left font-medium opacity-70 md:text-md lg:text-lg line-clamp-3 lg:max-w-screen-lg"
          >
            Per tim
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
