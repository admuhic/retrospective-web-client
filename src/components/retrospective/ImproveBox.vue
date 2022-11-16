<template>
  <div class="col-12 col-lg-4">
    <div class="card outer-card-height">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">What could be improved?</h5>
        <button class="btn btn-new-post text-white mt-auto">New post</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ImproveBox",
  components: {},
  data() {
    return {};
  },
};
</script>
<style scoped lang="scss">
.btn-new-post {
  background-color: $bg-orange;
}
</style>
