<template>
  <div class="w-full md:w-[80%] m-auto mt-2 mb-10">
    <div class="w-full">
      <p class="font-bold text-2xl my-2">Students also bought</p>
      <div class="grid grid-cols-1 md:grid-cols-10 gap-6 relative">
        <div class="col-span-10 md:col-span-7">
          <v-container>
            <v-row v-for="n in visibleCount" :key="n">
              <v-col cols="12" sm="6" md="6" class="flex">
                <img
                  src="https://img-c.udemycdn.com/course/100x100/5573566_6eb5_9.jpg"
                  width="80"
                />
                <div class="flex flex-col justify-around">
                  <p class="text-sm font-black mx-2">
                    NUXT 3 Bootcamp: Full-Stack Guide with Real-World Projects
                  </p>
                  <div class="flex">
                    <p class="text-sm font-black mx-2 text-green-800">
                      15 total hours
                    </p>
                    <p class="text-sm mx-2">updated 1/2023</p>
                  </div>
                </div>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <div class="flex justify-between">
                  <p>4.6 ⭐️</p>
                  <div class="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                      />
                    </svg>

                    <p class="ml-2">572</p>
                  </div>
                  <div class="flex">
                    <div class="mx-2">
                      <p class="font-bold">$10</p>
                      <p class="line-through text-xs text-gray-500">$60</p>
                    </div>
                    <div
                      class="w-12 h-12 rounded-full border-2 border-black flex justify-center items-center hover:bg-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-container>
          <div
            class="text-black font-bold w-full border-2 border-black cursor-pointer text-center py-3 hover:bg-[#d4d5d6]"
            @click="toggleVisibility"
          >
            {{ isExpanded ? "Show Less" : "Show More" }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const visibleCount = ref(5);
const isExpanded = ref(false);

const toggleVisibility = () => {
  isExpanded.value = !isExpanded.value;
  visibleCount.value = isExpanded.value ? 7 : 5;
};
</script>
