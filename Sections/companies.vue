<template>
  <div class="w-full md:w-[80%] m-auto mt-4 p-1 font-roboto">
    <div class="w-full">
      <div class="grid grid-cols-1 md:grid-cols-10 gap-4">
        <div class="col-span-10 md:col-span-7 py-2 px-4 border-2">
          <p class="font-bold text-[14px] md:text-[16px]">
            Top companies offer this course to their employees
          </p>
          <p class="text-[12px] md:text-[14px]">
            This course was selected for our collection of top-rated courses
            trusted by businesses worldwide.
            <span
              class="border-b-[1px] cursor-pointer border-[#5022C3] text-[#5022C3]"
              @click="openModal"
            >
              Learn more
            </span>
          </p>
          <div class="flex flex-wrap justify-around py-3">
            <img
              src="https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg"
              alt="Nasdaq"
              class="h-8 w-20 md:h-10 md:w-28"
              loading="lazy"
            />
            <img
              src="https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg"
              alt="Volkswagen"
              class="h-8 w-8 md:h-10 md:w-12"
              loading="lazy"
            />
            <img
              src="https://s.udemycdn.com/partner-logos/v4/box-dark.svg"
              alt="Box"
              class="h-8 w-14 md:h-10 md:w-20"
              loading="lazy"
            />
            <img
              src="https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg"
              alt="NetApp"
              class="h-8 w-20 md:h-10 md:w-28"
              loading="lazy"
            />
            <img
              src="https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg"
              alt="Eventbrite"
              class="h-8 w-20 md:h-10 md:w-28"
              loading="lazy"
            />
          </div>
        </div>
        <div class="md:col-span-3 p-4"></div>
      </div>
    </div>

    <div
      v-if="isModalOpen"
      tabindex="-1"
      aria-hidden="true"
      class="fixed inset-0 flex items-center justify-center z-50"
    >
      <div class="fixed inset-0 bg-black opacity-50" @click="closeModal"></div>
      <div
        class="relative p-4 w-full max-w-lg md:max-w-2xl max-h-full overflow-scroll hide-scrollbar"
      >
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div class="flex items-center justify-between p-3 md:p-5">
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              @click="closeModal"
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>

          <div class="flex flex-col items-center p-3 md:p-5 space-y-4">
            <div class="flex justify-center">
              <img
                src="https://www.udemy.com/staticx/udemy/js/webpack/badge.d3a78f5e54199cebeafa9179ec2e8f7e.svg"
                alt=""
                class="h-10 w-8 md:h-16 md:w-12"
                loading="lazy"
              />
            </div>
            <h2 class="font-bold text-xl md:text-3xl">
              Learn from our very best
            </h2>
            <p class="text-sm md:text-base leading-relaxed text-center px-4">
              Our Udemy Business collection is a curation of top-rated courses
              for individuals and organizations to upskill and reach their
              goals.
            </p>
            <div class="flex justify-center">
              <img
                src="https://www.udemy.com/staticx/udemy/js/webpack/teach.f2bcf6719f73e7692317630d757a25fe.jpg"
                alt=""
                class="h-24 w-24 md:h-36 md:w-36"
                loading="lazy"
              />
            </div>
            <h2 class="font-bold text-lg md:text-xl">Always fresh</h2>
            <p class="text-sm md:text-base leading-relaxed text-center px-4">
              We add to the collection based on market trends and feedback from
              learners and their organizations.
            </p>
            <h2 class="font-bold text-lg md:text-xl">Data driven</h2>
            <p class="text-sm md:text-base leading-relaxed text-center px-4">
              We curate the collection based on unique data points to identify
              new and emerging skills.
            </p>
            <h2 class="font-bold text-lg md:text-xl">Better every day</h2>
            <p class="text-sm md:text-base leading-relaxed text-center px-4">
              We continuously refine the collection to help learners and
              businesses stay one step ahead.
            </p>
          </div>

          <div
            class="flex items-center p-3 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600"
          >
            <div class="flex flex-col items-center w-full">
              <img
                src="https://www.udemy.com/staticx/udemy/images/v7/logo-ub.svg"
                alt=""
                class="h-6 w-32 md:h-8 md:w-40"
                loading="lazy"
              />
              <h2 class="font-bold text-sm md:text-[16px] my-3 text-center">
                Trusted by organizations of all sizes
              </h2>
              <div class="flex justify-around flex-wrap gap-2 py-3">
                <img
                  src="https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg"
                  alt="Nasdaq"
                  class="h-8 w-20 md:h-10 md:w-28"
                  loading="lazy"
                />
                <img
                  src="https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg"
                  alt="Volkswagen"
                  class="h-8 w-8 md:h-10 md:w-12"
                  loading="lazy"
                />
                <img
                  src="https://s.udemycdn.com/partner-logos/v4/box-dark.svg"
                  alt="Box"
                  class="h-8 w-14 md:h-10 md:w-20"
                  loading="lazy"
                />
                <img
                  src="https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg"
                  alt="NetApp"
                  class="h-8 w-20 md:h-10 md:w-28"
                  loading="lazy"
                />
                <img
                  src="https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg"
                  alt="Eventbrite"
                  class="h-8 w-20 md:h-10 md:w-28"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModalOpen: false,
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
      document.body.classList.add("overflow-hidden");
    },
    closeModal() {
      this.isModalOpen = false;
      document.body.classList.remove("overflow-hidden");
    },
  },
};
</script>
<style>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>