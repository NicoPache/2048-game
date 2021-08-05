<template>
  <section class="container">
    <div id="grid" class="grid">
      <div
        v-for="(square, index) in squares"
        :key="index"
        class="square"
        :style="addColor(index)"
      >
        <div>{{ square != 0 ? square : "" }}</div>
      </div>
    </div>
  </section>
</template>

<script lang="js">

export default  {

  name: 'Grid',
  props: [],

  mounted () {
    this.createBoard()
    window.addEventListener("keyup", this.gameMove);

  },

  data () {
    return {
      width:4,
      squares:[],

    }
  },

  methods: {

    createBoard() {
        for (let i = 0; i < this.width * this.width; i++) {
          this.squares[i]= 0
        }
      this.generateRandomNumber(2)
    },

    generateRandomNumber(number) {
      for (let index = 0; index < number; index++) {
        let randomNumber = Math.floor(Math.random() * this.squares.length);
        if (this.squares[randomNumber] == 0) {
          this.squares[randomNumber] = Math.random() < 0.9 ? 2 : 4;
          //checkGameOver();
        } else this.generateRandomNumber(1);
      }
    },

    moveRight() {
      for (let i = 0; i < this.width * this.width; i++) {
        if (i % this.width === 0) {
          let totalOne = this.squares[i];
          let totalTwo = this.squares[i + 1];
          let totalThree = this.squares[i + 2];
          let totalFour = this.squares[i + 3];

          let row = [
            totalOne,
            totalTwo,
            totalThree,
            totalFour,
          ];

          let filteredRow = row.filter((num) => num);
          let missing = this.width - filteredRow.length;
          let zeros = Array(missing).fill(0);
          let newRow = zeros.concat(filteredRow);

          this.squares[i] = newRow[0];
          this.squares[i + 1] = newRow[1];
          this.squares[i + 2] = newRow[2];
          this.squares[i + 3] = newRow[3];
        }
      }
    },

    moveLeft() {
      for (let i = 0; i < this.width * this.width; i++) {
        if (i % this.width === 0) {
          let totalOne = this.squares[i];
          let totalTwo = this.squares[i + 1];
          let totalThree = this.squares[i + 2];
          let totalFour = this.squares[i + 3];

          let row = [
            (totalOne),
            (totalTwo),
            (totalThree),
            (totalFour),
          ];

          let filteredRow = row.filter((num) => num);
          let missing = this.width - filteredRow.length;
          let zeros = Array(missing).fill(0);
          let newRow = filteredRow.concat(zeros);

          this.squares[i] = newRow[0];
          this.squares[i + 1] = newRow[1];
          this.squares[i + 2] = newRow[2];
          this.squares[i + 3] = newRow[3];
        }
      }
    },

    moveDown() {
      for (let i = 0; i < this.width; i++) {
        let totalOne = this.squares[i];
        let totalTwo = this.squares[i + this.width];
        let totalThree = this.squares[i + this.width * 2];
        let totalFour = this.squares[i + this.width * 3];

        let column = [
          (totalOne),
          (totalTwo),
          (totalThree),
          (totalFour),
        ];

        let filteredColumn = column.filter((num) => num);
        let missing = 4 - filteredColumn.length;
        let zeros = Array(missing).fill(0);
        let newColumn = zeros.concat(filteredColumn);

        this.squares[i] = newColumn[0];
        this.squares[i + this.width] = newColumn[1];
        this.squares[i + this.width * 2] = newColumn[2];
        this.squares[i + this.width * 3] = newColumn[3];
      }
    },

    moveUp() {
      for (let i = 0; i < this.width; i++) {
        let totalOne = this.squares[i];
        let totalTwo = this.squares[i + this.width];
        let totalThree = this.squares[i + this.width * 2];
        let totalFour = this.squares[i + this.width * 3];

        let column = [
          (totalOne),
          (totalTwo),
          (totalThree),
          (totalFour),
        ];

        let filteredColumn = column.filter((num) => num);
        let missing = 4 - filteredColumn.length;
        let zeros = Array(missing).fill(0);
        let newColumn = filteredColumn.concat(zeros);

        this.squares[i] = newColumn[0];
        this.squares[i + this.width] = newColumn[1];
        this.squares[i + this.width * 2] = newColumn[2];
        this.squares[i + this.width * 3] = newColumn[3];
      }
    },

    combineRowLeft() {
      let added=0;
      this.$store.dispatch('setAddedScore', 0)
      for (let i = 0; i < ((this.width * this.width) - 1); i++) {
        if ((i % 4 !== 3)&&this.squares[i] === this.squares[i + 1]) {
          let combinedTotal = this.squares[i] + this.squares[i + 1];
          if (combinedTotal != 0) {
            added += combinedTotal
          }
          this.squares[i] = combinedTotal;
          this.squares[i + 1] = 0;


        }
      }
      this.$store.dispatch('incrementScore', added)
      this.$store.dispatch('setAddedScore', added)
      this.$store.state.isAdded = true;
      setTimeout(() => {
        this.$store.state.isAdded = false;
      }, 400);

      // checkWin();
    },

    combineRowRight() {
      let added=0;
      this.$store.dispatch('setAddedScore', 0)
      for (let i = ((this.width * this.width) - 1); i >= 0 ; i--) {
        if ((i % 4 !== 3) && this.squares[i] === this.squares[i + 1]) {
          let combinedTotal = this.squares[i] + this.squares[i + 1];
          if (combinedTotal != 0) {
            added += combinedTotal
          }
          this.squares[i] = combinedTotal;
          this.squares[i + 1] = 0;

        }
      }

      this.$store.dispatch('incrementScore', added)
      this.$store.dispatch('setAddedScore', added)
      this.$store.state.isAdded = true;
      setTimeout(() => {
        this.$store.state.isAdded = false;
      }, 400);


      // checkWin();
    },

    combineColumnUp() {
      let added=0;
      this.$store.dispatch('setAddedScore', 0)
      for (let i = 0; i < ((this.width * this.width) - this.width); i++) {
        if (this.squares[i] === this.squares[i + this.width]) {
          let combinedTotal = this.squares[i] +this.squares[i + this.width];
          if (combinedTotal != 0) {
            added += combinedTotal
          }
          this.squares[i] = combinedTotal;
          this.squares[i + this.width] = 0;

        }
      }
      this.$store.dispatch('incrementScore', added)
      this.$store.dispatch('setAddedScore', added)

      this.$store.state.isAdded = true;
      setTimeout(() => {
        this.$store.state.isAdded = false;
      }, 400);

      // checkWin();
    },

    combineColumnDown() {
      let added=0;
      this.$store.dispatch('setAddedScore', 0)
      for (let i = ((this.width * this.width) - this.width); i>=0 ; i--) {
        if (this.squares[i] === this.squares[i + this.width]) {
          let combinedTotal = this.squares[i] +this.squares[i + this.width];
          if (combinedTotal != 0) {
            added += combinedTotal
          }
          this.squares[i] = combinedTotal;
          this.squares[i + this.width] = 0;


        }
      }
      this.$store.dispatch('incrementScore', added)
      this.$store.dispatch('setAddedScore', added)

      this.$store.state.isAdded = true;
      setTimeout(() => {
        this.$store.state.isAdded = false;
      }, 400);


      // checkWin();
    },

    keyRight() {
      let previous = this.squares.map((num) => num).toString(); // get the numbers on the grid
      this.moveRight();
      this.combineRowRight();
      this.moveRight();
      let nowo = this.squares.map((num) => num).toString(); // get the number of the grid to see changes
      if (previous != nowo) {
        // compare the grids if something changed generate new number other wise the player must choose other arrowkey
        this.generateRandomNumber(1);
      }
    },

    keyLeft() {
      let previous = this.squares.map((num) => num).toString(); // get the numbers on the grid
      this.moveLeft();
      this.combineRowLeft();
      this.moveLeft();
      let nowo = this.squares.map((num) => num).toString(); // get the number of the grid to see changes
      if (previous != nowo) {
        // compare the grids if something changed generate new number other wise the player must choose other arrowkey
        this.generateRandomNumber(1);
      }
    },

    keyDown() {
      let previous = this.squares.map((num) => num).toString(); // get the numbers on the grid
      this.moveDown();
      this.combineColumnDown();
      this.moveDown();
      let nowo = this.squares.map((num) => num).toString(); // get the number of the grid to see changes
      if (previous != nowo) {
        // compare the grids if something changed generate new number other wise the player must choose other arrowkey
        this.generateRandomNumber(1);
      }
    },

    keyUp() {
      let previous = this.squares.map((num) => num).toString(); // get the numbers on the grid
      this.moveUp();
      this.combineColumnUp();
      this.moveUp();
      let nowo = this.squares.map((num) => num).toString();
      if (previous != nowo) {
        this.generateRandomNumber(1);
      }
    },

    gameMove(e) {
      if (e.keyCode === 39) {
        this.keyRight();
      } else if (e.keyCode === 37) {
        this.keyLeft();
      } else if (e.keyCode === 38) {
        this.keyUp();
      } else if (e.keyCode === 40) {
        this.keyDown();
      }
    },

    addColor(i){

      let result = {
        background:"#eee4da",
        color: '#afa192',
      }
      if (this.squares[i] == 2) {result.background='#ffe09d',result.color= "#eaa000"}
      else if (this.squares[i]  == 4) {result.background= '#ecb562'; result.color= "#faebd4"}
      else if (this.squares[i]  == 8) {result.background= "#e89355", result.color="#f7dac5"}
      else if (this.squares[i]  == 16) {result.background= "#f1cec6",result.color= "#dd8874"}
      else if (this.squares[i]  == 32) {result.background= "#eb8a7b",result.color= "#f8d9d4"}
      else if (this.squares[i] == 64) {result.background="#d75c48",result.color= "#f2ccc6"}
      else if (this.squares[i] == 128) {result.background="#bae3db",result.color= "#44a793"}
      else if (this.squares[i] == 256) {result.background="#81c7b8",result.color= "#36796b"}
      else if (this.squares[i] == 512) {result.background="#36857b",result.color= "#86cec5"}
      else if (this.squares[i] == 1024) {result.background="#d4ddea",result.color= "#6d8cb8"}
      else if (this.squares[i] == 2048) {result.background="#acc3de",result.color= "#4574ac"}

    return result
  },



  },


  computed: {


}
}
</script>

<style scoped lang="css">
.grid {
  display: flex;
  flex-wrap: wrap;
  width: 456px;
  height: 456px;
  background-color: white;
  border: 7px solid white;
  border-radius: 10px;
  margin-top: 50px;
}
.square {
  width: 100px;
  height: 100px;
  margin: 7px;
  border-radius: 5px;
  font-weight: bold;
  text-align: center;
  font-size: 60px;
  line-height: 1.6;
}
</style>
