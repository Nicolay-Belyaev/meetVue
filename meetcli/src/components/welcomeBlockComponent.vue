<script>
export default {
  name: "welcomeBlockComponent"
}
</script>

<template>
  <section class="banner">
      <div class="maintext">Let Your Home Be Unique</div>
      <div class="text text-position">There are many variations of the passages of lorem Ipsum fromavailable, majority.</div>
      <button class="button">Get Started <img src="../assets/arrow.png"></button>
  </section>
</template>

<style scoped>
  .banner {
    width: 1200px;
    height: 758px;
    margin: 0 auto;
    border-radius: 70px;
    background: url("../assets/banner.png") top -541px left -93px;
  }
  .maintext {
    position: relative;
    top: 220px;
    left: 65px;
    width: 434px;
    height: 162px;

    color: #292F36;
    font-family: "DM Serif Display";
    font-size: 65px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%;
  }

  .text-position {
    width: 434px;
    position: relative;
    top: 235px;
    left: 65px;
    text-align: left;
  }

  .button {
    position: relative;
    left: 65px;
    top: 250px;
    width: 220px;
    height: 75px;

    display: flex;
    flex-direction: row;
    padding: 26px 49px 26px 48px;
    justify-content: center;
    align-items: center;
    gap: 10px;

    border-radius: 18px;
    background: #292F36;
    box-shadow: 0 10px 20px 0 rgba(192, 192, 192, 0.35);

    color: #FFF;

    text-align: center;
    font-family: Jost;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%; /* 22.5px */

    img {
      width: 15px;
      height: 13px;
    }
  }
</style>
