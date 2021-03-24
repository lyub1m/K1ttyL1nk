<template>
    <div class="main-wrapper">
        <router-view></router-view>
        <!-- <vCatalog /> 
        <vCart 
            v-if="CART.length"
            :cart_data="CART"
        />
        -->
        
    </div>
</template>

<script>

// import vCatalog from "./v-catalog"
// import vCart from "./v-cart"
import {mapGetters} from 'vuex'

export default{
    name: "v-main-wrapper",
    // components: {
    //     vCatalog,
    //     vCart
    //     },
    props: {},
    data (){
        return{
            title: "KittyLink"
        }
    },
    computed:{
        ...mapGetters([
            'CART'
        ])
    },
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