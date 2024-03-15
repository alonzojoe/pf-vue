<template>
  <section class="home" :id="sectionId">
    <div
      class="home-intro animation-duration-1000"
      v-animateonscroll="{
        enterClass: 'fadeinleft',
        once: true,
        threshold: 1,
      }"
    >
      <h3>Hello, I'm</h3>
      <h1>Joenell Alonzo</h1>
      <h5>A Software Engineer From <span>Pampanga, Philippines 2020</span></h5>
      <p>
        I am passionate about building dynamic and functional web applications
        using RESTful API integration.
      </p>
      <div class="socials">
        <a
          href="https://github.com/alonzojoe"
          target="_blank"
          class="bx bxl-github"
        ></a>
        <a
          href="https://www.linkedin.com/in/alonzo-joe"
          target="_blank"
          class="bx bxl-linkedin"
        ></a>
        <a
          href="https://www.facebook.com/alonzojoe"
          target="_blank"
          class="bx bxl-facebook"
        ></a>
      </div>
      <div class="cv">
        <a href="JOENELL ALONZO - CV.pdf" class="btn" download>Download CV</a>
      </div>
    </div>
    <div
      class="home-profile profile-icons animation-duration-1000"
      v-animateonscroll="{
        enterClass: 'fadeinright',
        once: true,
        threshold: 1,
      }"
    >
      <img class="vue-circe" src="../../assets/icons/vue-circ.png" alt="Vue" />
      <img
        class="laravel-circe"
        src="../../assets/icons/laravel-circ.png"
        alt="Laravel"
      />
      <img class="api-circe" src="../../assets/icons/api-circ.png" alt="API" />
      <img
        class="db-circe"
        src="../../assets/icons/db-circ.png"
        alt="Database"
      />
      <img
        class="ball-left"
        src="../../assets/icons/ball-left.png"
        alt="Ball-Left"
      />
      <img
        class="ball-right-lower"
        src="../../assets/icons/ball-right-lower.png"
        alt="Ball-right-lower"
      />
      <img
        class="ball-right-upper"
        src="../../assets/icons/ball-right-upper.png"
        alt="Ball-right-upper"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import imageBackground from "../../assets/background/home-bg.png";
import mainIcon from "../../assets/icons/joe.svg";
import mainIconPng from "../../assets/icons/joev1.png";

import profileLight from "../../assets/icons/joe-updated.png";
import profileDark from "../../assets/icons/joe-dark-mode.png";

const store = useStore();
const scrolledItems = computed(() => store.getters.getScrolledItems);
const storeTheme = computed(() => store.getters.getCurrentTheme);

const bgImage = computed(() => {
  return storeTheme.value !== "lara-dark-purple"
    ? `url(${imageBackground})`
    : "";
});

const profileBg = computed(() => {
  return storeTheme.value !== "lara-dark-purple"
    ? `url(${profileLight})`
    : `url(${profileDark})`;
});

const props = defineProps({
  id: String,
});

const sectionId = ref();
const sectionName = ref();

onMounted(() => {
  sectionId.value = props.id;
  sectionName.value = props.id.charAt(0).toUpperCase() + props.id.slice(1);
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
  /* border: 1px solid red; */
  padding-bottom: 9rem;
}

.home .home-intro {
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.home .home-profile {
  /* border: 1px solid red; */

  width: 100%;
  height: 580px;
  background-image: v-bind(profileBg);
  background-position: 50% 50%;
  background-size: 720px;
  background-repeat: no-repeat, no-repeat;
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
  gap: 1.1rem;
}

.home .home-intro .socials a {
  height: 4rem;
  width: 4rem;
  line-height: 4rem;
  text-align: center;
  border-radius: 50%;
  font-size: 2.1rem;
  color: var(--text-white);
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

.home-profile.profile-icons {
  /* border: 1px solid green; */
  position: relative;
  /* overflow-x: hidden; */
  /* overflow-x: hidden; */
}

.home-profile.profile-icons .vue-circe {
  position: absolute;
  top: 100px;
  left: 60px;
  height: 100px;
  height: 100px;
  transform-style: preserve-3d;
  will-change: transform;
  transform: translate3d(-21.0743px, 48.344px, 0px) scale3d(1, 1, 1)
    rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  animation: vueMovement 10s ease-in-out infinite;
  z-index: 10;
}

.home-profile.profile-icons .laravel-circe {
  position: absolute;
  top: 260px;
  left: 60px;
  height: 80px;
  width: 80px;
  z-index: 8;
  transform-style: preserve-3d;
  will-change: transform;
  transform: translate3d(1.02305px, 32.0162px, 0px) scale3d(1, 1, 1)
    rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  animation: laravelMovement 8s ease-in-out infinite;
}

.home-profile.profile-icons .api-circe {
  position: absolute;
  top: 160px;
  right: 90px;
  height: 80px;
  width: 80px;
  z-index: 10;
  transform-style: preserve-3d;
  will-change: transform;
  transform: translate3d(48.0256px, 180.07px, 0px) scale3d(1, 1, 1)
    rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  animation: apiMovement 10s ease-in-out infinite;
}

.home-profile.profile-icons .db-circe {
  position: absolute;
  top: 20px;
  height: 50px;
  width: 50px;
  z-index: 7;
  transform-style: preserve-3d;
  will-change: transform;
  transform: translate3d(-9.091px, 25px, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  animation: dbMovement 10s ease-in-out infinite;
}

.home-profile.profile-icons .ball-left {
  position: absolute;
  top: 95px;
  height: 25px;
  width: 25px;
  z-index: 7;
  transform-style: preserve-3d;
  will-change: transform;
  transform: translate3d(-95.5827px, -1.6944px, 0px) scale3d(1, 1, 1)
    rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  animation: ballLeftMovement 10s ease-in-out infinite;
}

.home-profile.profile-icons .ball-right-lower {
  position: absolute;
  top: 160px;
  height: 35px;
  width: 35px;
  z-index: 7;
  transform-style: preserve-3d;
  will-change: transform;
  transform: translate3d(280.5048px, 54.4429px, 0px) scale3d(1, 1, 1)
    rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  animation: ballRightLowerMovement 10s ease-in-out infinite;
}

.home-profile.profile-icons .ball-right-upper {
  position: absolute;
  top: 20px;
  height: 25px;
  width: 25px;
  z-index: 7;
  transform-style: preserve-3d;
  will-change: transform;
  transform: translate3d(280.5048px, 54.4429px, 0px) scale3d(1, 1, 1)
    rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  animation: ballRightUpperMovement 10s ease-in-out infinite;
}

/* transform: translate3d(107.25px, -36.7123px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); */

@keyframes vueMovement {
  0%,
  100% {
    transform: translate3d(-21.0743px, 65.344px, 0px) scale3d(1, 1, 1)
      rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }

  25% {
    transform: translate3d(-21.0743px, -48.344px, 0px) scale3d(1, 1, 1)
      rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }

  50% {
    transform: translate3d(48.344px, -21.0743px, 0px) scale3d(1, 1, 1)
      rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }

  75% {
    transform: translate3d(-48.344px, 21.0743px, 0px) scale3d(1, 1, 1)
      rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }
}

@keyframes laravelMovement {
  /* Start: Original Position */
  0%,
  100% {
    transform: translate3d(1.02305px, 32.0162px, 0px) scale3d(1, 1, 1)
      rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }

  /* Diagonal Downward to the Left */
  20% {
    transform: translate3d(-32.0162px, 50.02305px, 0px) scale3d(1, 1, 1)
      rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }

  /* Straight Line to the Left */
  40% {
    transform: translate3d(-32.0162px, -1.02305px, 0px) scale3d(1, 1, 1)
      rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }

  /* Diagonal Downward to the Right */
  60% {
    transform: translate3d(32.0162px, 50.02305px, 0px) scale3d(1, 1, 1)
      rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }

  /* Back to Original Position */
}

@keyframes apiMovement {
  /* Start: Bottom */
  0% {
    transform: translate3d(48.0256px, 180.07px, 0px) scale3d(1, 1, 1)
      rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }

  /* Diagonal Left */
  25% {
    transform: translate3d(-32.0162px, 50.02305px, 0px) scale3d(1, 1, 1)
      rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }

  /* Diagonal Left to Diagonal Center Top */
  50% {
    transform: translate3d(0px, -150px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }

  /* Back to Original Position */
  75% {
    transform: translate3d(-32.0162px, 50.02305px, 0px) scale3d(1, 1, 1)
      rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }

  /* Return to Bottom */
  100% {
    transform: translate3d(48.0256px, 180.07px, 0px) scale3d(1, 1, 1)
      rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }
}

@keyframes dbMovement {
  /* Start: Bottom */
  0% {
    transform: translate3d(-9.091px, 25px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }

  /* Wider Diagonal Left */
  25% {
    transform: translate3d(-190px, -20px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(-0deg) skew(0deg, 0deg);
  }

  /* Back to Bottom */
  50% {
    transform: translate3d(-9.091px, 25px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }

  /* Wider Diagonal Right */
  75% {
    transform: translate3d(70px, -30px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }

  /* Back to Bottom */
  100% {
    transform: translate3d(-9.091px, 25px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }
}

@keyframes ballLeftMovement {
  /* Start: Original Position */
  0%,
  100% {
    transform: translate3d(-95.5827px, -1.6944px, 0px) scale3d(1, 1, 1)
      rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }

  /* Diagonal Downward Left */
  25% {
    transform: translate3d(-170px, 60px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(-45deg) skew(0deg, 0deg);
  }

  /* Left */
  50% {
    transform: translate3d(-195px, 200px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }

  /* Diagonal Downward Left */
  75% {
    transform: translate3d(-130px, -1.6944px, 0px) scale3d(1, 1, 1)
      rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }
}

@keyframes ballRightLowerMovement {
  /* Start: Original Position */
  0%,
  100% {
    transform: translate3d(280.5048px, 54.4429px, 0px) scale3d(1, 1, 1)
      rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }

  /* Diagonal Top Right */
  25% {
    transform: translate3d(150px, 140px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(45deg) skew(0deg, 0deg);
  }

  /* Diagonal Left to Bottom Right */
  50% {
    transform: translate3d(190px, 110px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }

  /* Diagonal Bottom Right to Original Position */
  75% {
    transform: translate3d(320px, 250px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(-45deg) skew(0deg, 0deg);
  }
}

@keyframes ballRightUpperMovement {
  /* Start: Original Position */
  0%,
  100% {
    transform: translate3d(280.5048px, 54.4429px, 0px) scale3d(1, 1, 1)
      rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }

  /* Diagonal Top Right to Bottom Right */
  25% {
    transform: translate3d(280.5048px, 160px, 0px) scale3d(1, 1, 1)
      rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }

  /* Right to Left */
  50% {
    transform: translate3d(180px, 160px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }

  /* Bottom Right to Bottom Left */
  75% {
    transform: translate3d(160px, 20px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }
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

@media screen and (max-width: 1469px) {
  /* .home {
    background: red;
  } */
  .home .home-intro h1 {
    font-size: 7rem;
  }

  .home .home-profile {
    background-position: 50% 50%;
    background-size: 600px;
    width: 100%;
    height: 500px;
  }
}

@media (max-width: 1285px) {
  .home .home-intro h1 {
    font-size: 6.5rem;
  }
}

@media (max-width: 1279px) {
  .home .home-profile {
    background-position: 50% 50%;
    background-size: 500px;
    width: 100%;
    height: 450px;
  }
}

@media (max-width: 767px) {
  .home .home-profile {
    background-position: 50% 50%;
    background-size: 400px;
    width: 100%;
    height: 350px;
  }
}

@media screen and (max-width: 991px) {
  section.home {
    margin-top: 0;
  }

  .home {
    grid-template-columns: repeat(1, 1fr);
    gap: 1.5rem;
  }

  .home-intro {
    order: 2;
    /* Change the order of the first item */
  }

  .home-profile {
    order: 1;
    /* Change the order of the second item */
  }

  .home .home-profile {
    background-position: 50% 50%;
    background-size: 700px;
    width: 100%;
    height: 600px;
  }

  .home-intro h1,
  h3,
  h5,
  p {
    text-align: center;
  }

  .home .home-intro .socials {
    /* border: 1px solid red; */
    justify-content: center;
    gap: 1rem;
    margin-bottom: 0;
  }

  .home .home-intro .socials a {
    text-align: center;
  }

  .cv {
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cv .btn {
    margin-top: 0;
  }
}

@media (max-width: 767px) {
  .home {
    grid-template-columns: repeat(1, 1fr);
    gap: 1.5rem;
  }

  .home-intro {
    order: 2;
    /* Change the order of the first item */
  }

  .home-profile {
    order: 1;
    /* Change the order of the second item */
  }

  .home .home-profile .profile-bg {
    height: 35rem;
    width: 35rem;
  }

  .home .home-profile {
    background-position: 50% 50%;
    background-size: 500px;
    width: 100%;
    height: 350px;
  }

  .home-profile.profile-icons .vue-circe {
    height: 50px;
    height: 50px;
  }

  .home-profile.profile-icons .laravel-circe {
    top: 170px;
    height: 40px;
    width: 40px;
    transform: translate3d(1.02305px, 20.0162px, 0px) scale3d(1, 1, 1)
      rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }

  @keyframes laravelMovement {
    /* Start: Original Position */
    0%,
    100% {
      transform: translate3d(10.02305px, 20.0162px, 0px) scale3d(1, 1, 1)
        rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }

    /* Diagonal Downward to the Left */
    20% {
      transform: translate3d(-20.9838px, 50.02305px, 0px) scale3d(1, 1, 1)
        rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }

    /* Straight Line to the Left */
    40% {
      transform: translate3d(8.9838px, 50.02305px, 0px) scale3d(1, 1, 1)
        rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }

    /* Diagonal Downward to the Right */
    60% {
      transform: translate3d(30.9838px, 30.02305px, 0px) scale3d(1, 1, 1)
        rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }

    /* Back to Original Position */
  }

  .home-profile.profile-icons .api-circe {
    height: 40px;
    width: 40px;
    transform: translate3d(32.0256px, 10.07px, 0px) scale3d(1, 1, 1)
      rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }

  @keyframes apiMovement {
    /* Start: Bottom */
    0% {
      transform: translate3d(32.0256px, 10.07px, 0px) scale3d(1, 1, 1)
        rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }

    /* Diagonal Left */
    25% {
      transform: translate3d(-32.0162px, 50.02305px, 0px) scale3d(1, 1, 1)
        rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }

    /* Diagonal Left to Diagonal Center Top */
    50% {
      transform: translate3d(0px, -150px, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }

    /* Back to Original Position */
    75% {
      transform: translate3d(-32.0162px, 50.02305px, 0px) scale3d(1, 1, 1)
        rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }

    /* Return to Bottom */
    100% {
      transform: translate3d(32.0256px, 10.07px, 0px) scale3d(1, 1, 1)
        rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }
  }

  .home-profile.profile-icons .db-circe {
    height: 30px;
    width: 30px;
    transform: translate3d(-9.091px, -10px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    /* animation: none; */
  }

  @keyframes dbMovement {
    /* Start: Bottom */
    0% {
      transform: translate3d(-9.091px, -10px, 0px) scale3d(1, 1, 1)
        rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }

    /* Wider Diagonal Left */
    25% {
      transform: translate3d(-190px, -5px, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(-0deg) skew(0deg, 0deg);
    }

    /* Back to Bottom */
    50% {
      transform: translate3d(-9.091px, -10px, 0px) scale3d(1, 1, 1)
        rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }

    /* Wider Diagonal Right */
    75% {
      transform: translate3d(30px, -30px, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }

    /* Back to Bottom */
    100% {
      transform: translate3d(-9.091px, -10px, 0px) scale3d(1, 1, 1)
        rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }
  }

  .home-profile.profile-icons .ball-left {
    height: 15px;
    width: 15px;
    transform: translate3d(-150.5827px, -1.6944px, 0px) scale3d(1, 1, 1)
      rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }

  @keyframes ballLeftMovement {
    /* Start: Original Position */
    0%,
    100% {
      transform: translate3d(-150.5827px, -1.6944px, 0px) scale3d(1, 1, 1)
        rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }

    /* Diagonal Downward Left */
    25% {
      transform: translate3d(-190px, 60px, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(-45deg) skew(0deg, 0deg);
    }

    /* Left */
    50% {
      transform: translate3d(-195px, 130px, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }

    /* Diagonal Downward Left */
    75% {
      transform: translate3d(-140px, -1.6944px, 0px) scale3d(1, 1, 1)
        rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }
  }

  .home-profile.profile-icons .ball-right-lower {
    height: 25px;
    width: 25px;
    transform: translate3d(210.5048px, 65.4429px, 0px) scale3d(1, 1, 1)
      rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    /* animation: none; */
  }

  @keyframes ballRightLowerMovement {
    /* Start: Original Position */
    0%,
    100% {
      transform: translate3d(210.5048px, 65.4429px, 0px) scale3d(1, 1, 1)
        rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }

    /* Diagonal Top Right */
    25% {
      transform: translate3d(190px, 120px, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(45deg) skew(0deg, 0deg);
    }

    /* Diagonal Left to Bottom Right */
    50% {
      transform: translate3d(160px, 130px, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }

    /* Diagonal Bottom Right to Original Position */
    75% {
      transform: translate3d(215px, 150px, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(-45deg) skew(0deg, 0deg);
    }
  }

  .home-profile.profile-icons .ball-right-upper {
    height: 25px;
    width: 25px;
    transform: translate3d(160px, 20px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }

  @keyframes ballRightUpperMovement {
    /* Start: Original Position */
    0%,
    100% {
      transform: translate3d(200.5048px, 54.4429px, 0px) scale3d(1, 1, 1)
        rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }

    /* Diagonal Top Right to Bottom Right */
    25% {
      transform: translate3d(200.5048px, 160px, 0px) scale3d(1, 1, 1)
        rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }

    /* Right to Left */
    50% {
      transform: translate3d(180px, 160px, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }

    /* Bottom Right to Bottom Left */
    75% {
      transform: translate3d(160px, 20px, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }
  }
}

@media (max-width: 450px) {
  .home-profile.profile-icons {
    overflow-x: hidden;
    /* overflow-x: hidden; */
  }

  .home-profile.profile-icons .api-circe {
    height: 40px;
    width: 40px;
  }

  @keyframes apiMovement {
    /* Start: Bottom */
    0%,
    100% {
      transform: translate3d(32.0256px, 10.07px, 0px) scale3d(1, 1, 1)
        rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }

    /* Diagonal Left */
    25% {
      transform: translate3d(-15.0162px, 55.02305px, 0px) scale3d(1, 1, 1)
        rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }

    /* Diagonal Left to Diagonal Center Top */
    50% {
      transform: translate3d(45px, -90px, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }

    /* Back to Original Position */
    75% {
      transform: translate3d(-10.0162px, 50.02305px, 0px) scale3d(1, 1, 1)
        rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }
  }

  .home-profile.profile-icons .db-circe {
    height: 30px;
    width: 30px;

    /* animation: none; */
  }

  @keyframes dbMovement {
    /* Start: Bottom */
    0% {
      transform: translate3d(-9.091px, -10px, 0px) scale3d(1, 1, 1)
        rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }

    /* Wider Diagonal Left */
    25% {
      transform: translate3d(-120px, -3px, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(-0deg) skew(0deg, 0deg);
    }

    /* Back to Bottom */
    50% {
      transform: translate3d(-9.091px, -10px, 0px) scale3d(1, 1, 1)
        rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }

    /* Wider Diagonal Right */
    75% {
      transform: translate3d(80px, -10px, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }

    /* Back to Bottom */
    100% {
      transform: translate3d(-9.091px, -10px, 0px) scale3d(1, 1, 1)
        rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }
  }

  .home-profile.profile-icons .ball-left {
    height: 15px;
    width: 15px;

    /* animation: none; */
  }

  @keyframes ballLeftMovement {
    /* Start: Original Position */
    0%,
    100% {
      transform: translate3d(-140.5827px, -1.6944px, 0px) scale3d(1, 1, 1)
        rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }

    /* Diagonal Downward Left */
    25% {
      transform: translate3d(-110px, 60px, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(-45deg) skew(0deg, 0deg);
    }

    /* Left */
    50% {
      transform: translate3d(-125px, 130px, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }

    /* Diagonal Downward Left */
    75% {
      transform: translate3d(-130px, -50.6944px, 0px) scale3d(1, 1, 1)
        rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }
  }

  .home-profile.profile-icons .vue-circe {
    height: 50px;
    height: 50px;
  }

  @keyframes vueMovement {
    0%,
    100% {
      transform: translate3d(-21.0743px, 65.344px, 0px) scale3d(1, 1, 1)
        rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }

    25% {
      transform: translate3d(-21.0743px, -48.344px, 0px) scale3d(1, 1, 1)
        rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }

    50% {
      transform: translate3d(-15.344px, 5.0743px, 0px) scale3d(1, 1, 1)
        rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }

    75% {
      transform: translate3d(-30.344px, 21.0743px, 0px) scale3d(1, 1, 1)
        rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }
  }

  .home-profile.profile-icons .ball-right-upper {
    height: 25px;
    width: 25px;
  }

  @keyframes ballRightUpperMovement {
    /* Start: Original Position */
    0%,
    100% {
      transform: translate3d(150.5048px, 54.4429px, 0px) scale3d(1, 1, 1)
        rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }

    /* Diagonal Top Right to Bottom Right */
    25% {
      transform: translate3d(90.5048px, 160px, 0px) scale3d(1, 1, 1)
        rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }

    /* Right to Left */
    50% {
      transform: translate3d(160px, 160px, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }

    /* Bottom Right to Bottom Left */
    75% {
      transform: translate3d(130px, 20px, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }
  }

  .home-profile.profile-icons .ball-right-lower {
    height: 25px;
    width: 25px;
  }

  @keyframes ballRightLowerMovement {
    /* Start: Original Position */
    0%,
    100% {
      transform: translate3d(125.5048px, 60.4429px, 0px) scale3d(1, 1, 1)
        rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }

    /* Diagonal Top Right */
    25% {
      transform: translate3d(130px, -30px, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(45deg) skew(0deg, 0deg);
    }

    /* Diagonal Left to Bottom Right */
    50% {
      transform: translate3d(105px, 60px, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }

    /* Diagonal Bottom Right to Original Position */
    75% {
      transform: translate3d(120px, -80px, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(-45deg) skew(0deg, 0deg);
    }
  }
}

@media screen and (min-width: 1024px) {
}

@media screen and (max-width: 1920px) {
  .home {
    background-image: v-bind(bgImage);
    background-size: cover;
  }
}
</style>
