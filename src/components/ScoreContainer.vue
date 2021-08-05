<template>
  <div class="boxContainer">
    <h1 class="title">Score</h1>
    <h2 class="score">{{ getScore }}</h2>
  </div>
  <p v-show="getAnimation && getAdded != 0" class="added">+{{ getAdded }}</p>
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
      getScore(){
        return this.$store.state.score
      },
      getAdded(){
        return this.$store.state.addedScore
      },
      getAnimation(){
        return this.$store.state.isAdded
      }

    }
}
</script>

<style scoped lang="css">
.boxContainer {
  width: 150px;
  height: 70px;
  background-color: white;
  color: #6e6e6e;
  overflow: hidden;
  border: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 1px 1px 10px 1px #ffc096;
  transition: all ease-out;
}
.title {
  font-size: 18px;
  margin-top: 25px;
  margin-bottom: -15px;
  text-transform: uppercase;
  font-weight: 500;
}

.added {
  font-size: 20px;
  font-weight: bold;
  color: #d75c48;
  position: absolute;
  margin-left: 110px;
  margin-top: 45px;
  animation: movement 0.5s ease forwards;
}

@keyframes movement {
  0% {
    transform: translateY(10px);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(-15px);
    opacity: 0;
  }
}
</style>
