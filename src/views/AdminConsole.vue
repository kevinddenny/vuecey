<template>
  <div class="console">
     <div class="container">
         <div class="intro h-100">
            <div class="row h-100 align-items-center">
              <div class="col-md-6 ml-3">
                    <h3>Console</h3>
                    <h4>Analysis</h4>
                    <br>
                    
                    <button type="button" class="btn btn-success w-100"><a id="link" href="https://console.firebase.google.com/project/testvue-ad06c/analytics/app/web:YzQ0YjNjNTUtNWNjZC00MjI2LWI2YzQtYzY1ZThkZDgwNzlh/overview/~2F%3Ft%3D1662664689057&fpn%3D483980938866&swu%3D1&sgu%3D1&sus%3Dupgraded&cs%3Dapp.m.dashboard.overview&g%3D1">Visit Console</a></button>
                    <br>
                    <br>
                    <h4>Verify</h4>

                        <div class="col-md-8">
                          <div class="form-group">
                             
                              <div v-for="(name,index) in users">
                                <hr>
                                    <p>{{name.hotel_name}}  paid - {{name.paid}}</p>
                                    
                                    <div class="d-flex justify-content-around">
                                      <button class="btn btn-success w-100" @click="changeStatus(index,name.id)">Change</button>
                                    
                                    <button class="btn btn-danger w-100" @click="deleteAcc(index,name.id)">Delete</button>
                                    </div>
                                    <hr>
                              </div>

                          </div>
                        </div>
                </div>
            </div>
        </div>

    
    
    
    </div>

  </div>
</template>
<script>
  import firebase from 'firebase';
  import { db } from '../main';
  
  export default {
    name: "AdminConsole",
   data: () => {
      return {
          name:null,
        users: [],
      }
    },
    mounted: function() {

        this.fetchUsers()
        console.info('mounted, users:', this.users) 
    },
    computed: {
        items: function() {
            return this.users
        }
    },
    methods: {
      async fetchUsers () {
          await db.collection('hotel_profiles').get()
              .then(snapshot => {
                  snapshot.forEach( doc => {
                      const user = doc.data()
                      if(user.verify=="no"){
                     
                           
                           this.name=user.hotel_name;
                      user.id = doc.id
                      this.users.push(user)
                      }
                     
                  })
              })
              .catch(error => {
                  console.error(error)
              })
          console.debug('fetchUser return: ', this.users) 
      },
      changeStatus(index,id){
          db.collection('hotel_profiles').get().then((snapShot) => {
  
                              const doc = snapShot.docs[index];
                              console.log(id,index);
                           db.collection('hotel_profiles').doc(id).update({
                              verify:"yes",
                           })
                          }).then(function() {
                              if (confirm("Successfully verified")) {
                                  window.location.reload();
                              } 
                              console.log("Document successfully written!");
                              }).catch((error) => console.log(error.message));
  
      },
      deleteAcc(index,id){
          db.collection('hotel_profiles').get().then((snapShot) => {
  
                  const doc = snapShot.docs[index];
  
                  console.log(id,index);
                  db.collection('hotel_profiles').doc(id).delete()
                  }).then(function() {
            if (confirm("Successfully rejected")) {
              window.location.reload();
            } 
            console.log("Document successfully written!");
          }).catch((error) => console.log(error.message));
      }
    }
  }
  </script>

<style>
#link{
    text-decoration: none;
    color: azure;
}

</style>