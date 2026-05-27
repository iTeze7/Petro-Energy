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
}

.hamburger {
  top: 50%;
}

.hamburger::before {
  top: 10px;
}

.hamburger::after {
  bottom: 10px;
}

.navbar__menu {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.navbar__menu a {
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 180ms ease;
}

.navbar__menu a:hover,
.navbar__menu a:focus-visible {
  color: var(--text-primary);
}

@media (max-width: 860px) {
  .navbar__toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .navbar__menu {
    position: absolute;
    inset: 5.8rem 1rem auto auto;
    flex-direction: column;
    width: calc(100% - 2rem);
    padding: 1rem;
    border-radius: 22px;
    background: rgba(8, 16, 28, 0.96);
    transform: scaleY(0);
    transform-origin: top right;
    opacity: 0;
    pointer-events: none;
    transition: transform 220ms ease, opacity 220ms ease;
  }

  .navbar__menu--open {
    transform: scaleY(1);
    opacity: 1;
    pointer-events: auto;
  }

  .navbar__menu a {
    padding: 0.85rem 0;
    width: 100%;
  }
}
</style>
