<template>
  <div class="container">
    <div class="row">
      <well-box></well-box>
      <less-well-box></less-well-box>
      <improve-box></improve-box>
    </div>
  </div>
</template>

<script>
import WellBox from "./WellBox.vue";
import LessWellBox from "./LessWellBox.vue";
import ImproveBox from "./ImproveBox.vue";

export default {
  name: "BoxContainer",
  components: {
    "well-box": WellBox,
    "less-well-box": LessWellBox,
    "improve-box": ImproveBox,
  },
  data() {
    return {};
  },
};
</script>
<style scoped lang="scss"></style>
