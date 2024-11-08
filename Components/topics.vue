<template>
  <div class="w-full md:w-[80%] m-auto mt-4 p-1">
    <div class="w-full">
      <div class="grid grid-cols-1 md:grid-cols-10 gap-4">
        <div class="col-span-10 md:col-span-7 p-4 border-2">
          <p class="font-bold text-2xl my-3">What you'll learn</p>
          <div class="grid grid-cols-1 md:grid-cols-10 gap-4">
            <TopicsGrid
              v-for="(item, index) in topicsList"
              :key="index"
              :text="item.text"
              :gridClass="
                index % 2 === 0
                  ? 'col-span-10 md:col-span-5'
                  : 'col-span-10 md:col-span-5'
              "
            />
          </div>
        </div>
        <div class="md:col-span-3 p-4"></div>
      </div>
      <div class="my-3">
        <p class="font-bold text-2xl my-3">Explore related topics</p>
        <div class="flex flex-wrap">
          <p
            class="border-2 mx-2 border-[#2e2e2d] px-3 py-3 rounded-3xl cursor-pointer font-bold hover:bg-[#c9c9c7] my-2"
          >
            Nuxt.js
          </p>
          <p
            class="border-2 mx-2 border-[#2e2e2d] px-3 py-3 rounded-3xl cursor-pointer font-bold hover:bg-[#c9c9c7] my-2"
          >
            Web Development
          </p>
          <p
            class="border-2 mx-2 border-[#2e2e2d] px-3 py-3 rounded-3xl cursor-pointer font-bold hover:bg-[#c9c9c7] my-2"
          >
            Development
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import TopicsGrid from "./topicsGrid.vue";
import { topicsList } from "../data/topicsList";
</script>
