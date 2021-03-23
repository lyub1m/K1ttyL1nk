<template>
    <div class="main-wrapper">
        <p>{{title}}</p>
        <vCatalog />
    </div>
</template>

<script>

import vCatalog from "./v-catalog"
 

export default{
    name: "v-main-wrapper",
    components: {
        vCatalog,
        },
    props: {},
    data (){
        return{
            title: "KittyLink"
        }
    },
    computed:{},
    methods: {},
    watch:{},

}
</script>

<style>
.v-main-wrapper {
    max-width: 600px;
    margin: 0 auto;
}
</style>