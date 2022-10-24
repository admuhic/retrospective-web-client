<template>
  <div class="container">
    <div class="row">
      <well-box></well-box>
      <less-good-box></less-good-box>
      <improve-box></improve-box>
    </div>
  </div>
</template>

<script>
import WellBox from "./WellBox.vue";
import LessGoodBox from "./LessGoodBox.vue";
import ImproveBox from "./ImproveBox.vue";

export default {
  name: "BoxContainer",
  components: {
    "well-box": WellBox,
    "less-good-box": LessGoodBox,
    "improve-box": ImproveBox,
  },
  data() {
    return {};
  },
};
</script>
<style scoped lang="scss"></style>
