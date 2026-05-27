<template>
  <article class="post-card">
    <div class="post-card__header">
      <span class="post-card__meta">{{ post.category }}</span>
      <time :datetime="post.date">{{ post.date }}</time>
    </div>
    <h3>{{ post.title }}</h3>
    <p>{{ post.excerpt }}</p>
    <router-link :to="`/posts/${post.id}`" class="button button--secondary" aria-label="Ler post completo {{ post.title }}">
      Ler mais
    </router-link>
  </article>
</template>

<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.post-card {
  padding: 1.6rem;
  background: linear-gradient(180deg, rgba(15, 24, 42, 0.95), rgba(10, 18, 29, 0.98));
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 28px;
  display: grid;
  gap: 1rem;
}

.post-card__header {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.post-card__meta {
  color: var(--accent);
  font-weight: 700;
}

.post-card h3 {
  margin: 0;
}

.post-card p {
  margin: 0;
  color: var(--text-secondary);
}

.button--secondary {
  margin-top: 0.5rem;
  padding: 0.9rem 1.3rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--text-primary);
}
</style>
