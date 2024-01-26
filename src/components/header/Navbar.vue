<template>
  <header id="header">
    <a href="" class="logo"> Box </a>
    <div class="navbar" :class="showMenu">
      <a href="#home" class="active">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>
    <div class="controls">
      <a href="#" class="bx" :class="classTheme" id="theme" @click="toggleTheme()"></a>
      <a href="#" :class="menu" id="menu" @click="isToggle = !isToggle"></a>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from "vue";
import { usePrimeVue } from "primevue/config";

const emit = defineEmits(['toggle-theme'])

const currentTheme = ref("lara-light-purple");

const PrimeVue = usePrimeVue();

const toggleTheme = () => {
  let nextTheme = "lara-light-purple";

  if (currentTheme.value === "lara-light-purple")
    nextTheme = "lara-dark-purple";
  else if (currentTheme.value === "lara-dark-purple")
    nextTheme = "lara-light-purple";
  PrimeVue.changeTheme(currentTheme.value, nextTheme, "id-to-link", () => { });

  currentTheme.value = nextTheme;
  emit('toggle-theme', currentTheme.value)
};

const classTheme = computed(() => {
  return currentTheme.value == "lara-light-purple" ? "bxs-moon" : "bxs-sun";
});

const isToggle = ref(false);

const menu = computed(() => {
  return isToggle.value ? "bx bx-x" : "bx bx-menu-alt-right";
});

const showMenu = computed(() => {
  return isToggle.value ? "active" : "";
});
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

header .controls #theme {
  background: var(--text-purple);
  border-radius: 50%;
  padding: 7px;
  text-align: center;
  cursor: pointer;
  font-size: 1.7rem;
  /* background: var(--text-purple); */
  text-align: center;
  color: var(--text-white);
  margin-left: 0.5rem;
}

header .controls #menu {
  cursor: pointer;
  font-size: 1.7rem;
  text-align: center;
  color: var(--text-light);
  margin-left: 0.5rem;
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

  header .controls #menu {
    display: inline-block;
  }

  header .controls #theme {
    font-size: 3rem;
  }

  header .controls #menu {
    font-size: 3rem;
  }

  header .navbar {
    background: var(--bg-light);
    position: absolute;
    top: -1900vh;
    right: 0;
    left: 0;
    border-top: 0.1rem solid rgba(0, 0, 0, 0.2);
    border-bottom: 0.1rem solid rgba(0, 0, 0, 0.2);
    padding: 1rem;
    height: 0;
    overflow: hidden;
    transition: height 0.2s ease-in;
  }

  header .navbar.active {
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
    font-size: 1.9rem;
    font-weight: 600;
  }
}
</style>
