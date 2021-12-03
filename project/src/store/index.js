import Vue from 'vue';
import Vuex from 'vuex';
import category from './category';
import paymentList from './paymentList';

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    category,
    paymentList,
  },
});
