---
layout:     post
title:      "记一次Discuz!Q的宝塔部署全过程"
subtitle:   "记一次Discuz!Q的宝塔部署全过程"
date:       2024-08-22 00:00:00
author:     "LineXic"
header-img: "img/Discuz.jpg"
catalog:    true
tags:
    - Discuz!Q
    - 宝塔
---

> 本文章部分字段和全部图片来源于[文档](https://discuzq.icu/docs/)

# 前言

> 再小众，也有自己的圈子

相信很多在互联网深耕多年的人都有过要开论坛的想法吧，我之前也想过开一个论坛，这一个Discuz!Q是我开的第二个论坛，第一个论坛使用wp搭配zibi搭建的，当时还发了一个Q动态来分享我的喜悦

![zibi](https://img.linexic.top/file/328df091edd14938918da.png)

# 正文

> DiscuzQ 拥有完全开源、提供丰富接口、前后端分离、轻量化、数据独立可控、敏捷上云、快速变现七大能力。

## 1.安装宝塔

视服务器系统不同，宝塔官方给用户提供了不同的安装方案

Centos/OpenCloud/Alibaba稳定版9.0.0

```bash
yum install -y wget && wget -O install.sh https://download.bt.cn/install/install_lts.sh && bash install.sh ed8484bec
```

Debian 安装脚本稳定版9.0.0

```bash
wget -O install.sh https://download.bt.cn/install/install_lts.sh && bash install.sh ed8484bec
```

Ubuntu/Deepin 安装脚本稳定版9.0.0

```bash
wget -O install.sh https://download.bt.cn/install/install_lts.sh && sudo bash install.sh ed8484bec
```

稳定版9.0.0 通用安装脚本

```bash
url=https://download.bt.cn/install/install_lts.sh;if [ -f /usr/bin/curl ];then curl -sSO $url;else wget -O install_lts.sh $url;fi;bash install_lts.sh ed8484bec
```

正式版9.1.0 通用安装脚本

```bash
if [ -f /usr/bin/curl ];then curl -sSO https://download.bt.cn/install/install_panel.sh;else wget -O install_panel.sh https://download.bt.cn/install/install_panel.sh;fi;bash install_panel.sh ed8484bec
```

> 本文演示使用Ubuntu系统，PHP7.4为例，下面将默认你已经安装并熟练使用宝塔面板

### 安装扩展

首先安装PHP扩展`fileinfo`和`exif`，点击【软件商城】找到【设置】，找如下图
![PHP扩展](https://main.qcloudimg.com/raw/63a722f7fd3a159978343331d14d9736.png)

找到PHP版本，点击设置，以7.4为例（图片是7.2）
![7.4](https://main.qcloudimg.com/raw/b63aed08a014d1821f75281192561aad.png)

在弹出的 【php 管理】窗口中，单击【安装扩展】，进行安装扩展设置
![扩展](https://main.qcloudimg.com/raw/189db4e283e426bf9d704e647c3349e3.png)

点击对应插件并确认安装，如图
![安装](https://main.qcloudimg.com/raw/35c37af44765699060f45a2b3f672df5.png)

### 删除禁用函数

Discuz！Q 需删除禁用的函数` putenv`、`readlink`、`symlink`、`shell_exec`，部署前需对 PHP 进行相关配置

![禁用函数](https://main.qcloudimg.com/raw/0c31e34664a77eeb07cc3a517b19dae3.png)

### 创建站点

![创建站点](https://main.qcloudimg.com/raw/59f1d176aa8cd67b6fc21bea433e802a.png)
创建并填写信息
![填写](https://main.qcloudimg.com/raw/e447eebc5b027ee24615721c18085d0c.png)

- MySQL使用5.7.9以上
- PHP使用7.2版本以上，最好使用PHP7.4
- 上传并解压[源码](https://www.123pan.com/s/PVUuVv-Ffd8.html)

### 修改配置

在宝塔控制台中，单击【网站】，并选择已创建 Discuz！Q 站点，单击【设置】并点击网站目录

![设置](https://main.qcloudimg.com/raw/266a9747c34988e8c1c4c438b88793c9.png)
运行目录填写`/public`
![修改](https://main.qcloudimg.com/raw/7da0693dcb1f6c27ce6f69ec2f50bbfb.png)

### 设置伪静态并修改Nginx

点击伪静态添加如下代码

```js
location / {
  try_files $uri $uri/ /index.php?$query_string;
}
```

接下来
- 单击【软件商城】，并查找到您安装的 Nginx。
- 单击 Nginx 操作栏的【设置】。
- 在弹出的【nginx管理】窗口中，单击【配置修改】
- 在【配置修改】中查找到`gzip_types`字段并在前端添加`application/json`和末尾处添加`application/vnd.api+json`代码后重启Nginx服务

![Nginx](https://main.qcloudimg.com/raw/74128e9f20252192ced5a0fc7a1e6ad4.png)

接下来访问你的站点愉快游玩吧，安装栏中的表前缀是可以不填的，其他在创建站点时都有，站点信息、管理员姓名和密码可以自定义
