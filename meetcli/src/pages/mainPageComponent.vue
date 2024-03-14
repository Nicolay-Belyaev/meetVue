<script>
import HeaderComponent from "@/components/headerComponent.vue";
import FooterComponent from "@/components/footerComponent.vue";
import ProjectCardComponent from "@/components/projectCardComponent.vue";
import WelcomeBlockComponent from "@/components/welcomeBlockComponent.vue";
import CountersComponent from "@/components/counters/countersComponent.vue";
import BlogCardComponent from "@/components/blogCardComponent.vue";
import {mapGetters, mapState} from "vuex";


export default {
  name: "mainPageComponent",
  computed: {
    ...mapState(['projectCards', 'blogCards']),
    ...mapGetters(['getSomeLastPosts'])
  },
  components: {
    BlogCardComponent, CountersComponent, WelcomeBlockComponent,
    ProjectCardComponent, FooterComponent, HeaderComponent},
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
        :rounded-corner = card.corner
        :img-name="card.img"
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
          v-for="card in getSomeLastPosts(3)"
          :img-name="card.img"
          :headline="card.headline"
          :label="card.label"
          :date="card.date"
          :id="card.id"
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
