<template>
  <div class="col-12 col-lg-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">What could be improved?</h5>
        <ul>
          <li>
            <p class="card-text">Something needs to be written here...</p>
          </li>
        </ul>
        <a href="#" class="btn btn-new-post text-white">New post</a>
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
