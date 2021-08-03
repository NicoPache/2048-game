<template>
  <section class="container">
    <h1>Score</h1>
    <h2>0</h2>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'ScoreContainer',
    props: [],
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
  width: 150px;
  height: 100px;
  background-color: white;
  color: #6e6e6e;
  overflow: hidden;
  border: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}
</style>
