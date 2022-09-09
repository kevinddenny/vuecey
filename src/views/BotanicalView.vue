<template>
  <div class="botanical">
      <div class="headerImg">
      <img class="mainImg" src="Images/Botanical.jpg" alt="Botanical" width="100%">
      <div class="headerImgText">
        <h1>Botanical</h1>
      </div>
    </div>

    <div>
      <p class="mainP">
        <!-- Proper content needs to be thought of and added-->
        Within less than 200 km on this relatively small island, one can travel
        through ten or twelve distinct vegetation patterns, each of which offers
        an abundance of various fruits, including bananas in various varieties,
        coconuts, cashew nuts, mangoes of various shapes, sizes, and colors,
        guavas, pawpaws, litchis, delicate mangosteens, and breadfruit, which
        tastes better than it smells. <br />
      </p>

      <p class="mainP">
        Huge tea plantations cover some areas of the island, while the forest,
        which is home to many large trees, provides materials like iron wood
        trees (Mesua ferrea), banyans with their ramified trunks, and the
        attractive breadfruit tree with its pumpkin-sized fruit, which when ripe
        smells like a well-aged cheese. Only a small portion of southern Sri
        Lanka's river banks and the area surrounding Ratnapura include lush
        tropical woods.<br />
      </p>

      <div class="row">
        <div class="column3">
          <h3>HAKKGALA BOTANICAL GARDENS</h3>
          <img id="boximg" src="Images/Hakkgala.jpg" alt="Hakkgala">
            <p>The second-largest botanical garden in Sri Lanka is the Hakgala
            Botanical Garden. It was founded in 1861 and is a component of the
            Hakgala Strict Nature Reserve. The entire garden is separated into many
            areas that are specifically devoted to different plant species, such as
            ferns, cactus, orchids, etc. It also features a vast range of unusual
            animal species. The distance from the city of Nuwara Eliya is around 5
            kilometers, and it is located on the Badulla Highway. <br /></p>
        </div>
        <div class="column3">
          <h3>ROYAL BOTANICAL GARDENS</h3>
          <img id="boximg" src="Images/Royal.jpg" alt="Royal gardens">
            <p>The Royal Botanical Gardens are the most well-known gardens in Sri Lanka
            and are located 5 km west of Kandy. Tall trees, peaceful breezes,
            colorful orchids, and close proximity to the Mahaweli River provide for
            a stunning "flora and aqua" visual delight. The gardens are home to more
            than 4000 species of plants, including orchids, spices, medicinal plants
            and palm trees. It is a photographer's paradise with its 147 acres of
            natural elegance, landscaped gardens, and scenic beauty.<br /></p>
        </div>
        <div class="column3">
          <h3>SEETHAWAKA BOTANICAL GARDENS</h3>
          <img id="boximg" src="Images/Seethawaka.jpg" alt="Seethawaka gardens">
            <p>This location doubles as a research and conservation center because to
            its extensive collection of rare flora. The 106-acre garden is located
            near the Indikada Mukalana Forest Reserve on the Puwakpitiya-Thummodara
            Road in Illukowita. The Seethawaka Wet Zone Botanic Gardens also include
            a creek that runs through the garden, supplying irrigation water for the
            wet zone plants. <br /></p>
        </div>
      </div>

      <div class="row">
        <div class="column3">
          <h3>MATTEGODA HERBAL PLANT RESERVE</h3>
          <img id="boximg" src="Images/OsuUyana.jpg" alt="Osu Uyana">
          <p>The Mattegoda Herbal Plant Reserve has approximately 350 species and is 
          completely developed. It was constructed to display rare medicinal plants 
          and to advance education about indigenous plants, the value of biodiversity, 
          and the preservation of medicinal plants.It is a location where therapeutic 
          herbs are freely available.  <br></p>
        </div>
        <div class="column3">
          <h3>SINHARAJA RAINFOREST</h3>
          <img id="boximg" src="Images/Sinharaja1.jpg" alt="Sinharaja">
            <p>Sinharaja, in the southwest of Sri Lanka, is the last remaining piece of
            primary tropical rainforest in the nation. The trees make up more than
            60% of the population, and many of them are unusual. There is a lot of
            endemic wildlife in the reserve, notably birds, but there are also many
            different kinds of insects, reptiles, and uncommon amphibians, as well
            as more than half of Sri Lanka's endemic butterfly and mammal species.</p>
        </div>
        <div class="column3">
          <h3>MIRIJJAWILA BOTANICAL GARDEN</h3>
          <img id="boximg" src="Images/Mirijjawila.jpg" alt=" MirijjawilaBotanicalGardens">
         
          <p>The Mirijjawila Botanical Garden, the country's second-largest, 
          was founded after Sri Lanka gained its independence.
          It has a nice assortment of rare and exotic plants and flowers. 
          They worked really hard to create such stunning vistas in arid areas.
          On the major Colombo-Kataragama route is where you'll find the Mirijjawila 
          Botanical Garden.</p> 
        </div>
      </div>
<Footer></Footer>
  </div>
  </div>
</template>
<script>
import Footer from '@/components/FooterComp.vue'

export default {
name: 'BotanicalView',
components: {
  Footer,
    }
}
</script>
