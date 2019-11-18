<template>
    <div>
        <g-popover trigger="hover">
            <g-button>上方弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>
        <g-popover position="bottom" trigger="hover">
            <g-button>下方弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>
        <g-popover position="left" trigger="hover">
            <g-button>左边弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>
        <g-popover position="right" trigger="hover">
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
        name: "popover-demos-2",
        components:{
            'g-popover':Popover,
            'g-button':button
        },
        data(){
            return{
                content:`
<g-popover trigger="hover">
    <g-button>上方弹出</g-button>
    <template slot="content">
        弹出内容
    </template>
</g-popover>
<g-popover position="bottom" trigger="hover">
    <g-button>下方弹出</g-button>
    <template slot="content">
        弹出内容
    </template>
</g-popover>
<g-popover position="left" trigger="hover">
    <g-button>左边弹出</g-button>
    <template slot="content">
        弹出内容
    </template>
</g-popover>
<g-popover position="right" trigger="hover">
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