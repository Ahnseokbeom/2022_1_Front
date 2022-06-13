<template>
    <div id="box">
        <h1>제품
            {{ todo.id ? '수정' : '등록' }}</h1>
        <input type="text" v-model.trim="todo.title" placeholder="제품명을 입력하세요"/>
        <input type="text" v-model.number="todo.price" placeholder="가격을 입력하세요"/>
        <input type="text" v-model.number="todo.quantity" placeholder="수량을 입력하세요"/>
        {{todo.price}} * {{todo.quantity}} = {{todo.price*todo.quantity}}
        <div>
            <button type="button" @click="save" :disabled="!todo.title">저장</button>
            <button type="button" @click="remove">삭제</button>
            <button type="button" @click="cancel">취소</button>
            
        </div>
    </div>
</template>
<script>
    import axios from "axios";
    export default {
        name: "TodoView",
        data() {
            return {todo: {}};
        },
        mounted() {
            if (this.$route.params.id) {
                axios
                    .get("http://localhost:8088/server/product/" + this.$route.params.id)
                    .then(response => this.todo = response.data)
                    .catch(error => this.onError(error));
            } else 
                this.todo = {}
            },
        methods: {
            save() {
                if (this.todo.id) 
                    axios
                        .put("http://localhost:8088/server/product/update", this.todo)
                        .then(() => this.$router.push('exam1'))
                        .catch(error => this.onError(error));
                else 
                    axios
                        .post("http://localhost:8088/server/product/add", this.todo)
                        .then(() => this.$router.push('exam1'))
                        .catch(error => this.onError(error));
                }
            ,
            remove() {
                if(confirm("삭제하시겠습니까?"))
                axios
                    .delete("http://localhost:8088/server/product/delete?idlist=" + this.todo.id)
                    .then(() => this.$router.push('exam1'))
                    .catch(error => this.onError(error));
            },
            cancel() {
                this
                    .$router
                    .push('exam1');
            },
            onError: function (error) {
                console.log(error);
                alert(error.message);
            }
        }
    }
</script>
<style scoped>
h1 { border-bottom: 1px solid gray; }
div#box {
    padding: 30px;
    margin: 30px auto;
    width: 600px;
    border: 1px solid #ccc;
    box-shadow: 3px 3px 3px #aaa;
    text-align: left;
}
input[type=date],
input[type=text] {
    padding: 6px;
    font-size: 12pt;
}
input[type=text] {
    width: 100%;
    margin-bottom: 10px;
}
button {
    padding: 0.3em 1.3em;
    margin-left: 5px;
    font-size: 11pt;
}
</style>