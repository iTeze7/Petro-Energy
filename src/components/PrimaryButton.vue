<template>
  <button class="primary-button" type="button" @click="$emit('click')">
    <slot />
  </button>
</template>

<script setup>
const emit = defineEmits(['click'])
</script>

<style scoped>
.primary-button {
  background: linear-gradient(135deg, #c9a64d 0%, #f7e9af 100%);
  color: #08111f;
  border-radius: 999px;
  padding: 1rem 1.8rem;
  font-weight: 700;
  box-shadow: 0 18px 40px rgba(201, 166, 77, 0.18);
  transition: transform 180ms ease, box-shadow 180ms ease;
}

.primary-button:hover,
.primary-button:focus-visible {
  transform: translateY(-2px);
  box-shadow: 0 22px 48px rgba(201, 166, 77, 0.26);
}
</style>
