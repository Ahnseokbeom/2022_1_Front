<template>
  <div>
    <input type="text" v-model="value" /> <br/>
    <button type="button" v-on:click="onClick">Ok</button>
  </div>
</template>

<script>
export default {
  name: 'Exam3Child',
  data() {
    return {
      value: ''
    };
  },
  methods: {
    onClick() {
      this.$emit('send', this.value);
      this.value = '';
    }
  }
}
</script>

<style scoped>
  div { text-align: center; padding: 10px; background-color: #dfd; }
  input { padding: 5px; margin-bottom: 5px; }  
  button { padding: 0.3em 2em; }
</style>
