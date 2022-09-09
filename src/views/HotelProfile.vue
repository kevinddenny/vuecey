<template>
  <div class="hotelprofile">
      <div class="container">
          
        <div class="intro h-100">
            <div class="row h-100 align-items-center">
              <div class="col-md-6 ml-3">
                    <h3>Profile settings</h3>
       
                 
            
              <!-- <div class="col-md-5">
                  <img src="/img/svg/profile.svg" width="300" alt="" class="img-fluid">
              </div> -->
            </div>
          </div>
          <div  v-show="show">  

                  <p>
                   Add your profile bio here
                 </p>
            
               

                  <div class="container">
                      <div class="row">
                        
                      
                        <div class="col-md-8">
                          <div class="form-group">
                            <input type="text"  v-model="profile.phone" placeholder="Phone" class="form-control">
                          </div>
                        </div>
<br>
<br>
                        <div class="col-md-8">
                          <div class="form-group">
                            <textarea v-model="profile.address" placeholder="Address" class="form-control"></textarea>
                            <!-- <input type="text"  v-model="profile.address" placeholder="Address" class="form-control"> -->
                          </div>
                        </div>
<br>
<br>
                        <div class="col-md-8">
                          <div class="form-group">
                            <textarea type="text"  v-model="profile.descript" placeholder="Description" class="form-control"></textarea>
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
                      <div class="col-md-6">
                        <p>
                          Add Hotel Pictures
                        </p>
                      </div>

                          <div class="col-md-8">
                          <div class="form-group">
                              <input type="file" @change="uploadHotelImage" class="form-control">
                           </div>
                        </div>
<br>        
                          <div class="form-group">
                              <div v-for="imageUrl in profile.imageUrl">
                                <img :src="imageUrl" alt="" width="80px">
                              </div>
                        </div>
<br>
                        <div class="col-md-8">
                          <div class="form-group">
                              <input type="submit" @click="BioProfile" value="Add Bio" class="btn btn-primary w-100">
                          </div>
                        </div>
<br>
<br>
                        <div class="form-group d-flex">
                          <div v-for="image in profile.images">
                          <img :src="image" style="width: 120px;" alt="" ></div>
                        </div>
<br>
<br>
                      </div>
                  </div>
        </div>
                
                <div v-show="notshow">
                
                <p>
                   Update your profile bio here
                 </p>
            
               

                  <div class="container">
                      <div class="row">
                        
                        <div class="col-md-8">
                          <div class="form-group">
                            <input type="text" name="" v-model="profile.hname" placeholder="Hotel name" class="form-control">
                          </div>
                        </div>
<br>
<br>
                        <div class="col-md-8">
                          <div class="form-group">
                            <input type="text"  v-model="profile.phone" placeholder="Phone" class="form-control">
                          </div>
                        </div>
<br>
<br>
                        <div class="col-md-8">
                          <div class="form-group">
                            <textarea v-model="profile.address" placeholder="Address" class="form-control"></textarea>
                            <!-- <input type="text"  v-model="profile.address" placeholder="Address" class="form-control"> -->
                          </div>
                        </div>
<br>
<br>
                        <div class="col-md-8">
                          <div class="form-group">
                            <textarea type="text"  v-model="profile.descript" placeholder="Description" class="form-control"></textarea>
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
                      <div class="col-md-6">
                        <p>
                          Add Hotel Pictures
                        </p>
                      </div>

                          <div class="col-md-8">
                          <div class="form-group">
                              <input type="file" @change="uploadHotelImage" class="form-control">
                           </div>
                        </div>
<br>        
                          <div class="form-group">
                              <div v-for="imageUrl in profile.imageUrl">
                                <img :src="imageUrl" alt="" width="80px">
                              </div>
                        </div>
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

                <!-- <div class="tab-pane fade pt-3" id="account" role="tabpanel" aria-labelledby="account-tab">
                  <div class="container">
                      <div class="row">
                        <div class="col-md-">
                            <div class="alert alert-info">
                              Please use the Reset password email button for reseting the password. The form doens't work currently
                            </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <input type="text"  v-model="account.name" placeholder="User name" class="form-control">
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group">
                            <input type="text"  v-model="account.email" placeholder="Email address" class="form-control">
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group">
                            <input type="text"  v-model="account.password" placeholder="New password" class="form-control">
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group">
                            <input type="text" v-model="account.confirmPassword"  placeholder="Confirm password" class="form-control">
                          </div>
                        </div>

                        <div class="col-md-4">
                          <div class="form-group">
                              <input type="file" @change="uploadImage" class="form-control">
                           </div>
                        </div>

                        <div class="col-md-4">
                          <div class="form-group">
                              <input type="submit" value="Save Changes" class="btn btn-primary w-100">
                          </div>
                        </div>

                        <div class="col-md-4">
                          <div class="form-group">
                              <input type="button" @click="resetPassword" value="Reset password email" class="btn btn-success w-100">
                          </div>
                        </div>
                      </div>
                  </div>
                </div> -->

        </div>
            
          </div>

      </div>

    
  <!-- </div> -->
</template>

<script>
import firebase from 'firebase';
import { db } from '../main';
import { st } from '../main';


export default {
  name: "HotelProfile",


  props: {
    msg: String
  },
  data(){
    return {
        show:true,
        notshow:false,
        profile: {
          hname:null,
          repname:null,
          phone:null,
          address:null,
          descript:null,
          profileUrl:null,
          images:[]
        },
            
    }
  },
  firestore(){
      const user = firebase.auth().currentUser;
      return {
        profile: db.collection('hotel_bios').doc(user.uid),
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
          // this.$firestore.profile.update(this.profile);
          var user = firebase.auth().currentUser;
          
          db.collection('hotel_bios').doc(user.uid).set({
          user_id: user.uid,
          phn_no: this.profile.phone,
          address: this.profile.address,
          descript: this.profile.descript,
          profilepic: this.profile.profileUrl,
          hotelpics: this.profile.images,
          state: "done"


          
        })
        .then(function() {
         
          console.log("Document successfully written!");
           this.$router.replace('/login');
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
      },
      uploadImage(e){
        let file = e.target.files[0];
        var storageRef = st.ref('hprofile/'+ file.name);
        let uploadTask  =storageRef.put(file);

        uploadTask.on('state_changed', (snapshot)=> {
            
          }, (error) => {
            console.log(error)
            // Handle unsuccessful uploads
          }, () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              this.profile.profileUrl=downloadURL;
               console.log("File available at",downloadURL);
            });
          });


       
      },
      uploadHotelImage(e){
        let file = e.target.files[0];

        var storageRef = st.ref('hotelpics/'+ file.name);
        let uploadTask  =storageRef.put(file);

        uploadTask.on('state_changed', (snapshot)=> {
            
          }, (error) => {
            console.log(error)
            // Handle unsuccessful uploads
          }, () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              this.profile.images.push(downloadURL);
               console.log("File available at",downloadURL);
            });
          });

      },
       updateProfile(){
           var user = firebase.auth().currentUser;

           db.collection('hotel_profiles').doc(user.uid).update({
              hotel_name: this.profile.hname,
              rep_name:this.profile.repname,
           });
          
          db.collection('hotel_bios').doc(user.uid).update({
         

          phn_no: this.profile.phone,
          address: this.profile.address,
          postcode: this.profile.postcode,

          
        })
        .then(function() {
          alert("Successfully updated");
          console.log("Document successfully written!");
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
      },
  },
  created(){
      var user = firebase.auth().currentUser;
       db.collection('hotel_bios').doc(user.uid).get().then(doc => {
      if (doc.data().state=="done"){
        // console.log(this.show)
        this.show=false;
        this.notshow=true;
       
      }else{
        alert("Not Working");
      }
      
      
     
    
    })
  }
};


</script>

<style scoped lang="scss">


</style>