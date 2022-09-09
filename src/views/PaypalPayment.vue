<template>
  <div class="paypalpayment">
    <!--Hasn't paid yet-------------------------------------------------------------------------------->
    <div v-if="!paidFor">
      <h1>Registration - ${{ product.price }} </h1>

      <p>{{ product.description }}</p>
      <div ref="paypal"></div>
    </div>
<!--Paid------------------------------------------------------------------------------------------------>
    <div v-if="paidFor">
      <h1>Paid</h1>
      <a href="/">Go to Home, Await verification</a>
    </div>

    
  </div>
</template>

<script>

import firebase from 'firebase';
import { db } from '../main';
export default {
  name: "PaypalPayment",

  data: function() {
    return {
      loaded: false,
      paidFor: false,
      product: {
        price: 20.00,
        description: "One Time Payment",
       
      }
    };
  },
  mounted: function() {
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=ARi_3vwuY3GCBk4Duvb9WyQpTaLKBOJVlivyi4BUj4Zap2v0_kp_CvZ65pFpIWEymN6Pt9drGiMz1qOl";
    script.addEventListener("load", this.setLoaded);
    document.body.appendChild(script);
  },
  methods: {
    setLoaded: function() {
      this.loaded = true;
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: this.product.description,
                  amount: {
                    currency_code: "USD",
                    value: this.product.price
                  }
                }
              ]
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            this.paidFor = true;
            console.log(order);
            var user = firebase.auth().currentUser;
            db.collection('hotel_profiles').doc(user.uid).update({
              paid: "yes",
             
           }).then(
                () => {
                  console.log("Signout")
                  firebase.auth().signOut()
                }
         );
          },
          onError: err => {
            console.log(err);
          }
        })
        .render(this.$refs.paypal);
    }
  }
};
</script>