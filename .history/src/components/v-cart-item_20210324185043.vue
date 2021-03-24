<template>
    <div class="v-cart-item">
        <img class="v-cart-item__image" :src="require('../assets/images/'+ cart_item_data.image)" alt="img">
        <div class="v-cart-item_info">
            <p>{{cart_item_data.name}}</p>
            <p>{{cart_item_data.price}}</p>
            <p>{{cart_item_data.article}}</p>
        </div>
        <div class="v-cart-item_quantity">
            <span>
                <span @click="incrementItem">+</span>
                {{cart_item_data.quantity}}
                <span @click="decrementItem">-</span>
            </span>
        </div>
        <button @click="deleteFromCart">Delete</button>
    
    </div>
</template>

<script>

import {mapActions} from 'vuex'

export default{
    name: "v-cart-item",
    components: {
        },
    props: {
        cart_item_data:{
            type: Object,
            default(){
                return{}
            }
        }
    },
    data (){
        return{
        
        }
    },
    computed:{},
    methods: {
        ...mapActions({
            'INCREMENT_CART_ITEM'
            'DECREMENT_CART_ITEM'
        }),
        decrementItem(){
            this.DECREMENT_CART_ITEM()
        },
        incrementItem(){
            this.INCREMENT_CART_ITEM()
        },
        deleteFromCart(){
            this.$emit('deleteFromCart')
        }
    },
    mounted() {
        this.$set(this.cart_item_data, 'quantity', 1)
    }

}
</script>

<style lang="scss">
.v-cart-item {
    display: flex;
    flex-wrap:nowrap;
    justify-content: space-between;
    align-items:center;
    box-shadow: 0 0 8px 0;
    padding: 16px;
    margin-bottom: 16px;
    &__image{
        max-width: 125px;
    }
}
</style>