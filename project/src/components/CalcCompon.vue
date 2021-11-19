<template>
  <div class="hello">
      <div class="block">
        <input type="number" v-model.number="oper1">
        <input type="number" v-model.number="oper2">={{res}}
      </div><br>

        <input type="checkbox" id="checkbox" @click="showNum=!showNum" v-model="checked">
        <label for="checkbox">Отобразить клавиатуру</label>

      <div v-show="showNum">
        <button class="btn-num" v-for="number of numbers" :key="number">{{number}}</button>
      </div><br>

      <button class="btn-oper" v-for="operand of operands" :key="operand" @click="calc(operand)" :disabled="oper1 === '' || oper2 === '' ">{{operand}}</button><br>

        <input type="radio" id="one" value="Один" v-model="picked">
        <label for="one">Первый операнд</label>
        <input type="radio" id="two" value="Два" v-model="picked">
        <label for="two">Второй операнд</label><br>

  </div>
</template>

<script>
export default {
  name: 'Calc',
  data() {
    return {
      oper1:'',
      oper2:'',
      res:0,
      operands:['+','-','*','/','pow'],
      er: 'Деление на ноль недопустимо',
      checked:false,
      picked:false,
      showNum:false,
      numbers:[1,2,3,4,5,6,7,8,9,0],
    }
  },
  methods: {
    calc(operand){
      const {oper1,oper2}=this;

      if(operand=='+')
      {this.res = oper1 + oper2}

      if(operand=='-')
      {this.res = oper1 - oper2}

      if(operand=='*')
      {this.res = oper1 * oper2}

      if(operand=='/')
      {if(oper2==0)
      this.res =this.er
      else
      this.res = oper1 / oper2}

      if(operand=='pow')
      {if(oper2==0)
      this.res = 1
      else
      this.res = Math.pow(oper1,oper2)}
    },
  }
  }

</script>

<style scoped>
.block {
  margin: 40px 0 0;
}
.btn-num {
  margin-top: 10px;
}
.btn-oper {
  margin: 10px 0px;

}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
