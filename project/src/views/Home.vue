<template>
  <div>
    <header>
      <h1>My coast</h1>
    </header>
    <main>
      <PaymentForm @add="updateList" />
      <PaymentList :items="paymentList"/>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import PaymentList from '@/components/PaymentList.vue';
import PaymentForm from '@/components/PaymentForm.vue';

export default {
  name: 'Home',
  components: {
    PaymentList,
    PaymentForm,
  },
  data() {
    return {
      paymentList: [],
    };
  },
  methods: {
    fetchData() {
      return [
        {
          date: '20.11.21',
          category: 'Education',
          price: 123,
        },
        {
          date: '20.11.21',
          category: 'Education',
          price: 123,
        },
      ];
    },
    updateList(data) {
      this.paymentList.push(data);
    },
  },
  created() {
    this.paymentList = this.fetchData();
  },
  destroyed() {
  },
};
</script>
