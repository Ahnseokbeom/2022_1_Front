<template>
        <div id="app">
            <h1>test1</h1>
            <div>
                <input type="text" v-model="value1"/>
            </div>
            <div>
                <input type="text" v-model="value2"/>
            </div>
            <button type="button" v-on:click="multiply">곱하기</button>
            <button type="button" v-on:click="divide">나누기</button>
            <hr/>  
            <div class="result">
                {{ result }}
            </div>
        </div>
</template>
<script>
 export default {
        name: 'TEST1',
data() {
                    return {
                        value1: 0,
                        value2: 0,
                        result : 0
                    };
                },
                methods : {
                    multiply(){
                        this.result = this.value1 * this.value2; 
                        return this.result
                    },
                    divide(){
                        this.result = this.value1 / this.value2;
                        return this.result
                    }
                }
            };
</script>
        <style scoped = "scoped">
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
            div.result {
                font-size: 16pt;
            }
            button { padding: 0.4em 3em; margin-right: 5px; margin-bottom: 5px;}
        </style>