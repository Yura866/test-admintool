<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand">{{routeName}}</a>      
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">         
          <li class="nav-item">
            <a  surprise class="nav-link" v-on:click="surprise">
              <i class="ti-settings"></i>
              <p>
                Settings
              </p>
            </a>
          </li>
        </ul>
      </div>
    </div></nav>
</template>
<script>
export default {
  computed: {
    routeName() {
      const { name } = this.$route;
      return this.capitalizeFirstLetter(name);
    }
  },
  data() {
    return {
      activeNotifications: false
    };
  },
  methods: {

surprise: function (event) {   
    alert('Congratulations !!!!!! You win 10000000 PagaCoins , we need to meet in Pagantis office and i will give your win !!! ');
      if (event) {
        alert('Dont forget your gift )))');
      }     
    },
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },       
  
  }
};
</script>
<style>
</style>
