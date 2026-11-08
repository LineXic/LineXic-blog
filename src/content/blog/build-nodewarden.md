---
title: '如何通过 NodeWarden 来搭建自己的密码部署服务的'
description: '介绍了一个自建密码储存的开源项目以及我是如何搭建它的并且和 Bitwarden 同步'
pubDate: '2026-11-08'
---
![nodewarden.svg](https://cdn.linexic.top/gh/LineXic/nodewarden/node.svg)

## 介绍

我用 Bitwarden 这个密码管理器已经很长时间了用起来已经顺手了，只是感觉将我这么依赖的一个工具储存网页密码的需要交给一个第三方一直不太放心，前几天看到柳神的[项目推荐](https://blog.liushen.fun/posts/e4a369fc/#nodewarden)中提到了它感觉还不错正好也有一个域名闲置就部署了一个玩

NodeWarden是一个`运行在 Cloudflare Workers 上的 Bitwarden 兼容服务端`支持同步 Bitwarden 上的密码库和导入导出自己的密码密码数据储存在 R2 或 Kv 项目第一次处理请求时会自动初始化 D1 这就方便了用户不用自己上传 SQL 并且也会自动绑定
![自动绑定展示](https://img.linexic.top/file/YlRYUCIW.webp)
## 部署
> [README_ZH](https://github.com/shuaiplus/nodewarden/blob/main/README_ZH.md) 里有比较详细的部署教程，这里补充一些可视化操作图片

1. [fork](https://github.com/shuaiplus/nodewarden/fork) 到自己的仓库下后进入 [Workers & Pages](https://dash.cloudflare.com/?to=/:account/workers-and-pages/create) 选择自己刚才 fork 的仓库
![Workers & Pages](https://img.linexic.top/file/0T0uY8pl.webp)
2. 配置部署命令：构建命令填 `npm run build`，部署命令填 `npm run deploy`
- 如果你打算用 KV 模式而不用 D1，把部署命令改成 `npm run deploy:kv`
![部署命令填写](https://img.linexic.top/file/UYTZZia0.webp)
部署完成后将会显示类似如下界面，这个时候你就可以绑定域名了
![部署完成](https://img.linexic.top/file/2CGVBQTr.webp)
3. 还没完这个时候打开页面会提示你缺少 `JWT_SECRET` 值这个时候打开项目里的设置找到`运行时变量和密钥`变量填写 `JWT_SECRET` 值就填提示框下给你生成好的 **32 位随机字符**这时候保存并重新部署才算真正的部署完成！往下就是注册一个账号并记住自己的密码
![运行时变量和密钥](https://img.linexic.top/file/pl2MkA4m.webp)
![部署完成](https://img.linexic.top/file/hBLqtPuc.webp)

## 备份

考虑到数据的安全我们还需要用 S3 和访问 ID 

1. 打开[创建储存桶](https://dash.cloudflare.com/?to=/:account/r2/new)页面按照提示输入存储桶名称，直接创建
2. 完成后复制下来 `S3 端点 URL` 和`储存桶名称`这一个需要用到。打开 [API 创建页面](https://dash.cloudflare.com/?to=/:account/r2/api-tokens/create?type=user)，权限全选`对象读和写`，创建后复制下来`访问密钥 ID`填到`访问 ID`，`机密访问密钥`填到访问密码。保存后可以手动执行一下后查看自己的储存桶有没有传进文件
![填写](https://img.linexic.top/file/0Tw3CGXj.webp)

## 同步

Nodewarden 还支持与 Bitwarden 的同步，应用，浏览器扩展等都可以使用，这里用 Firefox 的 Bitwarden 的扩展做演示，版本：`2026.10.2` 

打开 Bitwarden 的登录页面，选择自托管后填写服务器 url 也就是你部署好后绑定或 work 自带的域名，填写你注册使用的邮箱和主密码
![Bitwarden](https://img.linexic.top/file/Ny7TSyqK.webp)
登录上之后导入你从浏览器或原 Bitwarden 账号导出的密码，点击同步你就可以看到你的网页端也出现了密码，相反同理，总之就是这两端可以互通就是了

不过需要提醒一下，原 Bitwarden 导出的密码不包含通行密钥，所以需要重新配置一下