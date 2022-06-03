<template>
  <div>
    {{ a }} + {{ b }} = {{ a + b }}
  </div>
</template>

<script>

export default {
  name: 'Exam2Child',
  props: [ 'a', 'b' ]
}
</script>

<style scoped>
  div { 
    font-size: 18pt; padding: 5px; 
    text-align: center; 
    background-color: #dfd;
  }
</style>
