<template>
    <div>
      <Block v-if="aaa"/>
      <button v-on:click="aaa=true">Add new Block</button>

    </div>
</template>

<script>
import Block from './Block.vue'
export default {
    components:{
        Block
    }

,data(){
return{
    aaa:false
}


}
}
</script>
