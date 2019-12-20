<template>
   <div class="row text-center" >
       <div class="col-xl-12 col-lg-5 col-md-6">        
      <!--  <div class="col-xl-8 col-lg-7 col-md-6">   -->
  <card class="card-user">
    <div slot="image">
      <img src="@/assets/img/new-wallet.png" alt="...">
    </div>
    <hr>
    <div>

      <div class="description text-center">
         <p class="h5"> Wallet address: </p>
         <p>{{wallet.address}}</p> 
      </div>
      <hr>
      <div class="description text-center">
         <p class="h5"> Account balance : </p> 
         <p>{{wallet.balance}}</p> 
      </div>

      <div class="description text-center">
         <p class="h5"> Private Key: </p> 
         <p>{{wallet.privateKey}}</p> 
      </div>   
    </div>


    <hr>
<h3>Coin tansfer</h3>
    <hr>  

<form id="app">  
  <p  class="alert alert-danger" v-if="errors.length">   
    <ul>
      <li v-for="error in errors" v-bind:key="error.id">{{ error }} </li>
    </ul>    
  </p> 
  <div class="alert alert-success" role="alert" v-if="success">
      <p >{{message}}</p>
  </div>  
  <div class="alert alert-danger" role="alert" v-else-if="error">
  <strong><p >{{message}}</p></strong>
</div>
  <div class="form-group">    
    <label for="destinationAddress">Destination Address</label>
    <input  class="form-control" id="destinationAddress" v-model="destAddress" type="text"  name="destinationAddress" placeholder="Destination Address">
  </div>  
  <div class="form-group">
    <label for="amount">Amount</label>
    <input id="amount" v-model="amount" type="number"  name="amount"  class="form-control" placeholder="Amount" required>
  </div>
   <div class="text-center">
      <div class="row">
        <button type="button" class="btn btn-primary btn-lg btn-block" v-on:click="checkFormAndTransfer()">Send</button>
    </div>
    </div>    
</form>    
  </card>
  </div>     
</div>
</template>
<script>
import WalletDataService from '../service/WalletDataService';
export default {
  data() {
    return {
      errors: [],   
      error: false,
      amount: 0.00,      
      destAddress: "",   
      message: "",  
      success: false,           
      wallet: {
        balance: "",
        name: "",
        hashCode: "",
        address: "",
        privateKey: "",
        message:"",
      }  
  };
  },
  created() {
            this.wallet = this.$route.params.wallet;          
        },

  methods: {
 checkFormAndTransfer() {   
     
      this.errors = [];
      if (!this.destAddress) {
        this.errors.push('The destinatios address is required.');
      }
      if (!this.amount) {
        this.errors.push('The amount is required.');
      }    
       if (this.amount==0) {
        this.errors.push('The amount must to be major then zero .');
      } 
       if (this.wallet.balance<this.amount) {
        this.errors.push('Sorry but you dont have amount available for this transfer');
      }  

          if (!this.errors.length) {             
               WalletDataService.tranferCoins(this.wallet.address, this.destAddress, this.amount)
          .then(response => {
          this.destAddress="";
          this.amount=0;
          this.error = false; 
          this.success = true;
          this.wallet.balance=response.data.balance;
          this.massage = response.data.message;
          console.log(response)
        },error=>{  
        this.success = false;
        this.error = true;               
        this.massage=error.response.data.message;           
        this.destAddress=" ";
        this.amount=0;         
        console.error(error.response.data.message);
      });
      }  
    }
  }

  };
</script>
<style>
</style>
