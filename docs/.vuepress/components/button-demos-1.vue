<template>
    <div>
        <g-button>默认样式</g-button>
        <g-button icon="setting">默认样式</g-button>
        <g-button loading>默认样式</g-button>
        <g-button disabled>默认样式</g-button>
        <pre><code>{{content}}</code></pre>
    </div>

</template>

<script>
    import Button from '../../../src/button'
    export default {
        name: "button-demos",
        components:{
            'g-button':Button
        },
        data(){
            return{
                content: `
<g-button>默认样式</g-button>
<g-button icon="setting">默认样式</g-button>
<g-button loading>默认样式</g-button>
<g-button disabled>默认样式</g-button>`.trim()
            }
        }
    }
</script>

<style scoped lang="scss">

</style>