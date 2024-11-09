<template>
    <div class="flex flex-col items-start gap-2 w-full md:w-auto">
      <img
        :src="imageSrc"
        :alt="title"
        width="180"
        height="100"
        loading="lazy"
        class="border-[2px] border-black md:w-[240px] md:h-[135px]"
      />
      <h1 class="text-[14px] md:text-[16px] font-bold font-roboto">{{ title }}</h1>
      <h2 class="text-[10px] md:text-[12px] text-[#2D2F31]">{{ author }}</h2>
      <h3 class="text-[10px] font-bold font-roboto">
        <span class="text-[12px] md:text-[13px] font-bold font-roboto">{{ rating }}</span> ⭐️⭐️⭐️⭐️⭐️
        <span class="text-[10px] md:text-[12px] text-[#2D2F31]">({{ reviews }})</span>
      </h3>
      <h4 class="text-[10px] md:text-[12px] text-[#2D2F31]">
        {{ duration }}. {{ lectures }} All Levels
      </h4>
      <div class="text-[12px] md:text-[14px] flex gap-2">
        <span class="font-bold">{{ price }}</span>
        <span class="line-through text-sm text-gray-500">{{ originalPrice }}</span>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps ({
    
      title: String,
      author: String,
      rating: Number,
      reviews: Number,
      duration: String,
      lectures: String,
      price: String,
      originalPrice: String,
      imageSrc: String,
  
  });
  </script>
  