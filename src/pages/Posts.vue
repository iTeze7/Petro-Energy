<template>
  <section class="page-section" aria-labelledby="posts-titulo">
    <SectionTitle eyebrow="Publicações" title="Insights e análises para investidores" description="Acompanhe as últimas publicações com abordagem corporativa e estratégica." />

    <div class="posts-list">
      <article class="posts-card" v-for="post in recentPosts" :key="post.id">
        <div>
          <span class="post-label">{{ post.category }}</span>
          <h3>{{ post.title }}</h3>
          <p>{{ post.excerpt }}</p>
        </div>
        <div class="posts-card__footer">
          <time :datetime="post.date">{{ post.date }}</time>
          <router-link :to="`/posts/${post.id}`" class="button button--secondary">Ler mais</router-link>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from '@/components/SectionTitle.vue'
import { recentPosts } from '@/data/mockData'
</script>

<style scoped>
.page-section {
  padding: 3rem 0;
}

.posts-list {
  display: grid;
  gap: 1.5rem;
  margin-top: 2rem;
}

.posts-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.25rem;
  padding: 1.8rem;
  background: var(--bg-surface);
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.08);
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

.posts-card h3 {
  margin: 0;
}

.posts-card p {
  margin: 0;
  color: var(--text-secondary);
}

.posts-card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.button--secondary {
  background: rgba(255, 255, 255, 0.08);
}

@media (max-width: 640px) {
  .posts-card__footer {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
