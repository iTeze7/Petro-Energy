<template>
  <header class="navbar" role="banner">
    <div class="navbar__brand">
      <img :src="logo" alt="Logotipo Petro Energy" class="navbar__logo" />
      <div>
        <p class="eyebrow">Líder em energia integrada</p>
        <h1 class="brand-title">Petro Energy</h1>
      </div>
    </div>

    <button
      class="navbar__toggle"
      type="button"
      aria-label="Abrir menu"
      :aria-expanded="isOpen.toString()"
      @click="toggleMenu"
    >
      <span class="hamburger"></span>
    </button>

    <nav class="navbar__menu" :class="{ 'navbar__menu--open': isOpen }" aria-label="Menu principal">
      <router-link to="/" @click="closeMenu">Home</router-link>
      <router-link to="/sobre" @click="closeMenu">Sobre</router-link>
      <router-link to="/posts" @click="closeMenu">Posts</router-link>
      <router-link to="/projetos-sociais" @click="closeMenu">Projetos Sociais</router-link>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import logo from '@/assets/logo.svg'

const isOpen = ref(false)
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
const closeMenu = () => {
  isOpen.value = false
}
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.4rem 0;
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(18px);
  background: rgba(7, 17, 31, 0.9);
}

.navbar__brand {
  display: flex;
  gap: 1rem;
  align-items: center;
  flex: 1;
}

.navbar__logo {
  width: 3rem;
  height: auto;
}

.eyebrow {
  margin: 0;
  color: var(--accent);
  font-size: 0.85rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.brand-title {
  margin: 0.2rem 0 0;
  font-size: 1.05rem;
  line-height: 1.2;
}

.navbar__toggle {
  display: none;
  width: 3rem;
  height: 3rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  position: relative;
  flex-shrink: 0;
  transition: background-color 180ms ease, border-color 180ms ease;
}

.navbar__toggle:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.15);
}

.hamburger,
.hamburger::before,
.hamburger::after {
  content: '';
  display: block;
  width: 1.3rem;
  height: 2px;
  background: #f5f7fb;
  border-radius: 999px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  transition: transform 220ms ease, opacity 220ms ease;
}

.hamburger {
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.hamburger::before {
  top: 8px;
}

.hamburger::after {
  bottom: 8px;
}

.navbar__menu {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.navbar__menu a {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 180ms ease;
  position: relative;
}

.navbar__menu a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 180ms ease;
}

.navbar__menu a:hover::after,
.navbar__menu a:focus-visible::after {
  transform: scaleX(1);
  transform-origin: left;
}

.navbar__menu a:hover,
.navbar__menu a:focus-visible {
  color: var(--text-primary);
}

/* Tablets */
@media (max-width: 1024px) {
  .navbar {
    gap: 0.8rem;
  }

  .navbar__logo {
    width: 2.5rem;
  }

  .brand-title {
    font-size: 1rem;
  }

  .navbar__menu {
    gap: 1.5rem;
  }

  .navbar__menu a {
    font-size: 0.9rem;
  }
}

/* Tablets pequenos e celulares em paisagem */
@media (max-width: 860px) {
  .navbar__toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .navbar__menu {
    position: absolute;
    inset: 5.5rem 1rem auto auto;
    flex-direction: column;
    gap: 0.5rem;
    width: calc(100% - 2rem);
    padding: 1rem;
    border-radius: 22px;
    background: rgba(8, 16, 28, 0.98);
    border: 1px solid rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(10px);
    transform: scaleY(0);
    transform-origin: top right;
    opacity: 0;
    pointer-events: none;
    transition: transform 220ms cubic-bezier(0.23, 1, 0.32, 1), opacity 220ms ease;
    max-height: calc(100vh - 100px);
    overflow-y: auto;
  }

  .navbar__menu--open {
    transform: scaleY(1);
    opacity: 1;
    pointer-events: auto;
  }

  .navbar__menu a {
    padding: 1rem;
    width: 100%;
    border-radius: 12px;
    transition: background-color 180ms ease, color 180ms ease;
  }

  .navbar__menu a:hover {
    background: rgba(255, 255, 255, 0.08);
  }

  .navbar__menu a::after {
    display: none;
  }

  .navbar__brand {
    gap: 0.8rem;
  }

  .navbar__logo {
    width: 2.3rem;
  }

  .eyebrow {
    font-size: 0.75rem;
  }

  .brand-title {
    font-size: 0.95rem;
    margin-top: 0.1rem;
  }
}

/* Celulares pequenos */
@media (max-width: 480px) {
  .navbar {
    padding: 1rem 0;
    gap: 0.5rem;
  }

  .navbar__logo {
    width: 2rem;
  }

  .navbar__toggle {
    width: 2.5rem;
    height: 2.5rem;
  }

  .hamburger,
  .hamburger::before,
  .hamburger::after {
    width: 1.1rem;
    height: 1.5px;
  }

  .hamburger::before {
    top: 6px;
  }

  .hamburger::after {
    bottom: 6px;
  }

  .eyebrow {
    display: none;
  }

  .brand-title {
    font-size: 0.85rem;
    margin: 0;
  }

  .navbar__menu {
    inset: 5rem 0.5rem auto auto;
    width: calc(100% - 1rem);
    padding: 0.8rem;
    border-radius: 16px;
  }

  .navbar__menu a {
    padding: 0.75rem;
    font-size: 0.9rem;
  }
}

/* Ultra pequeno */
@media (max-width: 320px) {
  .navbar {
    padding: 0.8rem 0;
  }

  .navbar__logo {
    width: 1.8rem;
  }

  .brand-title {
    font-size: 0.75rem;
  }

  .navbar__toggle {
    width: 2.3rem;
    height: 2.3rem;
  }

  .navbar__menu {
    inset: 4.8rem 0.3rem auto auto;
    width: calc(100% - 0.6rem);
  }
}
</style>
