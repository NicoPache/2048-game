<template>
  <Game />
</template>

<script>
import Game from "./components/Game.vue";
export default {
  name: "App",
  components: {
    Game,
  },
};
</script>

<style>
body {
  background: rgb(255, 228, 212);
  display: flex;
  justify-content: center;
  font-family: "Clear Sans", "Helvetica Neue", Arial, sans-serif;
  color: #6e6e6e;
}
</style>
