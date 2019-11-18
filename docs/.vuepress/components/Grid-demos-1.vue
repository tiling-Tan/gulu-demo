<template>
    <div>
        <g-row class="Row">
            <g-col span="8">
                <div class="Col">8</div>
            </g-col>
            <g-col span="8">
                <div class="Col">8</div>
            </g-col>
            <g-col span="8">
                <div class="Col">8</div>
            </g-col>
        </g-row>
        <g-row class="Row">
            <g-col span="6">
                <div class="Col">6</div>
            </g-col>
            <g-col span="6">
                <div class="Col">6</div>
            </g-col>
            <g-col span="6">
                <div class="Col">6</div>
            </g-col>
            <g-col span="6">
                <div class="Col">6</div>
            </g-col>
        </g-row>
        <g-row class="Row">
            <g-col span="3">
                <div class="Col">3</div>
            </g-col>
            <g-col span="3">
                <div class="Col">3</div>
            </g-col>
            <g-col span="3">
                <div class="Col">3</div>
            </g-col>
            <g-col span="3">
                <div class="Col">3</div>
            </g-col>
            <g-col span="3">
                <div class="Col">3</div>
            </g-col>
            <g-col span="3">
                <div class="Col">3</div>
            </g-col>
            <g-col span="3">
                <div class="Col">3</div>
            </g-col>
            <g-col span="3">
                <div class="Col">3</div>
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
        name: "Grid-demos",
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
<g-row class="Row">
    <g-col span="8">
        <div class="Col">8</div>
    </g-col>
    <g-col span="8">
        <div class="Col">8</div>
    </g-col>
    <g-col span="8">
        <div class="Col">8</div>
    </g-col>
</g-row>
<g-row class="Row">
    <g-col span="6">
        <div class="Col">6</div>
    </g-col>
    <g-col span="6">
        <div class="Col">6</div>
    </g-col>
    <g-col span="6">
        <div class="Col">6</div>
    </g-col>
    <g-col span="6">
        <div class="Col">6</div>
    </g-col>
</g-row>
<g-row class="Row">
    <g-col span="3">
        <div class="Col">3</div>
    </g-col>
    <g-col span="3">
        <div class="Col">3</div>
    </g-col>
    <g-col span="3">
        <div class="Col">3</div>
    </g-col>
    <g-col span="3">
        <div class="Col">3</div>
    </g-col>
    <g-col span="3">
        <div class="Col">3</div>
    </g-col>
    <g-col span="3">
        <div class="Col">3</div>
    </g-col>
    <g-col span="3">
        <div class="Col">3</div>
    </g-col>
    <g-col span="3">
        <div class="Col">3</div>
    </g-col>
</g-row>
`.trim(),


            }
        }
    }
</script>

<style lang="scss">
    *{
        box-sizing: border-box;
    }
    .Row{
        height: 50px;
        margin-bottom: 10px;
    }
    .Col{
        border: 1px solid #cccccc;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #eeeeee;
    }
</style>