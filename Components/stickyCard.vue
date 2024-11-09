<template>
  <div
    :class="[
      ' right-16  z-20 bg-white shadow-lg w-[350px] hidden xl:block',
      isScrolled ? 'fixed' : 'absolute',
      isScrolled ? 'top-12' : 'top-32',
    ]"
  >
    <div class="relative">
      <img
        src="https://img-c.udemycdn.com/course/750x422/5464302_718b_2.jpg"
        width="350"
        height="200"
        class="p-0.5"
      />
      <div
        class="absolute z-40 top-[50%] left-[50%] w-16 h-16 rounded-full bg-white flex justify-center items-center cursor-pointer"
        style="transform: translate(-50%, -50%)"
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
            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
          />
        </svg>
      </div>
      <p class="absolute bottom-2 text-white font-bold w-full text-center z-40">
        Preview this course
      </p>
      <div class="absolute inset-0 bg-black opacity-50"></div>
    </div>
    <v-card>
      <v-tabs v-model="tab" align-tabs="center" color="black">
        <v-tab :value="1" class="w-[50%]">Personal</v-tab>
        <v-tab :value="2" class="w-[50%]">Teams</v-tab>
      </v-tabs>

      <v-tabs-window v-model="tab">
        <v-tabs-window-item v-for="n in 2" :key="n" :value="n">
          <div v-if="n === 1">
            <div class="w-[90%] m-auto my-4">
              <p class="w-full md:w-[80%] font-bold text-xl">
                Subscribe to Udemy’s top courses
              </p>
              <p class="text-sm">
                Get this course, plus 12,000+ of our top-rated courses, with
                Personal Plan.
                <span class="font-bold text-[#8072e6] underline">
                  Learn more</span
                >
              </p>
              <div
                class="text-center py-3 px-2 bg-[#a435f0] text-white font-bold my-2 cursor-pointer hover:bg-[#7629aa]"
              >
                Try Personal plan for free
              </div>
              <p class="text-xs text-center">
                Starting at $10.00 per month after trial
              </p>
              <p class="text-xs text-center my-2">Cancel anytime</p>
              <div class="flex justify-center items-center">
                <div class="border-t-[1px] w-[40%]"></div>
                <p class="text-xs text-center my-2 mx-2">or</p>
                <div class="border-t-[1px] w-[40%]"></div>
              </div>
              <p class="font-bold">
                $10.99
                <span class="line-through mx-3 font-extralight">$69.99</span
                ><span class="font-normal">84% off</span>
              </p>
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="red"
                  class="size-4 font-bold"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>

                <p class="text-red-500 text-sm">
                  <span class="font-black text-red-700">1 hour</span> left at
                  this price!
                </p>
              </div>
              <div
                class="border-[1px] border-black hover:bg-slate-200 cursor-pointer py-3 px-4 text-center my-2"
              >
                <p class="font-bold">Add to cart</p>
              </div>
              <p class="text-xs text-center">30-Day Money-Back Guarantee</p>
              <p class="text-xs text-center my-2">Full Lifetime Access</p>
            </div>
          </div>
          <div v-else>
            <div class="w-[90%] m-auto my-4 pb-10">
              <p class="text-sm w-full md:w-[80%]">
                Subscribe to this course and 27,000+ top‑rated Udemy courses for
                your organization.
              </p>
              <div
                class="text-center py-3 px-2 bg-[#a435f0] text-white font-bold my-2 cursor-pointer hover:bg-[#7629aa]"
              >
                Try Udemy Business
              </div>
              <div>
                <div class="flex items-center my-3" v-for="n in 3">
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
                  <p class="text-sm mx-2">For teams of 2 or more users</p>
                </div>
              </div>
            </div>
          </div>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      isScrolled: false,
      isLgScreen: false,
    };
  },
  mounted() {
    this.checkScrollPosition();
    window.addEventListener("scroll", this.checkScrollPosition);
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.checkScrollPosition);
    window.removeEventListener("resize", this.checkScreenSize);
  },
  methods: {
    checkScrollPosition() {
      this.isScrolled = window.scrollY >= 250 && window.scrollY <= 4000;
    },
    checkScreenSize() {
      this.isLgScreen = window.innerWidth >= 1024;
    },
  },
};
</script>