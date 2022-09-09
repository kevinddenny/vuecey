<template>
  <div class="hotel">
    <h1>This is a hotel page</h1>
    
  </div>
</template>
<script>
const countries = require('i18n-iso-countries')
countries.registerLocale(require('i18n-iso-countries/langs/en.json'))

import Footer from '@/components/FooterComp.vue'

export default {
name: 'HotelView',

   
components: {
  Footer,
    }
}
</script>