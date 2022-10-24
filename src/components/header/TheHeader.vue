<template>
  <header class="masthead">
    <div class="container h-100">
      <div class="row h-100 align-items-center">
        <div class="col-12 text-center">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
.masthead {
  height: 100vh;
  min-height: 500px;
  background-color: whitesmoke;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
