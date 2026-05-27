<template>
  <div class="app-shell">
    <Navbar />
    <main id="main-content" class="app-content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<style scoped>
.app-shell {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: radial-gradient(circle at top, rgba(18, 40, 70, 0.18), transparent 35%), #07111f;
  color: #eef2f5;
}

.app-content {
  flex: 1;
}
</style>
