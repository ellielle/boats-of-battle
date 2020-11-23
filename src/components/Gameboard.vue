<template>
  <div id="container-gameboard">
    <div v-for="ship in shipArray" :key="ship.id" data-test="player-ship">
      {{ ship }}
      <button @click="fireAtLocation({ ship: ship, hitLocation: 1 })">
        Fire!
      </button>
    </div>
  </div>
</template>

<script>
import { initializeShips } from "@/composables/shipFactory";
export default {
  name: "Gameboard",
  setup() {
    const { shipArray, buildShips } = initializeShips();
    buildShips();
    function fireAtLocation({ship, hitLocation}) {
      shipArray[ship.id].hit(hitLocation);
    }
    return { shipArray, fireAtLocation };
  },
};
</script>

<style lang="scss" scoped></style>
