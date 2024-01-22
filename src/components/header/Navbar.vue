<template>
  <header id="header">
    <a href="" class="logo"> Joe </a>

    <div class="navbar">
      <!-- <div class="control">
                  <div class="close-btn"><i class='bx bxs-x-circle'></i></div>
              </div> -->
      <a href="#home" class="active">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>

    <div class="controls">
      <a href="#" class="bx bxs-moon" id="theme"></a>
      <a href="#" class="bx bx-menu-alt-right" id="menu"></a>
    </div>
  </header>
</template>

<script setup></script>

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
  cursor: pointer;
  font-size: 1.7rem;
  /* background: var(--text-purple); */
  text-align: center;
  color: var(--text-light);
  margin-left: 0.5rem;
}

header .controls #menu {
  cursor: pointer;
  font-size: 1.7rem;

  /* background: var(--text-purple); */
  text-align: center;
  color: var(--text-light);
  margin-left: 0.5rem;
  display: none;
}

@media (max-width: 991px) {
  html {
    font-size: 55%;
  }

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

  header .controls #theme,
  header .controls #menu {
    font-size: 3rem;
  }

  header .navbar {
    background: var(--bg-light);
    position: absolute;
    top: -1900%;
    right: 0;
    left: 0;
    border-top: 0.1rem solid rgba(0, 0, 0, 0.2);
    border-bottom: 0.1rem solid rgba(0, 0, 0, 0.2);
    padding: 1rem;
    height: 100vh;
    overflow: hidden;
  }

  header .navbar.active {
    top: 100%;
    transition: 0.2s ease-in;
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
    margin: 2rem 30rem;
    display: block;
    font-size: 1.9rem;
    font-weight: 600;
  }
}

@media (max-width: 450px) {
  html {
    font-size: 50%;
  }
}
</style>
