module.exports = {
    base: '/gulu-demo/',
    title: 'Twheels UI',
    description: '一个基于Vue开发的UI框架，简单且好用',
    themeConfig: {
        repo:'https://github.com/tiling-Tan/gulu-demo',
        repoLabel: 'GitHub',
        nav: [
            {text: '首页', link: '/'},
            {text: '组件', link: '/components/button.md'}
        ],
        sidebar: [
            {
                title: '入门',
                children: [
                    ['/install/', '安装'],
                    ['/get-started/', '快速上手']
                ]
            },
            {
                title: '组件',
                children: [
                    ['/components/button', 'Button'],
                    ['/components/Tabs', 'Tabs'],
                    ['/components/Input', 'Input'],
                    ['/components/Grid', 'Grid'],
                    ['/components/Layout', 'Layout'],
                    ['/components/Toast', 'Toast'],
                    ['/components/Popover', 'Popover'],
                    ['/components/collapse', 'collapse']
                ]
            }
        ]
    }
}