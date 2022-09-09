<template>
  <nav>
    <ul class="navbar-links">
      <li class="navItem"><router-link to="/">CEY.LK</router-link></li>
      <li class="navItem"><router-link to="/hotel">Hotels</router-link></li>
      <li class="navItem"><router-link to="/news">Tourism News</router-link></li>
      <li class="navItem"><router-link to="/about">About Us </router-link></li>
      <li class="navItem"><router-link to="/contact">Contact Us </router-link></li>
      <li v-show="show" v-if="user" class="navItem"><router-link to="/hotelpage/hotelprofile">Account </router-link></li>
      <li v-show="notshow" v-if="user" class="navItem"><router-link to="/touristpage">Account </router-link></li>
      <li class="navItem" v-if="reuser"><a @click="logout">Logout</a></li> 
      <li class="navItem" v-else ><router-link to="/login">Login</router-link></li>
      <!-- <button><router-link to="/login">Sign In</router-link></button>-->
      
    </ul>
     <div id="menuToggle">

                        <input type="checkbox" />
                        
    
                        <span></span>
                        <span></span>
                        <span></span>
                        

                        <ul id="menu">
                          <li><router-link to="/">CEY.LK</router-link></li>
                          <li><router-link to="/hotel">Hotels</router-link></li>
                          <li><router-link to="/news">Tourism News</router-link></li>
                          <li><router-link to="/about">About Us </router-link></li>
                          <li><router-link to="/contact">Contact Us </router-link></li>
                          <li class="navItem"><router-link to="/login">Account </router-link></li>
                          <!-- <button><router-link to="/login">Sign In</router-link></button> -->
                          <!-- <button @click="logout">Logout</button> -->
                        </ul>
                    </div>
  </nav>

</template>

<script>

import firebase from 'firebase';
import { db } from '../main';


export default {

data(){
  return {
    show:true,
    notshow:false,
    user:true,
    reuser:true
  }
},
created() {
  this.checkuser();
  

  

},

methods: {
  logout(){
    firebase.auth().signOut()
    .then(
      () => {
         alert("Logout");
         this.$router.replace('/');
         
        location.reload();
     
      }
    ).catch(
      (err) => {
        console.log(err);
      }
    )
  },
  checkuser() {
     this.user = firebase.auth().currentUser || false;
     if(this.user = firebase.auth().currentUser ){
      // this.hotel();
      this.tourist();
      console.log("ko");
     }else{
      console.log("ok");
     }
     
     this.reuser = firebase.auth().currentUser || false;
  },
  hotel(){
      var user = firebase.auth().currentUser;
       db.collection('hotel_profiles').doc(user.uid).get().then(doc => {
      if (doc.data().role=="h"){
        // console.log(this.show)
        this.show=true;
        this.notshow=false;
       
      }else{
        alert("not working");
      }

    
    })
  },
  tourist(){
    var user = firebase.auth().currentUser;
       db.collection('tourist_profiles').doc(user.uid).get().then(doc => {
      if (doc.data().role=="t"){
        // console.log(this.show)
        this.show=false;
        this.notshow=true;
       
      }else{
        alert("not working");
      }

    
    })
  }
 
}


}

</script>
<style>


.navbar-links {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: white;
    font-size: x-large;
  }

  .navItem {
    float: left;
    width: 14%;
  }
  
  .navItem a {
    display: block;
    color: black;
    text-align: center;
    padding: 10%;
    text-decoration: none;
    /* height: 25px; */
  }
  
  .navItem a:hover:not(.active) {
    background-color: rgb(201, 201, 201);
    color: black;
  }

  .iconImg {
    width: 25px;
    height: 25px;
    margin-right: 1%;
    margin-top: 1.5%;
  }

 

/*------------------------------------------- */
#menuToggle{
  display: none;
}

@media only screen and (max-width:600px) {

 .navbar-links {
    display: none;
    
}

#menuToggle{
  display: unset;
  top: 4px;
    left: 10px;
    
    z-index: 1;
    
    -webkit-user-select: none;
    user-select: none;
}
#menuToggle,
#menuToggle input,
#menuToggle span{
  display: block;
}
#menuToggle,
#menuToggle span{
  position: relative;
}
#menuToggle a{
  text-decoration: none;
  color: white;
  
  transition: color 0.3s ease;
}
#menuToggle a:hover{
  color: tomato;
}
#menu,
#menuToggle input{
  position: absolute;
}
#menuToggle input{

  width: 40px;
  height: 32px;
  top: -7px;
  left: -5px;
  
  cursor: pointer;
  
  opacity: 0; 
  z-index: 2; 
  
  -webkit-touch-callout: none;
}

#menuToggle input:checked ~ span,
#menuToggle span{
  background: black;
}
#menuToggle span{

  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  border-radius: 3px;
  
  z-index: 1;
  
  transform-origin: 4px 0px;
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}

#menu,
#menuToggle span:first-child {
  transform-origin: 0% 0%;
  }

#menuToggle span:nth-last-child(2)
  {
    transform-origin: 0% 100%;
  }


#menuToggle input:checked ~ span{
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);

  }

 #menuToggle input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }


#menuToggle input:checked ~ span:nth-last-child(2){
    transform: rotate(-45deg) translate(0, -1px);
  }


#menu{
    width: 300px;
    margin: -100px 0 0 -50px;
    padding: 50px;
    padding-top: 125px;
    
    background: rgba(51, 51, 51, 0.644);
    list-style-type: none;
    -webkit-font-smoothing: antialiased;

    
    transform: translate(-100%, 0);
    
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
  }

#menu li {
    padding: 10px 0;
    font-size: 22px;
  }

#menuToggle input:checked ~ ul {
    transform: none;
  }

}

</style>