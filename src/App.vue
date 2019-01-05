<template>
  <div id="app">
    <div class="whole-wrapper">
      <div >
        <div class="game-wrapper" v-if="array.length > 0">
          <div  v-for="(row, i) in array" :key="i">
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
  import Vue from 'vue'
  import Vuex, {
    mapMutations
  } from 'vuex'
  Vue.use(Vuex)
  const store = new Vuex.Store({
    state: {
      array: []
    },
    mutations: {
      async init(state) {
        try {
          let newArr = []
          for (var i = 0; i < 16; i++) {
            console.log("push ", i);
            state.array.push(i)
          }
          console.log(state)
        } catch (err) {
          console.log(err)
        }
  
      }
    },
    getters: {
      see(state) {
        return state.array;
      }
    },
    actions: {
      init(context) {
        context.commit('init')
      }
    }
  })
  
  export default {
    name: 'app',
  
    components: {},
    // data: function () {
    //   return {
    //     array : this.$
    //   }
  
  
    // },
    computed: {
      array() {
        return store.state.array;
      }
    },
    created: async function() {
      await this.init()
      console.log(store.state.array)
    },
    methods: {
      async init() {
        let res = await store.dispatch('init');
        console.log(store.state.array);
  
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
