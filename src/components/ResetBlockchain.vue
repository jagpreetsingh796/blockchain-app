<template>
    <div>
       <b-card class="mb-2" style="margin:auto">
            <b-form-group />
           
                 
           <b-form-input label="Data"  v-model="Data" type="text"  >
             
             </b-form-input>
           <p>{{Data}}</p>
           
             PreviousHash
           <label >{{previousHash}}</label>

           Hash
        <label >{{ Hash}}</label>
         <b-card-text>
      Genesis Block
    </b-card-text>
     Timestamp
        <label > </label>
        
  
    

    
  </b-card>
    </div>
</template>

<script>

import {ethers} from 'ethers'

console.log("hello")
console.log(ethers.utils.keccak256("0x7484378"))

export default {
    data(){
        return{
        Data:"Wassup",
        previousHash:"",
        hash:""
        }
    }
    
}
</script>
