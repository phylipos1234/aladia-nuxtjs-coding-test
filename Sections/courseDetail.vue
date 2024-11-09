<template>
  <div class="w-full md:w-[80%] m-auto mt-8 ">
    <div class="w-full">
      <p class="font-bold text-2xl my-4">Course content</p>
      <div class="grid grid-cols-1 md:grid-cols-10 gap-6">
        <div class="col-span-10 md:col-span-7">
          <div class="flex justify-between flex-wrap">
            <p>15 sections • 114 lectures • 15h 29m total length</p>
            <button @click="toggleExpandAll" class="text-[#5022c3] font-bold">
              {{ expandAll ? "Collapse all sections" : "Expand all sections" }}
            </button>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-10 gap-6 my-4">
        <div class="col-span-10 md:col-span-7">
          <v-expansion-panels v-model="expandedPanels" class="mb-6">
            <v-expansion-panel
              v-for="(item, index) in displayCourses"
              :key="index"
            >
              <v-expansion-panel-title
                expand-icon="mdi-menu-down"
                class="bg-[#F7F9FA] py-5"
              >
                <div class="flex justify-between w-full">
                  <p class="font-bold">{{ item.text }}</p>

                  <div class="hidden md:flex items-center">
                    <p>{{ item.lectures }} lectures</p>
                    <div class="w-1 h-1 rounded-full bg-gray-400 mx-2"></div>
                    <p>{{ item.min }} min</p>
                  </div>
                </div>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <div class="flex justify-between">
                  <div>
                    <div
                      class="flex items-center"
                      v-for="n in 3"
                      :key="`welcome-${n}`"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-4 w-4 mr-3 mb-3"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                        />
                      </svg>
                      <p
                        class="cursor-pointer text-[#5022c3] underline mb-3 text-sm"
                      >
                        Welcome the course plan and projects
                      </p>
                    </div>
                  </div>
                  <div>
                    <div
                      class="hidden md:flex mb-3"
                      v-for="n in 3"
                      :key="`preview-${n}`"
                    >
                      <p
                        class="cursor-pointer text-[#5022c3] underline text-sm"
                      >
                        Preview
                      </p>
                      <p class="text-sm mx-3">10:10</p>
                    </div>
                  </div>
                </div>
                <div class="flex justify-between">
                  <div>
                    <div v-for="n in 3" :key="`setup-${n}`">
                      <div class="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="h-4 w-4 mr-3 mb-3"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                          />
                        </svg>
                        <p class="cursor-pointer mb-3 text-sm">
                          Setting Up, Solving Issues, Q&A and Udemy UI
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      class="hidden md:flex mb-3"
                      v-for="n in 3"
                      :key="`time-${n}`"
                    >
                      <p class="text-sm mx-3">02:10</p>
                    </div>
                  </div>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>

          <div
            v-if="!showMore"
            @click="toggleShowMore"
            class="text-black font-bold w-full border-2 border-black cursor-pointer text-center py-3 hover:bg-[#d4d5d6]"
          >
            3 more sections
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { coursesList } from "../data/courseContentList";

const expandedPanels = ref([]);
const expandAll = ref(false);
const showMore = ref(false);

const toggleExpandAll = () => {
  if (expandAll.value) {
    expandedPanels.value = [];
  } else {
    expandedPanels.value = coursesList.map((_, index) => index);
  }
  expandAll.value = !expandAll.value;
};

const toggleShowMore = () => {
  showMore.value = !showMore.value;
};

const displayCourses = computed(() => {
  return showMore.value ? coursesList : coursesList.slice(0, 9);
});
</script>
