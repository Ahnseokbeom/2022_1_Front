<template>
    <div id="box">
        <h1>제품 목록</h1>
        <table>
            <tr>
                <td class="id">id</td>
                <td class="title">제품명</td>
                <td class="price">가격</td>
                <td class="quantity" style="width : 70px;">수량</td>
                <td class="sum">금액</td>
                <td class="delete" style="width :200px;"></td>
            </tr>
            <tr v-for="todo in todoList" v-bind:key="todo.id" v-on:click="edit(todo.id)">
                <td>{{ todo.id }}</td>
                <td>{{ todo.title }}</td>
                <td>{{ todo.price }}</td>
                <td>{{ todo.quantity }}</td>
                <td>{{ todo.price*todo.quantity }}</td>
                <td><button type="button" v-on:click="deleteProduct">삭제</button></td>
            </tr>
        </table>
        <input type="text" v-model.trim="todo.title" placeholder="제품명"/>
        <input type="text" v-model.number="todo.price" placeholder="가격"/>
        <input type="text" v-model.number="todo.quantity" placeholder="수량"/>
        <button type="button" v-on:click="addProduct">추가</button>
    </div>
</template>
<script> import axios from "axios";
export default {
    name: "Exam2View",
    data() {
        return {todoList: [], todo: {}};
    },
    mounted() {
        this.reload();
    },
    methods: {
        addProduct() {
            axios
                .post("http://localhost:8088/server/product/add", this.todo)
                .then(() => {
                    this.reload();
                    this.todo = {};
                })
                .catch(error => this.onError(error));
        },
        deleteProduct() {
            if (confirm("삭제하시겠습니까?")) {
                let idlist = [];
                for (let i = 0; i <this.todoList.length; ++i) 
                    if (this.todoList[i].checked) 
                        idlist.push(this.todoList[i].id);
            axios
                    .delete("http://localhost:8088/server/product/delete?idlist=" + idlist.join(","))
                    .then(() => this.reload())
                    .catch(error => this.onError(error));
            }
        },
        reload() 
        { axios.get("http://localhost:8088/server/product/list") 
        .then(response => this.todoList = response.data ) 
        .catch(error => this.onError(error)); 
        },
        onError: function (error) {
    console.log(error);
    alert(error.message);
}
    }
}
</script>
<style scoped="scoped">
    h1 {
        text-align: left;
        border-bottom: 1px solid gray;
    }
    div#box {
        padding: 30px;
        margin: 30px auto;
        width: 600px;
        border: 1px solid #ccc;
        box-shadow: 3px 3px 3px #aaa;
    }
    input[type=text] {
        height: 2.4em;
        padding: 4px;
        margin-right: 5px;
    }
    button {
        padding: 0.4em 1.5em;
        margin-right: 5px;
    }
    table {
        border-collapse: collapse;
        margin-bottom: 20px;
    }
    tr:nth-child(1) {
        background-color: #ddd;
    }
    td {
        text-align: left;
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
    width: 70px;
}
td.delete{
    widows: 500px;
}
</style>

        