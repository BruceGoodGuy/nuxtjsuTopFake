<template>
  <div class="row mx-auto">
    <DealFilter />
    <div class="col-md-9 col-12">
      <Banner :image="banner" />
      <ListFood :deals="deals" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default ({
    computed: {
        ...mapState({
            categories: state => state.categories.cat,
            banner: state => state.categories.banner,
            deals: state => state.deals.deals
        }) 
    },
     async fetch() {
       await Promise.all([this.$store.dispatch('categories/fetchCategory'), this.$store.dispatch('deals/fetchDeals')]);
     }
    // beforeCreate: function(){
    //   Promise.all([this.$store.dispatch('categories/fetchCategory'), this.$store.dispatch('deals/fetchDeals')]);

    // }
})
</script>