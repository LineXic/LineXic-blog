---
title: '利用VUE实现RSS“归档”'
description: '因为主题没有内置归档所以只能依靠外部作用了，正好也为自己的个人站装修一下'
pubDate: '2025-04-06'
---

## 前言

在尝试使用Astro搭建归档无果后~~看来还需要多看文档~~我想到了在外部引入归档的方式~~虽然这样比较麻烦~~，于是准备通过vue来实现一个RSS的归档。

## 实现

初学vue自己也有一些地方不懂，参考了一些AI的代码，其核心是这一段

```vue
<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
const articles = ref([])

const parseRSS = async (xmlText) => {
  const parser = new DOMParser()
  const xmlDoc = parser.parseFromString(xmlText, "text/xml")
  return Array.from(xmlDoc.getElementsByTagName('item')).map(item => ({
    title: item.getElementsByTagName('title')[0].textContent,
    link: item.getElementsByTagName('link')[0].textContent,
    pubDate: item.getElementsByTagName('pubDate')[0].textContent
  }))
}

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('zh-CN')
}

onMounted(async () => {
  try {
    const response = await axios.get('https://www.linexic.top/rss.xml')
    articles.value = (await parseRSS(response.data)).slice(0, 10) // 显示最新10篇文章
  } catch (error) {
    console.error('获取RSS失败:', error)
  }
})
</script>
  ```

> [查看完整源码](http://linexic.top/code/ArchivesView.txt)

这里用`axios`解决了跨域问题，`parseRSS`函数解析了RSS的XML数据，`formatDate`函数用于格式化日期。如果没有安装`axios`可以通过以下命令安装

```bash
npm install axios

pnpm add axios

yearn add axios
```

我们使用vue的路由（[router](https://router.vuejs.org/zh/)）实现页面的跳转将它以

```vue
 <el-breadcrumb-item :to="{ path: '/archives' }">归档</el-breadcrumb-item>
```

的形式添加到面包屑导航中。

## 问题

本来以为所有工作已经完成却不想遇到了一个离谱的东西，如此GIF图
![离谱](https://s2.loli.net/2025/04/06/3DZSgVOazhwLlPr.gif)

后来询问ai也没有结果无奈询问群友原来还需要设置[vercel.json](https://vercel.com/docs/project-configuration)果然在文件中加入

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

居然就可以正常访问了。好厉害(*￣▽￣)d

最后在主题导航栏引入一个外部链接就大功告成了
