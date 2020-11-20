<template>
  <div id="container-gameboard"></div>
</template>

<script>
// import { ref } from "vue";
import { buildShips } from "@/composables/shipFactory";
export default {
  name: "Gameboard",
  setup() {
    const test = buildShips();
    console.log(test);
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
