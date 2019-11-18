<template>
    <div>
        <g-tabs :selected.sync="selected">
            <g-tabs-head>
                <g-tabs-item name="1">1</g-tabs-item>
                <g-tabs-item name="2">2</g-tabs-item>
                <g-tabs-item name="3">3</g-tabs-item>
                <g-tabs-item name="3" disable>4</g-tabs-item>
                <template slot="actions">
                    <g-button>设置</g-button>
                </template>
            </g-tabs-head>
            <g-tabs-body>
                <g-tabs-pane name="1">内容1</g-tabs-pane>
                <g-tabs-pane name="2">内容2</g-tabs-pane>
                <g-tabs-pane name="3">内容3</g-tabs-pane>
            </g-tabs-body>
        </g-tabs>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
    import Tabs from '../../../src/tabs'
    import TabsHead from '../../../src/tabs-head'
    import TabsBody from '../../../src/tabs-body'
    import TabsItem from '../../../src/tabs-item'
    import TabsPane from '../../../src/tabs-pane'
    import GButton from '../../../src/button'

    export default {
        name: "tabs-demos",
        components:{
            'g-tabs':Tabs,
            'g-tabs-head':TabsHead,
            'g-tabs-item':TabsItem,
            'g-tabs-body':TabsBody,
            'g-tabs-pane':TabsPane,
            'g-button':GButton
        },
        data(){
            return{
                selected:'1',
                content:`
<g-tabs :selected.sync="selected">
    <g-tabs-head>
        <g-tabs-item name="1">1</g-tabs-item>
        <g-tabs-item name="2">2</g-tabs-item>
        <g-tabs-item name="3">3</g-tabs-item>
        <g-tabs-item name="3" disable>4</g-tabs-item>
        <template slot="actions">
            <g-button>设置</g-button>
        </template>
    </g-tabs-head>
    <g-tabs-body>
        <g-tabs-pane name="1">内容1</g-tabs-pane>
        <g-tabs-pane name="2">内容2</g-tabs-pane>
        <g-tabs-pane name="3">内容3</g-tabs-pane>
    </g-tabs-body>
</g-tabs>
`.trim()
            }

        }
    }
</script>

<style scoped lang="scss">

</style>