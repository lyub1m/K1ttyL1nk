<template>
    <div class="v-cart">
        <router-link :to="{ name: 'catalog' }">
      <div class="v-catalog_link_to_cart">Back to catalog</div>
         </router-link>
        <p>Cart</p>
        <p v-if="!cart_data.lengt">Cart is empty...</p>
        <vCartItem 
        v-for="(item, index) in cart_data"
        :key="item.article"
        :cart_item_data= "item"
        @deleteFromCart="deleteFromCart(index)"
        />
    </div>
</template>

<script>

import vCartItem from './v-cart-item'
import {mapActions} from 'vuex'

export default{
    name: "v-cart",
    components: {
        vCartItem,
    },
    props: {
        cart_data:{
            type: Array,
            default(){
                return []
            }
        }
    },
    data (){
        return{
        
        }
    },
    computed:{},
    methods: {
        ...mapActions([
            'DELETE_FROM_CART'
        ]),
        deleteFromCart(index){
            this.DELETE_FROM_CART(index)
        }
    },
    watch:{},

}
</script>

<style>

</style>