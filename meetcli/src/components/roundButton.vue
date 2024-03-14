<script>
export default {
  name: "roundButton",
  methods: {
    handleClick() {this.$emit('click');}
  }
}
</script>

<template>
  <div @click="handleClick" class="button">
    <img src="../assets/triangle.png" alt="triangle">
  </div>
</template>

<style scoped>
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
