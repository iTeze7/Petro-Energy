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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.footer__copy {
  margin: 0.8rem 0 0;
  color: var(--text-secondary);
  max-width: 26rem;
  line-height: 1.6;
  font-size: 0.95rem;
}

.footer h2 {
  margin: 0 0 0.85rem;
  font-size: 1rem;
  font-weight: 700;
}

.footer a {
  display: block;
  margin-bottom: 0.65rem;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 180ms ease;
}

.footer a:hover,
.footer a:focus-visible {
  color: var(--text-primary);
}

.footer__bottom {
  margin-top: 1.8rem;
  padding-top: 1.8rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  color: var(--muted);
  font-size: 0.9rem;
  text-align: center;
}

.eyebrow {
  margin: 0;
  color: var(--accent);
  font-size: 0.85rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 700;
}

/* Tablets */
@media (max-width: 768px) {
  .footer {
    margin-top: 2rem;
    padding: 2rem 0 1.2rem;
  }

  .footer__grid {
    gap: 1.5rem;
  }

  .footer h2 {
    font-size: 0.95rem;
  }

  .footer__copy {
    font-size: 0.9rem;
  }

  .footer__bottom {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
  }
}

/* Celulares */
@media (max-width: 480px) {
  .footer {
    margin-top: 1.5rem;
    padding: 1.5rem 0 1rem;
  }

  .footer__grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .footer__copy {
    font-size: 0.85rem;
    margin-top: 0.5rem;
  }

  .footer h2 {
    font-size: 0.9rem;
    margin-bottom: 0.6rem;
  }

  .footer a {
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }

  .footer__bottom {
    margin-top: 1rem;
    padding-top: 1rem;
    font-size: 0.8rem;
  }

  .eyebrow {
    font-size: 0.75rem;
  }
}

/* Ultra pequeno */
@media (max-width: 320px) {
  .footer {
    padding: 1rem 0 0.8rem;
  }

  .footer__grid {
    gap: 0.8rem;
  }

  .footer h2 {
    font-size: 0.85rem;
  }

  .footer__copy,
  .footer a {
    font-size: 0.8rem;
  }
}
</style>
