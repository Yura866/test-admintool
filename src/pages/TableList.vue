<template>
    <div class="row">
       <div class="col-12">
        <card class="card-plain">
           <div v-if="message" class="alert alert-info alert-with-icon" data-notify="container">
            <button type="button" aria-hidden="true" class="close">×</button>
            <span data-notify="icon" class="ti-bell"></span>
            <span data-notify="message">{{message}}.</span>
          </div>
          <div class="table-full-width table-responsive">
             <table  id="dataTable" class="table table-striped table-bordered table-sm" cellspacing="0"  width="100%">
							<thead>
								<tr>							
									<th class="text-center">First name</th>
									<th class="text-center">Last name</th>									
									<th class="text-center">User name</th>		
                  <th class="text-center">Email</th>
                  <th class="text-center">Edit</th>						
								</tr>
							</thead>
					
    <tbody>
          <tr v-for="user in users" v-bind:key="user.id">           
            <td class="text-center">{{user.firstName}}</td>
            <td class="text-center">{{user.lastName}}</td>            
            <td class="text-center">{{user.userName}}</td>
            <td class="text-center">{{user.email}}</td>
<td class="td-actions text-center">
										<a class="btn-simple btn-sm btn-info" data-toggle="tooltip"
										data-placement="top" title="See Perfile"
										v-on:click="showUserProfile(user)">                    
                    <i class="fa fa-user"> </i></a> 
                     <a	class="btn-simple btn-sm btn-danger" data-placement="top"
										title="Delete" data-toggle="tooltip"   v-on:click="deleteUser(user.id)"> <i class="fa fa-times"></i></a>
									</td>            
          </tr>
        </tbody>
</table>
   </div>
        </card>
      </div>
    </div>
</template>
<script>
import router from '../router';
import UserDataService from '../service/UserDataService';

export default {
  components: {    
  },
  data() {
    return {     
      message: "",
      users: []
    };
  }, methods: {
findAllUsers(){
    UserDataService.retrieveAllUsers()
    .then(response => {
          this.users = response.data;          
        });
},
findOneUser(id){
    UserDataService.findOneUser(id)
    .then(response => {
          this.users = response.data;
    });   
},

deleteUser(id){
  if(confirm('Are you sure?'))
    UserDataService.deleteUser(id)
    .then(response => {
      this.message = `Delete success`;
      this.findAllUsers();
    })
    .catch(error => {
      this.massage=error.response.data.message;  
      console.log(error);
      });  
},

showUserProfile(user){   
 router.push({ name: "user-profile" , params:{user}});    
},

},
created(){
    this.findAllUsers();    
}

};

</script>
<style>
</style>
