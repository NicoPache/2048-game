<template>
  <section class="buttonContainer">
    <button class="button">
      <span></span>
      <p>new game</p>
    </button>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'Button',
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
.button {
  width: 150px;
  height: 50px;
  background-color: white;
  color: #6e6e6e;
  overflow: hidden;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}
</style>
