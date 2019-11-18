<template>
    <div>
        <g-layout style="color: white; overflow:hidden;">
            <g-header class="header">
                header
            </g-header>
            <g-layout>
                <g-sider style="height: 100px;" class="sider">
                    sider
                </g-sider>
                <g-content class="content">
                    content
                </g-content>
            </g-layout>
            <g-footer class="footer">
                footer
            </g-footer>
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
        name: "layout-demos-2",
        components:{
            'g-layout':Layout,
            'g-header':Header,
            'g-content':Content,
            'g-footer':Footer,
            'g-sider':Sider,
            'g-button':Button
        },
        data(){
            return{
                content:`
<g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
    <g-header style="" class="header">
        header
    </g-header>
    <g-layout>
        <g-sider style="height: 100px;" class="sider">
            sider
        </g-sider>
        <g-content style="" class="content">
            content
        </g-content>
    </g-layout>
    <g-footer style="" class="footer">
        footer
    </g-footer>
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