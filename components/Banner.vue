<template>
<div class="row mx-auto mb-3 mt-3 mt-md-0">
    <div class="col-12 text-center">
        <img :src="item.image" class="img-fluid" v-for="item in image" :key="item.image">
    </div>
</div>
</template>
<script>
export default ({
    props: ["image"]
})
</script>
