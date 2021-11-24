<template>
  <div class="form">
    <input placeholder="id" type="number" v-model.number="id">
    <input placeholder="date" type="text" v-model="date">
    <input placeholder="category" type="text" v-model="category">
    <input placeholder="price" type="number" v-model.number="price">
    <button @click="save">Save</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: '',
      date: '',
      category: '',
      price: 0,
    };
  },
  methods: {
    save() {
      const {
        id, date, category, price,
      } = this;
      this.$emit('add', {
        id, date, category, price,
      });
    },
  },
};
</script>
<style>
.form {
  margin: 10px;
}
li {
list-style-type: none;
}
</style>
