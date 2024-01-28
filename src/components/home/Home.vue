<template>
  <section class="home fadeindown animation-duration-100">
    <div class="home-intro">
      <h3>Hello, I'm</h3>
      <h1>Joenell Alonzo</h1>
      <h5>A Software Engineer From <span>Pampanga, Philippines 2020</span></h5>
      <p>
        I am passionate about building dynamic and functional web applications
        using RESTful API integration.
      </p>
      <div class="socials">
        <a href="#" target="_blank" class="bx bxl-facebook"></a>
        <a href="#" target="_blank" class="bx bxl-github"></a>
        <a href="#" target="_blank" class="bx bxl-linkedin"></a>
      </div>
      <div>
        <a href="#" class="btn">Download X</a>
      </div>
    </div>
    <div class="home-profile">
      <!-- <div class="profile-bg">
        <img :src="mainIcon" alt="joe" />
      </div> -->
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import imageBackground from "../../assets/background/home-bg.png";
import mainIcon from "../../assets/icons/joe.svg";
import mainIconPng from "../../assets/icons/joev1.png";
const store = useStore();
const storeTheme = computed(() => store.getters.getCurrentTheme);

const bgImage = computed(() => {
  return storeTheme.value !== "lara-dark-purple"
    ? `url(${imageBackground})`
    : "";
});
</script>

<style scoped>
.home {
  padding-top: 9rem;
  /* min-height: 100vh;
    height: 100%;
    width: 100%; */
  background-image: v-bind(bgImage);
  background-repeat: no-repeat, no-repeat;
  background-size: auto, cover;
  /* background: var(--bg-light); */
  background-position: 45% 22%, 50% 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  border: 1px solid red;
  padding-bottom: 9rem;
}

.home .home-intro {
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.home .home-profile {
  border: 1px solid red;

  width: 100%;
  height: 580px;
  background-image: url("../../assets/icons/joev1.png");
  background-position: 50% 50%;
  background-size: 720px;
}

.home .home-intro h3 {
  font-size: 3rem;
  font-weight: 600;
  color: var(--text-purple);
}

.home .home-intro h1 {
  font-size: 8rem;
  margin: 10px 0px 25px;
  line-height: 1;
  font-weight: 700;
  color: var(--text-dark);
}

.home .home-intro h5 {
  margin-bottom: 3rem;
  font-size: 1.9rem;
  font-weight: 599;
  color: var(--text-light);
}

.home .home-intro h5 span {
  color: var(--text-purple);
}

.home .home-intro p {
  font-size: 1.7rem;
  line-height: 1.5;
  color: var(--text-light);
  margin-bottom: 2rem;
}

.home .home-intro .socials {
  display: flex;
  margin-bottom: 2rem;
}

.home .home-intro .socials a {
  height: 4rem;
  width: 4rem;
  line-height: 4rem;
  text-align: center;
  border-radius: 50%;
  font-size: 2.1rem;
  color: var(--text-white);
  margin-right: 1.3rem;
  margin-bottom: 2rem;
  background: var(--text-purple);
}

.home .home-intro .socials a:hover {
  transform: scale(1.1);
  transition: 0.5s;
}

.home-profile {
  display: flex;
  align-items: end;
}

.home .home-profile {
  display: flex;
  justify-content: center;
}

/* .home .home-profile .profile-bg {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40rem;
  width: 40rem;
  border-radius: 50%;
  overflow: hidden;
  background: var(--text-purple);
  border: 0.2rem solid var(--text-purple);
} */

/* .home .home-profile .profile-bg img {
  max-width: 100%;
  height: auto;
  width: 100%;
  object-fit: cover;
} */

/* .home-profile {
  background-image: v-bind(mainIcon);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
} */

.home-profile .profile-bg img {
  max-width: 100%;
  height: auto;
}

.btn {
  cursor: pointer;
  margin-top: 1rem;
  color: var(--text-white);
  font-size: 1.7rem;
  background: var(--text-purple);
  border-radius: 0.5rem;
  padding: 0.9rem 3rem;
  transition: all 0.2s ease-in-out;
}

.btn:hover {
  background: #7d4ec9;
}

.btn-sm {
  cursor: pointer;
  color: var(--text-white);
  font-size: 1.3rem;
  background: var(--text-purple);
  border-radius: 0.5rem;
  padding: 0.8rem 2rem;
  transition: all 0.2s ease-in-out;
}

@media (max-width: 768px) {
  .home {
    grid-template-columns: repeat(1, 1fr);
    gap: 1.5rem;
  }

  .home .home-profile .profile-bg {
    height: 35rem;
    width: 35rem;
  }
}
</style>
