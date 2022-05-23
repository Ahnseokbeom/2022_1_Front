<template>
  <div class="exam2">
    <h1>Exam2</h1>
  </div>
  <input type="number" v-model="value1"/><br />
  <input type="number" v-model="value2"/><br />
 <!-- <Exam2Child v-bind:value1 = value1 v-bind:value2=value2 v-bind:title = value1+value2 v-bind:key = "value1"></Exam2Child> -->
 <h1>{{value1 + value2}}</h1>
</template>
<script>
import Exam2Child from '../components/Exam2Child.vue'
export default {
    components : {
        Exam2Child
    },
    data(){
        return{
            value1 = 0,value2 = 0
        }
    }
}
</script>
