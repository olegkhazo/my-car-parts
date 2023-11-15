<template>
  <div class="content-wrapper">
    <h1>Careers</h1>
    <h2><b>MyNextParts</b> is looking for a new talant who can join to our team</h2>
    <h3>Currently open full-stack engineer position</h3>
    <h4>Vacancy description:</h4>
    <span>
      Proven knowledge of a FullStack Engineer both in Node.js (Express.js)/Vue.js.
      <br />
      Technical proficiency in Javascript, Typescript, Vue.js, Nuxt.js.
      <br />
      Good knowledge of Vue.js (Vue Router, Vuetify, Vue CLI, Nuxt.js (nice to have), Vue Test Utils).
      <br />
      Strong knowledge of Mongo DB.
      <br />
      Strong understanding of most popular CI/CD tools (Jenkins, Git, etc.)
      <br />
      Good understanding of the MVC framework.
      <br />
      Good understanding of SOA, SOAP web Services, REST web services.
      <br />
      Attention to detail and passion for deep dive into code from the first days.
      <br />
      Readiness for challenges and trying something as your daily routine.
      <br />
      Practice in Agile/Scrum methodologies and practices.
    </span>
    <h4>We offer:</h4>
    <span>
      - Competitive salary, room for development and growth;
      <br />
      - Fully remote;
      <br />
      - Loyal management, interesting tasks, constant support;
      <br />
      - Flexible schedule and ability to manage your working hours;
      <br />
      - Support your personal growth and skills upgrading;
      <br />
      - The great environment inside the team, support of initiatives, and ability to contribute to the common goal. We
      do believe that the success of <b>MyNextParts</b> is impossible without the success of our Talents and the success
      of our Clients!</span
    >
    <hr />
    <p>
      If you are interested in this vacancy,and you are a really good one for it, please send your resume and cover
      letter to this address:
      <a href="mailto:o.zhuravko@gmail.com">o.zhuravko@gmail.com</a>. <br />
      Looking forward to meeting you!
    </p>
  </div>
</template>

<script setup>
useHead({
  title: "MyNextParts - Careers",
  meta: [
    {
      name: "description",
      content: "MyNextParts is looking for a new talant who can join to our team",
    },
  ],
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.content-wrapper {
  h1 {
    font-size: 50px;
    font-weight: 300;
    text-align: center;

    @media (max-width: 834px) {
      font-size: 35px;
    }

    @media (max-width: 382px) {
      font-size: 28px;
    }
  }

  font-size: 16px;

  a {
    text-decoration: none;
    color: $blue;
    font-weight: 600;
  }
}
</style>
