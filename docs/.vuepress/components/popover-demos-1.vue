<template>
    <div>
        <g-popover>
            <g-button>上方弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>
        <g-popover position="bottom">
            <g-button>下方弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>
        <g-popover position="left">
            <g-button>左边弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>
        <g-popover position="right">
            <g-button>右边弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>
        <h4>代码</h4>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
    import Popover from '../../../src/popover'
    import button from '../../../src/button'
    export default {
        name: "popover-demos-1",
        components:{
            'g-popover':Popover,
            'g-button':button
        },
        data(){
             return{
                 content:`
<g-popover>
    <g-button>上方弹出</g-button>
    <template slot="content">
        弹出内容
    </template>
</g-popover>
<g-popover position="bottom">
    <g-button>下方弹出</g-button>
    <template slot="content">
        弹出内容
    </template>
</g-popover>
<g-popover position="left">
    <g-button>左边弹出</g-button>
    <template slot="content">
        弹出内容
    </template>
</g-popover>
<g-popover position="right">
    <g-button>右边弹出</g-button>
    <template slot="content">
        弹出内容
    </template>
</g-popover>
`.trim()
             }
        }
    }
</script>

<style scoped lang="scss">

</style>