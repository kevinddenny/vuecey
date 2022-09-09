
<template>
  <div class="relax">
    <header>
      
    </header>
    <!-- Text needs to be within the image-->
    <div>
      <img src="Images/Relaxation.jpg" alt="Relaxation" />
      <div>
        <h1><b>RELAXATION</b></h1>
      </div>
    </div>

    <div>
      <!-- Proper content needs to be thought of and added-->
      <p>
        Since the world became aware of Sri Lanka, it has continued to inspire
        and heal countless visitors to its beaches. Sri Lanka still manages to
        attract its guests, catching their imagination with sights, sounds, and
        smells. Many who set foot on the island had believed it a part of a
        divine existence. While Ayurveda and meditation continue to cure the
        bodies and minds worn out by the pressures of life, Sri Lankan food is a
        secret delight to many.
      </p>

      <p>
        Ayurveda, the indigenous medical system of the nation, has evolved over
        more than five thousand years. Up to the entrance of Western medicine in
        the 19th century, it was the only therapeutic option available in the
        region and was based on nutrition and herbs.
      </p>

      <p>
        A ideal mental state may be maintained in great part through meditation.
        Three of the Noble Eightfold Path, right mindfulness, right
        concentration, and right vision, are the core topics of Buddhist
        meditation.
      </p>

      <p>
        Shopping therapy is guaranteed to give you a temporary high, and Sri
        Lanka offers excellent opportunities to indulge in it. You can choose
        from dazzling jewels and jewelry, exquisitely carved wood, pottery and
        metal ware, porcelain, batik, spices, and tea, despite the fact that it
        won't heal your body or mind or elevate your senses to a godly realm.
      </p>

      <p>
        Since their works were shipped to several parts of the civilized globe
        over the past three thousand years, the craftsmanship of the nation's
        jewelers, weavers, woodworkers, and ivory carvers has astounded the
        world.
      </p>
    </div>

    <div>
      <!-- Here the google map feature is added with all the places-->
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from '@/components/FooterComp.vue'

export default {
name: 'RelaxationView',
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
