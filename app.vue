<template>
  <v-app>
    <NavBar />
    <NuxtRouteAnnouncer />
    <Hero />
    <Topics />
    <CourseInformation />
    <Companies />
    <CourseDetail />
    <Requirements />
    <Description />
    <StudentsBought />
    <moreCourses />
    <Footer />
  </v-app>
</template>

<script setup>
import NavBar from "./Sections/navbar";
import Hero from "./Sections/hero";
import Topics from "./Sections/topics";
import CourseInformation from "./Sections/courseInformation";
import CourseDetail from "./Sections/courseDetail";
import Footer from "./Sections/footer";
import Companies from "./Sections/companies.vue"
import Requirements from "./Sections/requirements";
import Description from "./Sections/description";
import StudentsBought from "./Sections/studentsBought";
import moreCourses  from "./Sections/moreCourses";
</script>
