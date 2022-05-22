<template>
    <div id="app">
        <h1>test3</h1>
        <div>
            <input type="number" v-model="from"/>
        </div>
        <div>
            <input type="number" v-model="to"/>
        </div>
        <hr/>
        <div class="total">
            {{ sum }}
        </div>
    </div>
</template>
<script>
    export default {
        name: 'TEST3',
    data() {
            return {from: 1, to: 3};
        },
        computed: {
            sum() {
                let s = 0;
                for(let i = this.from;i<=this.to;i++){
                    s += i;
                }
                return s;
            }
        }
    };
</script>
<style scoped="scoped">
    div#app {
        padding: 30px;
        margin: 30px auto;
        width: 400px;
        border: 1px solid #ccc;
        box-shadow: 3px 3px 3px #aaa;
    }
    div#app div {
        margin-bottom: 20px;
    }
    label {
        display: block;
    }
    input[type=text] {
        padding: 4px;
    }
    div.total {
        font-size: 16pt;
    }
</style>