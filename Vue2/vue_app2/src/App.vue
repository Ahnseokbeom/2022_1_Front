<template>
    <div>
        <img alt="Vue logo" src="./assets/logo.png">
            <MyCheckbox3/>
            <MyButton1/>
            <MySlect3/>
        </div>
    </template>
    <script>
import MyCheckbox3 from './MyCheckbox3.vue'
import MyButton1 from './MyButton1.vue'
import MySlect3 from './MySlect3.vue' 

export default {name: 'App', components: {
    MyCheckbox3,
    MyButton1,
    MySlect3
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