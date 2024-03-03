<script>
import HeaderComponent from "@/components/headerComponent.vue";
import FooterComponent from "@/components/footerComponent.vue";
import ProjectCardComponent from "@/components/projectCardComponent.vue";
import WelcomeBlockComponent from "@/components/welcomeBlockComponent.vue";

export default {
  name: "mainPageComponent",
  components: {WelcomeBlockComponent, ProjectCardComponent, FooterComponent, HeaderComponent},
  data: () => {
    return {
      cards: [
          {img: "design-1.png", corner: "top-right", id: 1},
          {img: "design-2.png", corner: "top-left", id: 2},
          {img: "design-3.png", corner: "bottom-right", id: 3},
          {img: "design-4.png", corner: "bottom-left", id: 4}
      ],
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
      <span class="text text-position">It is a long established fact that a reader will be distracted by the of readable <br> content of page lookings at its layouts points.</span>
    </div>
    <div class="projects">
      <project-card-component
        v-for="card in cards"
        :img-name="card.img"
        :rounded-corner="card.corner"
        :key="card.id"
      ></project-card-component>
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
  .text-position {
    text-align: center;
  }
</style>
