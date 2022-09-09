<template>
  <div class="login">
    <Navigation></Navigation>
        <div class="container">
      <div class="card">
        <div class="card-image">
          <img
            class="card-image"
            src="Images/loginImg.jpg"
            alt="Resort"
          />
          
        </div>
        <div class="card-form">
          <div>
            <h2>Log In</h2>
            <div class="input">
              <input
                class="input-field"
                type="email"
                placeholder="Enter Email"
                name="email"
                v-model="email"
                
              />
            </div>
            <div class="input">
              <input
                class="input-field"
                type="password"
                placeholder="Enter Password"
                name="psw"
                v-model="password"
              />
            </div>
            <div class="action">
              <button class="action-button" @click="login">Login</button> 
              
            </div>
            <p class="registerMessage">
              Not a part of our family? Register now as a <br />
        
                 <router-link class="links" to="/RegHotel">Hotel</router-link>
        
                 <router-link class="links"  to="/RegTourist">Tourist</router-link>
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  
       
  
     
   
 <Footer></Footer>
  </div>

</template>
<script>
import Navigation from '@/components/NavigationComp.vue'
//------------------------------firebase
import firebase from 'firebase';
import { db } from '../main';
import Footer from '@/components/FooterComp.vue'

export default {
name: 'LoginView',

data(){
  return {
    email:"",
    password:"",
    sid:"",
    role:""
    
  }
},

methods:{
  login() {
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
      return   firebase.auth().signInWithEmailAndPassword(this.email, this.password)
    .then(
      () => {
        //admin Login handling=====================================
      var user = firebase.auth().currentUser;
       db.collection('admin_id').doc(user.uid).get().then(doc => {
      if (doc.data().role=="a"){
          
          this.$router.replace('/admin/console');
      }else{
        this.$router.replace('/touristpage');
      }
      
      
     
    
    })
      
      //  this.$router.replace('/hotelpage/hotelprofile');
      },
      (err) => {
        alert(err)
      }

    ).then(
     
      () => {
        //Hotel Login handling=====================================
      var user = firebase.auth().currentUser;
       db.collection('hotel_profiles').doc(user.uid).get().then(doc => {
      if (doc.data().role=="h"){
           db.collection('hotel_profiles').doc(user.uid).get().then(doc => {
            if (doc.data().verify=="yes") {
              this.$router.replace('/hotelpage/hotelprofile');
            }
            else{
              alert("Await Admin Verification! Thank You");
              firebase.auth().signOut();
              this.$router.replace('/');
              // location.reload();
            }
         })

         
      }else{
        this.$router.replace('/touristpage');
      }
      
      
     
    
    })
      
      //  this.$router.replace('/hotelpage/hotelprofile');
      },
      (err) => {
        alert(err)
      }
    ).then(
     
      () => {
        //Tourist Login handling=====================================
      var user = firebase.auth().currentUser;
       db.collection('tourist_profiles').doc(user.uid).get().then(doc => {
      if (doc.data().role=="t"){
        
      this.$router.replace('/');
         
      }else{
        this.$router.replace('/login');
      }
      
      
     
    
    })
      
      //  this.$router.replace('/hotelpage/hotelprofile');
      },
      (err) => {
        alert(err)
      }
    )   
    })
    
   
  }
},
components: {
  Footer,
  Navigation
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');

/* *, *:after, *:before {
	box-sizing: border-box;
} */

/* body {
	font-family: "DM Sans", sans-serif;
	line-height: 1.5;
	background-color: #f1f3fb;
	padding: 0 2rem;
} */

img {
	max-width: 100%;
	display: block;
}


/* // iOS Reset  */
input {
	appearance: none;
	border-radius: 0;
}

.card {
	margin: 2rem auto;
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 425px;
	background-color: #FFF;
	border-radius: 10px;
	box-shadow: 0 10px 20px 0 rgba(#999, .25);
	padding: .75rem;
    
}

.card-image {
	border-radius: 8px;
	overflow: hidden;
	background-repeat: no-repeat;
    background-image: none;
	background-size: 150%;
	background-position: 0 5%;
	position: relative;
}


.card-form {
	padding: 2rem 1rem 0;
}

.input {
	display: flex;
	flex-direction: column-reverse;
	position: relative;
	padding-top: 1.5rem;
}

.input-label {
	color: #8597a3;
	position: absolute;
	top: 1.5rem;
	transition: .25s ease;
}

.input-field {
	border: 0;
	z-index: 1;
	background-color: transparent;
	border-bottom: 2px solid #eee; 
	font: inherit;
	font-size: 1.125rem;
	padding: 5px;
}

.action {
	margin-top: 2rem;
}

.action-button {
	font: inherit;
	font-size: 1.25rem;
	padding: 1em;
	width: 100%;
	font-weight: 500;
	background-color: #6658d3;
	border-radius: 6px;
	color: #FFF;
	border: 0;
	border-radius: 30px;
}

.card-info {
	padding: 1rem 1rem;
	text-align: center;
	font-size: .875rem;
	color: #8597a3;
}


.links:link {
  text-decoration: none;
}

.links:visited {
  text-decoration: none;
}

.links:hover {
  text-decoration: underline;
}

.links:active {
  text-decoration: underline;
}

.links {
    margin-right: 10px;
    margin-top: 10px;
}

.registerMessage {
  font-family: "DM Sans", sans-serif;
  font-size: medium;
  margin-bottom: 5px;
}

@media screen and (max-width: 768px){
	.card {
		margin: 2rem auto;
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 425px;
		background-color: #FFF;
		border-radius: 10px;
		box-shadow: 0 10px 20px 0 rgba(#999, .25);
		padding: 0;
		
	}
}

</style>