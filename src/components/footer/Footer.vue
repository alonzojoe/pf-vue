<template>
  <footer class="footer" id="footer">
    <div
      class="footer-box animation-duration-300"
      v-animateonscroll="{ enterClass: 'fadeindown', threshold: 0.3 }"
    >
      <div class="footer-items">
        <h3>Joe's Portfolio</h3>
      </div>
      <div class="footer-items socials">
        <a
          href="https://github.com/alonzojoe"
          target="blank_"
          class="bx bxl-github"
        ></a>
        <a
          href="https://www.linkedin.com/in/alonzo-joe"
          target="blank_"
          class="bx bxl-linkedin"
        ></a>
        <a
          href="https://www.facebook.com/alonzojoe"
          target="blank_"
          class="bx bxl-facebook"
        ></a>
      </div>
    </div>
    <hr />
    <p
      class="animation-duration-500"
      v-animateonscroll="{ enterClass: 'fadeindown', threshold: 0.2 }"
    >
      &copy; Joenell Alonzo. All Rights Reserved {{ currentYear }}
    </p>
  </footer>
</template>

<script setup>
import { ref } from "vue";
import moment from "moment";

const currentYear = ref(moment().year());
</script>

<style scoped>
.footer {
  /* border: 1px solid red; */
  padding: 3rem 20%;
  padding-bottom: 5rem;
}

.footer-items h3 {
  font-size: 3rem;
  font-weight: 600;
}

.footer .footer-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 3rem;
  border-bottom: 1px solid #b3b4b7;
}

.footer-items.socials {
  display: flex;
  gap: 1rem;
}

.footer-items a {
  height: 4rem;
  width: 4rem;
  text-align: center;
  line-height: 4rem;
  font-size: 1.7rem;
  color: #fff;
  border-radius: 5px;
  background: var(--text-purple);
}

.footer-items a:hover {
  transform: scale(1.1);
  transition: 0.5s;
}

.footer p {
  padding-top: 5rem;
  font-size: 16px;
  text-align: center;
}

@media (max-width: 650px) {
  .footer {
    padding: 3rem 10%;
  }

  .footer .footer-box {
    flex-direction: column;
    gap: 3rem;
  }
}
</style>
