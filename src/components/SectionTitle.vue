<template>
  <header class="section-title">
    <p class="section-title__eyebrow">{{ eyebrow }}</p>
    <h2>{{ title }}</h2>
    <p v-if="description" class="section-title__description">{{ description }}</p>
  </header>
</template>

<script setup>
const props = defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  description: { type: String, default: '' }
})
</script>

<style scoped>
.section-title {
  display: grid;
  gap: 0.65rem;
}

.section-title__eyebrow {
  margin: 0;
  color: var(--accent);
  font-size: 0.85rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.section-title h2 {
  margin: 0;
  font-size: clamp(1.8rem, 2.2vw, 2.8rem);
  max-width: 14ch;
}

.section-title__description {
  margin: 0;
  color: var(--text-secondary);
  max-width: 54rem;
}
</style>
