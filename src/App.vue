<template>
  <Gameboard />
</template>

<script>
import Gameboard from "./components/Gameboard.vue";
export default {
  components: { Gameboard },
  name: "App",
};
</script>

<style lang="scss">
@use "./assets/variables.css";
body {
  margin: 0;
}

#app {
  width: 100vw;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: var(--main-background);
}
</style>
