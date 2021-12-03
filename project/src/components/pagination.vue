<template>
  <div :class="[$style.pagin]">
    <div v-for="i in amount"
     :key="i"
     @click="onClick(i)"
     >{{i}}</div>
  </div>
</template>

<script>
export default {
  props: {
    length: Number,
    n: Number,
  },
  methods: {
    onClick(p) {
      this.$emit('paginate', p);
    },
  },
  computed: {
    amount() {
      return Math.ceil(this.length / this.n);
    },
  },
};
</script>

<style module>
.pagin {
  display: flex;
  justify-content: center;
}
div {
  padding: 10px;
}
</style>
