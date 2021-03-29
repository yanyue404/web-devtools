module.exports = {
  base: "/awesome-studio/",
  title: "A list of resources I use（Perspective of F2E）",
  head: [["meta", { name: "referrer", content: "no-referrer" }]],
  themeConfig: {
    sidebar: [
      "/",
      ["/Online-tools", "在线使用"],
      ["/Tutorials", "教程"],
      ["/Front-end-library", "前端库"],
      ["/Useful-software", "常用软件"]
    ],
    displayAllHeaders: true,
    repo: "https://github.com/rainbow-design/awesome-studio",
    repoLabel: "给作者的 Github 点个 star 吧！",
    smoothScroll: true
  }
};
