<template>
  <div class="beach">
     <header>
      
    </header>
    <!-- Text needs to be within the image-->
    <div class="headerImg">
      <img class="mainImg" src="Images/Beaches.jpg" alt="Beaches" >
      <div class="headerImgText">
        <h1>Beaches</h1>
      </div>
    </div>

    
          <!-- Proper content needs to be thought of and added-->
          <p class="mainP">
            With approximately 1600 kilometres of perfectly cooked palm-fringed
            coastline around the nation, Sri Lanka is the ultimate vacation spot
            for beach lovers everywhere. Sri Lanka has it everything, whether
            you like to do windsurfing, kayaking, yachting, water skiing, scuba
            diving, or just relax for the ideal tan.<br />
          </p>

          <p class="mainP">
            Beach vacations in Sri Lanka are an option all year round because to
            the two monsoon winds that bring rain to the two corners of the
            island at different times. From November to March, the north east
            breezes make the south western coast bright and the sea tranquil.
            The East Coast seas are calm due to the south-west breezes and the
            steady sunshine.<br />
          </p>

          <p class="mainP">
            The nicest beaches in the South may be found at Tangalla, Beruwala,
            Mirissa, Bentota, and Unawatuna. These beaches provide a variety of
            amenities, including trendy boutique hotels, radiant coral reefs,
            calm sandbars, and unexplored paradise spots.<br />
          </p>

          <p class="mainP">
            Though foreign tourists have long been aware of Sri Lanka's southern
            beaches, they are less familiar with its eastern shore. The Arugam
            Bay, the high church of local surfers, is the most well-known of the
            Eastern beaches. After a three decade civil war, Uppuveli beach is
            again accessible to sun worshippers as well.<br />
          </p>

          <p class="mainP">
            The Negambo lagoon is located north of Colombo in the country's
            western tip. Its beaches, which are a longtime favorite of residents
            and tourists from other countries, and its famous lagoon for lobster
            fishing Despite having a ring of sandy beaches around it, the
            Colombians prefer to spend their time in Galle Face Green, a
            half-kilometer tract between Galle Road and the Indian Ocean.<br />
          </p>
        </div>
    

    <div class="row">
      <div class="column2">
        <h3>KALKUDAH BEACH </h3>
        <img id="boximg" src="Images/Yapahuwa.webp" alt="Yapahuwa">
        <p>This Pasikuda Bay beach's mile length is ideal for swimming and wading. In contrast
         to many Sri Lankan beaches with heavy surf, this one has calm surf that is sheltered 
         by a reef. Additionally, because the water is shallow, you may walk hundreds of yards 
         out into the ocean. The beach is bordered with coconut palms and the sand is fine-grained, 
         dazzling white, and soft. There are several undeveloped beaches to find in this region, which 
         is just recently being found for the building of upscale resorts.</p>
    
        <p>Kalkudah Sands is a fantastic choice that is both inexpensive and full of facilities 
          for people looking for a quiet retreat right on the water's edge. It is situated along a 
          less traveled section of Kalkudah. 
        </p>
      </div>
      <div class="column2">
        <h3>NILVELI BEACH</h3>
        <img id="boximg" src="Images/Nilveli.jpg" alt="Niveli">
          <P>Nilaveli Beach is a long, sandy beach that is filled with fishing boats and palm 
            trees. Trincomalee is 30 minutes away by car from this location in the northeast of 
            Sri Lanka. Due to its own little reef, this tiny island boasts tranquil beaches and 
            mild waves. Despite its size, Nilaveli's beach is a favorite among both locals and visitors. 
            Along the beach are several small eateries, the most of which specialize in seafood, and there 
            are lifeguards on duty.</p>
    
            <p>Due to its importance to Tamil culture, the Trincomalee region is also a fantastic 
              place to go sightseeing. Both the language used in Sri Lanka and the ethnic group to 
              which the vast majority of its citizens belong go by the name of Tamil.
        </p>
      </div>
      <div class="column2">
        <h3>ARUGAM BAY</h3>
        <img id="boximg" src="Images/arugambay.jpg" alt="Arugam bay">
          <p>TThe strikingly gorgeous Arugam Bay has dazzling white sand and deep blue 
            sea that becomes green as you get closer to the beach. The beach is well-known 
            as an international surfing destination and comes with some of Sri Lanka's top surf breakers. 
            This reputation not only draws a lot of tourists, but it also indicates that the area is well-connected 
            and has a decent tourism infrastructure. The sloping beach has a Hawaiian-like feel to it with its dry, 
            sandy part near the ocean and rougher areas with plants and a tree line. 
        </p>
      </div>
    </div>

    <div class="row">
      <div class="column2">
        <h3>MIRISSA BEACH</h3>
        <img id="boximg" src="Images/mirissa.jpg" alt="Mirissa">
          <p>Mirissa Beach is formed like an arrow, with the point extending into the water. 
            The surf is also quiet and swimmable thanks to its natural jetty. The sea is incredibly pure, 
            and the beaches are dazzling white with smooth, fine sand. Where there are rocks or a reef, 
            the water is dark blue and is pale green where the bottom is sandy. Additionally, Mirissa is an 
            excellent location for whale viewing, which is best done in February and March.
        </p>
      </div>
      <div class="column2">
        <h3>UNAWATUNA BEACH</h3>
        <img id="boximg" src="Images/unwatuna.jpg" alt="Unawatuna">
        <p>
          The historical town of Galle, which is a fantastic city for visiting, is close to Unawatuna 
          and its beach. This was Sri Lanka's capital city when it was originally a colony of both Portugal 
          and Holland (at various points). Unawatuna, which is five kilometers outside of Galle, provides another 
          tiny piece of beach heaven.</p>
  
          <p>There is a sizable coral reef offshore in the region, which is also a popular ecotourism site. 
            Large and curved, the beach may get busy because it's one of the top beach resorts in the nation.
        </p>
      </div>
      <div class="column2">
        <h3>TANGALLE BEACH</h3>
        <img id="boximg" src="Images/tangalla.webp" alt="Tangalle">
        <p>The hues of Tangalle, which lies on the southern coast, make for stunning Instagram pictures. 
          The brilliant blue ocean and pale sand stand up sharply against the lush, dark green vegetation 
          that flanks the beach. The beach edge is bordered by a substantial grove of trees, much like many 
          other beaches in Sri Lanka. Powdery, light gold-colored sand makes up the majority of the beach's 
          upper section, which slopes sharply toward the ocean.</p><br />
      </div>
    </div>
    <Footer></Footer>
 
</template>
<script>
import Footer from '@/components/FooterComp.vue'

export default {
name: 'BeachView',
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