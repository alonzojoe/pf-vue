<script setup>
import { ref } from 'vue'
import Navbar from "@/components/header/Navbar.vue";
import Home from "@/components/home/Home.vue";
import About from "@/components/about/About.vue";
import Skills from "@/components/skills/Skills.vue"
import Projects from "@/components/projects/Projects.vue"
import Contact from "@/components/contact/Contact.vue";
import Footer from "@/components/footer/Footer.vue"

const appTheme = ref('')

const switchTheme = (theme) => {
  appTheme.value = theme
}

</script>

<template>
  <div>
    <Navbar @toggle-theme="switchTheme" />
    <div class="page-sections" v-scroll-spy="{ offset: 70, allowNoActive: false }">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  </div>
</template>

<style scoped></style>
