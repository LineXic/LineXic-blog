---
layout:     post
title:      "手把手教你用jekyll和手机termux搭建一个个人静态博客"
subtitle:   "手把手教你用jekyll和手机termux搭建一个个人静态博客"
date:       2024-04-30 17:42:00
author:     "LineXic"
header-img: "img/jekyll.jpg"
catalog:    true
tags:
    - jekyll
    - termux
    - 静态博客
---

# 前言
[jekyll](http://jekyllcn.com/)是一个静态站点生成器，内置 GitHub Pages 支持和简化的构建过程。 

不再需要数据库，不需要开发评论功能，不需要不断的更新版本——只用关心你的博客内容。
 
Jekyll 使用 Markdown 和 HTML 文件，并根据您选择的布局创建完整静态网站。 Jekyll 支持 Markdown 和 Lick，这是一种可在网站上加载动态内容的模板语言。 有关详细信息，请参阅 Jekyll。

Windows 并未正式支持 Jekyll。 有关详细信息，请参阅 Jekyll 文档中的“[Windows 上的 Jekyll](https://jekyllcn.com/docs/windows/#installation)”。

可以将 Jekyll 用于 [GitHub Pages](https://docs.github.com/zh/pages/getting-started-with-github-pages/about-github-pages#static-site-generators)。 如果您喜欢，可以使用其他静态站点生成器或者在本地或其他服务器上自定义构建过程

# 如何搭建？
>[jekyll中文文档](http://jekyllcn.com/docs/home/)

## 准备
- [Ruby](https://www.ruby-lang.org/zh_cn/)
```bash
pkg install ruby
```
- [RubyGems](https://rubygems.org/pages/download)
```bash
gem update --system
```
- Linux
- [NodeJs](https://nodejs.org/)
```bash
pkg install node
```
- [Python 2.7](https://www.python.org/downloads/)
```bash
pkg install python
```

# 快速生成
```bash
~ $ gem install jekyll
~ $ jekyll new myblog
~ $ cd myblog
~/myblog $ jekyll serve
# => Now browse to http://localhost:4000
```
生成后会得到这样的大概的目录结构
```bash
.     基本信息
├── _config.yml
├── _drafts
|   ├── begin-with-the-crazy-ideas.textile
|   └── on-simplicity-in-technology.markdown
      包括脚页，头页
├── _includes
|   ├── footer.html
|   └── header.html
      布局
├── _layouts
|   ├── default.html
|   └── post.html
      文章
├── _posts
|   ├── 年-月-日-文件名.md
├── _site
├── .jekyll-metadata
      HTML
└── index.html
```
> 更多查看[jekyll文档-目录结构](http://jekyllcn.com/docs/structure/)

## 安装开发板
```bash
git clone git://github.com/jekyll/jekyll.git
$ cd jekyll
$ script/bootstrap
$ bundle exec rake build
$ ls pkg/*.gem | head -n 1 | xargs gem install -l
```

# 主题搭建

jekyll主题在github也有很多开源

完成了以上的内容你就可以愉快的使用jekyll啦，[fork](https://github.com/LineXic/LineXic.github.io/fork)这个主题，并把仓库名称改为`usename.github.io`就完成啦，就这么简单

并且jekyll是github的创始人创建的，jekyll内置github pages支持

# 评论
本主题内置[Gitalk](https://github.com/gitalk/gitalk)
可以在[这里](https://github.com/settings/applications/new)申请GitHub Application

```bash
gitalk:
   enable: true
   owner: 拥有者
   repo: 你的仓库名称
   clientID: 申请的ID
   clientSecret: key
   admin: 管理者
```

> 资料引用<br>
[jekyll文档](http://jekyllcn.com/docs/quickstart/)<br>
[GitHub文档](https://docs.github.com/zh/pages/setting-up-a-github-pages-site-with-jekyll)<br>
[jekyll论坛](https://talk.jekyllrb.com/)<br>
[gitalk](https://github.com/gitalk/gitalk)

另外可以找到[CNAME](https://zhuanlan.zhihu.com/p/91769762)文件以绑定域名



