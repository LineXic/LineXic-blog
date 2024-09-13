---
layout:     post
title:      "使用toc插件为jekyll博客创建目录"
subtitle:   "使用toc插件为jekyll博客创建目录"
date:       2024-09-13 00:00:00
author:     "LineXic"
header-img: "img/jekyll.jpg"
catalog:    true
tags:
    - jekyll插件
    - toc
---

有天在[这篇文章](https://www.u.tsukuba.ac.jp/~s2036012/tech/webmaster/jekyll-toc.html#%E7%AC%AC%E4%B8%89%E7%A7%8D%E6%96%B9%E6%A1%88)看到了toc的折腾过程，转念一想自己的博客还没有toc就索性也跟着文章一起折腾
![demo](https://linexic.top/img/blog/Screenshot_2024_0913_172333.png)
部署好之后大概就是这个样子了

# 正文
把这个仓库的[toc.html](https://github.com/allejo/jekyll-toc/releases/download/v1.2.0/toc.html)文件下载到`_layouts`目录中，然后在`_laypots/post.html`文件中添加如下代码
```liquid
<!-- post.html -->

<!-- post.html -->

{% include toc.html html=content %}

{% if site.toc %}
  <div class="container">  
    <div class="contents">

    </div>   
    <div class="table-of-contents">
      <h2>Contents</h2>

    </div>
  </div>

{% endif %}
```
这里做了些改动，原版在我自己应用的时候会出现这样的bug
![bug](https://linexic.top/img/blog/Image_1726219871237.jpg)

# 结束

也就是说这里的文章重复了两段，其中一段是自己写的另一段就是这段代码中某一个在作祟「私自"抄写"了」
![解决方法](https://linexic.top/img/blog/Image_1726208869320.png)
这样的解决方法就是把上图圈住的这两段都给删掉，如果你觉得删掉不保险也可以使用`<!--  -->`
注释掉完成之后你就能愉快的使用啦