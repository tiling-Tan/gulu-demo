<template>
    <div>
        <div>
            <g-collapse :selected.sync="selected">
                <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
                <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
                <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
            </g-collapse>
        </div>
        <h4>代码</h4>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
    import Collapse from '../../../src/collapse'
    import CollapseItem from '../../../src/collapse-item'
    export default {
        name: "collapse-demos-2.vue",
        components:{
            'g-collapse':Collapse,
            'g-collapse-item':CollapseItem
        },
        data(){
            return{
                selected: ['1', '2'],
                content:`
data () {
    return{ selected:['1','2'] }
    }
<g-collapse :selected.sync="selected">
    <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
    <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
    <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
</g-collapse>
`.trim()
            }
        }
    }
</script>

<style scoped lang="scss">

</style>