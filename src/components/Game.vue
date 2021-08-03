<template>
  <div class="header">
    <Button></Button>
    <Scores></Scores>
  </div>
  <Grid></Grid>
</template>

<script lang="js">
import Button from "./Button.vue";
import Scores from "./Scores.vue";
import Grid from "./Grid.vue";


  export default  {
    name: 'Game',
    props: [],
    components:{
      Button,
    Scores,
    Grid,
    }
}
</script>

<style scoped lang="css">
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
