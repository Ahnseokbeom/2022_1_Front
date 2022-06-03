<template>
  <div>
    <input type="text" v-model.number="a" /> <br/>
    <input type="text" v-model.number="b" /> <br/>
    <button type="button" v-on:click="onClick">Ok</button>
  </div>
</template>

<script>
export default {
  name: 'Exam4Child',
  data() {
    return {
      a: 3,
      b: 4
    };
  },
  methods: {
    onClick() {
      this.$emit('send', this.a, this.b);
    }
  }
}
</script>

<style scoped>
  div { text-align: center; padding: 10px; background-color: #dfd; }
  input { padding: 5px; margin-bottom: 5px; }  
  button { padding: 0.3em 2em; }
</style>
