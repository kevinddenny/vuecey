<template>
  <div class="cultural">
<div class="headerImg">
      <img
        class="mainImg"
        src="Images/Cultural.jpg"
        alt="Cultural"
      />
      <div class="headerImgText">
        <h1>Cultural</h1>
      </div>
    </div>

    <div>
      <!-- Proper content needs to be thought of and added-->
      <p class="mainP">
        Despite being impacted by a variety of circumstances, Sri Lankan culture
        has managed to keep many of its historic characteristics. Most of its
        influences come from its lengthy past and Buddhist background. The
        nation has a strong heritage of the fine arts, which includes music,
        dance, and visual arts. Sri Lankan food, festivals, and sports all
        represent the country's way of life. Many features show South Indian
        influences. Portuguese, Dutch, and British colonization all had an
        impact in certain ways. Cricket, cuisine, alternative medicine,
        religious symbols like the Buddhist flag, and cultural exports like tea,
        cinnamon, and diamonds are what Sri Lankan culture is most known for
        overseas. The culture of Sri Lanka is diverse since it differs from area
        to region.
      </p>
      <p class="mainP">
        The island's cultural triangle, which is home to the remnants of
        multiple ancient kingdoms, gigantic tanks, well-kept rock caverns, and
        ancient holy temples, reveals the amazing and nearly impossible ancient
        engineering, architecture, and art.
      </p>

      <p class="mainP">
        The North of Sri Lanka is a colorful mixture of flavors, each with their
        own distinct flavor and culture. The north is a true monument to the
        island's richness and variety, albeit still showing signs of the civil
        war. Portuguese, Dutch, Tamil, Muslim, and British characters are
        influences. Off the coast, chains of islands with their own distinctive
        environments are dispersed and just waiting to be discovered.
      </p>

      <p class="mainP">
        Since ancient times, Sri Lanka and the Indian subcontinent have been
        connected. Sinhalese make of 74.8% of the population, followed by Sri
        Lankan Moors (9.23%), Indian Tamil (4.16%), Sri Lankan Tamil (11.21%),
        and Other (0.6%). <br />

        Due mostly to ancient historical texts like the Mahawansa, Sri Lanka can
        boast of a history that spans more than 2000 years. Intermittent foreign
        influence throughout many centuries has changed Sri Lankan culture to
        its current state. However, the island's predominantly conservative
        Sinhalese population, along with other minorities that contribute to Sri
        Lankan identity, continue to observe traditional customs and festivals.
        <br />
      </p>
    </div>
   <Footer></Footer>
  </div>
</template>
<script>
import Footer from '@/components/FooterComp.vue'

export default {
name: 'CulturalView',
components: {
  Footer,
    }
}
</script>
<style>
.headerImg{
  position: relative;
  text-align: center;
  color: black;
  width: 100%;
  font-size: 40px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;;
  }
  .headerImgText {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .mainImg {
    object-fit: cover;
    object-position: 20% 50%;
    width: 100%;
    height: 200px;  
    opacity: 0.5;
  }

  .mainP {
    padding-left: 5%;
    padding-right: 5%;
    font-family: 'Times New Roman', Times, serif;
    font-weight: lighter;
  }

  @media sreen and (mad-width:500px){
    .header{
      padding: opx 20px;
      background-color: purple;
    }
  }
  

  
p {
      font-size:16px;
      line-height:24px;
      padding: 5px;
    }
      
.container{
      width:100%;
      margin:0 auto;
      display:flex;
      list-style:none;
    }
           
.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
}


/* Sea Blue Boxes */

.column1 {
  flex: 29%;
  max-width: 29%;
  margin: 15px;
  border: solid 7px #276F8B;
  background-color: rgb(199, 231, 242);
  border-radius: 5px;
}

/* Golden Boxes */

.column2 {
  flex: 29%;
  max-width: 29%;
  margin: 15px;
  border: solid 7px #FAB453;
  background-color: rgb(255, 255, 222);
  border-radius: 5px;
}

/* Green Boxes */

.column3 {
  flex: 29%;
  max-width: 29%;
  margin: 15px;
  border: solid 7px #357960;
  background-color: rgb(241, 250, 241);
  border-radius: 5px;
}

#boximg{
  vertical-align: middle;
  width: 100%;
  height: 200px;
  border-radius: 5px;
}

.card{
      padding:15px 25px;
    }
      
.columnimg{
      max-width:100%;  
    }
  
@media screen and (max-width: 768px){

        .container{
          width:100%;
          margin:0 auto;
          display:flex;
          list-style:none;
        }
               
    .row {
      display: flex;
      flex-wrap: wrap;
      padding: 0 4px;
    }
    .column1 {
      flex: 100%;
      max-width: 100%;
      margin: 15px;
      border: solid 7px #276F8B;
      background-color: rgb(199, 231, 242);
      border-radius: 5px;
    }
    
    /* Golden Boxes */
    
    .column2 {
      flex: 100%;
      max-width: 100%;
      margin: 15px;
      border: solid 7px #FAB453;
      background-color: rgb(255, 255, 222);
      border-radius: 5px;
    }
    
    /* Green Boxes */
    
    .column3 {
      flex: 100%;
      max-width: 100%;
      margin: 15px;
      border: solid 7px #357960;
      background-color: rgb(241, 250, 241);
      border-radius: 5px;
    }
    
    #boximg{
      vertical-align: middle;
      width: 100%;
      height: 200px;
      border-radius: 5px;
    }
    
    .card{
          padding:15px 25px;
        }
          
    .columnimg{
          max-width:100%;  
        }
      }
</style>
