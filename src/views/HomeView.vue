<template>
  <div class="home">
        <Navigation></Navigation>
      <div class="headerImg">
      <img
        class="homeImg"
        src="Images/HomePage.jpg"
        alt="HomePage"
        width="100%"
      />
      <div class="headerImgText">
        <h1 class="imgh1">Ayubowan!</h1>
        <h2 class="imgh2">Come See Lanka...</h2>
      </div>
    </div>

    <h1 id="mainHeader">An island escape awaits you</h1>
    <!--flex boxes needed here three rows three coloumns-->
    <div class="rows">
      <div class="columns">
        <img src="Images/WildLife.jpg" alt="Wildlife" />
        <router-link id="gridLink" to="/wild">WILDLIFE</router-link>
      </div>
      <div class="columns">
        <img src="Images/Beaches.jpg" alt="Beaches" />
        <router-link id="gridLink" to="/beach">BEACHES</router-link>
      </div>
      <div class="columns">
        <img src="Images/Heritages.jpg" alt="Heritages" />
        <router-link id="gridLink" to="/heritage">HERITAGES</router-link>
      </div>
      <div class="columns">
        <img src="Images/Pilgrimage.jpg" alt="Pilgrimage" />
        <router-link id="gridLink" to="/pilgrim">PILGRIMAGE</router-link>
      </div>
    </div>
    <div class="rows">
      <div class="columns">
        <img src="Images/Scenic.jpg" alt="Scenic" />
        <router-link id="gridLink" to="/scenic">SCENIC</router-link>
      </div>
      <div class="columns">
        <img src="Images/Adventure.jpg" alt="Adventure" />
        <router-link id="gridLink" to="/adventure">ADVENTURE</router-link>
      </div>
      <div class="columns">
        <img src="Images/Cultural.jpg" alt="Cultural" />
        <router-link id="gridLink" to="/cultural">CULTURAL</router-link>
      </div>
      <div class="columns">
        <img src="Images/Botanical.jpg" alt="Botanical" />
        <router-link id="gridLink" to="/botanical">BOTANICAL</router-link>

      </div>
    </div>
     
 <Footer></Footer>
  
  </div>
</template>
<script>
import Navigation from '@/components/NavigationComp.vue'
import Footer from '@/components/FooterComp.vue'

export default {
name: 'HomeView',
components: {
  Footer,
  Navigation
    }
}
</script>

<style>
.homeImg {
  opacity: 0.8;
}
.rows {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
}

.columns {
  flex: 25%;
  max-width: 24%;
  margin: 5px;
}

.columns img {
  vertical-align: middle;
  width: 100%;
  height: 200px;
  border-radius: 5px;
}

@media screen and (max-width: 768px){
  .rows {
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px;
  }

  .columns{
    flex: 100%;
    max-width: 100%;
    margin: 5px;
  }
}

#gridLink {
  transition: 0.5s;
  opacity: 0;
  position: relative;
  bottom: 50%;
  right: inherit;
  color: black;
  font-size: xx-large;
  text-decoration: solid;
  font-weight: bolder;
}
.columns:hover img {
  opacity: 0.2
}
.columns:hover #gridLink {
  opacity: 1;
}

#mainHeader {
  text-align: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 50px;
  font-style: italic;
}

.offersImg {
position: relative;
text-align: center;
color: white;
}

.offersText {
  position: absolute;
  top: 8px;
  left: 16px;
}

.headerImg {
position: relative;
text-align: center;
color: white;
}

.headerImgText {
  position: absolute;
  top: 5%;
  right: 5%;
  color: black;
}

.imgh1 {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 100px;
  font-style: italic ;
  text-shadow: 10px;
}

.imgh2 {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 70px;
  font-style: italic ;
  text-shadow: 10px;
}

@media screen and (max-width: 1000px){
  .headerImg {
    display: none;
    }
    
    .headerImgText {
      display: none;
    }
}
  

</style>