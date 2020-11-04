module.exports = {
  title: "JXWAF",
  description: "下一代web应用防火墙",
  head: [
    ["link", { rel: "icon", href: "./images/logo.png" }] // 增加一个自定义的 favicon(网页标签的图标)
  ],
  themeConfig: {
    locales: {
      '/': {
        selectText: 'Languages',
        label: '简体中文',
        editLinkText: 'GitHub',
        nav: [
          { text: "首页", link: "/" },
          { text: "最佳实践", link: "/best-practice" },
          // {
          //   text: "Guide",
          //   items: [
          //     { text: "JXWAF介绍", link: "/introduction" },
          //     { text: "快速入门", link: "/start" },
          //     { text: "配置指南", link: "/config" },
          //     { text: "API接口", link: "/api" }
          //   ]
          // },
          { text: "GitHub", link: "https://github.com/jx-sec/jxwaf" }
        ],
        sidebar: ["/", "/best-practice"]
      },
      '/en/': {
        // 多语言下拉菜单的标题
        selectText: 'Languages',
        // 该语言在下拉菜单中的标签
        label: 'English',
        // 编辑链接文字
        editLinkText: 'GitHub',
        nav: [
          { text: "Home", link: "/en/" },
          { text: "Best practice", link: "/en/best-practice" },
          { text: "GitHub", link: "https://github.com/jx-sec/jxwaf" }
        ],
        sidebar: ["/en", "/en/best-practice"]
      }
    }
  },
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      title: 'JXWAF',
      description: 'JXWAF 是一款开源 WEB 应用防火墙'
    },
    '/en/': {
      lang: 'en-US',
      title: 'JXWAF',
      description: 'JXWAF is an open source WEB application firewall'
    }
  }
};
