<template>
  <div class="bg-[#1c1d1f] py-10">
    <div class="w-[80%] m-auto">
      <div class="flex mb-4">
        <v-breadcrumbs
          :items="items"
          class="p-0 m-0 text-[#c0c4fc]"
          style="padding: 0"
        >
          <template v-slot:divider>
            <v-icon
              icon="mdi-chevron-right"
              class="text-[#c0c4fc] font-bold text-xs m-0"
              style="margin: 0"
            ></v-icon>
          </template>
        </v-breadcrumbs>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-10 gap-4">
        <div class="col-span-10 md:col-span-7">
          <h1 class="text-white py-4 text-3xl font-bold">
            Master Nuxt 3 - Full-Stack Complete Guide
          </h1>
          <p class="text-white font-light">
            Learn Nuxt 3: Intuitive Vue Framework, Build and Deploy 2 Production
            Grade Full-Stack Apps
          </p>
          <div class="mt-6 mb-4 flex items-center">
            <p class="font-bold inline bg-[#ECEB98] px-1 py-1 text-xs">
              Best Seller
            </p>
            <p class="text-[#F69C08] text-sm mx-2">4.6</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#f69c08"
              class="size-3"
              v-for="n in 5"
            >
              <path
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clip-rule="evenodd"
              />
            </svg>
            <NuxtLink to="#" class="text-[#c0c4fc] underline text-sm mx-2"
              >(479 ratings)</NuxtLink
            >
            <p class="text-white text-sm">3,236 students</p>
          </div>
          <div class="my-3 flex items-center">
            <p class="text-white font-light">Created by</p>
            <NuxtLink to="#" class="text-[#c0c4fc] underline text-sm mx-2"
              >Piotor Jura | 57,000+ students</NuxtLink
            >
          </div>
          <div class="my-3 flex items-center">
            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                class="size-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                />
              </svg>
              <p class="text-white font-light text-sm mx-2">
                Last updated 10/2024
              </p>
            </div>

            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                class="size-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              <p class="text-white font-light mx-2 text-sm">English</p>
            </div>

            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                class="size-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z"
                />
              </svg>
              <p class="text-white font-light mx-2 text-sm">English [Auto]</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
let items = [
  {
    title: "Web Development",
    disabled: false,
    href: "#",
  },
  {
    title: "Nuxt",
    disabled: false,
    href: "#",
  },
];
</script>
