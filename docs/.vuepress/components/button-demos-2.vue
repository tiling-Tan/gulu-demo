<template>
    <div>
        <g-button icon="setting" @click="loading = !loading" :loading="loading">点我</g-button>
    <h4>代码</h4>
    <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
    import Button from '../../../src/button'
    export default {
        name: "button-demos-2",
        components:{
            'g-button':Button
        },
        data(){
            return{
                loading:false,
                content:`
data(){
    return{
        loading:false
    }
}
<g-button icon="setting" @click="loading = !loading" :loading="loading">点我</g-button>
`.trim()
            }
        }
    }
</script>

<style scoped lang="scss">

</style>