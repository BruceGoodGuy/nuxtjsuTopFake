<template>
<div class="row mx-auto">
  <div class="col-12">
    <h3>DEAL nè</h3>
    <img src="https://via.placeholder.com/500x300" class="img-fluid">
    <div class="row mx-auto">
      <div class="col-12">
        Nội dung ở đây nè
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default ({
  created () {
    // this.branch = this.$route.params.branch;
    // this.id = this.$route.params.path.split('_')[1]??0;
    // console.log(this.$route.params.path.split('_'))
  },
  head(){
    return {
      title: `Utop - Deal chi tiết `
    }
  },
  async fetch() {
      await Promise.all([this.$store.dispatch('categories/fetchCategory'), this.$store.dispatch('deals/fetchDeals')]);
    }
})
</script>
