<template>
 <Button></Button>
 <Title></Title>
 <Grid></Grid>

</template>

<script>
import Button from "./components/Button.vue"
import Title from "./components/Title.vue"
import Grid from "./components/Grid.vue"

export default {
  name: 'App',
  components: {
  Button,
  Title,
  Grid,
  }
}
</script>

<style>
#app {
}
</style>
