<template>
    <div>
        <g-button @click="onClickButton">上方弹出</g-button>
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
        name: "toast-demos-2",
        components:{
            'g-button':button
        },
        data(){
            return{
                content:`
<style>
*{
    box-sizing: border-box;
}
.gulu-toast {
    z-index: 30 !important;
}
</style>

<div>
    <g-button @click="onClickButton">上方弹出</g-button>
</div>

methods:{
    onClickButton () {
        this.$toast('很高兴认识你！', {
            closeButton: {
                text: '是的',
                callback: () => {
                    console.log('已关闭')
                }
            }
        })
    }
}
`.trim()
            }
        },
        methods:{
            onClickButton () {
                this.$toast('很高兴认识你！', {
                    closeButton: {
                        text: '是的',
                        callback: () => {
                            console.log('已关闭')
                        }
                    }
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    *{
        box-sizing: border-box;
    }
    .gulu-toast {
        z-index: 30 !important;
    }
</style>