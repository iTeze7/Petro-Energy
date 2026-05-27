<template>
  <section class="page-section" aria-labelledby="sobre-titulo">
    <SectionTitle eyebrow="Nossa jornada" title="História, missão e valores" description="Conheça a trajetória da Petro Energy e seu compromisso com o futuro da energia." />

    <div class="about-grid">
      <article class="about-card">
        <h3>História</h3>
        <p>Fundada em 1998, a Petro Energy consolidou sua presença global unindo expertise em exploração, refino e desenvolvimento de soluções de baixo carbono.</p>
      </article>
      <article class="about-card">
        <h3>Missão</h3>
        <p>Entregar energia confiável e gerar valor sustentável para acionistas, comunidades e parceiros por meio da excelência operacional.</p>
      </article>
      <article class="about-card">
        <h3>Visão</h3>
        <p>Ser referência internacional em transição energética e governança, com inovação responsável e alta performance ESG.</p>
      </article>
      <article class="about-card">
        <h3>Valores</h3>
        <ul class="values-list">
          <li>Integridade</li>
          <li>Inovação</li>
          <li>Sustentabilidade</li>
          <li>Excelência</li>
        </ul>
      </article>
    </div>

    <section class="timeline" aria-labelledby="timeline-titulo">
      <header class="timeline__header">
        <p class="eyebrow">Linha do tempo</p>
        <h2 id="timeline-titulo">Marcos que definem nossa governança</h2>
      </header>
      <div class="timeline__list">
        <article class="timeline-card" v-for="item in corporateTimeline" :key="item.year">
          <span class="timeline-card__year">{{ item.year }}</span>
          <p>{{ item.event }}</p>
        </article>
      </div>
    </section>
  </section>
</template>

<script setup>
import SectionTitle from '@/components/SectionTitle.vue'
import { corporateTimeline } from '@/data/mockData'
</script>

<style scoped>
.page-section {
  padding: 3rem 0;
}

.about-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.about-card {
  padding: 1.9rem;
  background: var(--bg-surface);
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.about-card h3 {
  margin: 0 0 0.9rem;
}

.about-card p {
  margin: 0;
  color: var(--text-secondary);
}

.values-list {
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.75rem;
}

.values-list li {
  list-style: none;
  position: relative;
  padding-left: 1.2rem;
  color: var(--text-secondary);
}

.values-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--accent);
}

.timeline {
  margin-top: 3rem;
}

.timeline__header {
  display: grid;
  gap: 0.75rem;
}

.timeline__list {
  display: grid;
  gap: 1rem;
  margin-top: 1.5rem;
}

.timeline-card {
  display: grid;
  gap: 0.65rem;
  padding: 1.5rem;
  background: rgba(15, 24, 42, 0.95);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.timeline-card__year {
  color: var(--accent);
  font-weight: 700;
}

@media (max-width: 860px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}
</style>
