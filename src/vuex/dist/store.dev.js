"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

var store = new _vuex["default"].Store({
  state: {
    products: [],
    cart: []
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: function SET_PRODUCTS_TO_STATE(state, products) {
      state.products = products;
    },
    SET_CART: function SET_CART(state, productM) {
      if (state.cart.lenght) {
        console.log(isProductExists);
        var isProductExists = false;
        state.cart.map(function (item) {
          if (item.article === product.article) {
            isProductExists = true;
            item.quantity++;
          }
        });

        if (!isProductExists) {
          state.cart.push(product);
        }
      } else {
        state.cart.push(product);
      }
    },
    REMOVE_FROM_CART: function REMOVE_FROM_CART(state, index) {
      state.cart.splice(index, 1);
    }
  },
  actions: {
    GET_PRODUCTS_FROM_API: function GET_PRODUCTS_FROM_API(_ref) {
      var commit = _ref.commit;
      return (0, _axios["default"])('http://localhost:3000/products', {
        method: "GET"
      }).then(function (products) {
        commit('SET_PRODUCTS_TO_STATE', products.data);
        return products;
      })["catch"](function (error) {
        console.log(error);
        return error;
      });
    },
    ADD_TO_CART: function ADD_TO_CART(_ref2, product) {
      var commit = _ref2.commit;
      commit('SET_CART', product);
    },
    DELETE_FROM_CART: function DELETE_FROM_CART(_ref3, index) {
      var commit = _ref3.commit;
      commit('REMOVE_FROM_CART', index);
    }
  },
  getters: {
    PRODUCTS: function PRODUCTS(state) {
      return state.products;
    },
    CART: function CART(state) {
      return state.cart;
    }
  }
});
var _default = store;
exports["default"] = _default;