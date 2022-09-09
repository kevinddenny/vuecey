<template>
    <div class="HotelPackages">
        <div class="container">
            
          <div class="intro h-100">
              <div class="row h-100 align-items-center">
                <div class="col-md-6 ml-3">
                      <h3>Packages</h3>
         
                   
              

                  
  
  
                </div>
              
             </div>
             <div >  





                <div class="container">
                    <div class="row">
                    
                    
                    <div class="col-md-8">
                        <div class="form-group">
                        <input type="text"  v-model="room" placeholder="Room Type" class="form-control">
                        </div>
                    </div>
                <br>
                <br>
                    <div class="col-md-8">
                        <div class="form-group">
                        <input v-model="price" placeholder="Price" class="form-control">
                        <!-- <input type="text"  v-model="profile.address" placeholder="Address" class="form-control"> -->
                        </div>
                    </div>
                <br>
                <br>
                    <div class="col-md-8">
                        <div class="form-group">
                        <input type="text"  v-model="inclu" placeholder="Inclusion(Full Board, Half Board, B & B)" class="form-control">
                        </div>
                    </div>
                <br>
                <br>
                    

                    <div class="col-md-8">
                        <div class="form-group">
                            <input type="submit" @click="addpack" value="Add Package" class="btn btn-primary w-100">
                        </div>
                    </div>
                <br>
                <br>
                    </div>
                    <div class="col-md-8">
                          <div class="form-group">
                              <!-- <button type="button" class="btn btn-success w-100"><a id="link" href="https://console.firebase.google.com/project/testvue-ad06c/overview">Visit Console</a></button> -->
                              <div v-for="(pack,index) in packs">
                                <hr>
                                    <p>Room type - {{pack.room}}</p>
                                    <p>Room Price - {{pack.price}}</p>
                                    <p>Room Inclusion - {{pack.inclusion}}</p>
                                    
                                    <div class="d-flex justify-content-around">
                                     
                                    
                                    <button class="btn btn-danger w-100" @click="deleteAcc(index,pack.user_id)">Delete</button>
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
  name: "HotelPackages",

  data(){
    return {
       
          room:null,
          price:null,
          inclu:null,
          pack:null,
          packs:[]

     
            
    }
  }
  ,
    mounted: function() {
        
        this.fetchPacks();
        console.info('mounted, packs:', this.packs) 
    },
    computed: {
        items: function() {
            return this.packs
        }
    },
  methods:{
   fetchPacks () {
        var userid = firebase.auth().currentUser;
        console.log('this',db.collection('hotel_profiles').doc(userid.uid).collection('pack'));
          db.collection('hotel_profiles').doc(userid.uid).collection('pack').get()
              .then(snapshot => {
                  snapshot.forEach( doc => {
                      const pack = doc.data()
                      console.log(pack)
                      
                           
                      this.pack=pack.room;
                    //   user.id = doc.id
                      this.packs.push(pack)
                     
                     
                  })
              })
              .catch(error => {
                  console.error(error)
              })
          console.debug('fetchUser return: ', this.users) 
      },
    addpack(){
        var user = firebase.auth().currentUser;

        db.collection('hotel_profiles').doc(user.uid).collection('pack').doc().set({
          user_id: user.uid,
          room: this.room,
          price: this.price,
          inclusion: this.inclu
        })
        .then(function() {
         
         console.log("Document successfully written!");
         
         if (confirm("Successfully Added")) {
                                  window.location.reload();
                              } 
       })
       .catch(function(error) {
         console.error("Error writing document: ", error);
       });
    },
    deleteAcc(index,id){
        var userid = firebase.auth().currentUser;
          db.collection('hotel_profiles').doc(userid.uid).collection('pack').get().then((snapShot) => {
  
                  const doc = snapShot.docs[index];
  
                  console.log(id,index);
                  db.collection('hotel_profiles').doc(userid.uid).collection('pack').doc(id).delete()
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