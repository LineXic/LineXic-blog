---
title: 'GitHub上有趣/实用的项目'
description: '早期写的文章，推荐了一些GitHub上有趣/实用的项目，差点淹没在时间长河中'
pubDate: '2024-07-27'
---


## 前言

GitHub 是个非常有用的东西，里面不仅有程序员分享的代码还有一些好玩的东西，甚至不学计算机的人也可以用到

> 进入正文

## 1.最全中华古诗词数据库

记录了从唐宋两朝近一万四千古诗人, 接近 5.5 万首唐诗加 26 万宋诗. 两宋时期 1564 位词人，21050 首词

![中国诗词](https://www.linexic.top/img/blog/chinese.webp "中国诗词")

诗词通过 JSON 格式开发，更加方便数据使用

- GitHub：[https://github.com/chinese-poetry/chinese-poetry](https://github.com/chinese-poetry/chinese-poetry)

- 在线：[http://shici.store/](http://shici.store/ "http://shici.store/")

## 2.不止于 CSS

![不止于 CSS ](https://img.linexic.top/file/607b39e49e2463f16744a.png "不止于 CSS ")

CSS 奇技淫巧，在这里，都有。

本 Repo 围绕 CSS/Web 动画 展开，谈一些有趣的话题，内容天马行空，想到什么说什么，不仅是为了拓宽解决问题的思路，更涉及一些容易忽视或是十分有趣的 CSS 细节。

我的一些灵感也是从这里来的

![内容](https://img.linexic.top/file/c94735a24218532baf05a.png "内容")

他的内容同步到他[博客](http://www.cnblogs.com/coco1s/ "博客")和 [issues](https://github.com/chokcoco/iCSS/issues "issues") 内容可以自己探索

GitHub：[https://github.com/chokcoco/iCSS](https://github.com/chokcoco/iCSS "https://github.com/chokcoco/iCSS")

## 3.网页小组件版本的石蒜模拟器

![网页小组件版本的石蒜模拟器](https://img.linexic.top/file/184a478ad146158a32873.png "网页小组件版本的石蒜模拟器")

引入模块就可以使用

```javascript
<!-- https://cdn.jsdelivr.net/npm/sakana-widget@2.5.0/lib/sakana.min.css -->
<!-- https://cdn.jsdelivr.net/npm/sakana-widget@2.5.0/lib/sakana.min.js -->
<!-- https://cdnjs.cloudflare.com/ajax/libs/sakana-widget/2.5.0/sakana.min.css -->
<!-- https://cdnjs.cloudflare.com/ajax/libs/sakana-widget/2.5.0/sakana.min.js -->
<link
  rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sakana-widget@2.5.0/lib/sakana.min.css"
/>
<div id="sakana-widget"></div>
<script＞
  function initSakanaWidget() {
    new SakanaWidget().mount('#sakana-widget');
  }
</script＞
<script
  async  onload="initSakanaWidget()"  src="https://cdn.jsdelivr.net/npm/sakana-widget@2.5.0/lib/sakana.min.js"
>
</script＞
```

预览

![预览](https://img.linexic.top/file/b6ed221fb42c08741bfa6.png "预览")

- GitHub：[https://github.com/dsrkafuu/sakana-widget/blob/main/README.zh.md](https://github.com/dsrkafuu/sakana-widget/blob/main/README.zh.md)
- 在线 [https://github.dsrkafuu.net/sakana-widget/](https://github.dsrkafuu.net/sakana-widget/)

## 4.程序员工作中常见的英语词汇

![英语](https://img.linexic.top/file/2e647580ae9f92df598ac.png)

其实这个感觉到我们这样的学生也可以用得到的，把它当一个学习英语资料卡就好

![截图](https://img.linexic.top/file/db4721895ba8271f04e3b.png)

- GitHub：[https://github.com/Wei-Xia/most-frequent-technology-english-words](https://github.com/Wei-Xia/most-frequent-technology-english-words)

- 在线：[https://learn-english.dev/](https://learn-english.dev/)
