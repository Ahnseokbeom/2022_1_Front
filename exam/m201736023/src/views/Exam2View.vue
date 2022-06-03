<template>
  <div>
    <h1>Exam2</h1>
    <input type="text" v-model.number="a" /> <br/>
    <input type="text" v-model.number="b" />
    <Exam2Child v-bind:a="a" v-bind:b="b" />
  </div>
</template>

<script>
import Exam2Child from '../components/Exam2Child.vue'

export default {
  name: 'Exam1View',
  data() {
    return {
      a: 3,
      b: 4
    };
  },
  components: { Exam2Child }
}
</script>

<style scoped>
  div { text-align: center; }
  input { padding: 5px; margin-bottom: 5px; }  
</style>
