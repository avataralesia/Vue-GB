export default {
  state: {
    paymentList: [],
  },
  mutations: {
    SET_PAYMENT_LIST(state, paymentList) {
      state.paymentList = paymentList;
    },
    ADD_PAYMENT_DATA(state, payment) {
      state.paymentList.push(payment);
    },
  },
  getters: {
    // paymentList(state) {
    // return state.paymentList;
    // },
    paymentList: ({
      paymentList,
    }) => paymentList,
  },
  actions: {
    fetchData({
      commit,
    }) {
      setTimeout(() => {
        const initionsPaymentList = [];
        for (let i = 0; i < 25; i++) {
          initionsPaymentList.push({
            category: ' Education ',
            date: '20.11.21',
            price: i,
          });
        }
        commit('SET_PAYMENT_LIST', initionsPaymentList);
      });
    },
  },

};
