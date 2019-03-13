<template>
  <div id="app">
   <ResetBlockchain/> 
   <AddBlock/>
  
  </div>
</template>

<script>

import AddBlock from './components/AddBlock.vue'
import ResetBlockchain from './components/ResetBlockchain.vue'
export default {
  name: 'app',
  components: {
   
   AddBlock,
   ResetBlockchain,

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
</style>
