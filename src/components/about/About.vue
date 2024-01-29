<template>
  <section
    v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }"
    class="about animation-duration-1000"
  >
    <h2 class="heading">About</h2>
    <div class="about-content">
      <div
        v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }"
        class="about-paragraph animation-duration-1000"
      >
        <p>
          Hello, I'm Joe, a motivated and collaborative software engineer with
          several years of industry experience.
        </p>
        <p>
          My passion is to build functional web applications using the skills I
          have self-studied and learned through mentorship.
        </p>
        <p>
          My interest in web development started when I was a graduating student
          in junior high school. Whenever I visited a website, I was curious
          about the process behind the user's view, so I chose to study
          Information Technology in college to learn more about it. That's where
          my passion for web development began. Over the years, I've refined my
          skills, diving into coding, design, and user experience to create
          dynamic, functional, user-friendly web applications. I remain
          dedicated to continually expanding my knowledge in this dynamic field.
        </p>
      </div>
      <div
        v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }"
        class="about-paragraph animation-duration-1000"
      >
        <h3>Bachelor of Science in Information Technology</h3>
        <span>Don Honorio Ventura State University</span>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.about {
  border: 1px solid red;
  /* background: var(--bg-light); */
}

.about .about-content {
  display: grid;
  grid-template-columns: repeat(2, calc(100% / 2));
  gap: 1rem;
  text-align: left;
}

.about .about-content .about-paragraph {
  border: 1px solid red;
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
