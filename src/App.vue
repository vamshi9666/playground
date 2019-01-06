<template>
  <div id="app">
    <div class="whole-wrapper">
      <div>
        <div class="game-wrapper" v-if="array.length > 0">
          <div v-for="(row, i) in array" :key="i">
            <div class="each-tile">{{row}}</div>
          </div>
        </div>
        <div v-else>
          <img v-bind:src="require('./../load.gif')" alt=" Setting everything up ....">
          <h3>Setting everything up ....</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import Vue from 'vue'
  // import createLogger from 'vuex/dist/logger'
  // import Vuex, {
  // } from 'vuex'
  // Vue.use(Vuex)
  // const store = new Vuex.Store({
  // plugins: [createLogger()],
  // state: {
  // array: [],
  // zeroIndexs: []
  // },
  // mutations: {
  // async init(state) {
  // try {
  // for (var i = 0; i < 16; i++) {
  // state.array.push(0)
  // }
  // } catch (err) {
  // eslint-disable-next-line
  // console.log(err)
  // 
  // }
  // },
  // async findZeros(state) {
  // let zeroIndexs = [];
  // state.array.forEach((val, i) => {
  // if (val === 0) {
  // zeroIndexs.push(i)
  // }
  // })
  // state.zeroIndexs = zeroIndexs;
  // },
  // async insertNumbers(state) {
  // const zeroIndexs = state.zeroIndexs;
  // state.array[zeroIndexs[0]] = 5;
  // }
  // 
  // },
  // getters: {
  // see(state) {
  // return state.array;
  // },
  // getZeros(state) {
  // return state.zeroIndexs;
  // }
  // },
  // actions: {
  // async init(context) {
  // context.commit('init')
  // },
  // async insert_numbers(context) {
  // context.commit('insertNumbers')
  // },
  // async get_zeros(context) {
  // context.commit('findZeros')
  // }
  // }
  // })
  
  export default {
    name: 'app',
    data: function() {
      return {
        array: [],
        zeroTiles: [],
        score: 0,
      }
    },
    created: async function() {
      console.log(`created`);
      
      //  setTimeout(async() => {
      await this.init()
      // }, 4000)
    },
    mounted: async function() {
      console.log(`mounted `)
      await this.getZeros();
      await this.insertNumbers();
    },
    methods: {
      async init() {
        try {
          let newArr = []
          for (var i = 0; i < 16; i++) {
            newArr.push(0)
          }
          this.array = newArr;
        } catch (err) {
          // eslint-disable-next-line
          console.log(err)
        }
      },
      async insertNumbers() {
        const zeroIndexs = this.zeroTiles;
        let newArr = [...this.array]
        newArr[zeroIndexs[0]] = 5;
        this.array = [...newArr]
      },
      async getZeros() {
        
        try{
           let zeroIndexs = [];
          this.array.forEach((val, i) => {
              zeroIndexs.push(i)
          })
          console.log(zeroIndexs);
          this.zeroTiles = zeroIndexs
        }
        catch (err){
          console.log(err)
        }
         
        }
      }
    }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  
  .whole-wrapper {
    display: flex;
    flex: 1;
    margin: 25px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    min-height: 450px;
    margin: auto;
    border: solid 2px #a27cc5;
  }
  
  .game-wrapper {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: 25% 25% 25% 25%;
  }
  
  .each-tile {
    width: 30px;
    height: 30px;
    margin: 10px;
    padding: 20px;
    text-align: center;
    border: solid 1px yellow;
  }
</style>
