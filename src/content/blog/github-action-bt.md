---
title: '如何利用 Github Action 实现 Astro  博客静态文件自动上传到宝塔'
description: '经过一些折腾成功将 Astro 用上了那台年久不用的服务器，其他站点也陆续迁移进去'
pubDate: '2025-06-25'
---

## 前言

上个星期我打开了自己的雨云账号，发现里面还有一台服务器已经年久不用了而且还是 2c4g 的，不用白不用在那放着也怪可惜的就在网络上寻找将 Astro 迁移到宝塔的迁移方法学到了一些关于 Action 的知识于是开始上手折腾，无奈遇到的问题太多具体可以详见这一篇文章 [《我与博客的一天》](https://www.linexic.top/post/me-and-blog-day-git/)

## 正文

后来在开往群中求助最终得到了这样一份模板 [^1] 但模板出现了SSH 连接失败的问题，并不是工作流的原因，后来才知道需要配置一些私钥放在 Secrets 中（之前放的是服务器远程密码（逃））那么如何生成私钥并保证服务器安全呢

## 生成私钥

这一部分我观看了[这篇文章](https://www.yumus.cn/notes/2452.html)才明白过来，这里简单提要一下

1. 安装必要依赖

```bash
apt-get update          #更新软件
apt-get install sudo    #安装sudo
apt-get install vim     #安装vim
```

2. 创建用户组

```bash
sudo adduser 用户名  #创建用户
```

3. 生成密钥

```bash
ssh-keygen -t ed16618 -C "用户名@所用系统名" #比如 Ubuntu22
```

执行后会在服务器目录生成一个 .ssh 文件夹，里面有两个文件一个是 ***id_ed16618*** 另一个是 ***id_ed16618.pub***

4. 配置公钥

```bash
ssh-copy-id -i ~/.ssh/id_ed16618.pub 用户名@服务器IP
```

## 创建 Secrets

- SSH_PRIVATE_KEY：完整的 SSH 私钥内容
- SERVER_IP：服务器 IP 地址
- SERVER_USER：SSH 用户名（如 root 或 deployer）

![github-action-secrets](https://cdn.linexic.top/gh/LineXic/img/img/blog/github-action-secrets.webp)

我更改了一下工作流的内容使它更符合我的博客的特点，可以对比一下 [^2]

好的就先这样吧，又是进步的一天

[^1]: [deploy-to-server.yml](https://github.com/Leetfs/blog/blob/main/.github%2Fworkflows%2Fdeploy-to-server.yml)
[^2]: <https://www.linexic.top/code/deploy-to-server.txt>
