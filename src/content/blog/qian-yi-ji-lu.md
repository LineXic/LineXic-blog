---
title: '迁移记录'
description: '因为Hexo主题出错故换到纸鹿开发的主题当中后又转为astro主题的过程与问题'
pubDate: '2025-03-22'
---

## 起因

大概是两个星期前提交了上一篇文章后我博客的搜索功能无法使用了，甚至出现了在本地localhost可以使用但推送上GitHub并不部署后无法使用的乱象
![pE0RsIg.png](https://www.linexic.top/img/blog/pE0RsIg.webp)
![pE0RgRs.png](https://www.linexic.top/img/blog/pE0RgRs.webp)

在调试search.json无果后又折腾了一下algolia的key也是没能解决问题，询问群友的时候有人提出用zhilu主题,zhilu主题拥有良好的SEO和舒适的阅读体验，此后我就一直折腾这个主题了，正好我也想换一个方法管理博客文章

## 迁移

迁移过程很顺滑，拉取项目，安装依赖打开项目一气呵成，想想中的报错也没有产生，花了三四天时间迁移并配置现在终于可以愉快的码字啦！！只是主题和我一直用的yy-mm-dd的日期和文章格式不一样还得费些时间ds和手动修改。以后就用主题的格式了，毕竟对SEO有好点

但是令我没有想好到的是当我`pnpm generate`的时候却出现了报错报错至多令我无法找到问题所在期间还经历了文章丢失事件双重打击也使我一连一个星期对博客提不起任何兴趣甚至我的域名也在阿里上挂了又挂，不过还好我的博客在Astro那里复活啦

虽然这个主题也没有搜索但好在也有完整的阅读体验

## 遇到的问题

好像也没什么就是迁移文章和友链挺麻烦的最常遇到的问题就是`error: remote origin already exists.`后面通过

```bash
git remote set-url origin git@github.com:your_username/your_repository.git
```

修改了远程仓库的地址解决

迁移过程中删除了一部分文章，例如《你的博客主题需要来回换吗》一文我就删了，毕竟连自己都约束不了自己还有什么资格管别人呢，评论也换成了giscus了Astro的Twikoo评论的迁移还没研究明白先用这个了，其实也不错避免了垃圾信息的流入还不用自己配置邮箱通知

------
2025年4月12日更新

在[@清羽飞扬](https://blog.liushen.fun/)的邮件帮助下成功使用了Twikoo评论并解决[Twikoo评论在Astro遇到头像偏移的问题](https://github.com/twikoojs/twikoo/issues/811)在这里感谢

------
比较满意的是友联和关于页面比之前的主题更好看也更好用了真的是眼前一亮后面我也可能试着去更改样式或者添加一些新的东西，先这样吧。
