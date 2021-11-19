<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Calc msg="Calculator"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Calc from '@/components/CalcCompon.vue';

export default {
  name: 'Home',
  components: {
    Calc,
  },
};
</script>
