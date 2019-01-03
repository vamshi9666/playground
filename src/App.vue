<template>
  <div id="app">
    <div class="whole-wrapper">
      <div class="row" v-for="(row, i) in array" :key="i" >
            <div class="col each-tile" v-for="(ele, j ) in row" :key="j">
                <p>{{ele}}</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  
  components: {
  },
  data: function () {
    return {
      array : [
        [0,0,0],
        [0,0,0],
        [0,0,0]
      ]
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
.whole-wrapper{
  width:60%;
  height: 60%;
  margin: auto;
  border: solid 2px #a27cc5 ;
}
.row{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.col {
  display:flex;
  flex-direction: column;
  justify-content: space-around
}
.each-tile {
  width:40px;
  height:40px;
  margin-top: 16px;
  margin-bottom: 16px;
  padding: 24px;
  border: solid 1px yellow; 
}
</style>
