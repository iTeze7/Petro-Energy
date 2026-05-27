<template>
  <section class="hero" aria-label="Seção principal">
    <div class="hero__content">
      <p class="eyebrow">Soluções em energia corporativa</p>
      <h1>Petro Energy transforma recursos em crescimento responsável.</h1>
      <p class="hero__text">
        Conectamos operações globais à inovação ESG, infraestrutura inteligente e práticas sustentáveis para gerar valor
        de longo prazo aos investidores e à sociedade.
      </p>
      <div class="hero__actions">
        <router-link to="/sobre" class="button">Conheça nossa história</router-link>
        <router-link to="/posts" class="button button--secondary">Últimas novidades</router-link>
      </div>
    </div>
    <div class="hero__visual" aria-hidden="true">
      <div class="hero__panel">
        <span>Visão 2030</span>
        <strong>Reduzir 30% as emissões diretas</strong>
      </div>
    </div>
  </section>

  <section class="section-block" aria-labelledby="estatisticas">
    <div class="section-header">
      <SectionTitle eyebrow="Dados corporativos" title="Indicadores de desempenho" description="Números e metas que definem nossa posição de liderança global." />
    </div>
    <div class="stats-grid">
      <article class="stat-card" v-for="item in statistics" :key="item.label">
        <p class="stat-card__value">{{ item.value }}</p>
        <p class="stat-card__label">{{ item.label }}</p>
      </article>
    </div>
  </section>

  <section class="section-block" aria-labelledby="ultimos-posts">
    <div class="section-header">
      <SectionTitle eyebrow="Perspectiva" title="Últimos insights corporativos" description="Acompanhe os movimentos mais recentes da Petro Energy e suas iniciativas globais." />
    </div>
    <div class="post-grid">
      <PostCard v-for="post in recentPosts" :key="post.id" :post="post" />
    </div>
  </section>

  <section class="section-block" aria-labelledby="institucional">
    <div class="section-header">
      <SectionTitle eyebrow="Institucional" title="Um legado de energia estratégica" description="Somos uma companhia que equilibra execução técnica, governança e investimento sustentável." />
    </div>
    <div class="institutional-grid">
      <article class="institutional-card">
        <h3>Expansão global</h3>
        <p>Operamos em 27 países e coordenamos projetos de energia em três continentes com padrões internacionais de segurança.</p>
      </article>
      <article class="institutional-card">
        <h3>Governança ativa</h3>
        <p>Tomamos decisões com base em métricas claras de conformidade, meio ambiente e impacto social.</p>
      </article>
      <article class="institutional-card">
        <h3>Inovação responsável</h3>
        <p>Investimos em P&D para acelerar a transição energética e ampliar eficiência nas operações de óleo e gás.</p>
      </article>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from '@/components/SectionTitle.vue'
import PostCard from '@/components/PostCard.vue'
import { statistics, recentPosts } from '@/data/mockData'
</script>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  align-items: center;
  gap: 2.5rem;
  padding: 3rem 0 2rem;
}

.hero__content {
  max-width: 620px;
}

.hero .eyebrow {
  margin: 0 0 1rem;
}

.hero h1 {
  margin: 0;
  font-size: clamp(2.4rem, 4vw, 4.2rem);
  line-height: 1.05;
  max-width: 12ch;
}

.hero__text {
  margin: 1.4rem 0 1.8rem;
  color: var(--text-secondary);
  max-width: 44rem;
}

.hero__actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero__visual {
  position: relative;
  min-height: 360px;
  border-radius: 36px;
  background: radial-gradient(circle at top, rgba(77, 122, 204, 0.22), transparent 32%), linear-gradient(180deg, rgba(10, 17, 28, 0.96) 0%, #07111f 100%);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.hero__panel {
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  right: 2rem;
  padding: 1.8rem;
  border-radius: 28px;
  background: rgba(14, 25, 44, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.hero__panel span {
  color: var(--accent);
  font-size: 0.85rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.hero__panel strong {
  display: block;
  margin-top: 0.6rem;
  font-size: 1.4rem;
}

.section-block {
  padding: 3rem 0;
}

.stats-grid,
.post-grid,
.institutional-grid {
  display: grid;
  gap: 1.5rem;
}

.stats-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.stat-card {
  padding: 1.8rem;
  background: var(--bg-surface);
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.stat-card__value {
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
}

.stat-card__label {
  margin: 0.5rem 0 0;
  color: var(--text-secondary);
}

.post-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.institutional-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.institutional-card {
  padding: 1.8rem;
  background: var(--bg-panel);
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.institutional-card h3 {
  margin: 0 0 0.75rem;
}

.institutional-card p {
  margin: 0;
  color: var(--text-secondary);
}

.button {
  background: linear-gradient(135deg, #c9a64d 0%, #f7e9af 100%);
  color: #08111f;
}

.button--secondary {
  background: rgba(255, 255, 255, 0.08);
  color: var(--text-primary);
}

@media (max-width: 980px) {
  .hero {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 760px) {
  .stats-grid,
  .post-grid,
  .institutional-grid {
    grid-template-columns: 1fr;
  }
}
</style>
