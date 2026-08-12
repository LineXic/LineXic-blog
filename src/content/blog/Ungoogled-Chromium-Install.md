---
title: 'Ungoogled Chromium 初体验安装'
description: '作为一个重度浏览器控一直在尝试不同的浏览器，最近在博友的推荐下尝试了 Ungoogled Chromium 提升隐私了与使用体验'
pubDate: '2026-08-12'
---

## 前言

在早些时候我一直有用 Chromium 系的浏览器，比如 Edge，Chrome 等。后来在了解到 Firefox 后便在这条道路上越走越远，当时 Firefox 国内版还没有关停服务我便使用的国内版（当时其实也不知道有国内和国际两种版本的区分，只是了解到它可以在手机上使用扩展并且还是开源的就使用了，后来一次偶然使用到国际版一看我的数据怎么没了？！了解后才逐步使用国际版），用上国际版后我发现 Firefox 的各项数值符合我的使用习惯就深入使用了 Firefox，期间还了解到不少开源浏览器，如：[Iceraven](https://github.com/fork-maintainers/iceraven-browser)，[Brave](https://github.com/brave/brave-browser)，[Cromite](https://github.com/uazo/cromite)，[Ladybird](https://github.com/LadybirdBrowser/ladybird)等，今天要介绍的浏览器 Ungoogled Chromium 便是在这一段时间了解到的

## 介绍

ungoogled-chromium 可以理解为一款删去了 Google 服务的浏览器，保持简洁的同时还注重隐私并且还添加了新的 [flags](https://github.com/ungoogled-software/ungoogled-chromium/blob/master/docs/flags.md),它的打开页面是这样的，不需要登录 Google 不需要注册账号正如它的名字一样`ungoogled`
![ungoogled-chromium.png](https://img.linexic.top/file/PUWRQLrT.png)
这款开源浏览器的主仓库在这里：[ungoogled-software/ungoogled-chromium](https://github.com/ungoogled-software/ungoogled-chromium)还有 [Windows](https://github.com/ungoogled-software/ungoogled-chromium-windows)，[Linux](https://github.com/ungoogled-software/ungoogled-chromium-archlinux) 等版本，这些在作者的[主页](https://github.com/ungoogled-software)也可以找到

## 下载和安装扩展

你大可以在 [Windows](https://github.com/ungoogled-software/ungoogled-chromium-windows) 版本的仓库的 [Releases](https://github.com/ungoogled-software/ungoogled-chromium-windows/releases) 或者找到你适配的系统那里下载，但是个人认为使用 [Scoop](https://scoop.sh/) 更新更加方便,打开你的 PowerShell

```bash
scoop bucket add extras
```

```bash
scoop install ungoogled-chromium
```

由于家里网络的问题我安装不是很顺利，在讯问里了 [ChatGpt](https://chatgpt.com/share/6a7c9537-c53c-83ee-a7f8-b31416febd90) 和 [DeepSeek](https://chat.deepseek.com/share/chpxkbx19ioqlnkuqg) 两位 Ai 助手后知道了可以用镜像站和 jsd 代理下载

安装好后你会发现不能使用扩展，不要慌不妨打开 `chrome://flags/#extension-mime-request-handling ` 页面，将默认的设置切换为`Always prompt for install`,然后下载  [Chromium-Web-Store](https://github.com/NeverDecaf/chromium-web-store/releases) 用来检查和更新扩展，关于一些配置方面可以查看[【Mugzx's Blog】Ungoogled Chromium 简单体验及配置](https://blog.mugzx.top/2025/ungoogled-chromium#%E5%8A%9F%E8%83%BD%E9%85%8D%E7%BD%AE)一文