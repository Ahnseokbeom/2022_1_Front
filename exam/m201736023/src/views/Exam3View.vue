<template>
  <div>
    <h1>Exam3</h1>
    <span>
      {{ msg }}
    </span>
    <Exam3Child v-on:send="onSend" />
  </div>
</template>

<script>
import Exam3Child from './Exam3Child.vue'

export default {
  name: 'Exam3View',
  data() {
    return {
      msg: 'world'
    };
  },
  methods: {
    onSend(msg) {
      this.msg = msg;
    }
  },
  components: { Exam3Child }
}
</script>

<style scoped>
  div { text-align: center; }
  input { padding: 5px; margin-bottom: 5px; }  
</style>
