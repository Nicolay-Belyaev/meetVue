<script>
import RoundButton from "@/components/roundButton.vue";
import router from "@/router";

export default {
  name: "blogCardComponent",
  components: {RoundButton},
  props: ['imgName', 'label', 'headline', 'date', 'id'],
  methods: {
    openPost: (id) => {router.push({path: `/blog/${id}`})}
  }
}
</script>

<template>
  <div class="wrapper">
        <img :src="require(`../assets/${imgName}`)"
             class="img"
             alt="photo">
        <div class="label">{{ label }}</div>
      <div class="headline">{{ headline }}</div>
      <div class="date-button">
        <span class="text_small"> {{ date }}</span>
        <round-button @click="openPost(id)"/>
      </div>
    </div>
</template>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    border-radius: 70px;
    border: rgb(244, 240, 236) 2px solid;

    width: 334px;
    height: 470px;
    padding: 21px;

    &:hover {
      background: rgb(244, 240, 236);
    }
    &:hover .button {
      background: white;
    }
  }
  .img {
    width: 334px;
    height: 289px;
    border-top-left-radius: 70px;
    border-top-right-radius: 70px;
  }
  .label {
    position: relative;
    bottom: 50px;
    left: 10px;
    width: 105px;
    height: 24px;
    display: inline-flex;
    padding: 8px 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 8px 8px 8px 0px;
    background: #FFF;

    color: #4D5053;

    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.16px;
    text-transform: capitalize;
  }
  .headline {
    display: flex;
    width: 305px;
    height: 25px;
    flex-direction: column;
    justify-content: center;
    margin: 10px 0 30px 0;

    color: #292F36;
    font-family: "DM Serif Display";
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%;
  }
  .date-button {
    display: flex;
    width: 334px;
    align-items: center;
    justify-content: left;
    gap: 155px;
  }
</style>
