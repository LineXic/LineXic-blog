---
layout:     post
title:      "手把手教你用hexo和手机termux搭建一个个人静态博客"
subtitle:   "手把手教你用hexo和手机termux搭建一个个人静态博客"
date:       2023-11-05 12:11:00
author:     "LineXic"
header-img: "img/hexo.jpg"
catalog:    true
tags:
    - hexo
    - termux
    - 静态博客
---

>本帖为转载的学习笔记，
原帖在CSDN
>[http://t.csdnimg.cn/AlEIR](http://t.csdnimg.cn/AlEIR)

# 前言

[hexo](https://hexo.io/zh-cn/ "hexo")是一个用 Nodejs 编写的快速、简洁且高效的博客框架。Hexo 使用 Markdown 解析文章，在几秒内，即可利用靓丽的主题生成静态网页。

下面介绍在Termux中安装个人hexo博客并结合cpolar工具实现远程访问。

## 1.hexo

Hexo 是用 Nodejs 编写的，所以安装的话先安装node.js,termux 也是封装了,一行命令安装:
```bash
pkg install nodejs
```

安装后使用npm命令来安装hexo：
```bash
npm install hexo-cli -g
```

安装完成后，查看一下版本信息,检验是否安装成功：
```bash
hexo -v
```
[![hexo -v](https://img.linexic.top/file/57d2e82e58f906c1e394b.png)](https://img.linexic.top/file/57d2e82e58f906c1e394b.png)

创建一个hexo目录
```bash
mkdir hexo
```

进入目录
```bash
cd hexo
```

初始化hexo环境
```bash
hexo init
```

初始好后生成静态文件:
```bash
hexo g
```

启动hexo
```bash
hexo s
```

[![](https://img.linexic.top/file/5e71852f3bb8b9bd18468.png)](https://img.linexic.top/file/5e71852f3bb8b9bd18468.png)

我们打开浏览器,输入上面的访问链接,即可看到hexo

[![](https://img.linexic.top/file/9fb7e6df5817bfc637cec.png)](https://img.linexic.top/file/9fb7e6df5817bfc637cec.png)

上面启动方式是在前台界面启动hexo，不是很方便我们做其他操作,所以我们改为后台启动,先使用Ctrl+C键停止hexo

[![](https://img.linexic.top/file/865133a2acc48627be907.png)](https://img.linexic.top/file/865133a2acc48627be907.png)

然后我们使用nohup 后台启动,启动后我们可以按到PID:

```bash
nohup hexo s &
```

[![](https://img.linexic.top/file/b63c68542599d9aea1184.png)](https://img.linexic.top/file/b63c68542599d9aea1184.png)

关闭的方式也很简单,使用kill命令:
```bash
kill -9 PID
```

新建完成后，指定文件夹的目录如下：
```bash
.
├── _config.yml
├── package.json
├── scaffolds
├── source
|   ├── _drafts
|   └── _posts
└── themes
```
>[hexo文档](https://hexo.io/zh-cn/docs/setup "hexo文档")

以上我们就安装好了hexo博客,下面我们进行安装cpolar

## 2.安装cpolar
创建一个sources.list.d的文件夹:
```bash
mkdir -p $PREFIX/etc/apt/sources.list.d
```

添加cpolar下载源文件

```bash
echo "deb [trusted=yes] http://termux.cpolar.com termux extras" >> $PREFIX/etc/apt/sources.list.d/cpolar.list
```

更新仓库
```bash
pkg update
```

安装cpolar
```bash
pkg install cpolar
```

安装termux服务，注意: 安装完成后记得关闭重启一下termux 才生效!!
```bash
pkg install termux-services
```

重启完termux后，然后启动cpolar
```bash
sv up cpolar
```

设置开机自启
```bash
sv-enable cpolar
```

这个是停止cpolar 服务
```bash
sv down cpolar
```

cpolar.yml主配置文件路径位置

```bash
sv-enable cpolar
```

这个是停止cpolar 服务
```bash
sv down cpolar
```

cpolar.yml主配置文件路径位置

```bash
$PREFIX/etc/cpolar/cpolar.yml
```

然后在手机浏览器我们输入http://localhost:9200
即可看到cpolar管理界面,使用 [cpolar](https://www.cpolar.com/ "cpolar")注册的账号即可登陆
[![](https://img.linexic.top/file/ecf45835a2df65f2fad26.png)](https://img.linexic.top/file/ecf45835a2df65f2fad26.png)

## 3.远程访问
手机浏览器打开cpolar 管理界面,我们点击左侧仪表盘的隧道管理——创建隧道,上面我们通过本地访问看到了端口号是4000，因此我们要来创建一条http隧道，指向4000端口：

隧道名称：可自定义，注意不要重复<br/>
协议：http<br/>
本地地址：4000<br/>
域名类型：选择随机域名<br/>
地区：选择China VIP<br/>
[![](https://img.linexic.top/file/c572403c1da04339c7c34.png)](https://img.linexic.top/file/c572403c1da04339c7c34.png)

创建成功后打开在线隧道列表,可以看到公网访问的地址,有两种访问方式,一种是http,一种是https

![](https://img.linexic.top/file/7ad10a8bdc7b7fb5b2d34.png)

然后我们使用其中一种http方式地址在浏览器访问,即可看到我们的Hexo博客界面,这样这个远程访问就配置好了
![](https://img.linexic.top/file/79ee5a6db5e6ee94f58a1.png)

## 4.固定公网地址
上面创建是免费随机地址,24小时内变化,为了方便长久稳定连接,我们可以固定访问地址,在cpolar中叫固定二级子域名，当然你也可以配置使用你自己的域名来访问。

>需升级至基础套餐或以上才支持配置二级子域名

登录[cpolar后台官网](https://dashboard.cpolar.com/ "cpolar后台官网")，点击左侧仪表盘的预留，找到保留二级子域名，为http隧道保留一个二级子域名。

地区：选择服务器地区<br/>
名称：填写您想要保留的二级子域名（可自定义）<br/>
描述：即备注，可自定义填写<br/>
![](https://img.linexic.top/file/b9c65eef22c0b329c7550.png)

本例保留一个名称为hexoblog的二级子域名。子域名保留成功后，我们将子域名复制下来，接下来需要将其配置到隧道中去。

![](https://img.linexic.top/file/6bb359653c72f42b45f79.png)

登录cpolar web ui管理界面，点击左侧仪表盘的隧道管理——隧道列表，找到需要配置二级子域名的隧道，点击右侧的编辑

![](https://img.linexic.top/file/ba55ba7fa31789aebb748.png)
修改隧道信息，将二级子域名配置到隧道中：

域名类型：改为选择二级子域名<br/>
Sub Domain：填写我们刚刚所保留的二级子域名（本例为hexoblog）

修改完成后，点击更新
![](https://img.linexic.top/file/9683914a6439f7c38380a.png)
隧道更新成功后，点击左侧仪表盘的状态——在线隧道列表，可以看到隧道的公网地址，已经更新为二级子域名了.
![](https://img.linexic.top/file/fc4b95e4ca312ccda615a.png)
然后我们使用其中一种http方式地址在浏览器访问,即可看到我们的Hexo博客界面,这样一个固定不变的远程访问hexo博客就配置好了【cpolar.cn已备案，因此无需备案】。

我们只需要保持隧道正常在线，公网用户就可以通过这个公网地址来访问到手机termux上的博客网站。
>[cpolar.com/blog/...website](https://www.cpolar.com/blog/android-termuxhexo-build-your-own-blog-website "cpolar.com/blog/...website")

#创建文章
```bash
hexo new [layout] <title>
```

新建一篇文章。如果没有设置 layout 的话，默认使用 [_config.yml](https://hexo.io/zh-cn/docs/configuration "_config.yml") 中的 default_layout 参数代替。如果标题包含空格的话，请使用引号括起来。

# 使用 vim 编辑文件
- [什么是vim](https://www.runoob.com/linux/linux-vim.html "什么是vim")

安装vim
```bash
pkg install vim
```
进入编辑帖子
```bash
vim 文章名字.md
```
