<template>
    <div>
        <div>
            <g-input class="gInput"></g-input>
            <g-input class="gInput" value="请输入用户名"></g-input>
            <g-input class="gInput" value="禁用" disabled></g-input>
            <g-input class="gInput" value="只读" readonly></g-input>
            <g-input class="gInput" value="忘了密码" error="用户名或密码错误"></g-input>
        </div>
        <h4>代码</h4>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
    import Input from '../../../src/input'

    export default {
        name: "input-demos",
        components: {
            'g-input': Input
        },
        data() {
            return {
                content: `
<g-input class="gInput"></g-input>
<g-input class="gInput" value="请输入用户名"></g-input>
<g-input class="gInput" value="禁用" disabled></g-input>
<g-input class="gInput" value="只读" readonly></g-input>
<g-input class="gInput" value="忘了密码" error="用户名或密码错误"></g-input>
`.trim()
            }
        }
    }
</script>

<style lang="scss">
    .gInput {
        margin: 5px 10px;
    }
</style>