<template>
  <div id="container-gameboard">
    <div data-test="player-ship">
      <button>
        Fire!
      </button>
    </div>
  </div>
</template>

<script>
import initializeShips from "@/composables/shipFactory";
export default {
  name: "Gameboard",
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
