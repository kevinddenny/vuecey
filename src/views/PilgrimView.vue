<template>
  <div class="pilgrim">
    <div class="headerImg">
      <img class="mainImg" src="Images/Pilgrimage.jpg" alt="Pilgrimages" >
      <div class="headerImgText">
        <h1>Pilgrimages</h1>
      </div>
    </div>

    <div>
      <!-- Proper content needs to be thought of and added-->
      <p class="mainP">
        Since Sri Lanka has a rich cultural legacy, its trips often involve 
        numerous pilgrimages to historical and cultural places. These trips are 
        usually fun, although some of the tougher excursions might only be appealing 
        to more intrepid travellers.There are several locations with significant 
        historical and religious value in Sri Lanka, which is noted for its rich Buddhist culture and
        history.<br />
      </p>



  <div class="row">
    <div class="column2">
      <h3>ADAM'S PEAK </h3>
      <img id="boximg" src="Images/adamspeak.jpg" alt="Adams peak">
        <p>The mountain goes by several names because of its importance to 
        the numerous people that live in the nation. <br>
        The Sinhalese people frequently employ the Sanskrit-derived moniker 
        Sri Pada in religious contexts; which Buddhists consider to be the Buddha's. According to 
        Christian and Islamic beliefs, Adam's footprint, which he left while stepping onto 
        Earth for the first time after being expelled from paradise, is what gave it its 
        name "Adam's Peak ".</p>
    </div>
    <div class="column2">
      <h3>THE TEMPLE AND BOGODA BRIDGE</h3>
      <img id="boximg" src="Images/Bogoda.jpg" alt="Bogoda bridge">
      <p>
        An old temple and wooden bridge are located near the Hali-ela junction,
        around 30 kilometers from Bandarawela and 10 kilometers from Badulla.
        The Bogoda Bridge, which was built in the 1600s, is said to be the
        oldest wooden bridge still in existence. However, the nearby temple has
        a far older past, dating back to the first century BC. On an old path
        between Badulla and Kandy, a bridge was constructed over the Gallanda
        Oya. Eleven pairs of beautifully carved pillars and a railing of
        banisters hold the bridge in style.<br /></p>
    </div>
    <div class="column2">
      <h3>THE PADA YATRA</h3>
      <img id="boximg" src="Images/padayatra.jpg" alt="Pada yatra">
        <p>Pilgrimage that takes place on foot from Jaffna to Kataragama along the
        East Coast, is one of Lanka's oldest customs. The Yatra's beginnings are
        hidden in legend. According to some tales, it all started when God
        Kataragama himself arrived on our beaches and made his way to
        Kataragama.<br />

        This 45-day, multireligious pilgrimage to Kataragama from Mullaittivu
        has established a tradition in Sri Lanka throughout the years. Villages
        along the road take part by giving the pilgrims, whom they see as the
        god's messengers, beverages, food, hospitality, and lodging. For
        millennia, Kataragama has also received "calls" from pilgrims in other
        countries as well as India.<br />
        </p>
    </div>
  </div>

  <div class="row">
    <div class="column2">
      <h3>MALIGAWILA</h3>
      <img id="boximg" src="Images/maligawila.jpg" alt="Maligawila">
       <p>It is the location of numerous significant archaeological artifacts, 
        including a free-standing, limestone Buddha statue that is 11 or 12 meters 
        tall (36 or 39 feet 4.4 inches), according to some sources. The Avukana Buddha 
        Statue is also supposed to be taller. Numerous visitors come to the area to see 
        this Buddha. Additionally, it is home to the 10 meters (32 feet 9.7 in) tall Avalokitesvara 
        statue made of limestone. These sculptures, which were found in the 1950s and repaired 
        between 1989 and 1991, are thought to have been ordered by the prince Agghabodhi of the 
        seventh century. [4] A historical pillar from the tenth century was also erected in Mahinda 
        IV's tenth year of power (956-972 AD).</p>
    </div>
    <div class="column2">
      <h3>TEMPLE OF TOOTH </h3>
      <img id="boximg" src="Images/toothrelic.jpg" alt="Temple of tooth">
      <p>
        Known as Dalda Maligawa, it is situated in Kandy. The precious tooth of
        Lord Buddha is kept there, making it one of the most revered Buddhist
        pilgrimage destinations. According to legend, the tooth was snatched
        from the cremation pyre of Buddha in 543 BC and smuggled into Sri Lanka
        in the 4th century AD while being concealed in a princess's hair.<br /></p>
    </div>
    <div class="column2">
      <h3>KATARAGAMA</h3>
      <img id="boximg" src="Images/Kataragama.webp" alt="Kataragama">
        <p>A well-liked center of worship for the native Vedda people of Sri Lanka
        and South India as well as for Buddhists, Muslims, Hindus, and
        Buddhists. The primary deity is the god Muruga.There is evidence of human occupancy 
        in the Kataragama area dating back at least 125,000 years. Additionally, 
        Mesolithic and Neolithic habitations have been documented.<br /></p>
    </div>
  </div>

   <Footer></Footer>
  </div>
  </div>
</template>
<script>
import Footer from '@/components/FooterComp.vue'

export default {
name: 'PilgrimView',
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