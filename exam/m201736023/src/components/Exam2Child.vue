<template>
  <div class="id">
      <h1>{{value1}}+{{value2}} = {{title}}</h1>
  </div>
</template>
<script>
export default {
    name : 'Exam1Child',
    props : {value1 : Number,
    value2 : Number, title : Number},
    data() {
            return {
                pvalue: this.value
        }
        },
        //     methods: {
        //     myChange($event) {
        //         this.$emit('input', $event.target.value);
        //     },
        // },
}
</script>
<style scoped>
 div{
     background-color: greenyellow;
 }
</style>
