<template>
  <div>
    <h1>Exam4</h1>
    <span>
    {{ a }} * {{ b }} = {{ a * b }}
    </span>
    <Exam4Child v-on:send="onSend" />
  </div>
</template>

<script>
import Exam4Child from '../components/Exam4Child.vue'

export default {
  name: 'Exam3View',
  data() {
    return {
      a: 3,
      b: 4
    };
  },
  methods: {
    onSend(a, b) {
      this.a = a;
      this.b = b;
    }
  },
  components: { Exam4Child }
}
</script>

<style scoped>
  div { text-align: center; }
  input { padding: 5px; margin-bottom: 5px; }  
</style>
