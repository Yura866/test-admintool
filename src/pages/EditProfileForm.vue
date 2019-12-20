<template>
  <card class="card" title="Edit Profile">   
    <div class="col-xl-12 col-lg-7 col-md-6">
      <form @submit.prevent>
        <div class="row">
          <div class="col-md-5">
            <fg-input type="text"
                      label="Company"
                      :disabled="true"                     
                      v-model="user.company">
            </fg-input>
          </div>
          <div class="col-md-3">
            <fg-input type="text"
                      label="Username"
                      disabled="validated == 1"
                      placeholder="Username"
                      v-model="user.userName">
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="email"
                      label="Email"
                      disabled="validated == 1"
                      placeholder="Email"
                      v-model="user.email">
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-5">
            <fg-input type="text"
                      label="First Name"
                      disabled="validated == 1"
                      placeholder="First Name"
                      v-model="user.firstName">
            </fg-input>
          </div>
          <div class="col-md-3">
            <fg-input type="text"
                      label="Last Name"
                      disabled="validated == 1"
                      placeholder="Last Name"
                      v-model="user.lastName">
            </fg-input>
          </div>
           

          <div class="col-md-4">
            <fg-input type="text"
                      label="Address"
                      disabled="validated == 1"
                      placeholder="Home Address"
                      v-model="user.address">
            </fg-input>
          </div>       
        </div>   

        <div class="row">
          <div class="col-md-4">
            <fg-input type="text"
                      label="City"
                      disabled="validated == 1"
                      placeholder="City"
                      v-model="user.city">
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="text"
                      label="Country"
                      disabled="validated == 1"
                      placeholder="Country"
                      v-model="user.country">
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="number"
                      label="Postal Code"
                      disabled="validated == 1"
                      placeholder="ZIP Code"
                      v-model="user.zipCode">
            </fg-input>
          </div>
        </div>  
<div> 
  <b-button v-b-toggle="'wallets'" class="m-1"  v-b-tooltip.hover.left title="View wallets">View all wallets of user</b-button> 
  <b-collapse id="wallets">
  <b-card>
 <div class="container"> 
    <div class="logo">
        <a href="#" class="simple-text">
            <div class="logo-img" v-for="wallet in user.wallets" v-bind:key="wallet.id">
                <img src="@/assets/img/icon-w.png" width="60" height="40" v-on:click="showWalletDetail(wallet)" v-b-tooltip.hover.left title="View wallet detail">
                <a v-on:click="showWalletDetail(wallet)" v-b-tooltip.hover.left title="View wallet detail">{{wallet.name}}</a> 
            </div>  
            <div class="alert alert-success" role="alert" v-if="success">
                    <p>{{message}}</p>
                </div>
                <div class="alert alert-danger" role="alert" v-else-if="error">
                        <strong><p >{{message}}</p></strong>
            </div>
          <div class="logo-img">              
                <img src="@/assets/img/new-wallet1.jpg" width="35" height="30" v-b-tooltip.hover.left title="Create new wallet" v-b-toggle="'new'" class="m-1">              
            <b-collapse id="new" class="mt-2">
                        <b-card>
                      <div class="row">
                           <div class="col-md-3">
                              <fg-input type="text"
                                     label="Wallet name"     
                                     placeholder="Type name for new wallet"                                      
                                      v-model="newWallet.name">
                                 </fg-input>
                                        <b-button variant="outline-primary" v-b-tooltip.hover.left title="Create new wallet" v-on:click="addNewWallet()">Create</b-button>
                                </div>         
                            </div>
                        </b-card>
                </b-collapse>            
            </div>        
        </a>
      </div>    
</div>
    </b-card>
  </b-collapse>
</div>       
        <div class="text-center">    
            <button type="button" class="btn btn-primary" v-on:click="checkFormAndUpdateUser()">Update User</button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </card>
</template>
<script>

import WalletDataService from '../service/WalletDataService';
import router from '../router';

export default {  
  name: 'user-profile',
  data() {
    disabled: 0;   
    return {    
      user: {
        id: "",
        company: "",
        useName: "",
        email: "",
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        postalCode: "",     
        roles: {} ,
        wallets: {} 
      },
      newWallet: {
      name: "",
      userId: 0,
    },
        message: "",
        success: false,
        error: false,
    };
  },
   created() {
            this.user = this.$route.params.user;          
        },
  methods: {
    updateProfile() {
      alert("Your data: " + JSON.stringify(this.user));
    },
    checkFormAndUpdateUser(){
              alert("Sorry but this function not available at the moment. It was added to TODO list");
    },
   showWalletDetail(wallet){   
        router.push({ name: "wallet-card" , params:{wallet}});     
    },

  addNewWallet(){

    if(!this.newWallet.name){
      this.massage="The wallet name is obligatory";
      this.error=true;
      
    }else {        
    WalletDataService.createWallet(this.user.id, this.newWallet.name)
    .then(response => {          
           this.message = "Created successful";
           this.success = true;
           this.error=false;           
           this.newWallet.name="";
    })
    .catch(error => {      
       this.massage="Error while create a new wallet , try later. ";  
      //this.massage=error.response.data.wallet.message;  
      this.error=true;
       this.success = false;
      console.log(error);
      }); 
      }      
    }    
  },
};
</script>
<style>
</style>
