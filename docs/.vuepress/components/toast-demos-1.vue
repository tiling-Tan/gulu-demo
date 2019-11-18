<template>
    <div>
        <g-button @click="$toast('点击弹出提示')">上方弹出</g-button>
        <g-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</g-button>
        <g-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</g-button>
        <h4>代码</h4>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Plugin from '../../../src/plugin'
    import button from '../../../src/button'
    Vue.use(Plugin)
    export default {
        name: "toast-demos-1",
        components:{
            'g-button':button
        },
        data(){
            return{
                content:`
*{
    box-sizing: border-box;
}
.gulu-toast {
    z-index: 30 !important;
}
<g-button @click="$toast('点击弹出提示',{position:'top',autoClose:5})">上方弹出</g-button>
<g-button @click="$toast('点击弹出提示', {position:'middle',autoClose:5})">中间弹出</g-button>
<g-button @click="$toast('点击弹出提示', {position:'bottom',autoClose:5})">下方弹出</g-button>
`.trim()
            }
        }
    }
</script>

<style lang="scss">
    *{
        box-sizing: border-box;
    }
    .gulu-toast {
        z-index: 30 !important;
    }
</style>