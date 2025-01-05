---
layout:     post
title:      "【前端26】盒子模型简单介绍"
subtitle:   "【前端26】盒子模型简单介绍"
date:       2025-01-05 00:26:22
author:     "LineXic"
header-img: "img/"
catalog:    true
tags:
    - CSS
    - 前端
---
# 前言

> 本文基于[尚硅谷Web前端基础](https://b23.tv/Wky0XJk)教程发布，你也可以理解成这是一篇尚硅谷教程笔记，当然这里也有我的一些经验总结

# 盒子模型 & 盒模型
> box model的翻译

![盒子模型](https://s2.loli.net/2025/01/05/BVXk3qfCpRTn1IM.png)

<code>盒子模型</code>是一个CSS基础渲染标准，旨在为网页设计时添加布局渲染一个元素应该放在那个位置而设置一个矩形盒子，一般的盒子模型有以下几种组成
- 内容区（content）
- 内边距（padding）
- 边框区（border）
- 外边距（margin）

这是我们来看一张图片
![CSS盒子模型](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model/boxmodel.png)
这是一个比较典型的盒子图，图片来自[MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)图中黑线以内的是内容区，黑线意外白的部分叫内边距，蓝线是边框蓝线以外的就是外边距了

## 内容区
简单来说文字等样式都将在内容区排列组合，下面用CSS直观感受一下
```html
<div class="box1"></div>
<style>
.box1 {
  width: 200px;
  height: 200px;
  background-color: #bfa
}
<style>
```
还记得上篇说的吗？无论是块元素还是行内元素在不指定宽高的情况下其宽高都是"贴身的"，也就是说宽高是被文字撑起来的，所以说内容区的大小是由width和height决定的
![样式](https://s2.loli.net/2025/01/05/ymToFYQ8ZqJhi1f.png)
## 边框
边框是内容区包裹的部分，边框的大小会影响整个盒子的大小，要想设置边框需要有至少三个样式「边框的宽高度，颜色和样式」这三个属性名何以这样记'`边框的英文名border+属性值`
```css
.box1 {
  width: 200px;
  height: 200px;
  background-color: #bfa;
  /* 以下为边框部分的样式 */
  border-width: 20px;
  border-color: red;
  border-style: solid; /* 其中soild表示实线 */
}
```
![边框样式](https://s2.loli.net/2025/01/05/rAnyvleTRHX6CEk.png)

🎉完结 这一篇就是一个简单的介绍，盒子模型是CSS中必不可少的浏览器渲染标准之一，由CSS 决定这些盒子的大小、位置以及属性（如颜色、背景、边框尺寸等）
