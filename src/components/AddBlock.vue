<template>
  <div>
    <Block v-for="item in items"/>
    <button v-on:click="CreateBlock">Add new Block</button>
  </div>
</template>

<script>
import Block from "./Block.vue";
import { METHODS } from "http";
export default {
  components: {
    Block
  },

  data() {
    return {
      items: []
    };
  },
  methods: {
    CreateBlock: function() {
      this.items.push({
        Data: "",
        previousHash: "",
        hash: ""
      });
    }
  }
};
</script>
