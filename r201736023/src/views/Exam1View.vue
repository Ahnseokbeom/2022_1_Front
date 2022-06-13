<template>
    <div id="box">
        <h1>제품 목록</h1>
        <table>
            <tr>
                <td class="id">id</td>
                <td class="title">제품명</td>
                <td class="price">가격</td>
                <td class="quantity" style="width : 70px;">수량</td>
                <td class="sum" style = "width : 70px;">금액</td>
            </tr>
            <tr v-for="todo in todoList" v-bind:key="todo.id" v-on:click="edit(todo.id)">
                <td>{{ todo.id }}</td>
                <td>{{ todo.title }}</td>
                <td>{{ todo.price }}</td>
                <td>{{ todo.quantity }}</td>
                <td>{{ todo.price*todo.quantity }}</td>
            </tr>
        </table>
        <button type="button" v-on:click="add">등록</button>
        <button type="button" v-on:click="reload">새로고침</button>
    </div>
</template>
<script>
    import axios from "axios";
    export default {
        name: "Exam1View",
        data() {
            return {todoList: []};
        },
        mounted() {
            this.reload();
        },
        methods: {
            reload() {
                axios
                    .get("http://localhost:8088/server/product/list")
                    .then(response => this.todoList = response.data)
                    .catch(error => this.onError(error));
            },
            add() {
                this
                    .$router
                    .push("product");
            },
            edit(id) {
                this
                    .$router
                    .push({
                        name: "product",params: {id: id}});},
            onError: function (error) {
                console.log(error);
                alert(error.message);
            }
        }
    }
</script>
<style scoped>
div#box {
    padding: 30px;
    margin: 30px auto;
    width: 600px;
    border: 1px solid #ccc;
    box-shadow: 3px 3px 3px #aaa;
    text-align: left;
}
h1 {
    border-bottom: 1px solid gray;
}
button {
    padding: 0.4em 1.4em;
    margin-right: 5px;
    font-size: 11pt;
}
table {
    border-collapse: collapse;
    margin-bottom: 20px;
}
tr:nth-child(1) {
    background-color: #ddd;
}
td {
    padding: 5px;
    border: 1px solid #aaa;
}
td.id {
    width: 40px;
}
td.title {
    width: 70px;
}
td.price {
    width: 70px;
}
td.quantity{
    widows: 70px;
}
td.sum {
    width: 0px;
}
tr:not(:nth-child(1)):hover {
    background-color: #ffa;
    cursor: pointer;
}
</style>