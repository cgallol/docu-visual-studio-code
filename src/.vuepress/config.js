module.exports = {
    title: 'Documentación VSCode',
    description: false,
    head: [
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
    ],
    dest: 'docs',
    base: '/docu-visual-studio-code',

    themeConfig: {
        editLinks: false,
        editLinkText: '',
        lastUpdated: false,
        navbar: [],
        sidebar: {
            '/guide1/': [
                {
                    title: 'Capitulos',
                    collapsable: false,
                    children: [
                        ['/guide1/', 'Introducción'],
                        ['/guide1/guide1-1', 'Instalación'],
                        ['/guide1/guide1-2', 'Configuración Inicial'],
                        ['/guide1/guide1-3', 'Extensiones'],
                        ['/guide1/guide1-4', 'Configuracion General'],
                        ['/config/', 'config']
                    ]
                }
            ],
            '/config/': [
                {
                    title: 'lista',
                    collapsable: false,
                    children: [
                        ['/config/', 'lista0'],
                        ['/config/config1', 'lista1']
                    ]
                }
            ]
        }
    },

    plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom']
}
