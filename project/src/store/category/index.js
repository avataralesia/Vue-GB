export default {
  state: {
    categoryList: [],
  },
  mutations: {
    SET_CATEGORY_LIST(state, categoryList) {
      state.categoryList = categoryList;
    },
  },
  getters: {
    categoryList: ({
      categoryList,
    }) => categoryList,
  },
  actions: {
    fetchCategoryList({
      commit,
    }) {
      setTimeout(() => {
        const categoryList = ['Foods', 'Education', 'Transport'];
        commit('SET_CATEGORY_LIST', categoryList);
      });
    },
  }
}
