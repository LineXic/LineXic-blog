---
title: '使用 Vercel Neon 搭建 Umami 统计'
description: 'Vercel 自部署 Umami 统计，使用 Neon 数据库免费部署，讲解了如果忘记密码应该怎么找回'
pubDate: '2025-04-19'
updatedDate: 2026-10-15
---

> 由于我自己重看这篇文章并根据我这篇文章去搭建 Umami 项目时都没搭建完成，我意识到这篇文章可能落后了于是重写

## 首先

1. 打开[Umami](https://github.com/umami-software/umami)官方仓库并点击 `Fork` 复制到你的 GitHub 账户下
2. 打开 [Vercel](https://vercel.com/) 点击  `Create New` 下的 `Project` 并找到你刚 `Fork` 的项目并导入（`import`）

![导入项目页面](https://img.linexic.top/file/CSElEHMU.webp)

3. 在 `Application Preset` 处填入技术栈 `nuxt.js` 在 `Environment Variables` 第一栏填入`DATABASE_URL` ，第二栏填入环境变量，例如 `postgresql://username:mypassword@/`

 ![下一步](https://img.linexic.top/file/RoyLVTD3.webp)


## 获得Neon数据库

![neon.jpg](https://cdn.linexic.top/gh/LineXic/img/img/blog/neon.webp)

注册 Neon 数据库并完成登录后，点击 `New Project` 按钮创建项目

![New Project](https://cdn.linexic.top/gh/LineXic/img/img/blog/NewProject.webp)

从上到下依次是项目名称，数据库名称，云服务托管商和云服务所在地区，选择距离我们近的地方反应会更快填写完成后点击 `Create` 按钮创建项目

点击 `Connect` 按钮进入数据库连接页面复制保存下来

![数据库连接](https://cdn.linexic.top/gh/LineXic/img/img/blog/Connect.webp)

然后将所需的环境变量`DATABASE_URL`的值替换为复制的数据库连接字符串，点击 `Save` 按钮保存后就可以等待部署结果了

默认用户名和密码是`admin`和`umami`，登录后可以在  站内修改，最后在 Vercel 绑定域名就大功告成啦

## 忘记了密码怎么办

登录 [Neon](https://console.neon.tech/) 找到你的项目按图示找到 `SQL Editor` 

![sqi](https://img.linexic.top/file/qFZm0eCp.webp)

![SQL Editor](https://img.linexic.top/file/1TGRBZL9.webp)

在上图页面填入如下代码，在对应位置填入你想要的信息，`Ruin` 一下看看是否报错，没有问题就可以保存了，至此修改密码部分结束

```sql
UPDATE "user"
SET password = crypt('这里填你的新密码', gen_salt('bf', 10))
WHERE username = 'admin'
RETURNING user_id, username, left(password, 7) AS hash_prefix;
```