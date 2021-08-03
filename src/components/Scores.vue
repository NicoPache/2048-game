<template>
  <section class="container">
    <ScoreContainer />
    <ScoreContainer />
  </section>
</template>

<script lang="js">
import ScoreContainer from './ScoreContainer';
  export default  {
    name: 'Scores',
    props: [],
    components: {
      ScoreContainer
    },
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="css">
.container {
  display: flex;
  flex-direction: row;
}
.scoreTitle {
  text-transform: uppercase;
  font-size: 16px;
}
</style>
