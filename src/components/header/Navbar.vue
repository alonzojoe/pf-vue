<template>
  <Switcher v-if="modalSwitch" :checkType="checkState" />
  <header id="header">
    <a href="" class="logo">
      <!-- <img src="../../../src/assets/icons/joe-dark.png" alt="joe-logo" v-show="currentTheme == 'lara-light-purple'" />
      <img src="../../../src/assets/icons/joe-light.png" alt="joe-logo" v-show="currentTheme == 'lara-dark-purple'"> -->
      <span class="text-logo"> {{ joe }} </span>
    </a>
    <div class="navbar" :class="showMenu">
      <a
        href="#home"
        class="menu-item-selection"
        :class="{
          'fadeindown animation-duration-400': isSmallScreen && isToggle,
          active: currentSection == 'home',
        }"
        @click="navigateMenu"
        >Home</a
      >
      <a
        href="#about"
        class="menu-item-selection"
        :class="{
          'fadeindown animation-duration-500': isSmallScreen && isToggle,
          active: currentSection == 'about',
        }"
        @click="navigateMenu"
        >About</a
      >
      <a
        href="#skills"
        class="menu-item-selection"
        :class="{
          'fadeindown animation-duration-600': isSmallScreen && isToggle,
          active: currentSection == 'skills',
        }"
        @click="navigateMenu"
        >Skills</a
      >
      <a
        href="#projects"
        class="menu-item-selection"
        :class="{
          'fadeindown animation-duration-700': isSmallScreen && isToggle,
          active: currentSection == 'projects',
        }"
        @click="navigateMenu"
        >Projects</a
      >
      <a
        href="#contact"
        class="menu-item-selection"
        :class="{
          'fadeindown animation-duration-800': isSmallScreen && isToggle,
          active: currentSection == 'contact',
        }"
        @click="navigateMenu"
        >Contact</a
      >
    </div>
    <div class="controls">
      <a
        href="javascript:void(0);"
        class="bx"
        :class="classTheme"
        id="theme"
        @click="toggleTheme()"
      ></a>
      <a
        href="javascript:void(0);"
        :class="menu"
        id="menu"
        @click="isToggle = !isToggle"
      ></a>
      <!-- <a href="">{{ scrolledItems }}</a> -->
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { usePrimeVue } from "primevue/config";
import { useStore } from "vuex";
import Switcher from "@/components/Switcher/Switcher.vue";
const store = useStore();
const joe = ref(`< Joe />`);
const storeTheme = computed(() => store.getters.getCurrentTheme);

const emit = defineEmits(["toggle-theme"]);

const currentTheme = ref("lara-dark-purple");

const PrimeVue = usePrimeVue();

const modalSwitch = ref(false);
const checkState = ref(false);
const toggleTheme = (theme) => {
  modalSwitch.value = true;
  checkState.value = checkState.value === false ? true : false;
  let nextTheme =
    currentTheme.value == "lara-dark-purple"
      ? "lara-light-purple"
      : "lara-dark-purple";

  // let storageTheme = localStorage.getItem("app-theme");

  // storageTheme == null || storageTheme == "lara-dark-purple"

  if (currentTheme.value === "lara-dark-purple")
    nextTheme = "lara-light-purple";
  else if (currentTheme.value === "lara-light-purple")
    nextTheme = "lara-dark-purple";
  PrimeVue.changeTheme(currentTheme.value, nextTheme, "theme", () => {});

  currentTheme.value = nextTheme;
  localStorage.setItem("app-theme", currentTheme.value);
  store.commit("setTheme", currentTheme.value);
  emit("toggle-theme", currentTheme.value);
  switchLife();
};

const switchLife = () => {
  setTimeout(() => {
    modalSwitch.value = false;
  }, 1000);
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
  store.commit("setScreenSize", window.innerWidth);
};

const navigateMenu = () => {
  isToggle.value = false;
};

const currentSection = ref();
let section = ref();

const scrolledItems = computed(() => store.getters.getScrolledItems);
const updateScroll = () => {
  section.value.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 140;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      currentSection.value = id;

      if (!scrolledItems.value.includes(id) && id !== null) {
        setTimeout(() => {
          store.commit("addSection", id);
        }, 500);
      }
    }

    //  if (top >= offset && top < offset + height) {
    //     currentSection.value = id;

    //     if (id == 'home') {
    //       sec.style.paddingTop = "100px";
    //     }else{
    //       sec.style.paddingTop = "40px"; // Adjust the value as needed
    //     }

    //     // Assuming you want to update the padding-top of the current section

    //   } else {
    //     // Reset the padding-top for other sections
    //     sec.style.paddingTop = "100px";
    //   }
  });
};

const screenWidth = computed(() => store.getters.getScreenSize);

onMounted(() => {
  section.value = document.querySelectorAll("section");
  window.addEventListener("scroll", updateScroll);
  updateScroll();

  window.addEventListener("resize", handleResize);
  store.commit("setScreenSize", window.innerWidth);
});

const setMountedTheme = (theme) => {
  currentTheme.value = theme;
  let nextTheme = theme;

  if (currentTheme.value === "lara-dark-purple")
    nextTheme = "lara-light-purple";
  else if (currentTheme.value === "lara-light-purple")
    nextTheme = "lara-dark-purple";
  PrimeVue.changeTheme(currentTheme.value, nextTheme, "theme", () => {});

  currentTheme.value = nextTheme;
  // localStorage.setItem("app-theme", currentTheme.value);
  store.commit("setTheme", nextTheme);
  emit("toggle-theme", currentTheme.value);
};

const mountedTheme = () => {
  // currentTheme.value = localStorage.getItem('app-theme')
  // currentTheme.value == null || currentTheme.value == 'lara-dark-purple' ?
  //   toggleTheme('lara-dark-purple') : toggleTheme('lara-light-purple')
  const theme = localStorage.getItem("app-theme");
  console.log("apptheme", theme);
  if (theme == null || theme == "lara-dark-purple") {
    setMountedTheme("lara-light-purple");
    checkState.value = true;
  } else {
    setMountedTheme("lara-dark-purple");
    checkState.value = false;
  }
};

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

onMounted(() => {
  mountedTheme();
});

//  const theme = localStorage.getItem("app-theme");
//       theme == null || theme == "white-theme"
//         ? toggleChangeTheme("white-theme")
//         : toggleChangeTheme("dark-theme");

//     const mountedTheme = () => {
//       const theme = localStorage.getItem("app-theme");
//       theme == null || theme == "white-theme"
//         ? toggleChangeTheme("white-theme")
//         : toggleChangeTheme("dark-theme");
//     };

// lara-dark-purple
// lara-light-purple
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--bg-light);
  padding: 1rem 9%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: var(--box-shadow-bottom);
  z-index: 9999;
  /* border: 1px solid red; */
}

header .logo {
  display: flex;
  align-items: center;
}

header .logo img {
  max-width: 100%;
  width: 40px;
  height: auto;
}

header .logo .text-logo {
  font-size: 3rem;
  border-radius: 0.5rem;
  padding: 0rem 1.5rem;
  /* color: var(--text-light); */
  font-weight: 600;
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

header .controls #theme:hover {
  border: 1px solid var(--text-purple);
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

header .controls #menu:hover {
  border: 1px solid var(--text-purple);
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
    display: flex;
    flex-direction: column;
    align-items: center;
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
    /* display: block; */
    font-size: 2.5rem;
    font-weight: 600;
    width: 200px;
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
  animation-duration: 450ms !important;
}

.animation-duration-600 {
  animation-duration: 500ms !important;
}

.animation-duration-700 {
  animation-duration: 550ms !important;
}

.animation-duration-800 {
  animation-duration: 650ms !important;
}

@media (max-width: 450px) {
  header .navbar a {
    text-align: center;
    /* background: #eee; */
    padding: 1.5rem;
    display: block;
    font-size: 2.7rem;
    font-weight: 600;
  }
}

@media (max-width: 1279px) {
  header {
    padding: 1rem 4%;
  }
}

@media (max-width: 1200px) {
  header {
    padding: 1rem 2%;
  }
}
</style>
