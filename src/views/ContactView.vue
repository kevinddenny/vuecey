<template>
  <div class="contact">
    
   <div class="headerImg">
      <img
        class="mainImg"
        src="Images/contactUsHead.jpg"
        alt="Contact Us Img"
      />
      <div class="headerText">
        <h1 class="mainHeading">Contact Us</h1>
      </div>
    </div>

    <div class="contactUsContainer">
      <div class="contactItem">
        <img
          class="gridImg"
          src="Images/callUs.jpg"
          alt="Contact us through phone"
        />
      </div>
      <div class="contactItem">
        <h2 class="gridHeader">Have any questions?</h2>
        <h3 class="gridInformation">
          Drop an email to our team and make an inquiry
        </h3>
        <a class="send" href="mailto:info@magma.lk">info@magma.lk</a>
      </div>
      <div class="contactItem">
        <h2 class="gridHeader">Call our Team</h2>
        <h3 class="gridInformation">
          Magma call centers provides the best customer service!
        </h3>
        <a class="talk" href="tel:+94707443434">+9470 744 3434</a>
      </div>
      <div class="contactItem">
        <img
          class="gridImg"
          src="Images/mailUs.jpg"
          alt="Send us an email"
        />
      </div>
    </div>
<Footer></Footer>

  </div>
</template>
<script>
import Footer from '@/components/FooterComp.vue'

export default {
name: 'ContactView',
components: {
  Footer,
    }
}
</script>
<style>
.contactUsContainer {
    display: grid;
    grid-template-columns: 50% 50%;

  }
  
  .contactItem {
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 5px;
    padding: 20px;
    font-size: 30px;
    text-align: center;
  }

  .gridImg {
    height: 300px;
    width: 100%;
    border-radius: 10px;
  }

  .headerImg {
    position: relative;
    text-align: center;
    color: black;
    font-size: 40px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;;
  }
  
  .headerText {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
  }

  .mainImg {
    width: 100%;
    object-fit: cover;
    object-position: 20% 10%;
    width: 100%;
    height: 200px;  
    opacity: 0.5;
}

.gridHeader {
  color: black;
  padding-bottom: 0;
  text-align: center;
}

.gridInformation {
  color: black;
  text-align: center;
}

/* button css */

.send {
  text-decoration: none;
  border-radius: 5%;
  color: transparent;
  padding: 10px 40px;
  font-size: 28px;
  font-family: sans-serif;
  letter-spacing: 5px;
  transition: all 0.5s;
  position: relative;
}
.send:before {
  content: "info@magma.lk";
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: rgb(34, 34, 34);
  font-size: 28px;
  top: 0;
  left: 100%;
  font-family: sans-serif;
  letter-spacing: 5px;
  transition: all 1s;
  height: 100%;
  width: 100%;
  position: absolute;
  transform: scale(0) rotatey(0);
  opacity: 0;
}
.send:hover:before {
  transform: scale(1) rotatey(360deg);
  left: 0;
  opacity: 1;
}
.send:after {
  content: "Mail Us";
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: rgb(34, 34, 34);
  font-size: 28px;
  top: 0;
  left: 0;
  font-family: sans-serif;
  letter-spacing: 5px;
  transition: all 1s;
  height: 100%;
  width: 100%;
  position: absolute;
  transform: scale(1) rotatey(0);
  opacity: 1;
}
.send:hover:after {
  transform: scale(0) rotatey(360deg);
  left: -100%;
  opacity: 0;
}

/* css for phone */

.talk {
  text-decoration: none;
  border-radius: 5%;
  color: transparent;
  padding: 10px 40px;
  font-size: 28px;
  font-family: sans-serif;
  letter-spacing: 5px;
  transition: all 0.5s;
  position: relative;
}
.talk:before {
  content: "+9470 744 3434";
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: rgb(34, 34, 34);
  font-size: 28px;
  top: 0;
  left: 100%;
  font-family: sans-serif;
  letter-spacing: 5px;
  transition: all 1s;
  height: 100%;
  width: 100%;
  position: absolute;
  transform: scale(0) rotatey(0);
  opacity: 0;
}
.talk:hover:before {
  transform: scale(1) rotatey(360deg);
  left: 0;
  opacity: 1;
}
.talk:after {
  content: "Call Us";
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: rgb(34, 34, 34);
  font-size: 28px;
  top: 0;
  left: 0;
  font-family: sans-serif;
  letter-spacing: 5px;
  transition: all 1s;
  height: 100%;
  width: 100%;
  position: absolute;
  transform: scale(1) rotatey(0);
  opacity: 1;
}
.talk:hover:after {
  transform: scale(0) rotatey(360deg);
  left: -100%;
  opacity: 0;
}

@media screen and (max-width: 768px){
  .contactUsContainer {
    display: grid;
    grid-template-columns: 100%;

  }
  
  .contactItem {
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 5px;
    padding: 1px;
    font-size: 30px;
    text-align: center;
  }
  .gridImg {
    height: 200px;
    width: 100%;
    border-radius: 0px;
    padding-top: 10px;
  }

}


</style>