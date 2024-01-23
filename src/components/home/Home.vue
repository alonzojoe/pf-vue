<template>
  <section class="home" id="home">
    <div class="home-intro">
      <h3>Hello, I'm</h3>
      <h1>Joenell Alonzo</h1>
      <h5>A Software Engineer From <span>Pampanga, Philippines 2020</span></h5>
      <p>
        I'm passionate in building dynamic, functional and user-friendly web
        applications.
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
      <div class="profile-bg">
        <img src="./assets/images/joe-l.png" alt="joe" />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.home {
  margin-top: 9rem;
  /* min-height: 100vh;
    height: 100%;
    width: 100%; */
  background-size: cover;
  /* background: var(--bg-light); */
  background-position: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  border: 1px solid red;
}

.home .home-intro {
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.home .home-profile {
  border: 1px solid red;
}

.home .home-intro h3 {
  font-size: 2rem;
  font-weight: 500;
  color: var(--text-purple);
}

.home .home-intro h1 {
  font-size: 7rem;
  margin: 10px 0px 25px;
  line-height: 1;
  font-weight: 650;
  color: var(--text-dark);
}

.home .home-intro h5 {
  margin-bottom: 2rem;
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
  height: 3.7rem;
  width: 3.7rem;
  line-height: 3.7rem;
  text-align: center;
  border-radius: 50%;
  font-size: 1.8rem;
  color: var(--text-white);
  margin-right: 1.3rem;
  margin-bottom: 2rem;
  background: var(--text-purple);
}

.home .home-intro .socials a:hover {
  transform: scale(1.1);
  transition: 0.5s;
}

.home .home-profile {
  display: flex;
  justify-content: center;
}

.home .home-profile .profile-bg {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40rem;
  width: 40rem;
  border-radius: 50%;
  overflow: hidden;
  background: var(--text-purple);
  border: 0.2rem solid var(--text-purple);
}

.home .home-profile .profile-bg img {
  max-width: 100%;
  height: auto;
  width: 100%;
  object-fit: cover;
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
