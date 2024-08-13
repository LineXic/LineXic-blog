---
layout:     post
title:      "记一次百度统计的应用"
subtitle:   "记一次百度统计的应用"
date:       2024-07-05 00:00:00
author:     "LineXic"
header-img: "img/baidu.jpeg"
catalog:    true
tags:
    - 百度统计
---

# 百度统计的应用

![百度统计](https://img.linexic.top/file/6ef77ee8f00e0fc3cb469.jpg)
## 灵感

一次看到了承挨博客脚页下的博客统计，感觉很美观，就像着自己弄一个
![灵感](https://img.linexic.top/file/ff6fecd96e598fb740d07.jpg)
最开始想着是用[不蒜子](https://busuanzi.ibruce.info/)计数器，可发现了一个诟病就是：网页每次刷新都会提示访问量加一，这样感觉有点假，况且也无法做到像上图那样每一个都面面俱到，折腾了好一会我决定开始转变思路
# 百度统计

我就想既然主页面没法弄，那我就从"后端"入手即百度统计

关于百度统计hux的主题是内置了的，需要我们在`_config.yml`下有专门的字段，原文档介绍如下

> 网站分析，现在支持百度统计和Google Analytics。需要去官方网站注册一下，然后将返回的code贴在下面：

```yml
# Baidu Analytics
ba_track_id: 4cc1f2d8f3067386cc5cdb626a202900
# Google Analytics
# ga_track_id: 'UA-49627206-1'
你用Google账号去注册一个就会给你一个这样的id
# ga_domain: huangxuan.me		
```

看完文档我打开[百度统计](https://tongji.baidu.com)，首先登录，登录完之后点击"新增网站"把我的网址输入了进去，输入后会出现一段统计代码，类似

```js
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?9ecfed90ae982b01f0b7cb1770447760";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>
```
这一段中`?`后的字段是唯一的，需要把这一段添加进`_config.yml`中的指定位置

但我添加后尴尬的一幕发生了，GitHub报错了，我又在那里折腾了半个小时还是没有解决，甚至差点弄得我的博客仓库的文件不受理更新了

无奈我按照统计官网的方法，把它添加到了`_includes/head.html`中这是hux主题中掌管全局的地方，可以理解为`古希腊掌管head全局的神`果然好礼，在统计中点击检查代码后GitHub不报错百度也没有错误，提示代码位置正确。果然，自己折腾有时候是好的

现在我也能在百度中查看自己网站的流量显示啦