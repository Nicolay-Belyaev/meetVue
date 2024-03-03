<script>
export default {
  name: "projectCardComponent",
  props: ['imgName', 'roundedCorner']
}

</script>

<template>
  <div class="card">
    <img :style="`border-${roundedCorner}-radius: 70px`"
         :src="require(`../assets/${imgName}`)"
         alt="design"
         class="img">
    <div class="controls">
      <div class="text">
        <span class="text_main">Modern Kitchan</span>
        <span class="text_small">Decor / Artchitecture</span>
      </div>
      <div class="button"><img src="../assets/triangle.png" alt="triangle"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .card {
    height: 619px;
    width: 548px;
  }
  .img {
    height: 548px;
    width: 548px;
  }
  .controls {
    display: flex;
    justify-content: space-between;
    height: 70px;
    width: 548px;
  }
  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    &_main {
      color: rgb(41, 47, 54);
      font-family: DM Serif Display, serif;
      font-size: 25px;
      font-weight: 600;
      line-height: 125%;
      text-align: left;
    }
    &_small{
      color: rgb(77, 80, 83);
      font-family: Jost, serif;
      font-size: 22px;
      font-weight: 400;
      line-height: 150%;
      text-align: left;
    }
  }
  .button {
    background: rgb(244, 240, 236);
    border-radius: 70px;
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 16px;
      width: 8px;
    }
  }
</style>
