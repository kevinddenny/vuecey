<template>
    <div class="RegTourist">
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

    <div class="card-form"></div>
      <div>
        <h2>Sign In</h2>
           <router-link class="switchLinks" to="/RegHotel">Hotel</router-link>
           
        
         <router-link class="switchLinks"  to="/RegTourist">Tourist</router-link>
         
        <br>
       <!--username------------------------>
        <div class="input">  
        <input 
        class="input-field"
          type="text" 
          placeholder="Username" 
          v-model="state.username"/>
        <br>
        <span class="sp" v-if="v$.username.$error">
        {{ v$.username.$errors[0].$message}}
        </span>
      </div>
      <!--Mobile Number------------------------>
      <div class="input">
        <input
          class="input-field"
          type="text"
          placeholder="Enter Mobile Number"
          name="phn"
          v-model="state.phn"/>
        <br>
        <span class="sp" v-if="v$.phn.$error">
        {{ v$.phn.$errors[0].$message}}
        </span>
        </div>
      <!--Country------------------------------>
      <div class="input">
         <label >Select Country
          <br>
          <select v-model.trim="state.country">
          <option v-for="country in countries" :value="country.value">
          {{ country.label }}
          </option>
         </select>
         </label>
        <br>
        <span class="sp" v-if="v$.country.$error">
        {{ v$.country.$errors[0].$message}}
        </span>
        </div>
         <!--DOB------------------------>
         
      <div class="input">
        <label for="dob">Birthday
        <input 
          class="input-field"
          type="date" 
          name="dob"
          v-model="state.dob"/>
          </label>
        <br>
        <span class="sp" v-if="v$.dob.$error">
        {{ v$.dob.$errors[0].$message}}
        </span>
        </div>
      
      <!--Email------------------------------>
        <div class="input">
        <input
          class="input-field"
          type="text"
          placeholder="Enter E-mail Address"
          name="email"
          v-model="state.email"/>
        <br>
        <span class="sp" v-if="v$.email.$error">
        {{ v$.email.$errors[0].$message}}
        </span>
        </div>
      <!--password----------------------------->
        <div class="input">
        <input 
           class="input-field" 
           type="password" 
           placeholder="Enter Password"
            name="psw" 
            v-model="state.password"/>
        <br>
        <span class="sp" v-if="v$.password.$error">
        {{ v$.password.$errors[0].$message}}
        </span>
        </div>

        

        <!--Verification method comes here eg: captcha etc, whatever is easy to implement-->

        <p>
          By creating an account you agree to our
          <a href="TermsAndPrivacy.html">Terms & Privacy</a>
        </p>

        <div class="action">
          <button class="action-button" @click="register">Register</button>
 
      </div>

        <p>Already have an account?</p>
        <router-link class="links" to="/login">Log In</router-link>

             
        
      </div>
   
         </div>
         
         </div>
         <Footer></Footer>
    </div>
</template>

<script>
import Navigation from '@/components/NavigationComp.vue'
import useValidate from '@vuelidate/core'
import { required, email, minLength, helpers } from '@vuelidate/validators'
import { reactive, computed } from 'vue';
import firebase from 'firebase';

import { db } from '../main'

import Footer from '@/components/FooterComp.vue'

const countries = require('i18n-iso-countries')
countries.registerLocale(require('i18n-iso-countries/langs/en.json'))

export default {
name: 'RegistrationTourist',
components: {
  Navigation
    },
computed: {
  countries () {
    const list = countries.getNames('en', { select: 'official' })
    return Object.keys(list).map((key) => ({ value: key, label: list[key] }))
  }
},
setup(){
  const state = reactive({
    username: "",
    phn: "",
    dob: "",
    country:"",
    email: "",
    password: "",

  })

  const rules = computed(() => {
    return{
      username: { required },
      phn: { required },
      dob: { required },
      country: { required },
      email: { required, email},
      password: { required, minLength: minLength(6),
      containsPasswordRequirement: helpers.withMessage(
          () => `The password requires a number `, 
          (value) => /(?=.*[0-9])/.test(value)
        ),
      }

    }
  })

  const v$ = useValidate(rules, state)

  return {
    state,
    v$,
  }
},

components: {
  Footer,
  Navigation
    }

,
methods: {
  register() {
    
    this.v$.$validate() 
      if (!this.v$.$error) {
       firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(
      (user) => {
        db.collection("tourist_profiles").doc(user.user.uid).set({
          user_name: this.state.username,
          phn_no: this.state.phn,
          dob: this.state.dob,
          country: this.state.country,
          role: "t",
          state: "done",
          
          
        })
        .then(function() {
          console.log("Document successfully written!");
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
     this.$router.replace('/touristpage');
      },
      (err) => {
        alert("Test"+err)
      }
    )

      }
      else{
        alert ("Form failed validation ")
      }
     
    
    
  },

}
}

</script>
<style>
input, label {
    display:block;
}
.sp {
  color: red;
}
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
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

.card-heading {
	position: absolute;
	left: 10%;
	top: 15%;
	right: 10%;
	font-size: 1.75rem;
	font-weight: 700;
	color: #735400;
	line-height: 1.222;
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
	padding: .25rem 0;
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
	border-radius: 5px;
}

.card-info {
	padding: 1rem 1rem;
	text-align: center;
	font-size: .875rem;
	color: #8597a3;
}

.switchLinks:link, .switchLinks:visited {
    background-color: #f44336;
    color: white;
    padding: 14px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border-radius: 5px;
    margin-left: 75px;
  }
  
  .switchLinks:hover, .switchLinks:active {
    background-color: red;
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