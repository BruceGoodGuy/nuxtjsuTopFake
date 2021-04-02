<template>
    <div class="row mx-auto">
        <FoodItem v-for="deal in deals.data" :key="deal.id" :item="deal" />
    </div>
</template>

<script>
export default ({
    props: ["deals"]
})
</script>
