<template>
    <div>
      <TEST1 />
      <TEST2 />
      <TEST3 />
        </div>
    </template>
    <script>
import TEST1 from './TEST1.vue';
import TEST2 from './TEST2.vue';
import TEST3 from './TEST3.vue';

export default {name: 'App', components: {
    TEST1,
    TEST2,
    TEST3
}}
    </script>
    <style scoped="scoped">
        div {
            vertical-align: top;
            margin: 10px;
        }
        img {
            margin: 10px;
        }
    </style>