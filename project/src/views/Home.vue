<template>
  <div>
    <header>
      <h1>My coast</h1>
    </header>
    <main>
      <NewCoast />
      <PaymentForm @add="updateList"/>
      <PaymentList :items="paymentList"/>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import PaymentList from '@/components/PaymentList.vue';
import PaymentForm from '@/components/PaymentForm.vue';
import NewCoast from '@/components/NewCoast.vue';

export default {
  name: 'Home',
  components: {
    PaymentList,
    PaymentForm,
    NewCoast,
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
          id: 1,
          date: '20.11.21',
          category: 'Education',
          price: 123,
        },
        {
          id: 2,
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
};
</script>
