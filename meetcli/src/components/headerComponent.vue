<script>
export default {
  name: "headerComponent"
}
</script>

<template>
  <section class="header">
    <img class="logo" src="../assets/logo.png" alt="logo">
    <nav class="nav">
      <router-link to="/" class="link">Home</router-link>
      <router-link to="/" class="link">Project</router-link>
      <router-link to="/blog" class="link">Blog</router-link>
    </nav>
  </section>
</template>

<style scoped>
  .header {
    margin: 53px auto 53px auto;

    width: 1200px;
    height: 50px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav {
    font-family: Jost serif;
    font-size: 24px;

    width: 243px;
    height: 25px;
    display: flex;
    justify-content: space-between;

    a {
      text-decoration: none;
      color: #292F36;

      text-align: center;
      font-family: Jost;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%; /* 25px */
    }
  }
  .logo {
      height: 50px;
  }
</style>
