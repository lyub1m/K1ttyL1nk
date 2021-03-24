<template>
  <div class="v-cart">
    <router-link :to="{ name: 'catalog' }">
      <div class="v-catalog_link_to_cart">Back to catalog</div>
    </router-link>
    <p>Cart</p>
    <p v-if="!cart_data.length">Cart is empty...</p>
    <vCartItem
      v-for="(item, index) in cart_data"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
    />
    <div class="v-cart_total">
      <p>Total: {{ cartTotalCost }}</p>
    </div>
  </div>
</template>

<script>
import vCartItem from "./v-cart-item";
import { mapActions } from "vuex";

export default {
  name: "v-cart",
  components: {
    vCartItem,
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    cartTotalCost() {
      let result = [];
      if (this.cart_data.length) {
        for (let item of this.cart_data) {
          result.push(item.price * item.quantity);
        }
        result = result.reduce(function (sum, el) {
          return sum + el;
        });
        return result;
      } else {
        return 0;
      }
    },
  },
  methods: {
    ...mapActions([
        "DELETE_FROM_CART",
        'INCREMENT_CART_ITEM',
        'DECREMENT_CART_ITEM'
        ]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
  },
  watch: {},
};
</script>

<style>
.v-cart {
  margin-bottom: 100px;
}
.v-cart_total {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 16px;
  display: flex;
  justify-content: center;
  background: chartreuse;
  color: black;
}

.v-cart_total_name {
  margin-right: 16px;
}
</style>