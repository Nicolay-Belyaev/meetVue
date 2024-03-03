<script>
import HeaderComponent from "@/components/headerComponent.vue";
import FooterComponent from "@/components/footerComponent.vue";

export default {
  name: "blogPageComponent",
  components: {FooterComponent, HeaderComponent}
}
</script>

<template>
<div>
  <header-component/>
  <footer-component/>
</div>
</template>

<style scoped>

</style>
