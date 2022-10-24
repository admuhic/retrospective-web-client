<template>
  <div class="alert alert-success" role="alert">
    {{ successMessage }}
  </div>
</template>

<script>
export default {
  name: "SuccessfulAlert",
  props: {
    successMessage: String,
  },
};
</script>

<style scoped></style>
