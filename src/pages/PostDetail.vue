<template>
  <section class="page-section" aria-labelledby="post-detalhe-titulo">
    <div class="article-shell" v-if="post">
      <header class="article-header">
        <span class="post-label">{{ post.category }}</span>
        <h1 id="post-detalhe-titulo">{{ post.title }}</h1>
        <p class="article-meta">Publicado em {{ post.date }}</p>
      </header>

      <article class="article-body">
        <p v-for="(paragraph, index) in post.content" :key="index">{{ paragraph }}</p>
      </article>

      <router-link to="/posts" class="button">Voltar aos posts</router-link>
    </div>
    <div class="not-found" v-else>
      <h2>Post não encontrado</h2>
      <p>O conteúdo solicitado não está mais disponível. Retorne à lista de publicações.</p>
      <router-link to="/posts" class="button">Ver Posts</router-link>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { postDetails } from '@/data/mockData'

const route = useRoute()
const post = computed(() => postDetails.find((item) => item.id === route.params.id))
</script>

<style scoped>
.page-section {
  padding: 3rem 0;
}

.article-shell {
  display: grid;
  gap: 2rem;
}

.article-header {
  display: grid;
  gap: 1rem;
}

.post-label {
  display: inline-flex;
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
  background: rgba(201, 166, 77, 0.12);
  color: var(--accent);
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.article-header h1 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 3rem);
}

.article-meta {
  margin: 0;
  color: var(--text-secondary);
}

.article-body {
  display: grid;
  gap: 1.3rem;
  color: var(--text-secondary);
  max-width: 680px;
}

.article-body p {
  margin: 0;
}

.not-found {
  padding: 2rem;
  background: var(--bg-surface);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 28px;
}
</style>
