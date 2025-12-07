---
title: '我与博客的一天'
description: '记录了今天因为博客迁移数据的一些问题后逐步上升到新高度，以及一些 git 踩坑记录 --- 这一天我都干了什么'
pubDate: '2025-06-14'
---

## 起因

在昨天晚上晚上我萌生了将数据文件迁移到服务器上并通过服务器来访问博客的想法，于是在学习后了解到Github Action 通过 GitHub Secrets 自动化部署到服务器的做法，于是开始尝试，使用的[模板](https://github.com/Leetfs/blog/blob/main/.github%2Fworkflows%2Fdeploy-to-server.yml)搭建的

## 拒绝连接

走到这里就已经开始出问题了开始出现“拒绝推送的情况”

> push declined due to repository rule violations

我就开始上网找答案，有说改权限的，更改保护机制（Secret Protection）的都没有成功，但俗话说三步之内必有解药，我就在 Powershell 的链接中找到了答案，当时没有截图也就不放图片了，第一个问题迎刃而解

## 代码冲突

这个是我在使用[原作者](https://github.com/tcdw/koi)给的模板库后重新上传文件遇到的大概意思是代码冲突，报错是这样的

> ! \[rejected]         main -> main (non-fast-forward)
> error: failed to push some refs to ''

查找答案之后先是采用 `git pull` 拉取下最新代码后面通过 `git push -f origin main` 强制提交
值得注意的是 `-f` 属性有一定的风险，不适合在团队合作中使用，可以先通过 `git status` 查看冲突文件（一般会有 `<<<<<<<` 或 `=======` 标记）或者查看[这篇文章](https://blog.devstream.io/posts/open-a-pr-in-github/#63pr-%E4%BA%A7%E7%94%9F%E4%BA%86%E5%86%B2%E7%AA%81%E5%A6%82%E4%BD%95%E8%A7%A3%E5%86%B3)寻找解决办法

## SSH 登录

在创建并修改好工作流之后便开始设置 GitHub Secrets 来同步推送了，设置好后却没提交完成，工作流显示

> ⚠️ \[INPUTS] Inputs not valid, aborting ...

![ssh](https://cdn.linexic.top/gh/LineXic/img/img/blog/github-action-ssh.webp)

大概就是 SSH 没连接上？后面我在服务器创建了 key

```shell
ssh-keygen -m PEM -t rsa -b 4096
```

这里我也没找到答案，可能还需要服务器免密登录？这个问题只能告一段落了

## 玄学

一些内容我在本地推送了但域名那边的内容去不见，这让我有点摸不着头脑，等等！好像和[《迁移记录》](https://www.linexic.top/post/qian-yi-ji-lu/)里的有点像？没想到上个博客的回旋镖打过来了，幸好我这次有点准备使用了`pnpm run dist` 应对，Vercel 和 GitHub 都会检查项目的静态文件生成列表就只能先这样了，只是不知道为什么我之前写文章都不用先生成静态文件后推送，这次怎么变麻烦点了（正在写 Action 想办法解决这个问题）

这一天天的都什么事啊！！
