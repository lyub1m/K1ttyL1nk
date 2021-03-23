<template>
    <div class="v-catalog">
        <vCatalogItem 
        v-for="product in this.PRODUCTS"
        :key="product.article" 
        :product_data="product"
        @sendArticle="showChildArticle"
         />
        
    </div>
</template>

<script>

import vCatalogItem from "./v-catolog-item"
import {mapActions, mapGetters} from 'vuex'

export default{
    name: "v-catalog",
    components: {
        vCatalogItem
    },
    props: {},
    data (){
        return{
    }
    },
    computed:{
        ...mapGetters([
            'PRODUCTS'
        ]),
    },
    methods: {
      ...mapActions([
        'GET_PRODUCTS_FROM_API'
      ]),
        showChildArticleInConsole(data){
            console.log(data)
        }
    },
    mounted(){
      this.GET_PRODUCTS_FROM_API()
    },
    watch:{},

}
</script>

<style lang="scss">
 .v-catalog{
     display: flex;
     flex-wrap: wrap;
     justify-content: space-between;
     align-items:center;
 }
</style>