<template>
  <div>
    <div v-for="item of items" :key="item.id">{{item}}</div>

  </div>
</template>

<script>
export default {
  props: {
    items: Array,
    default: () => [],
  },

};
</script>
