<script>
export default {
  name: "singleCounterComponent",
  props: ['number', 'text']
}
</script>

<template>
  <div class="counter">
    <span class="number">{{ number }}</span>
    <span class="text">{{ text }}</span>
  </div>
</template>

<style scoped>
  .counter {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 192px;
    height: 155px;
  }
  .number {
    color: rgb(205, 162, 116);
    font-family: DM Serif Display, serif;
    font-size: 85px;
    font-weight: 400;
    line-height: 125%;
    text-align: left;
  }
</style>
