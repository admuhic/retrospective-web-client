<template>
  <div>
    <h1 class="fw-light">Retrospective</h1>
    <p class="lead" role="button" @click="goToCRetrospectivePage()">
      Go to your board by pressing here!
    </p>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  components: {},
  data() {
    return {};
  },
  methods: {
    /**
     * This function routes to the retrospective page!
     */
    goToCRetrospectivePage() {
      this.$router.push("/retrospective");
    },
  },
};
</script>

<style scoped></style>
