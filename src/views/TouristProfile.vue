<template>
  <div class="touristprofile">
      <div class="container">
          
        <div class="intro h-100">
            <div class="row h-100 align-items-center">
              <div class="col-md-6 ml-3">
                    <h3>Profile settings</h3>
       
                 

            </div>
          </div>

                

                
                <p>
                   Update your profile bio here
                 </p>
            
               

                  <div class="container">
                      <div class="row">
                        
                        <div class="col-md-8">
                          <div class="form-group">
                            <input type="text" name="" v-model="profile.username" placeholder="Username" class="form-control">
                          </div>
                        </div>
<br>
<br>
                        <div class="col-md-8">
                          <div class="form-group">
                            <input type="text"  v-model="profile.phn" placeholder="Phone" class="form-control">
                          </div>
                        </div>

<br>
<br>
                        <div class="col-md-8">
                          <div class="form-group">
                            <label for="dob">Birthday
                            <input 
                              class="input-field"
                              type="date" 
                              name="dob"
                              v-model="profile.dob"/>
                              </label>
                          </div>
                        </div>
                        
<br>

                      <div class="col-md-6">
                        <p>
                          Add Profile Picture
                        </p>
                      </div>

                          <div class="col-md-8">
                          <div class="form-group">
                              <input type="file" @change="uploadImage" class="form-control">
                           </div>
                        </div>
<br>
                      

<br>
                        <div class="col-md-8">
                          <div class="form-group">
                              <input type="submit" @click="updateProfile" value="Update Bio" class="btn btn-primary w-100">
                          </div>
                        </div>
<br>
<br>
                      </div>
                  </div>


        </div>
            
          </div>

      </div>

</template>

<script>
import firebase from 'firebase';
import { db } from '../main';
import { st } from '../main';


export default {
  name: "TouristProfile",


  props: {
    msg: String
  },
  data(){
    return {
        profile: {
          username:null,
          phn:null,
          address:null,
          dob:null,
          profileUrl:null,

        },
            
    }
  },

  methods:{
      resetPassword(){
          const auth = firebase.auth();          
          auth.sendPasswordResetEmail(auth.currentUser.email).then(() =>  {
               Toast.fire({
                type: 'success',
                title: 'Email sent'
              })
          }).catch((error) =>  {
              console.log(error);
          });
      },
      BioProfile(){
       
          var user = firebase.auth().currentUser;
          
          db.collection('tourist_bios').doc(user.uid).set({
          user_id: user.uid,
          profilepic: this.profile.profileUrl,
          


          
        })
        .then(function() {
         
          console.log("Document successfully written!");
          
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
      },
      uploadImage(e){
        let file = e.target.files[0];
        var storageRef = st.ref('tprofile/'+ file.name);
        let uploadTask  =storageRef.put(file);

        uploadTask.on('state_changed', (snapshot)=> {
            
          }, (error) => {
            console.log(error)
            // Handle unsuccessful uploads
          }, () => {
            // Handle successful uploads on complete
        
            
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              this.profile.profileUrl=downloadURL;
               console.log("File available at",downloadURL);
            });
          });


       
      },
     
       updateProfile(){
           var user = firebase.auth().currentUser;
           db.collection('tourist_bios').doc(user.uid).set({
          user_id: user.uid,
          profilepic: this.profile.profileUrl,
  
        })
        .then(function() {
            if (confirm("Successfully updated")) {
            window.location.reload();
          } else {
            txt = "You pressed Cancel!";
          }
          console.log("Document successfully written!");
          
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });

           db.collection('tourist_profiles').doc(user.uid).update({
              user_name: this.profile.username,
              phn_no: this.profile.phn,
             
           });
 
      },
  }
};


</script>

<style scoped lang="scss">


</style>