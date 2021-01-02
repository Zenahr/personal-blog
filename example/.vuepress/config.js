const AVATAR_URI = "https://avatars2.githubusercontent.com/u/47085752?s=460&u=359f9d47b2bf89dd2b14adddb31cdf34e054733a&v=4"

module.exports = {
  // title      : "Zenahr's Personal Technical Blog",
  // description: 'You will find articles, guides and more on topics such as web development, game development using Unreal Engine, general tips & tricks for developers and perhaps some personal stuff too ^^',
  dest       : 'docs',
  head       : [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['meta', { name: 'description', content: "Zenahr's Personal Technical Blog." }],
    ['meta', { name: 'keywords', content: '' }],
    ['meta', { name: 'google-site-validate', content: '' }],
    ['meta', { name: 'author', content: 'Zenahr Barzani' }],
    ['meta', { name: 'copyright', content: 'Zenahr Barzani' }],
    ['meta', { property: 'og:locale', content: 'en_US' }],
    ['meta', { property: 'og:url', content: '' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Zenahr - Technical Blog' }],
    ['meta', { property: 'og:description', content: 'Personal technical blog.' }],
    ['meta', { property: 'og:image', content: AVATAR_URI }],
  ],
  base: '/personal-blog/',
  // theme: 'reco',
  theme: require.resolve('../../packages/vuepress-theme-reco'),
  themeConfig: {
    // vssueConfig: {
    //   platform: 'github',
    //   owner: 'Zenahr',
    //   repo: 'NAME_OF_REPO',
    //   clientId: 'YOUR_CLIENT_ID',
    //   clientSecret: 'YOUR_CLIENT_SECRET',
    // },
    mode: 'dark', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
    modePicker: true, // 默认 true，false 不显示模式调节按钮，true 则显示
    nav: [
      { text: 'Home', link: '/', icon: 'reco-home' },
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      // { text: 'Docs', 
      //   icon: 'reco-message',
      //   items: [
      //     { text: 'vuepress-reco', link: '/docs/theme-reco/' }
      //   ]
      // },
      // { text: 'Contact', 
      //   icon: 'reco-message',
      //   items: [
      //     { text: 'GitHub', link: 'https://github.com/Zenahr', icon: 'reco-github' }
      //   ]
      // }
    ],
    sidebar: {
      '/views/sidebar/': [
        '',
        'bar1',
        'bar2'
      ],
      '/views/sidebargroup/': [
        {
          title: '基础',
          collapsable: true,
          children: [
            '',
            'bar1'
          ]
        },
        {
          title: '进阶',
          collapsable: true,
          children: [
            'bar2'
          ]
        },
      ]
    },
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: 'Categories' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: 'Tags' // 默认 “标签”
      },
      socialLinks: [
        { icon: 'reco-github', link: 'https://github.com/Zenahr' },
        // { icon: 'fa-camera', link: 'https://www.npmjs.com/~reco_luan' }
      ]
    },
    logo: AVATAR_URI,
    authorAvatar: AVATAR_URI,
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    subSidebar: 'auto',
    sidebarDepth: 4,
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'Zenahr',
    // 备案号
    record: '',
    // 项目开始时间
    startYear: '2020',
    /**
     * 密钥 (if your blog is private)
     */
    friendLink: [
      // {
      //   title: '午后南杂',
      //   desc: 'Enjoy when you can, and endure when you must.',
      //   email: '1156743527@qq.com',
      //   link: 'https://www.recoluan.com'
      // },
      // {
      //   title: 'vuepress-theme-reco',
      //   desc: 'A simple and beautiful vuepress Blog & Doc theme.',
      //   avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
      //   link: 'https://vuepress-theme-reco.recoluan.com'
      // },
    ],
    /**
     * support for
     * '' | 'default'
     * 'coy'
     * 'dark'
     * 'funky'
     * 'okaidia'
     * 'solarizedlight'
     * 'tomorrow'
     * 'twilight'
     */
  },
  plugins: [
    // ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
    //   body: [
    //     {
    //       type: 'title',
    //       content: '欢迎加入QQ交流群 🎉🎉🎉',
    //       style: 'text-aligin: center;'
    //     },
    //     {
    //       type: 'image',
    //       src: '/rvcode_qq.png'
    //     }
    //   ],
    //   footer: [
    //     {
    //       type: 'button',
    //       text: '打赏',
    //       link: '/donate'
    //     },
    //     {
    //       type: 'button',
    //       text: '打赏',
    //       link: '/donate'
    //     }
    //   ]
    // }]
  ]
}