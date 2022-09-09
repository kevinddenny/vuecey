<template>
  <div class="hotelsettings">
    <div class="container">
                      <div class="row">
                        
                  <p>
                   Reset Your Password
                 </p>
                       
                        
<br>
<br>
                        <div class="col-md-8">
                          <div class="form-group">
                              <input type="button" @click="resetPassword" value="Reset password email" class="btn btn-success w-100">
                          </div>
                        </div>
<br>
<br>
<br>
<br>                          
                  <p class="text-danger">
                   Delete Account
                 </p>
<br>
<br>
                        <div class="col-md-8">
                          <div class="form-group">
                              <input type="button" @click="deleteAccount" value="Delete Account" class="btn btn-danger w-100">
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
  name: "HotelSettings",

data(){
    return {
        
        account:{
            name:null,
            email:null,
            photoUrl:null,
            emailVerified:null,
            password:null,
            confirmPassword:null,
            uid:null
        }       
    }
  },
  methods: {
     resetPassword(){
          const auth = firebase.auth();          
        
          firebase.auth().sendPasswordResetEmail(auth.currentUser.email)
        .then(() => {
          alert("Email Sent! Check Your Email!");
        })
        .catch((error) => {
          console.log(error);

        });
      },
      deleteAccount(){
        const user = firebase.auth().currentUser;

           db.collection("hotel_bios").doc(user.uid).delete().then(() => {
              console.log("Bios successfully deleted!");
            });

          db.collection("hotel_profiles").doc(user.uid).delete().then(() => {
              console.log("Document successfully deleted!");
               user.delete().then(() => {
                alert("Deleted");
                this.$router.replace('/');
              }).catch((error) => {
                console.log(error);
              });
          }).catch((error) => {
              console.error("Error removing document: ", error);
          });





       
      }
  }

}


</script>