<template>
  <div class="w-[90%] md:w-[80%] m-auto mt-2 mb-10">
    <div class="w-full">
      <div class="grid grid-cols-1 md:grid-cols-10 gap-6 relative">
        <div class="col-span-10 md:col-span-7 relative">
          <div class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#b4690e"
              class="size-6"
            >
              <path
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clip-rule="evenodd"
              />
            </svg>
            <p class="font-bold text-2xl">4.6 course • rating 479 ratings</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-10 gap-6 relative my-6">
            <div
              class="col-span-10 md:col-span-5 relative"
              v-for="n in 4"
              :key="`welcome-${n}`"
            >
              <ReviewCard />
            </div>
          </div>
          <div
            class="border-[1px] border-black inline px-3 py-2 hover:bg-slate-300 font-bold cursor-pointer"
          >
            Show all Reviews
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-10 gap-6 relative">
        <div class="col-span-10 md:col-span-7"></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import ReviewCard from "../Components/reviewCard.vue";
</script>
