<template>
  <div class="alert alert-danger" role="alert">
    {{ errorMessage }}
  </div>
</template>

<script>
export default {
  name: "FailedAlert",
  props: {
    errorMessage: String,
  },
};
</script>

<style scoped></style>
