<template>
  <section class="skills" id="skills">
    <h2 class="heading">Skills</h2>
    <h5 class="sub-heading">
      Technologies and tools that I use in building web applications.
    </h5>
    <div class="skills-container">
      <div class="skill-card">
        <div class="skill-icon">
          <img src="../../../src/assets/icons/html-5.svg" alt="HTML5" />
        </div>
        <span>HTML5</span>
      </div>
      <div class="skill-card">
        <div class="skill-icon">
          <img src="../../../src/assets/icons/css.svg" alt="CSS3" />
        </div>
        <span>CSS3</span>
      </div>
      <div class="skill-card">
        <div class="skill-icon">
          <img src="../../../src/assets/icons/js.svg" alt="JavaScript" />
        </div>
        <span>JavaScript</span>
      </div>
      <div class="skill-card">
        <div class="skill-icon">
          <img
            src="../../../src/assets/icons/bootstrap-5-1.svg"
            alt="Bootstrap"
          />
        </div>
        <span>Bootstrap</span>
      </div>
      <div class="skill-card">
        <div class="skill-icon">
          <img src="../../../src/assets/icons/vue.svg" alt="Vue.js" />
        </div>
        <span>Vue.js</span>
      </div>
      <div class="skill-card">
        <div class="skill-icon">
          <img src="../../../src/assets/icons/vuex.png" alt="Vue.js" />
        </div>
        <span>VueX</span>
      </div>
      <div class="skill-card">
        <div class="skill-icon">
          <img src="../../../src/assets/icons/primevue.png" alt="Vue.js" />
        </div>
        <span>PrimeVue</span>
      </div>
      <div class="skill-card">
        <div class="skill-icon">
          <img src="../../../src/assets/icons/primeflex.png" alt="Vue.js" />
        </div>
        <span>PrimeFlex</span>
      </div>

      <div class="skill-card">
        <div class="skill-icon">
          <img src="../../../src/assets/icons/php.svg" alt="PHP" />
        </div>
        <span>PHP</span>
      </div>
      <div class="skill-card">
        <div class="skill-icon">
          <img src="../../../src/assets/icons/laravel.svg" alt="Laravel" />
        </div>
        <span>Laravel</span>
      </div>
      <div class="skill-card">
        <div class="skill-icon">
          <img src="../../../src/assets/icons/mysql-circ.svg" alt="MySQL" />
        </div>
        <span>MySQL</span>
      </div>
      <div class="skill-card">
        <div class="skill-icon">
          <img
            src="../../../src/assets/icons/sql-server.png"
            alt="SQL Server"
          />
        </div>
        <span>SQL Server</span>
      </div>
      <div class="skill-card">
        <div class="skill-icon">
          <img
            src="../../../src/assets/icons/api-page-svgrepo-com.svg"
            alt="REST API"
          />
        </div>
        <span>REST API</span>
      </div>
      <div class="skill-card">
        <div class="skill-icon">
          <img src="../../../src/assets/icons/git.png" alt="REST API" />
        </div>
        <span>Git</span>
      </div>
      <div class="skill-card">
        <div class="skill-icon">
          <img src="../../../src/assets/icons/postman-icon.svg" alt="Postman" />
        </div>
        <span>Postman</span>
      </div>
      <div class="skill-card">
        <div class="skill-icon">
          <img src="../../../src/assets/icons/vscode.svg" alt="VS Code" />
        </div>
        <span>VS Code</span>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.skills {
  /*border: 1px solid red; */
  background-image: url("../../assets/background/skills-bg.png");
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: cover;
  /* background: var(--bg-light); */
}

.skills .skills-container {
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: repeat(4, 3fr);
  gap: 1.3rem;
  text-align: center;
  align-items: center;
  padding: 45px 100px 45px 100px;
}

.skills .skills-container .skill-card {
  padding: 1.2rem;
  /* border: 0.1rem solid rgba(0, 0, 0, 0.2); */
  border-radius: 15px;
  transition: ease 0.5s;
  box-shadow: 7px 7px 36px 5px rgba(67, 56, 67, 0.09);
  /* background: var(--card-bg); */
}

.skills .skills-container .skill-card:hover {
  transform: scale(1.08);
  transition: 0.5s;
}

.skills .skills-container .skill-icon img {
  /*max-width: 100%;
  height: 5rem;
  width: 4rem;
  margin-bottom: 0.3rem;*/
  width: 4rem;
  height: 4rem; /* Keep the height and width the same for a circular shape */
  object-fit: cover; /* Maintain aspect ratio without stretching */
  margin-bottom: 0.3rem;
}

.skills .skills-container span {
  font-size: 1.4rem;
  line-height: 1.4;
  color: var(--text-light);
}

@media (max-width: 991px) {
  .skills .skills-container {
    grid-template-columns: repeat(4, 3fr);
    transition: 0.3s;
  }
}

@media (max-width: 768px) {
  .skills .skills-container {
    grid-template-columns: repeat(2, 2fr);
  }

  .skills .skills-container {
    padding: 45px;
  }
}
</style>
