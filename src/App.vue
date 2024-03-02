<script setup>
import { ref } from "vue";
import Navbar from "@/components/header/Navbar.vue";
import Home from "@/components/home/Home.vue";
import About from "@/components/about/About.vue";
import Skills from "@/components/skills/Skills.vue";
import Projects from "@/components/projects/Projects.vue";
import Contact from "@/components/contact/Contact.vue";
import Footer from "@/components/footer/Footer.vue";
import Toast from 'primevue/toast';
const appTheme = ref("");

const switchTheme = (theme) => {
  appTheme.value = theme;
};
</script>

<template>
  <div>
    <Navbar @toggle-theme="switchTheme" />
    <Toast />
    <div class="page-sections">
      <Home id="home" />
      <About id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Contact id="contact" />
    </div>
    <Footer />
  </div>
</template>

<style scoped></style>
