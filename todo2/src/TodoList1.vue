<template>
    <div id="box">
        <h1>할 일</h1>
        <table>
            <tr>
                <td class="checkbox"></td>
                <td class="description">내용</td>
                <td class="date">날짜</td>
            </tr>
            <tr v-for="todo in todoList" v-bind:key="todo.id">
                <td><input type="checkbox" v-model="todo.checked"/></td>
                <td>{{ todo.description }}</td>
                <td>{{ todo.due_date }}</td>
            </tr>
        </table>
        <input type="text" v-model.trim="todo.description" placeholder="내용을 입력하세요"/>
        <input type="date" v-model="todo.due_date"/>
        <button type="button" v-on:click="addTodo" :disabled="!todo.description">할일 추가</button>
        <button type="button" v-on:click="deleteTodo" :disabled="checkedCount==0">삭제</button>
        <button type="button" v-on:click="reload">새로고침</button>
    </div>
</template>
<script>
    import axios from "axios";
    export default {
        name: "TodoList1",
        data() {
            return {todoList: [], todo: {}};
        },
        mounted() {
            this.reload();
        },
        computed: {
            checkedCount() {
                let count = 0;
                for (let i = 0; i < this.todoList.length; ++i) 
                    if (this.todoList[i].checked) 
                        ++count;
            return count;
            }
        },
        methods: {
            addTodo() {
                axios
                    .post("http://localhost:8088/todo/add", this.todo)
                    .then(() => {
                        this.reload();
                        this.todo = {};
                    })
                    .catch(error => this.onError(error));
            },
            deleteTodo() {
                if (confirm("삭제하시겠습니까?")) {
                    let idlist = [];
                    for (let i = 0; i < this.todoList.length; ++i) 
                        if (this.todoList[i].checked) 
                            idlist.push(this.todoList[i].id);
                axios
                        .delete("http://localhost:8088/todo/delete?idlist=" + idlist.join(","))
                        .then(() => this.reload())
                        .catch(error => this.onError(error));
                }
            },
            reload() {
                axios
                    .get("http://localhost:8088/todo/list")
                    .then(response => this.todoList = response.data)
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
        border-bottom: 1px solid gray;
    }
    div#box {
        padding: 30px;
        margin: 30px auto;
        width: 600px;
        border: 1px solid #ccc;
        box-shadow: 3px 3px 3px #aaa;
    }
    input[type=date],
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
        padding: 5px;
        border: 1px solid #aaa;
    }
    td.checkbox {
        width: 50px;
    }
    td.description {
        width: 300px;
    }
    td.date {
        width: 100px;
    }
</style>