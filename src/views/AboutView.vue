<template>
  <div class="about">
     <div class="headerImg">
      <img
        class="mainImg"
        src="Images/aboutUs.jpg"
        alt="About Us Image"
      />
      <div class="headerText">
        <h1 class="mainHeading">About Us</h1>
      </div>
    </div>
    <div class="aboutUsContainer">
      <div class="aboutUsItem">
        <img id="sideImg" src="Images/AboutUsSide.jpg" alt="Beach" />
      </div>
      <div class="aboutUsItem">
        <h2>About us Who are we?</h2>
        <p>
          Magma is a multinational company which also takes up local projects.
          The company is diversified in resourcing projects and software
          development. Magma has 10 manufacturing facilities across Sri Lanka
          with over 700 employees working in each of our local facilities. Here,
          Magma was awarded in to lead this project, in hopes to boost tourism
          in the country. Here we wish to implement a web platform to provide a
          unique experience for tourists. The portal is expected to be a
          one-stop for tourist accommodation needs in the country.
        </p>

        <h2>What is Cey.lk?</h2>

        <p>
          Sri Lanka has always been a hotspot for tourism due to its sun kissed
          beaches, misty mountains and its thriving wild life. This making
          tourism one of the largest industries of the country which helps to
          increase the revenue of the economy.
          <br />
          However, with the digital revolution, Sri Lankan tourism is still in
          the process of evolving into fully functioning, efficient and
          accessible digital media. Thus, the country having no platform
          currently launched which provides a one-stop accommodative application
          for hotels and tourists to interact. <br />
          Therefore, making the tourists having to go through various different
          manual and digital platforms to receive information regarding their
          travel experiences and hotels having to use various platforms to
          market their brand and hotel promotions. Now, with the initiation of
          our client, Cambio software, we intend to provide a working solution
          to house all travelling and accommodative aspects in Sri Lanka in one
          platform. <br />
          Here, we intend to focus on providing travel and marketing solutions
          to hotels, ranging from small guesthouses all the way to five star
          hotels; and also, accommodative and travelling solutions for tourists,
          both local and foreign. This allowing the Sri Lankan tourism industry
          to finally reap the benefits of the digital revolution and use it to
          bring in more revenue to the economy and provide a competitive
          advantage over other tourist attractions across the globe.
        </p>

        <h2>What do we hope to achieve?</h2>

        <p>
          With this platform we hope to provide a one-stop gateway for all
          tourism needs and provide the country’s first digital platform for
          tourists and hotels to interact easily, thereby making the Sri Lankan
          tourism planning experience more streamlined, less time consuming,
          less complicated and a more trustworthy experience for all parties
          involved. All in all, we hope that this solution will help to boom the
          tourism industry of our country bringing in more and more tourists,
          thus, making Sri Lanka the world’s number one tourist destination.
        </p>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from '@/components/FooterComp.vue'

export default {
name: 'AboutView',
components: {
  Footer,
    }
}
</script>

<style>
.aboutUsContainer {
    display: grid;
    grid-template-columns: 50% 50%;

  }
  
  .aboutUsItem {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 20px;
    font-size: 30px;
    text-align: center;
  }

#sideImg {
    height: 600px;
    width: 100%;
    border-radius: 15px;
    padding: 10px;
}

p {
    font-family: 'Times New Roman', Times, serif;
    font-size: medium;
    text-decoration: solid;
    text-align: justify;
}

h2 {
  font-family: 'Times New Roman', Times, serif;
  font-size: large;
  text-align: center;
}

.mainImg {
    width: 100%;
    object-fit: cover;
    object-position: 0% 70%;
    width: 100%;
    height: 200px;  
    opacity: 0.5;
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

  @media screen and (max-width: 768px){
    #sideImg {
      height: 300px;
      width: 100%;
      border-radius: 15px;
      padding: 0;
  }
  
  p {
      font-family: 'Times New Roman', Times, serif;
      font-size: medium;
      text-decoration: solid;
      text-align: justify;
  }
  
  h2 {
    font-family: 'Times New Roman', Times, serif;
    font-size: large;
    text-align: center;
  }

  .aboutUsContainer {
    display: grid;
    grid-template-columns: 100%;
    width:100%;
          margin:0 auto;
          display:flex;

  }
  
  .aboutUsItem {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 1px;
    font-size: 30px;
    text-align: center;
  }
  }
</style>