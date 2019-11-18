<template>
    <div>
        <g-layout style="color: white; overflow:hidden;">
            <g-sider style="background:#3BA0E9; width:200px; color: black;" class="sider">
                sider
            </g-sider>
            <g-layout>
                <g-header style="height: 50px; background:#7DBCEA;" class="header">
                    header
                </g-header>
                <g-content style="height: 100px; background:#108EE9;" class="content">
                    content
                </g-content>
                <g-footer style="height: 50px; background:#7DBCEA;" class="footer">
                    footer
                </g-footer>
            </g-layout>
        </g-layout>
        <h4>代码</h4>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
    import Layout from '../../../src/layout'
    import Header from '../../../src/header'
    import Content from '../../../src/content'
    import Footer from '../../../src/footer'
    import Sider from '../../../src/sider'
    import Button from '../../../src/button'

    export default {
        name: "layout-demos-3",
        components: {
            'g-layout': Layout,
            'g-header': Header,
            'g-content': Content,
            'g-footer': Footer,
            'g-sider': Sider,
            'g-button': Button
        },
        data() {
            return {
                content: `
<g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
    <g-sider style="background:#3BA0E9; width:200px; color: black;" class="sider">
        sider
    </g-sider>
    <g-layout>
        <g-header style="height: 50px; background:#7DBCEA;" class="header">
            header
        </g-header>
        <g-content style="height: 100px; background:#108EE9;" class="content">
            content
        </g-content>
        <g-footer style="height: 50px; background:#7DBCEA;" class="footer">
            footer
        </g-footer>
    </g-layout>
</g-layout>
`.trim()
            }
        }
    }
</script>

<style scoped lang="scss">
    .header {
        height: 50px;
        background: #7DBCEA;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .content {
        height: 100px;
        background: #108EE9;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .footer {
        height: 50px;
        background: #7DBCEA;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .sider {
        background: #3BA0E9;
        width: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>