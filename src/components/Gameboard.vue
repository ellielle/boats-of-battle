<template>
  <div id="container-gameboard" data-test="game-container">
    <h2>Boats of Battle</h2>
    <div data-test="player-ship" v-for="(ship, index) in fleet" :key="index">
      {{ ship }}
    </div>
  </div>
  <button class="btn-begin" data-test="begin-button">Begin!</button>
</template>

<script>
import initializeShips from "@/composables/use-ship-factory";
export default {
  name: "Gameboard",
  setup() {
    const buildShips = initializeShips();
    buildShips.shipFactory();

    return { fleet: buildShips.fleet };
  },
};
</script>

<style lang="scss" scoped>
h2 {
  margin-top: 0;
}
</style>
