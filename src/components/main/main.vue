<template>
    <div class="main">
        <h2>趣味小问答</h2>

        <div class="top">
            <div class="cj">
                当前得分:{{fs}}
            </div>
            <div class="ts">
                当前答题数:{{ score+1 }}
            </div>
        </div>

        <div class="content">
            <div class="tm">
                {{ array[score].tm }}
            </div>
            <div class="xx">
                <div>
                    <input v-model="nowCheck" type="radio" value="A" />   A: {{ array[score].A }}
                </div>
                <div>
                    <input v-model="nowCheck" type="radio" value="B"  />   B: {{ array[score].B }}
                </div>
                <div>
                    <input v-model="nowCheck" type="radio" value="C"  />   C: {{ array[score].C }}
                </div>
                <div>
                    <input v-model="nowCheck" type="radio" value="D"  />    D: {{ array[score].D }}
                </div>
            </div>
        </div>
        <div class="btn">
            <button @click="handlerCheck()">提交答案</button>
        </div>

        <input type="file" @change="test">

    </div>
</template>


<script setup lang="ts">
import { Ref, ref } from 'vue'

import ti from '../../asste/connten.json'
import { read } from 'fs';

let score:Ref<number> = ref(0) // 当前题目数
let fs = ref(0) // 当前分数
let nowCheck = ref("")

function handlerCheck(){
   let results =  array.value[score.value].result;
   if(results == nowCheck.value){
    if(score.value++ == array.value.length){
        return;
    }
    nowCheck.value = ""
    fs.value+=5;
   }else{

   }
}


let array = ref(ti.conntent);


function test(e){
    let result = e.target.files;
    console.log(result)
}

</script>


<style scope>
.main{
    text-align: center;
    width: 300px;
    height: 350px;
    border: 1px solid black;
    border-radius: 10px;
    background-color: antiquewhite;
}
.top{
    display:flex;
    align-items: center;
    flex-wrap: wrap;
    width: 300px;
    height: 40px;
}
.top div{
    flex-grow: 1;
}
.content .tm{
    font-size: 25px;
    height: 40px;
    line-height: 40px;
}
.xx{
    display: flex;
    flex-wrap: wrap;
}
.xx div{
    width: 50%;
    margin: 10px 0px;
    font-size: 20px;
    text-align: left;
    padding-left: 40px;
    box-sizing: border-box;
}
.btn button{
    width: 100px;
    height: 30px;
    line-height: 30px;
    background: skyblue;
    border: none;
    margin-top: 10px;
}
</style>

