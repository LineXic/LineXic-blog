<template>
  <div class="articles">
    <h1>最新文章</h1>
    <ul class="articles-list">
      <li v-for="article in articles" :key="article.link" class="article-item">
        <a :href="article.link" target="_blank" class="article-link">
          {{ article.title }}
          <span class="article-date">{{ formatDate(article.pubDate) }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

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

<style>
.articles {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}

.articles-list {
  width: 100%;
  max-width: 800px;
  list-style: none;
  padding: 0;
}

.article-item {
  margin: 1rem 0;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  width: 100%;
}

.article-link {
  color: #42b983;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.article-date {
  color: #666;
  font-size: 0.9em;
  margin-left: 1rem;
}
</style>