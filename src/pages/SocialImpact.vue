<template>
  <section class="page-section" aria-labelledby="social-impact-title">
    <SectionTitle eyebrow="Compromisso social" title="Projetos sociais e ambientais" description="Projetos de impacto que conectam energia, educação e sustentabilidade ao desenvolvimento local." />

    <div class="social-grid">
      <article class="social-card" v-for="project in socialProjects" :key="project.title">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <strong>{{ project.metric }}</strong>
      </article>
    </div>

    <div class="impact-panel">
      <h2>Indicadores sociais</h2>
      <div class="impact-grid">
        <div class="impact-card">
          <span>86%</span>
          <p>dos projetos concluídos com avaliação positiva da comunidade</p>
        </div>
        <div class="impact-card">
          <span>92%</span>
          <p>de redução no consumo de água em operações sustentáveis</p>
        </div>
        <div class="impact-card">
          <span>14k</span>
          <p>participantes em treinamentos técnicos nos últimos 12 meses</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from '@/components/SectionTitle.vue'
import { socialProjects } from '@/data/mockData'
</script>

<style scoped>
.page-section {
  padding: 3rem 0;
}

.social-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.social-card {
  padding: 1.8rem;
  background: linear-gradient(180deg, rgba(8, 17, 28, 0.96), rgba(10, 18, 29, 1));
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.social-card h3 {
  margin: 0 0 0.9rem;
}

.social-card p {
  margin: 0 1rem 1.4rem 0;
  color: var(--text-secondary);
}

.social-card strong {
  color: var(--text-primary);
}

.impact-panel {
  margin-top: 3rem;
  padding: 2rem;
  background: var(--bg-surface);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 32px;
}

.impact-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}

.impact-card {
  padding: 1.4rem;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.impact-card span {
  display: block;
  font-size: 2rem;
  font-weight: 700;
}

.impact-card p {
  margin: 0.75rem 0 0;
  color: var(--text-secondary);
}

@media (max-width: 960px) {
  .social-grid,
  .impact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
