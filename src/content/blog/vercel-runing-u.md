---
title: '使用 vercel Neon 搭建 umami 统计'
description: 'vercel 自部署 umami 统计，使用Neon数据库免费部署'
pubDate: '2025-04-19'
---

[![vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fumami-software%2Fumami&env=DATABASE_URL)

> 如果你点击的上方按钮可以直接跳到第四步下面会讲如何获得数据库

## 配置

1. 点击[Fork](https://github.com/umami-software/umami/fork) 即可
2. 导入后点击 `Settings` 进入设置页面，这时部署可能会报错，需要配置环境变量
3. 点击 `Environment Variables` 进入环境变量页面
4. 点击 `Add Variable` 按钮，添加 `DATABASE_URL` 环境变量，例如 `postgresql://username:mypassword@/`
5. 点击 `Save` 按钮保存
6. 点击 `Deployments` 进入部署页面
7. 点击 `Visit` 按钮进入网站

![vercel-umail](https://www.linexic.top/img/blog/vercel-umail.webp)

## 获得Neon数据库

![neon.jpg](https://www.linexic.top/img/blog/neon.webp)

 注册Neon数据库并完成登录后，点击 `New Project` 按钮创建项目
 ![New Project](https://www.linexic.top/img/blog/NewProject.webp)

从上到下依次是项目名称，数据库名称，云服务托管商和云服务所在地区，选择距离我们近的地方反应会更快填写完成后点击 `Create` 按钮创建项目

点击 `Connect` 按钮进入数据库连接页面复制保存下来

![数据库连接](https://www.linexic.top/img/blog/Connect.webp)

然后将所需的环境变量`DATABASE_URL`的值替换为复制的数据库连接字符串，点击 `Save` 按钮保存后并重新部署

默认用户名和密码是`admin`和`umami`，登录后可以在  页面修改，最后在vercel绑定域名就大功告成啦
