<template>
  <div>
    <div v-for="(item, index) in currentElements"
     :key="index">{{item}}
    </div>
    <!----><pagination :length="items.length"
     :n="n"
     :@paginate="onPaginate" />
  </div>
</template>

<script>
 import pagination from './pagination.vue';

 export default {
    components: {
      pagination,
    },
   props: {
      items: Array,
      default: () => [],
    },
   data() {
     return {
       page: 1,
       n: 10,
     };
    },
//    methods: {
//      onPaginate(p) {
//        this.page = p;
//      },
//    },
    computed: {
     currentElements() {
       const { n, page } = this;
        return this.items.slice(n * (page - 1), n * (page - 1) + n);
     },
    },
  };
</script>
