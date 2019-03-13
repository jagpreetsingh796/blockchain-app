<template>
    <div>
       <b-card class="mb-2" style="margin:auto">
            <b-form-group />
           
                  Data
           <b-form-input label="Data"  v-model="Data" type="text" placeholder="Enter your data" />
           <p>{{Data}}</p>
           
             PreviousHash
           <b-form-input label="Data"  v-model="previousHash" type="text"  />

           Hash
         <b-form-input label="Data"  v-model="hash" type="text"  />
         <button>REMINE</button>
         <br/>

         Timestamp
        <label> </label>
        
  
    

    
  </b-card>
    </div>
</template>

<script>
export default {
    data(){
        return{
        Data:"",
        previousHash:"",
        hash:""
        }
    }
}
</script>

