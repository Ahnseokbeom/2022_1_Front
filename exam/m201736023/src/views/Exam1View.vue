<template>
  <div class="exam1">
    <h1>Exam1</h1>
  </div>
  <input type="text" v-model="value"/><br />
  <Exam1Child v-bind:title = value></Exam1Child>
</template>
<script>
import Exam1Child from '../components/Exam1Child.vue'
export default {
    components : {
        Exam1Child
    },
    data(){
        return {
            value : ""
        }
    }
}
</script>
