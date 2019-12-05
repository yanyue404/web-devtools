# awesome-tools

A list of resources I use

## 目录

- [起步](#起步)
- [在线使用](#在线使用)
- [脚手架以及工具包](#脚手架以及工具包)
- [Chrome 扩展](#Chrome-扩展)
- [Windows 软件](#Windows-软件)
- [其他 Repo](#其他-Repo)

## 起步

- [**chinese-copywriting-guidelines**](https://github.com/sparanoid/chinese-copywriting-guidelines) - 中文文案排版指北
- [**document-style-guide**](https://github.com/ruanyf/document-style-guide) - 中文技术文档的写作规范，by [ruanyf](https://github.com/ruanyf)
- [**How-To-Ask-Questions-The-Smart-Way**](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/master/README-zh_CN.md) - 提问的智慧
- [**git-tips**](https://github.com/521xueweihan/git-tips) - Git 的奇技淫巧
- [**project-guidelines**](https://github.com/elsewhencode/project-guidelines/blob/master/README-zh.md) - JavaScript 工程项目规范

**[⬆ 返回顶部](#目录)**

## 在线使用

**Bible**

- [**有声圣经**](https://sj.fuyin.tv/?ref=weixin_menu)

**Dev 相关**

- [**Babel**](https://babeljs.io/repl) / [**TypeScript**](https://www.typescriptlang.org/play/index.html) / [**Sass**](https://www.sassmeister.com/) - 编译器
- [**netlify**](https://www.netlify.com/) - 静态网站托管服务
- [**codesandbox**](https://codesandbox.io/u/xiaoyueyue165) - vue && react 仓库，借助官方脚手架构建
- [**carbon**](https://carbon.now.sh/) 在线代码生成图片 https://carbon.now.sh/
- [**regulex**](https://jex.im/regulex/) - 正则可视化
- [**tinypng**](https://tinypng.com/) / [**squoosh**](https://squoosh.app) - 图片压缩
- [**Package Diff**](https://diff.intrinsic.com/)，比较 npm 包两个版本直接的区别

**GitHub 开源**

- [**runpkg**](https://github.com/FormidableLabs/runpkg) - 在线 npm 包浏览器 https://runpkg.com/
- [**webpack-autoconf**](https://github.com/jakoblind/webpack-autoconf) - webpack 配置工具
- [**Picas**](https://github.com/djyde/Picas) - Google 字体生成的项目徽标 https://picas.now.sh/
- [**json-server**](https://github.com/typicode/json-server) - 最佳 RESTful API Mock
- [**astexplorer**](https://astexplorer.net/) - 一个用于探索各种解析器生成的 AST 的网络工具 https://astexplorer.net/
- [**JavaScript Visualizer**](https://tylermcginnis.com/javascript-visualizer/) 可视化 **ES5** `JavaScript` 执行
- [**loupe**](https://github.com/latentflip/loupe) - 可视化的 javascript 实时运行,理解异步, Built by [**Philip Roberts**](http://github.com/latentflip)
- [**waifu2x**](https://github.com/nagadomi/waifu2x) - 图片进行放大操作 http://waifu2x.udp.jp/index.zh-CN.html
- [**RMind**](https://github.com/Mongkii/RMind) - 基于 React Hooks 与 flex 布局 的思维导图 https://mongkii.github.io/RMind/

**文件格式转换**

- [**resumd**](https://github.com/timqian/resumd) - 使用 markdown 写简历，支持自定义主题，`html`,`pdf`,`md`导出 https://resumd.t9t.io
- [**h2m**](https://github.com/island205/h2m/) - 将 HTML 转换为 Markdown 的工具 http://island205.github.io/h2m/
- [**WAV to MP3 -- Bear Audio online tool**](https://www.bearaudiotool.com/wav-to-mp3)

**网络**

- [**lantern**](https://github.com/getlantern/download) - 最新版蓝灯下载
- [**shadowsocks-windows**](https://github.com/shadowsocks/shadowsocks-windows) + [**freess**](https://github.com/max2max/freess) (免费账号)
- [**jsproxy**](https://github.com/EtherDream/jsproxy)

**开放 API**

- [**jsonplaceholder**](https://github.com/typicode/jsonplaceholder) A simple online fake REST API server https://jsonplaceholder.typicode.com
- [**GitHub API v3**](https://developer.github.com/v3/)
- [**cnode**](https://cnodejs.org/api)
- [**douban-api-proxy**](https://github.com/zce/douban-api-proxy) https://douban.uieee.com/
- [**和风天气**](https://dev.heweather.com/docs/api/weather)
- [**Twilio API Docs**](https://www.twilio.com/docs/)

**其他**

- [**Temporary Email Address**](https://temp-mail.org) - 临时邮件使用
- [**SMS Receive Free**](https://smsreceivefree.com/) - 免费接收短信
- [**Temp**](https://temp.pm/) - 短信息（可加密）
- [**Bitly**](https://bitly.com/) - 短网址 [**国内 1**](https://tool.chinaz.com/tools/dwz.aspx)
- [**草料二维码**](https://cli.im/) - 草料二维码生成器
- [**Awesome_APIs**](https://github.com/TonnyL/Awesome_APIs/blob/master/README-zh.md)

**[⬆ 返回顶部](#目录)**

## 脚手架以及工具包

```bash
# 查看 npm 全局安装的列表
npm list -g --depth 0

# 查看 yarn 全局安装的列表
yarn global list
```

**脚手架**

- [**create-react-app**](https://github.com/facebook/create-react-app) - react 官方脚手架
- [**vue-cli**](https://github.com/vuejs/vue-cli) - vue 命令行工具,项目脚手架
- [**taro**](https://github.com/NervJS/taro) - tarojs/cli，多端统一开发框架，类 React 语法编写
  **工具包**
- [**rimraf**](https://github.com/isaacs/rimraf) - 删除文件 `rimraf node_modules`
- [**kill-port-process**](https://github.com/hilleer/kill-port-process) - 命令行杀死被占用的端口服务 `kill-port 3000`
- [**pm2**](https://github.com/Unitech/pm2) - node 进程管理工具
- [**nodemon**](https://github.com/remy/nodemon/) - 监视 node.js 应用程序中的修改，实时更新
- [**nrm**](https://github.com/Pana/nrm) - npm 下载源切换
- [**gh-pages**](https://github.com/tschaub/gh-pages) - 将文件发布到 GitHub 上的 `gh-pages` 分支
- [**opener**](https://github.com/domenic/opener) - 打开某个端口，固定文件
- [**eslint**](https://github.com/eslint/eslint) - A fully pluggable tool for identifying and reporting on patterns in JavaScript https://eslint.org/docs/rules/
- [**prettier**](https://github.com/prettier/prettier/) - 漂亮的代码格式化 https://prettier.io
- [**debug**](https://github.com/visionmedia/debug) - 打印调试信息

**[⬆ 返回顶部](#目录)**

## Chrome 扩展

**优化基础环境**

- 谷歌访问助手 - Google Search
- SetupVPN - 网络应急 VPN
- Adblock Plus - 免费的广告拦截器
- ezLinkPreview - 预览网页
- 扩展管理器(Extension Manager)
- 捕捉网页截图 - FireShot
- 云盘万能钥匙
- OneTab
- Holmes - 书签搜索
- JSONView
- Wappalyzer - 查看网站所用技术栈
- PageSpeed Insights
- 翻译 Google 翻译 / 划词翻译 / 彩云小译

**下载**

- Image Downloader
- Flash Video Downloader - 超级强大的下载工具
- Video Downloader professional
- YAAW for Chrome

**Github 相关**

- Octotree + Sourcegraph + [**OctoLinker**](https://github.com/OctoLinker/OctoLinker) - 查看代码
- [**npmhub**](https://github.com/npmhub/npmhub) - 显示 **Repo** 的 npm 依赖项
- [**Enhanced GitHub**](https://github.com/softvar/enhanced-github) - 显示 **Repo**大小，每个文件的大小，下载链接和复制文件内容的选项
- [**github-awesome-autocomplete**](https://github.com/algolia/github-awesome-autocomplete) - 在 GitHub 的搜索栏中添加即时搜索功能
- [**github-hovercard**](https://github.com/Justineo/github-hovercard) - Github 悬浮卡展示详情
- [**github-file-icon**](https://github.com/xxhomey19/github-file-icon)- Github 文件图标
- Git History Browser Extension - 点击**Open in Git History**按钮 显示文件修改历史

**辅助开发**

- Clear Cache - 强制刷新清理缓存
- [**ReRes**](https://github.com/annnhan/ReRes) - 更改页面请求响应的映射，可映射到本机调试
- ColorZilla - 取色器
- 新浪微博图床 - markdown 图片
- Axure RP Extension for Chrome - 原型图查看
- [**ReplaceGoogleCDN**](https://github.com/justjavac/ReplaceGoogleCDN) - 将 Google CDN 替换为国内的
- 高效网页截图编辑插件
- 有道云笔记插件
- [**Tampermonkey**](https://greasyfork.org/zh-TW)
  - [**SaveFrom.net helper**](https://zh.savefrom.net/1-how-to-download-youtube-video.html) - 速度最快的免费 YouTube 下载器
  - 网页限制解除
  - 百度网盘直链下载助手

**应用 apps**

- Postman
- TeamViewer
- Gliffy 绘图工具

**[⬆ 返回顶部](#目录)**

## Windows 软件

- [**FiraCode**](https://github.com/tonsky/FiraCode) Vscode 设置使用的字体
- [**npm**](https://github.com/npm/cli) + [**yarn**](https://yarnpkg.com/zh-Hant) - node 包管理
- [**ConEmu**](https://github.com/Maximus5/ConEmu/) - Terminal 终端
- [**Listary**](https://www.listary.com/) - 快速检索文件
- [**ScreenToGif**](https://www.screentogif.com/) - gif 动画录制
- [**Snipaste**](https://zh.snipaste.com/) - 截图+切图
- [**QuickLook**](https://pooi.moe/QuickLook/) - 文件预览
- [**Fiddler**](https://www.telerik.com/fiddler) - 调试网络，线上测试修改
- [**Postman**](https://www.getpostman.com/) - api 请求，通过 chrome apps 使用
- [**oCam**](http://ohsoft.net/eng/) - 视频录制
- [**olive**](https://github.com/olive-editor/olive) - 视频剪辑
- [**ArcTime**](https://arctime.org/) - 字幕制作
- [**有道云笔记**](https://note.youdao.com/)
- [**网易邮箱大师**](https://mail.163.com/dashi/)
- [**Navicat Premium**](https://www.navicat.com.cn/products/navicat-premium) - 数据库合集开发工具
- [**Xmind**](https://www.xmind.cn/xmind8-pro/) - 思维导图
- [**微信开发者工具**](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html) - 选择稳定版
- [**GetFLV**](http://www.vdigger.com/index.html) - 视频资源下载
- [**Pandoc**](https://github.com/jgm/pandoc) - 强大的文档格式转换

**[⬆ 返回顶部](#目录)**

## 其他 Repo

- [awesome-tools](https://github.com/sorrycc/awesome-tools) - Awesome tools I used , by [sorrycc](https://github.com/sorrycc)
- [free-books](https://github.com/ruanyf/free-books) - 互联网上的免费书籍，by [ruanyf](https://github.com/ruanyf)
- [the-craft-of-selfteaching](https://github.com/selfteaching/the-craft-of-selfteaching) - 自学是门手艺，by 李笑来
- [weekly](https://github.com/ruanyf/weekly) - 科技爱好者周刊，每周五发布，by [ruanyf](https://github.com/ruanyf)
- [articles](https://github.com/ruanyf/articles)- personal articles，by [ruanyf](https://github.com/ruanyf)
- [reading-list](https://github.com/ruanyf/reading-list) - Some books I read，by [ruanyf](https://github.com/ruanyf)
- [weekly](https://github.com/dt-fe/weekly) - 前端精读周刊

**[⬆ 返回顶部](#目录)**

## License

MIT
