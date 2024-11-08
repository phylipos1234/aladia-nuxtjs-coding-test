<!-- components/GridItem.vue -->
<template>
  <div :class="gridClass" class="flex items-start space-x-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5 text-black-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5 13l4 4L19 7"
      />
    </svg>
    <p class="text-sm">{{ text }}</p>
  </div>
</template>

<script setup>
defineProps({
  text: String,
  gridClass: String,
});
</script>
