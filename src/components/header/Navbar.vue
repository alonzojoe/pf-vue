<template>
  <header id="header">
    <a href="" class="logo"> {{ storeTheme }} {{ isSmallScreen }} </a>
    <!-- v-scroll-spy v-scroll-spy-active="{
      selector: 'a.menu-item-selection',
      class: 'active-menu-item',
    }" -->
    <div class="navbar" :class="showMenu">
      <a href="#home" class="menu-item-selection active"
        :class="{ 'fadeindown animation-duration-400': isSmallScreen && isToggle }">Home</a>
      <a href="#about" class="menu-item-selection"
        :class="{ 'fadeindown animation-duration-500': isSmallScreen && isToggle }">About</a>
      <a href="#skills" class="menu-item-selection"
        :class="{ 'fadeindown animation-duration-600': isSmallScreen && isToggle }">Skills</a>
      <a href="#projects" class="menu-item-selection"
        :class="{ 'fadeindown animation-duration-700': isSmallScreen && isToggle }">Projects</a>
      <a href="#contact" class="menu-item-selection"
        :class="{ 'fadeindown animation-duration-800': isSmallScreen && isToggle }">Contact</a>
    </div>
    <div class="controls">
      <a href="javascript:void(0);" class="bx" :class="classTheme" id="theme" @click="toggleTheme()"></a>
      <a href="javascript:void(0);" :class="menu" id="menu" @click="isToggle = !isToggle"></a>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { usePrimeVue } from "primevue/config";
import { useStore } from "vuex";

const store = useStore();

const storeTheme = computed(() => store.getters.getCurrentTheme);

const emit = defineEmits(["toggle-theme"]);

const currentTheme = ref("lara-light-purple");

const PrimeVue = usePrimeVue();

const toggleTheme = () => {
  let nextTheme = "lara-light-purple";

  if (currentTheme.value === "lara-light-purple")
    nextTheme = "lara-dark-purple";
  else if (currentTheme.value === "lara-dark-purple")
    nextTheme = "lara-light-purple";
  PrimeVue.changeTheme(currentTheme.value, nextTheme, "theme", () => { });

  currentTheme.value = nextTheme;
  store.commit("setTheme", nextTheme);
  emit("toggle-theme", currentTheme.value);
};

const classTheme = computed(() => {
  return currentTheme.value == "lara-light-purple" ? "bxs-sun" : "bxs-moon";
});

const isToggle = ref(false);

const menu = computed(() => {
  return isToggle.value ? "bx bx-x" : "bx bx-menu";
});

const showMenu = computed(() => {
  return isToggle.value ? "active" : "";
});

const isSmallScreen = ref(window.innerWidth <= 768);

const handleResize = () => {
  isSmallScreen.value = window.innerWidth <= 768;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--bg-light);
  padding: 1.7rem 9%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: var(--box-shadow-bottom);
  z-index: 200;
}

header .logo {
  font-size: 2.5rem;
  border-radius: 0.5rem;
  padding: 0.5rem 1.5rem;
  color: var(--text-light);
}

header .navbar {
  flex: 1;
  text-align: right;
  z-index: 400;
}

header .navbar a {
  font-size: 1.7rem;
  border-radius: 0.5rem;
  padding: 0.5rem 1.5rem;
  margin: 0 0.5rem;
  color: var(--text-light);
}

header .navbar .active,
header .navbar a:hover {
  color: var(--text-white);
  background: var(--text-purple);
}

header .controls {
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 1rem;
}

header .controls #theme {
  /* background: var(--text-purple); */
  background: #f6f6f6;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  padding: 7px;
  text-align: center;
  cursor: pointer;
  font-size: 2rem;
  /* background: var(--text-purple); */
  text-align: center;
  color: var(--text-light);
}

header .controls #menu {
  background: #f6f6f6;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  padding: 7px;
  cursor: pointer;
  font-size: 2rem;
  text-align: center;
  color: var(--text-light);
  display: none;
}

@media (max-width: 991px) {
  header {
    padding: 1rem 2rem;
  }
}

@media (max-width: 768px) {
  header {
    z-index: 100;
  }

  header .controls #theme {
    padding: 5px;
    font-size: 2.5rem;
  }

  header .controls #menu {
    padding: 5px;
    display: inline-block;
    font-size: 2.5rem;
  }

  header .navbar {
    background: var(--bg-light);
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    border-top: 0.1rem solid rgba(0, 0, 0, 0.2);
    border-bottom: 0.1rem solid rgba(0, 0, 0, 0.2);
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: max-height 0.3s ease-in-out, padding 0.3s ease-in-out 0.2s !important;
  }

  header .navbar.active {
    padding: 1rem;
    top: 100%;
    transition: max-height 0.3s ease-in-out !important;
    /* Remove the padding transition when adding the active class */
    max-height: 100vh;
    height: 100vh;
    opacity: 1;
  }

  header .navbar:not(.active) {
    opacity: 0;
    transition: opacity 0.4s ease-in-out !important;
  }

  header .navbar.active-menu-item {
    top: 100%;
    height: 100vh;
  }

  header .navbar .control {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
  }

  header .navbar .control .close-btn {
    text-align: center;
    font-size: 1.9rem;
    font-weight: 600;
    color: var(--text-purple);
  }

  header .navbar .close-btn {
    height: 4.5rem;
    width: 4.5rem;
    line-height: 4.5rem;
  }

  header .navbar a {
    text-align: center;
    /* background: #eee; */
    padding: 1.5rem;
    display: block;
    font-size: 2.5rem;
    font-weight: 600;
  }

  header .navbar a.active {
    background: transparent !important;
    color: #8e57e8 !important;
  }

  header .navbar a:hover {
    color: #8e57e8 !important;
    background: transparent !important;
  }
}

.animation-duration-400 {
  animation-duration: 400ms !important;
}

.animation-duration-500 {
  animation-duration: 500ms !important;
}

.animation-duration-600 {
  animation-duration: 600ms !important;
}

.animation-duration-700 {
  animation-duration: 700ms !important;
}

.animation-duration-800 {
  animation-duration: 800ms !important;
}

@media (max-width: 450px) {
  header .navbar a {
    text-align: center;
    /* background: #eee; */
    padding: 1.5rem;
    display: block;
    font-size: 3rem;
    font-weight: 600;
  }
}
</style>
