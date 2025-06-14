---
title: 'windows搭建Minecraft Java服务器'
description: '因不满服于服务器厂商服务器的价格及各种限制所以折腾了一个Java服务器来和朋友们游玩'
pubDate: '2025-03-14'
---

## 前言

因为忍受不了服务器厂商服务器的价格及各种限制所以折腾了一个Java服务器来和朋友们游玩，同样的，如果没有电脑可以查看这篇文章来用手机搭建一个基岩版服务器

> [使用安卓手机无成本搭建 Minecraft 基岩版服务器（BDS）](https://blog.iamsjy.com/2023/07/11/install-mc-bds-on-android-phone-with-no-cost/)

## 准备

打开[Oracle官网](https://www.oracle.com/java/technologies/downloads/)找到适合自己系统的java

![下载oracle](https://www.linexic.top/img/blog/pEa0FVP.webp)
下载完成后双击安装，一直下一步即可，值得注意的是一般软件不要安装到C盘，因为C盘是系统盘，安装到C盘可能会导致启动电脑慢等问题

## 配置java

键入`win + x`打开搜索控制面板

![配置java](https://www.linexic.top/img/blog/pEa0arR.webp)

点击环境变量并且新建

![新建环境变量](https://www.linexic.top/img/blog/pEa0dq1.webp)

- 变量名：JAVA_HOME
- 变量值：为安装的java路径

双击系统变量中的Path，点击新建`%JAVA_HOME%\bin`
![新建](https://www.linexic.top/img/blog/pEa06Re.webp)

完成后保存，打开cmd输入`java -version`查看是否安装成功

## 下载服务端

> [下载Forge](https://files.minecraftforge.net/net/minecraftforge/forge/)

下载好后把它拖拽到一个新建的文件夹中

![pEaBkLR.png](https://www.linexic.top/img/blog/pEaBkLR.webp)

## 启动服务器

在那个文件夹内在右上角找到`文件`然后右边使用管理员身份打开后键入

```shell
java -Xmx最大值g -Xms最小值g -jar 下载的文件名字.jar
```

出现这个页面就可以安装了，安装路径最好是forge所在的路径下
![pEaDih8.png](https://www.linexic.top/img/blog/pEaDih8.webp)

等待安装基本文件后就可以在cmd中输入

```shell
java -jar minecraft_server.服务端端口号.jar --nogui
```

来启动服务器了，如果做出修改需要键入`stop`来停止服务器，再键入上一步来启动服务器

如果你的服务器在第一次启动过程中无故嘛没启动成功可以先在文件夹中找到`eula.txt`文件，将`eula=false`改为`eula=true`然后保存证明你同意他们的协议
关于server.properties文件内的配置请查看百科

> [服务端配置文件格式](https://zh.minecraft.wiki/w/%E6%9C%8D%E5%8A%A1%E7%AB%AF%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E6%A0%BC%E5%BC%8F?variant=zh-cn)

至于其他的如何发布到公网可以在度娘那里寻找内网穿透
