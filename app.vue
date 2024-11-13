<template>
  <v-app class="relative">
    <NavBar />
     <FloatingNavBar />
     <div class="relative w-full h-full">
    <NuxtRouteAnnouncer />
    <Hero />
    <Topics />
    <CourseInformation />
    <Companies />
    <CourseDetail />
    <Requirements />
    <Description />
    <StudentsBought />
    <FrequentlyBought />
    <Instructor />
    <Reviews />
    <MoreCourses />
    <StickyCard />
  </div>
    <Footer />
  </v-app>
</template>

<script setup>
import Hero from "./Sections/hero";
import NavBar from "./Sections/navbar";
import FloatingNavBar from "./Sections/floatingNavBar";
import Topics from "./Sections/topics";
import Companies from "./Sections/companies.vue";
import CourseInformation from "./Sections/courseInformation";
import CourseDetail from "./Sections/courseDetail";
import Requirements from "./Sections/requirements";
import Description from "./Sections/description";
import StudentsBought from "./Sections/studentsBought";
import Instructor from "./Sections/instructor";
import Reviews from "./Sections/reviews";
import MoreCourses from "./Sections/moreCourses";
import Footer from "./Sections/footer";
import StickyCard from "./Components/stickyCard";
import FrequentlyBought from "./Sections/frequentlyBought";
</script>
