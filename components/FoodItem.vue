<template>
    <div class="col-md-4 col-sm-6 col-12 bg-white mb-3">
        <nuxt-link :to="`branh/abcxyz_12`">
            <div class="card">
                <img :src="item.image_thumbnail" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{item.title}}</h5>
                    <p class="card-text">{{item.summary}}</p>
                    <p class="card-text">Price: {{item.price}}</p>
                </div>
            </div>
        </nuxt-link>
    </div>
</template>

<script>
export default ({
    props: ["item"],
    created(){
        console.log(this.item);
    }
})
</script>