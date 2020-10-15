module.exports = {
  title: "JXWAF",
  description: "下一代web应用防火墙",
  head: [
    ["link", { rel: "icon", href: "./images/logo.png" }] // 增加一个自定义的 favicon(网页标签的图标)
  ],
  themeConfig: {
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
  }
};
