<template>
  <div class="heritage">
  <div class="headerImg">
      <img class="mainImg" src="Images/Heritage.jpg" alt="Heritages">
      <div class="headerImgText">
        <h1>Heritages</h1>
      </div>
    </div>

    <div>
      <!-- Proper content needs to be thought of and added-->
      <p class="mainP">
        With a 3000 year history, Sri Lanka is home to some of the world's most
        ancient cities, such as Anuradhapura, Polonnaruwa, and Digamadulla.
        These cities' once magnificent townships, palaces, temples, monasteries,
        hospitals, and theaters, all of which were intricately carved and
        modeled out of stone, have since been abandoned and forgotten amidst the
        country's towering jungles.<br />
      </p>

      <p class="mainP">
        The Kingdom of Anuradhapura is the most renowned and beautiful of all
        the ancient cities in Lanka. One of the oldest continuously inhabited
        towns in the world and Sri Lanka's third and longest-serving capital is
        also one of the most revered by Buddhists worldwide. It served as Sri
        Lanka's capital from the Fourth Century BC to the start of the eleventh
        Century and was one of South Asia's most enduring and stable hubs of
        political authority and urban activity. <br />
      </p>

      <p class="mainP">
        Some of the most cutting-edge landscaping features and some of the
        oldest paintings ever discovered in the nation may be seen at Sigiriya,
        a fortification and water park built in the fifth century AD.<br />
      </p>

      <p class="mainP">
        The Monarchy of Kandy, the final kingdom in Sri Lanka, is proof of the
        country's people's capacity to emerge from the ashes. The Kandyan
        Kingdom still has finely carved and constructed homes, palaces, and
        temples that have been preserved for about 500 years despite having been
        destroyed and decimated by the invading Portuguese more than three
        times. <br />
      </p>

      <div class="row">
        <div class="column2">
          <h3>YAPAHUWA CITADEL </h3>
          <img id="boximg" src="Images/Yapahuwa.webp" alt="Yapahuwa">
          <p>>
            The Yapahuwa citadel, one of Sri Lanka's flimsy medieval capital towns,
            is constructed on a huge granite rock that abruptly rises from the
            surrounding lowland plain. <br />
          </p>
    
          <p>
            Yapahuwa, which was the capital city in the second half of the 13th
            century, was located in Wayamba Province midway between Kurunegala and
            Anuradhapura. It functioned as a palace for King Buvanekabahu and a
            military bastion against invasions from the north. A long, steep ornate
            stairway leads to the Tooth Temple, where the Tooth Relic was carried
            from Dambadeniya in 1272 before being kidnapped to South India by the
            Pandyas in 1284. Traces of old structures and combat defenses may be
            observed around the site.<br />
          </p>
        </div>
        <div class="column2">
          <h3>TANTIRIMALEE MONASTERY</h3>
          <img id="boximg" src="Images/Tantirimalee.jpg" alt="Tantirimalee">
            <p>The ancient monastic community of Tantirimalee dates back to the time
            before Christ and is surrounded by an amazing sea of granite rock.<br />
          </p>
          <p>
            A lily-strewn tank (ancient reservoir) will soon be reached as you make
            your way across the rock surface, and if you keep going, descending down
            into the dry lowland dipterocarp forest, you will ultimately find a
            complex of caves with rock drawings dating back to the third century BC.
            The drawings, which are allegedly meant to show pre-historic life with
            humans and animals all depicted, require a "creative" mind to understand
            the significance behind them, as even the instructions indicate.
            However, to the untrained or "uncreative" eye, they mostly look like
            noughts and crosses.<br />
          </p>
        </div>
        <div class="column2">
          <h3>SIGIRIYA ROCK FORTRESS</h3>
          <img id="boximg" src="Images/sigiriya.jfif" alt="Sigiriya">
            <p>The huge rock column that rises approximately 200 meters high at the old
            rock castle known as Sigiriya Lion Rock is its most distinctive feature.
            The location was chosen as the new capital by King Kasyapa during his
            reign (477-495 AD). He painted murals on the walls and constructed a
            magnificent castle directly atop the granite column. The palace was only
            accessible by a huge carved lion's mouth. It is situated at the top of a
            granite mountain called "Lion's Rock," which towers above the forest
            from all sides and is 180 meters high. Access to the location is made
            possible via a system of galleries and staircases that emerge from the
            mouth of a massive lion made of brick and plaster. <br /></p>
        </div>
      </div>

      <div class="row">
        <div class="column2">
          <h3>SINHARAJA RAINFOREST</h3>
          <img id="boximg" src="Images/sinharaja2.jpg" alt="Sinharaja">
            <p>Sinharaja, in the southwest of Sri Lanka, is the last remaining piece of
            primary tropical rainforest in the nation. The trees make up more than
            60% of the population, and many of them are unusual. There is a lot of
            endemic wildlife in the reserve, notably birds, but there are also many
            different kinds of insects, reptiles, and uncommon amphibians, as well
            as more than half of Sri Lanka's endemic butterfly and mammal species.</p>
        </div>
        <div class="column2">
          <h3>ANCIENT CITY OF POLONNARUWA</h3>
          <img id="boximg" src="Images/polonnaruwa.jpg" alt="Polonnaruwa">
          <p>
          Following the fall of the Anuradhapura Kingdom in 993, the Polonnaruwa Kingdom 
          or Ancient City of Polonnaruwa served as Sri Lanka's second capital for three centuries, 
          from the 11th to the 13th century. It is situated in Sri Lanka's north central province. 
          In 1982, Polonnaruwa, then known as the Ancient City of Polonnaruwa, was designated as a World 
          Heritage Site by UNESCO because of its importance as an archaeological site and its advanced 
          technological capabilities.<br /></p>
        </div>
        <div class="column2">
          <h3>ANCIENT CITY OF ANURADHAPURA</h3>
          <img id="boximg" src="Images/Anuradhapura.jpg" alt="Anuradhapura">
          <p>Sanghamitta, the founder of an order of Buddhist nuns, transported a cutting 
            from the "tree of enlightenment," the Buddha's fig tree, to his sacred city in 
            the third century B.C. Following an invasion in 993, Anuradhapura, the political 
            and ecclesiastical center of Ceylon for 1,300 years, was abandoned. The magnificent 
            site, with its palaces, monasteries, and monuments, is once again accessible after 
            spending many years hidden away in thick vegetation.</p>
        </div>
      </div>
 <Footer></Footer>
  </div>
  </div>
</template>
<script>
import Footer from '@/components/FooterComp.vue'

export default {
name: 'HeritageView',
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