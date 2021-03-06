module.exports = {
  base: "/web-devtools/",
  title: "A list of resources I use（Perspective of F2E）",
  themeConfig: {
    nav: [
      {
        text: "Web Devtools",
        link: "/",
      },
      {
        text: "前端知识体系",
        link: "/fe/",
      },
    ],
    sidebar: {
      "/fe/": [
        ["", "主页"],
        ["h5", "Html"],
        ["c3", "CSS"],
        ["js", "JavaScript"],
        ["write", "手写代码"],
        ["vue", "Vue"],
        ["browser", "浏览器"],
        ["webpack", "工程化"],
      ],
      "/": [""],
    },
    sidebarDepth: 2,
    displayAllHeaders: true,
    repo: "https://github.com/yanyue404/web-devtools",
    repoLabel: "给作者的 Github 点个 star 吧！",
  },
};
