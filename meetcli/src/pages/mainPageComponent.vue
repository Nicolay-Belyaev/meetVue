<script>
import HeaderComponent from "@/components/headerComponent.vue";
import FooterComponent from "@/components/footerComponent.vue";
import ProjectCardComponent from "@/components/projectCardComponent.vue";
import WelcomeBlockComponent from "@/components/welcomeBlockComponent.vue";
import CountersComponent from "@/components/counters/countersComponent.vue";
import BlogCardComponent from "@/components/blogCardComponent.vue";

export default {
  name: "mainPageComponent",
  components: {
    BlogCardComponent, CountersComponent, WelcomeBlockComponent, ProjectCardComponent, FooterComponent, HeaderComponent},
  data: () => {
    return {
      projectCards: [
        {img: "design-1.png", corner: "top-right", id: 1},
        {img: "design-2.png", corner: "top-left", id: 2},
        {img: "design-3.png", corner: "bottom-right", id: 3},
        {img: "design-4.png", corner: "bottom-left", id: 4}
      ],
      blogCards: [
        {
          id: 1,
          img: "blog-photo-1.png",
          label: "Kitchan Design",
          headline: "Let’s Get Solution For Building Construction Work",
          date: "26 December, 2022",
        },
        {
          id: 2,
          img: "blog-photo-2.png",
          label: "Living Design",
          headline: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "26 December, 2022",
         },
        {
          id: 3,
          img: "blog-photo-3.png",
          label: "Interior Design",
          headline: "Best For Any Office & Business Interior Solution",
          date: "26 December, 2022",
         },
      ]
    }
  }
}
</script>

<template>
  <div>
    <header-component/>
    <welcome-block-component/>
    <div class="follow">
      <span class="heading">Follow Our Projects</span>
      <span class="text">It is a long established fact that a reader will be distracted by the of readable <br>
        content of page lookings at its layouts points.</span>
    </div>
    <div class="projects">
      <project-card-component
        v-for="card in projectCards"
        :img-name="card.img"
        :rounded-corner="card.corner"
        :key="card.id"
      />
    </div>
    <counters-component/>
    <div class="blog">
      <span class="heading">Articles & News </span>
      <span class="text ">It is a long established fact that a reader will be distracted by the of readable <br>
        content of a page when lookings at its layouts the points of using.</span>
    </div>
    <div class="posts">
      <blog-card-component
          v-for="card in blogCards"
          :img-name="card.img"
          :headline="card.headline"
          :label="card.label"
          :date="card.date"
          :key="card.id"
      />
    </div>


    <footer-component/>
  </div>
</template>

<style scoped>
  .projects {
    margin: 0 auto;
    width: 1200px;
    display: flex;
    flex-wrap: wrap;
    column-gap: 104px;
    row-gap: 60px;
  }
  .follow {
    display: flex;
    flex-direction: column;
    margin: 90px auto 90px auto;
  }
  .blog {
    display: flex;
    flex-direction: column;
    margin-bottom: 96px;
  }
  .posts {
    width: 1200px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    gap: 30px;
  }
</style>
