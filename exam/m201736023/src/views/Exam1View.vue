<template>
  <div>
    <h1>Exam1</h1>
    <input type="text" v-model="value" />
    <Exam1Child v-bind:msg="value" />
  </div>
</template>

<script>
import Exam1Child from './Exam1Child.vue'

export default {
  name: 'Exam1View',
  data() {
    return {
      value: 'hello'
    };
  },
  components: { Exam1Child }
}
</script>

<style scoped>
  div { text-align: center; }
  input { padding: 5px; margin-bottom: 5px; }  
</style>
