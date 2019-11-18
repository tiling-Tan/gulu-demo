<template>
    <div>
        <g-row class="Row" gutter="10">
            <g-col span="8">
                <div class="Col">8</div>
            </g-col>
            <g-col span="8" offset="8">
                <div class="Col">8</div>
            </g-col>
        </g-row>
        <g-row class="Row" gutter="10">
            <g-col span="6" offset="6">
                <div class="Col">6</div>
            </g-col>
            <g-col span="6" offset="6">
                <div class="Col">6</div>
            </g-col>
        </g-row>
        <g-row class="Row" gutter="10">
            <g-col span="4">
                <div class="Col">4</div>
            </g-col>
            <g-col span="4" offset="4">
                <div class="Col">4</div>
            </g-col>
            <g-col span="4" offset="8">
                <div class="Col">4</div>
            </g-col>
        </g-row>
        <h4>代码</h4>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
    import Row from '../../../src/row'
    import Col from '../../../src/col'
    export default {
        name: "Grid-demos-3",
        components:{
            'g-row':Row,
            'g-col':Col
        },
        data(){
            return{
                content:`
*{
    box-sizing: border-box;
}
<g-row class="Row" gutter="10">
    <g-col span="8">
        <div class="Col">8</div>
    </g-col>
    <g-col span="8" offset="8">
        <div class="Col">8</div>
    </g-col>
</g-row>
<g-row class="Row" gutter="10">
    <g-col span="6" offset="6">
        <div class="Col">6</div>
    </g-col>
    <g-col span="6" offset="6">
        <div class="Col">6</div>
    </g-col>
</g-row>
<g-row class="Row" gutter="10">
    <g-col span="4">
        <div class="Col">4</div>
    </g-col>
    <g-col span="4" offset="4">
        <div class="Col">4</div>
    </g-col>
    <g-col span="4" offset="8">
        <div class="Col">4</div>
    </g-col>
</g-row>
`.trim()
            }
        }
    }
</script>

<style scoped lang="scss">

</style>