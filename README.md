***本博客基于[huxpro](https://github.com/Huxpro/huxpro.github.io)和[华子liuguanhua](https://github.com/WillingSasi/WillingSasi.github.io)的模板魔改而成***

一开始fork了hux的模板就尝试改改了，就在网上找我需要的魔改教程，一路探索过来也学到了很多，魔改到一定程度了就需要去写一个docs了，来解释自己的blog

# 相比于hux博客没有的东西

1.页面爱心<br>
2.鼠标滑动星星痕迹<br>
3.[waline](https://waline.js.org/)评论<br>
4.打赏<br>
5.加入了开往组织<br>
6.大图预览<br>
7.gitalk评论

# 评论

> 第一次写文档可能有些的不好的地方，欢迎指正，这里不详细介绍它，欢迎查看[waline文档](https://waline.js.org/)

在`post.html`大约129行的地方会有waline的相关配置

```js
<div id="article-info">
  <!-- 评论及阅读量定义 -->
  <script async src="https://busuanzi.9420.ltd/js"></script>
阅读量 <span id="busuanzi_page_pv"></span> 次
  <!-- vercel托管waline评论url -->
</div>

 <div id="waline"></div>
  <script type="module">
    import { init } from 'https://unpkg.com/@waline/client@v3/dist/waline.js';

    init({
      el: '#waline',
      pageview: true, // 浏览量统计
      serverURL: 'https://waline-xic-pinglun.linexic.top/',
    });
  </script>
```
### Gitalk

先创建[GitHub Application](https://github.com/settings/applications/new)然后填入下面的相应位置，把下面这一段放到`_config.yml`文件注释`# Comment`下

```js
gitalk:
   enable: true
   owner: GitHub名
   repo: 仓库名
   clientID: 申请ID
   clientSecret: 申请key
   admin: 管理员
```

其中`serverURL`需要改成你自己的

# 打赏

打赏也在`post.html`页面，一般二维码图片需要放在`img/payimg/`名称改成自己想要的就行

# 开往

让传统友链“活跃”，让网页相互接力，让流量相互流动，让网络开放起来，总得来说就是添加他的友链，他会帮助你获得博客流量
[申请开往](https://www.travellings.cn/docs/join.html)

------------------------------------------
总的来说就这么多了，想起什么来再说吧