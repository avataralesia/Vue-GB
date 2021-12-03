<template>
  <div>
    <button @click="clicked=!clicked">Add New Coast +</button>
    <div class="form" v-show="clicked">
        <input placeholder="date" type="text" v-model="date">
        <select v-model="category">
          <option value="category"
          v-for="category of categoryList"
          :key="category"
         >{{ category }}</option>
        </select>
        <input placeholder="price" type="number" v-model.number="price">
      <button @click="save" :disabled="category === '' || price === ''">ADD +</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categoryList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      date: '',
      category: '',
      price: '',
      clicked: false,
    };
  },
  methods: {
    save() {
      const { date, category, price } = this;
      const data = {
        date: date || this.newDate,
        category,
        price,
      };
      this.$emit('add', data);
    },
  },
  computed: {
    newDate() {
      const currentDate = new Date();
      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();
      console.log(currentDate);
      return `${day}.${month}.${year}`;
    },
  },
};
</script>
<style model>
.form {
  margin: 10px;
}
li {
list-style-type: none;
}
</style>
