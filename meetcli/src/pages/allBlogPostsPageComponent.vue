<script>
import HeaderComponent from "@/components/headerComponent.vue";
import FooterComponent from "@/components/footerComponent.vue";
import LatestPostComponent from "@/components/latestPostComponent.vue";
import BlogCardComponent from "@/components/blogCardComponent.vue";
import {mapGetters, mapState} from "vuex";

export default {
  name: "blogPageComponent",
  components: {
    BlogCardComponent, LatestPostComponent,
    FooterComponent, HeaderComponent
  },
  computed: {
    ...mapState(['blogCards']),
    ...mapGetters(['getSomeLastPosts'])
  }
}
</script>

<template>
<div>
  <header-component/>
  <img class="banner" src="../assets/blog-banner.png">
  <div class="heading heading-position">Latest Post</div>
  <latest-post-component
    img-name="lastpostPic.png"
    headline="Low Cost Latest Invented Interior Designing Ideas"
    precut="Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in. Contrary to popular belief.
    Lorem Ipsum is not simply random text. It has roots in a piece of classica."
    date="26 December,2022"
  />
  <div class="heading heading-position">Articles & News</div>
  <div class="posts">
    <blog-card-component
        v-for="card in getSomeLastPosts(6)"
        :img-name="card.img"
        :headline="card.headline"
        :label='card.label'
        :date="card.date"
        :id="card.id"
        :key="card.id"
    />
  </div>
  <footer-component/>
</div>
</template>

<style scoped>
  .heading-position {
    margin: 200px auto 27px;
    width: 1200px;
    text-align: left;
  }
  .posts {
    width: 1200px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    gap: 30px;
  }
</style>
