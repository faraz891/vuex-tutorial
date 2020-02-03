import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        products: [
            { name: 'Anti Torque Lamels', price: 29 },
            { name: 'Chase Cam', price: 59 },
            { name: 'Power Float', price: 179 },
            { name: 'Smoke System', price: 159 },
        ]
    },
    getters: {
        saleProducts: state => {
            let saleProducts = state.products.map(product => {
                return { name: `**${product.name}**`, price: product.price / 2 }
            });
            return saleProducts
        }
    }
})