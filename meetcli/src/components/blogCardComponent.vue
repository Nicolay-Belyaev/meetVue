<script>
export default {
  name: "blogCardComponent",
  props: ['imgName', 'label', 'headline', 'date']
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
        <div class="button">
          <img src="../assets/triangle.png" alt="triangle">
        </div>
      </div>
    </div>
</template>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    border-radius: 70px;
    border: rgb(244, 240, 236) 2px solid;

    width: 382px;
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
    width: 340px;
    height: 289px;
    border-top-left-radius: 70px;
    border-top-right-radius: 70px;
  }
  .headline {
    display: flex;
    width: 305px;
    height: 70px;
    flex-direction: column;
    justify-content: center;
    margin: 21px 0 30px 0;

    color: #292F36;
    font-family: "DM Serif Display";
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%;
  }
  .date-button {
    display: flex;
    width: 340px;
    align-items: center;
    justify-content: space-between;
    gap: 65px;
  }
  .button {
    background: rgb(244, 240, 236);
    border-radius: 70px;
    width: 52px;
    height: 52px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 16px;
      width: 8px;
    }
  }
</style>
