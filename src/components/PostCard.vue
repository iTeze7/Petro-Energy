<template>
  <article class="post-card">
    <div class="post-card__image" v-if="post.image">
      <img :src="post.image" :alt="post.title" />
    </div>
    <div class="post-card__content">
      <div class="post-card__header">
        <span class="post-card__meta">{{ post.category }}</span>
        <time :datetime="post.date">{{ post.date }}</time>
      </div>
      <h3>{{ post.title }}</h3>
      <p>{{ post.excerpt }}</p>
      <router-link :to="`/posts/${post.id}`" class="button button--secondary" aria-label="Ler post completo {{ post.title }}">
        Ler mais
      </router-link>
    </div>
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
  padding: 0;
  background: linear-gradient(180deg, rgba(15, 24, 42, 0.95), rgba(10, 18, 29, 0.98));
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform 200ms ease, box-shadow 200ms ease;
}

.post-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 60px rgba(201, 166, 77, 0.1);
}

.post-card__image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(201, 166, 77, 0.1), transparent);
}

.post-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 300ms ease;
}

.post-card:hover .post-card__image img {
  transform: scale(1.05);
}

.post-card__content {
  padding: 1.6rem;
  display: grid;
  gap: 1rem;
  flex: 1;
}

.post-card__header {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  color: var(--text-secondary);
  font-size: 0.95rem;
  flex-wrap: wrap;
}

.post-card__meta {
  color: var(--accent);
  font-weight: 700;
  white-space: nowrap;
}

.post-card h3 {
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.3;
}

.post-card p {
  margin: 0;
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.5;
  flex: 1;
}

.button--secondary {
  margin-top: 0.5rem;
  padding: 0.9rem 1.3rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--text-primary);
  width: fit-content;
}

@media (max-width: 768px) {
  .post-card {
    border-radius: 20px;
  }

  .post-card__image {
    height: 180px;
  }

  .post-card__content {
    padding: 1.2rem;
    gap: 0.8rem;
  }

  .post-card h3 {
    font-size: 1rem;
  }

  .post-card p {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .post-card__image {
    height: 150px;
  }

  .post-card__content {
    padding: 1rem;
    gap: 0.6rem;
  }

  .post-card h3 {
    font-size: 0.95rem;
  }

  .post-card__header {
    font-size: 0.85rem;
  }
}
</style>
