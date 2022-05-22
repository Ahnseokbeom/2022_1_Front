<template>
<div id="app">
            <h1>test2</h1>
            <table>
                <tr>
                    <td>no</td>
                    <td>title</td>
                </tr>
                <tr v-for="product in products" v-bind:key="product.no">
                    <td>{{ product.no }}</td>
                    <td>{{ product.title }}</td>
                </tr>
            </table>
            <div>
            <input type="text" v-model="p_no" /><br>
            <input type="text" v-model="p_title" /><br>
            <button type="button" v-on:click="add">추가</button>
        </div>
        </div>
</template>
<script>
    export default {
        name: 'TEST2',
       data() {
            return {
                products: [{no: 1, title : "우유"}],
                p_no : '',
                p_title : '',
                product : []
            };
        },
        methods: {
            add(){
                this.products.push({no : this.p_no, title : this.p_title});
            }
        },
    };
</script>
<style scoped="scoped">
div#app {
                padding: 30px;
                margin: 30px auto;
                width: 500px;
                border: 1px solid #ccc;
                box-shadow: 3px 3px 3px #aaa;
            }
            table {
                border-collapse: collapse;
                width: 400px;
                margin-bottom: 20px;
            }
            td {
                padding: 5px;
                border: 1px solid #aaa;
            }
            tr:nth-child(1) {
                background-color: #ddd;
            }
            input { padding: 5px; margin-right: 5px; margin-bottom: 5px;}
            button { padding: 0.3em 1em; }
            h1 {
                border-bottom: 1px solid grey;
            }
</style>