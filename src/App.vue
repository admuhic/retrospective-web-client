<template>
  <div id="app">
    <the-navbar></the-navbar>
    <the-header></the-header>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheNavbar from "./components/bars/TheNavbar.vue";
import TheHeader from "./components/header/TheHeader.vue";
import TheFooter from "./components/footer/TheFooter.vue";

export default {
  name: "App",
  components: {
    "the-navbar": TheNavbar,
    "the-header": TheHeader,
    "the-footer": TheFooter,
  },
};
</script>

<style scoped></style>
