<template>
    <div>
        <g-button @click="onClickButton">上方弹出</g-button>
        <h4>代码</h4>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Plugin from '../../../src/plugin'
    import button from '../../../src/button'

    Vue.use(Plugin)
    export default {
        name: "toast-demos-3",
        components: {
            'g-button': button
        },
        data() {
            return {
                content: `
<style>
*{
    box-sizing: border-box;
}
.gulu-toast {
    z-index: 30 !important;
}
</style>

<div>
    <g-button @click="onClickButton">上方弹出</g-button>
</div>
methods: {
    onClickButton() {
        this.$toast('<strong><span style="color:yellow">一行黄色加粗的文字</span></strong>', {
            enableHtml: "true",
            closeButton: {
                text: '是黄色的',
                callback: () => {
                    console.log('好的')
                }
            }
        })
    }
}`.trim()
            }
        },
        methods: {
            onClickButton() {
                this.$toast('<strong><span style="color:yellow">一行黄色加粗的文字</span></strong>', {
                    enableHtml: "true",
                    closeButton: {
                        text: '是黄色的',
                        callback: () => {
                            console.log('好的')
                        }
                    }
                })
            }
        }
    }
</script>

<style lang="scss">
    * {
        box-sizing: border-box;
    }

    .gulu-toast {
        z-index: 30 !important;
    }
</style>