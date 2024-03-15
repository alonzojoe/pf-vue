<template>
  <section class="about" :id="sectionId">
    <div
      class="animation-duration-1000"
      v-animateonscroll="{
        enterClass: 'fadein',
        once: true,
      }"
    >
      <!-- :class="{
          'fadeindown animation-duration-500': isSmallScreen && isToggle,
          active: currentSection == 'about',
        }" -->
      <h2 class="heading animation-duration-1000">About</h2>
      <div class="about-content">
        <div
          v-animateonscroll="{
            enterClass: 'fadein',
            once: true,
            threshold: isSmallScreen ? 0.1 : 0.2,
            rootMargin: '500px',
          }"
          class="about-paragraph animation-duration-1000"
        >
          <p>
            Hello, I'm Joe, a passionate software engineer with 4+ years of
            industry experience.
          </p>
          <p>
            My passion is to build functional web applications using the skills
            I have self-studied and learned through mentorship.
          </p>
          <p>
            My interest in web development started when I was a graduating
            student in junior high school. Whenever I visited a website, I was
            curious about the process behind the user's view, so I chose to
            study Information Technology in college to learn more about it.
            That's where my passion for web development began. Over the years,
            I've refined my skills, diving into coding, design, and user
            experience to create dynamic, functional, user-friendly web
            applications. I remain dedicated to continually expanding my
            knowledge in this dynamic field.
          </p>
          <p>
            What I like most about the industry I'm in is its continuous
            evolution. Technology continually challenges me to learn and stay
            updated on new technologies and frameworks as they release new
            versions to enhance their performance and fix ongoing issues. This
            nature of techonolgy evolution not only keeps me interested in this
            field but also inspires my passion for facing new challenges.
          </p>
        </div>
        <div
          v-animateonscroll="{
            enterClass: 'fadein',
            threshold: isSmallScreen ? 0.1 : 0.2,
            once: true,
          }"
          class="about-paragraph animation-duration-1000"
        >
          <h3>Bachelor of Science in Information Technology</h3>
          <span>Don Honorio Ventura Technological State University</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed, onUnmounted } from "vue";
import { useStore } from "vuex";
const store = useStore();
const scrolledItems = computed(() => store.getters.getScrolledItems);

const isSmallScreen = ref(window.innerWidth <= 768);

const handleResize = () => {
  isSmallScreen.value = window.innerWidth <= 768;
};

const props = defineProps({
  id: String,
});

const sectionId = ref();
const sectionName = ref();

onMounted(() => {
  sectionId.value = props.id;
  sectionName.value = props.id.charAt(0).toUpperCase() + props.id.slice(1);
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped>
.about {
  /* border: 1px solid red; */
  /* background: var(--bg-light); */
}

.about .about-content {
  display: grid;
  grid-template-columns: repeat(2, calc(100% / 2));
  gap: 1rem;
  text-align: left;
}

.about .about-content .about-paragraph {
  /* border: 1px solid red; */
  padding: 3rem;
}

.about .about-content .about-paragraph p {
  color: var(--text-light);
  font-size: 1.7rem;
  line-height: 1.5;
  margin-bottom: 2rem;
}

.about .about-content .about-paragraph h3 {
  color: var(--text-light);
  font-size: 2rem;
  font-weight: 600;
}

.about .about-content .about-paragraph span {
  color: var(--text-light);
  font-size: 1.7rem;
  line-height: 1.5;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .about .about-content {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
