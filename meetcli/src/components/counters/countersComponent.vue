<script>
import SingleCounterComponent from "@/components/counters/singleCounterComponent.vue";

export default {
  name: "countersComponent",
  components: {SingleCounterComponent}
}
</script>

<template>
  <section class="counters">
<!-- подумать на v-for через внешний div-->
    <single-counter-component number="12" text="Years Of Experience"/>
    <img src="../../assets/line.png" alt="line">
    <single-counter-component number="85" text="Success Project"/>
    <img src="../../assets/line.png" alt="line">
    <single-counter-component number="15" text="Active Project"/>
    <img src="../../assets/line.png" alt="line">
    <single-counter-component number="95" text="Happy Customers"/>
  </section>
</template>

<style scoped>
 .counters {
   display: flex;

   background: rgb(244, 240, 236);
   justify-content: center;
   align-items: center;
   gap: 54px;

   margin: 96px 0 96px 0;
   height: 457px;
 }
</style>
