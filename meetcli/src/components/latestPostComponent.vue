<script>
export default {
  name: "latestPostComponent",
  props: ['imgName', 'headline', 'precut', 'date']
}
</script>

<template>
  <div>

  <div class="wrapper">
    <img :src="require(`../assets/${imgName}`)"
          class="img"
          alt="pic">
    <div class="text-container">
      <span class="headline">{{ headline }}</span>
      <span class="text text-position">{{ precut }}</span>
      <div class="date-button">
        <span class="text_small"> {{ date }}</span>
        <div class="button">
          <img src="../assets/triangle.png" alt="triangle">
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 1157px;
  height: 478px;
  display: flex;
  align-items: center;
  gap: 65px;
  margin: 0 auto;
  border-radius: 70px;
  padding: 22px;
  border: rgb(244, 240, 236) 2px solid;
}

.text-container {
  display: flex;
  flex-direction: column;
  width: 469px;

}
.headline {
  color: #292F36;

  font-family: "DM Serif Display";
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 0.5px;
}

.text-position {
  text-align: left;
  margin: 41px 0 22px 0;
}

.img {
  width: 569px;
  height: 478px;
  border-radius: 70px;
}

.date-button {
  display: flex;
  width: 469px;
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
