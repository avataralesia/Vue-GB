<template>
  <div>
    <header>
      <h1>My coast</h1>
    </header>
    <main>
      <PaymentForm @add="updateList"
       :categoryList="categoryList"
       />
      <PaymentList :items="paymentList"/>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters, mapMutations } from 'vuex';
import PaymentList from '@/components/PaymentList.vue';
import PaymentForm from '@/components/PaymentForm.vue';

export default {
  name: 'Home',
  components: {
    PaymentList,
    PaymentForm,
  },
  methods: {
    updateList(payment) {
      this.ADD_PAYMENT_DATA(payment);
    },
    ...mapActions([
      'fetchData',
      'fetchCategoryList',
    ]),
    ...mapMutations([
      'ADD_PAYMENT_DATA',
    ]),
  },
  computed: {
    ...mapGetters([
      'paymentList',
      'categoryList',
    ]),
  },
  created() {
    this.fetchData();
    this.fetchCategoryList();
    //  this.$store.dispatch('fetchData');
  },
  destroyed() {

  },
};
</script>
