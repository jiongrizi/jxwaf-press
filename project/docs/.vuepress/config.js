module.exports = {
  title: "锦衣盾 JX-WAF",
  description: "基于openresty开发的下一代web应用防火墙",
  head: [
    ["link", { rel: "icon", href: "./public/images/logo.png" }] // 增加一个自定义的 favicon(网页标签的图标)
  ],
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      {
        text: "Guide",
        items: [
          { text: "JXWAF介绍", link: "/introduction" },
          { text: "快速入门", link: "/start" },
          { text: "用户配置指南", link: "/config" }
        ]
      },
      { text: "GitHub", link: "https://github.com/jx-sec/jxwaf" }
    ],
    sidebar: ["/", "/introduction", "/start", "/config"]
  }
};
