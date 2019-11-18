<template>
    <div>
        <g-input v-model="value"></g-input>
        <div>
            value:{{value}}
        </div>
        <h4>代码</h4>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
    import Input from '../../../src/input'
    export default {
        name: "input-demos-2",
        components:{
            'g-input':Input
        },
        data(){
            return{
                content:`
data(){
    return{
        value:''
    }
}
<div>
    <g-input v-model="value"></g-input>
    <div>
        value:{{value}}
    </div>
</div>
`.trim(),
                value:'',
            }
        }
    }
</script>

<style scoped lang="scss">

</style>