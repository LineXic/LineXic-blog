---
title: '【termux】安装kali'
description: '折腾termux的一篇'
pubDate: '2023-10-03'
---

![封面图](https://cdn.linexic.top/gh/LineXic/img/img/kali.webp)

## 你需要准备的

* [termux](https://termux.dev/en/ "termux")（官网
* [termux](https://github.com/termux/termux-app/)（GitHub下载
* 一双手，一部手机，一个键盘（不是

先打开打开Termux，先切换pkg源

```bash
sed -i 's@^\(deb.*stable main\)$@#\1\ndeb https://mirrors.tuna.tsinghua.edu.cn/termux/termux-packages-24 stable main@' $PREFIX/etc/apt/sources.list && apt update && apt upgrade
```

## 什么是kali

Kali Linux 是专门用于渗透测试的Linux操作系统，它由BackTrack发展而来。在整合了IWHAX、WHOPPIX和Auditor这三种渗透测试专用Live Linux后，BackTrack正式改名为Kali LInux。

> 更详细的参考这篇文章，本文具体介绍如何安装：\
> [blog.csdn.net/article/...113239157](https://blog.csdn.net/qq_45740212/article/details/113239157 "blog.csdn.net/article/...113239157")

## 正文

输入一下命令：

```bash
apt update
```

这是一个主要在新系统安装之后或安装新软件包之前调用的命令，更新

![Updating package list in Termux](https://cdn.linexic.top/gh/LineXic/img/img/blog/fcec169b4c4bdc28e6692.webp)

将软件包升级到最新版本：

```bash
apt upgrade
```

![Package upgrade process in Termux](https://cdn.linexic.top/gh/LineXic/img/img/blog/997a7e8810ccbb902d011.webp)

之后会选择yes或no，我们选择“Y“然后回车

![Prompt to choose yes or no during package upgrade](https://cdn.linexic.top/gh/LineXic/img/img/blog/5c703eff23100a60ae00e.webp)

等待一会

![Waiting for package upgrade to complete](https://cdn.linexic.top/gh/LineXic/img/img/blog/0353798d81cbb65577657.webp)
获得wget包信息。

```bash
apt update
```

要拥有共享存储，您需要授予Termux存储访问权限。不允许访问外部连接的存储设备。

```bash
termux-setup-storage
```

![Granting Termux storage access](https://cdn.linexic.top/gh/LineXic/img/img/blog/ac06eeb33eb0cb1765721.webp)
安装wget，当系统询问您是否要继续时，请按Y并回车。

```bash
apt install wget
```

![Installing wget package in Termux](https://cdn.linexic.top/gh/LineXic/img/img/blog/90ac854bb0bc1172ab3ce.webp)

当询问您“是否要继续”时，按Y并回车。

![Prompt to continue installation](https://cdn.linexic.top/gh/LineXic/img/img/blog/174877f0922981ab33a38.webp)

下载NetHunter安装文件。确保输入正确的地址。

```bash
wget -O install-nethunter-termux https://offs.ec/2MceZWr
```

![Downloading NetHunter installation file](https://cdn.linexic.top/gh/LineXic/img/img/blog/de3e7875b950eb41bf838.webp)

更改权限以便可以执行文件：

```bash
chmod +x install-nethunter-termux
```

![Changing file permissions for execution](https://cdn.linexic.top/gh/LineXic/img/img/blog/3cb3772ea606cb8178dbf.webp)

键入以下命令以执行下载的安装文件

```bash
./install-nethunter-termux
```

![Executing the downloaded installation file](https://cdn.linexic.top/gh/LineXic/img/img/blog/c0eca379366d830ef94d1.webp)

安装将需要一段时间，当要求删除rootfs时，输入N。

![Prompt to delete rootfs during installation](https://cdn.linexic.top/gh/LineXic/img/img/blog/698982ac5796d86bf37cf.webp)

> 最后查看[kali官网](https://www.kali.org/ "kali官网")或者上网查询了解更多kali用法
> 以上所有图源来自[油管视频文档](https://m.youtube.com/watch?v=KxOGyuGq0Ts\&t=186s "油管视频文档")
