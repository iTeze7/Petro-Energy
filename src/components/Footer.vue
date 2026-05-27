<template>
  <footer class="footer" role="contentinfo">
    <div class="footer__grid">
      <div>
        <p class="eyebrow">Petro Energy</p>
        <p class="footer__copy">Energia responsável. Investimentos globais. Crescimento sustentável.</p>
      </div>
      <div>
        <h2>Contatos</h2>
        <p>comunicacao@petroenergy.com</p>
        <p>+55 21 4002-0101</p>
      </div>
      <div>
        <h2>Links</h2>
        <nav aria-label="Links de rodapé">
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos de Uso</a>
        </nav>
      </div>
    </div>
    <div class="footer__bottom">
      <p>© 2026 Petro Energy. Todos os direitos reservados.</p>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.footer {
  margin-top: 3rem;
  padding: 2.5rem 0 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.footer__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}

.footer__copy {
  margin: 0.8rem 0 0;
  color: var(--text-secondary);
  max-width: 26rem;
}

.footer h2 {
  margin: 0 0 0.85rem;
  font-size: 1rem;
}

.footer a {
  display: block;
  margin-bottom: 0.65rem;
  color: var(--text-secondary);
  text-decoration: none;
}

.footer a:hover,
.footer a:focus-visible {
  color: var(--text-primary);
}

.footer__bottom {
  margin-top: 1.8rem;
  color: var(--muted);
  font-size: 0.95rem;
}

@media (max-width: 760px) {
  .footer__grid {
    grid-template-columns: 1fr;
  }
}
</style>
