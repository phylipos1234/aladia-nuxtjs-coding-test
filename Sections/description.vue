<template>
  <div class="w-full md:w-[80%] m-auto mt-2 mb-10">
    <div class="w-full">
      <p class="font-bold text-2xl my-2">Description</p>
      <div class="grid grid-cols-1 md:grid-cols-10 gap-6 relative">
        <div class="col-span-10 md:col-span-7 relative">
          <p class="text-sm my-2">
            Dive deep into the world of Nuxt 3 with this all-encompassing guide.
            Geared for developers eager to unlock the full power of the Nuxt 3
            framework, this course offers you an intensive, project-based
            learning experience that will make you a full-stack Nuxt maestro.
          </p>
          <p class="text-sm my-2">
            Kick off your journey with the construction of a markdown-powered
            blog and portfolio. Learn how to effortlessly style it with Tailwind
            CSS, and get to grips with Nuxt's file-based routing to manage your
            content like a pro. Utilize built-in layouts to create reusable
            structure across different pages. Plus, level up the user experience
            by implementing a dark/light mode selector.
          </p>
          <p class="text-sm my-2" v-if="!showMore">
            Then, escalate your skill set by developing a robust finance tracker
            application using Nuxt and Supabase. Master the art of creating
            composables and discover how to execute operations like
          </p>
          <div
            v-if="!showMore"
            class="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white pointer-events-none z-10"
          ></div>

          <div v-if="showMore" class="additional-content">
            <p class="text-sm my-2">
              Then, escalate your skill set by developing a robust finance
              tracker application using Nuxt and Supabase. Master the art of
              creating composables and discover how to execute operations like
              getting, inserting, and updating data efficiently with Supabase.
              Explore Row Level Security (RLS) to manage data permissions and
              tap into Supabase Auth for seamless user authentication. Get
              hands-on with file uploads and make your app more interactive and
              functional. Integrate the NuxtUI component library to give your
              app a polished look and feel.
            </p>
            <p class="text-sm my-2">
              Through these projects, you'll explore best practices for Nuxt and
              Vue development that can be universally applied to any full-stack
              project. Plus, you won't have to worry about getting stuck; the
              course comes complete with full source code for each project.
              Don't miss the chance to unlock your full-stack potential. Dive in
              now.
            </p>

            <p class="font-bold text-2xl my-2">Who this course is for:</p>
            <ul class="list-disc pl-5">
              <li>
                <p class="pl-2 text-sm">
                  Developers looking to transition from frontend to full-stack
                  using Nuxt 3 and Vue
                </p>
              </li>
              <li>
                <p class="pl-2 text-sm">
                  Experienced Vue developers aiming to specialize in Nuxt 3 for
                  more robust projects
                </p>
              </li>
              <li>
                <p class="pl-2 text-sm">
                  Backend developers interested in mastering modern full-stack
                  frameworks and libraries
                </p>
              </li>
              <li>
                <p class="pl-2 text-sm">
                  Professionals in need of building real-world projects
                </p>
              </li>
              <li>
                <p class="pl-2 text-sm">
                  Teams seeking to upskill their developers in best practices
                  for Nuxt, Vue, and Supabase development
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        @click="toggleShowMore"
        class="text-[#5022c3] font-bold cursor-pointer mt-2 flex items-center relative text-sm"
      >
        <div v-if="!showMore" class="absolute bottom-0 left-0 w-full h-8"></div>
        <span>{{ showMore ? "Show less" : "Show more" }}</span>
        <svg
          v-if="!showMore"
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 ml-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06-.02L10 10.94l3.71-3.75a.75.75 0 111.08 1.04l-4.25 4.29a.75.75 0 01-1.08 0L5.23 8.23a.75.75 0 01-.02-1.06z"
            clip-rule="evenodd"
          />
        </svg>
        <svg
          v-if="showMore"
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 ml-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M14.77 12.79a.75.75 0 01-1.06.02L10 9.06l-3.71 3.75a.75.75 0 11-1.08-1.04l4.25-4.29a.75.75 0 011.08 0l4.25 4.29c.29.3.29.76.02 1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMore: false,
    };
  },
  methods: {
    toggleShowMore() {
      this.showMore = !this.showMore;
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.bg-gradient-to-t {
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0)
  );
}
</style>
