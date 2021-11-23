<template>
  <div class="hello">
      <div class="block">
        <input type="number" v-model.number="oper1">
        <input type="number" v-model.number="oper2">={{res}}
      </div><br>

        <label for="checkbox">
          <input type="checkbox" id="checkbox" @click="showNum=!showNum" v-model="checked">
          Отобразить клавиатуру
        </label>

      <div v-show="showNum">
        <button class="btn-num"
         v-for="number of numbers"
          :key="number"
          @click="clickOperand(number)">{{number}}</button>
        <button @click="deleteNum()">E</button>
      </div><br>

      <button class="btn-oper"
       v-for="operand of operands"
       :key="operand" @click="calc(operand)"
        :disabled="oper1 === '' || oper2 === '' ">{{operand}}
      </button><br>

        <label for="one">
          <input type="radio" id="one" value="1" v-model="picked">
           Первый операнд
        </label>
        <label for="two">
          <input type="radio" id="two" value="2" v-model="picked"
          >Второй операнд
        </label><br>

  </div>
</template>

<script>
export default {
  name: 'Calc',
  data() {
    return {
      oper1: '',
      oper2: '',
      res: 0,
      operands: ['+', '-', '*', '/', 'pow'],
      er: 'Деление на ноль недопустимо',
      checked: false,
      picked: '',
      showNum: false,
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    };
  },
  methods: {
    clickOperand(number) {
      const { picked } = this;
      const input = picked === '1' ? 'oper1' : 'oper2';
      this[input] = +(this[input] += String(number));
    },
    deleteNum() {
      const { picked } = this;
      const input = picked === '1' ? 'oper1' : 'oper2';
      this[input] = +String(this[input]).slice(0, -1);
      console.log(this[input]);
    },
    calc(operand) {
      const { oper1, oper2 } = this;

      if (operand === '+') {
        this.res = oper1 + oper2;
      }

      if (operand === '-') {
        this.res = oper1 - oper2;
      }

      if (operand === '*') {
        this.res = oper1 * oper2;
      }

      if (operand === '/') {
        if (oper2 === 0) this.res = this.er;
        else this.res = oper1 / oper2;
      }

      if (operand === 'pow') {
        if (oper2 === 0) this.res = 1;
        else this.res = oper1 ** oper2;
      }
    },
  },
};

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
