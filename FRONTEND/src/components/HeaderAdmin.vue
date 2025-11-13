<script setup>
import { ref } from 'vue'
const showLogout = ref(false)
const toggleLogout = () => {
  showLogout.value = !showLogout.value
}
</script>

<template>
  <header class="flex justify-between items-center mb-12">
    <h1 class="text-4xl font-bold text-white">Dashboard Admin</h1>
    <div class="flex items-center gap-6">
      <div class="relative cursor-pointer" @click="$emit('toggle-logout')">
        <img src="https://i.pravatar.cc/40" class="w-10 h-10 rounded-full border-2 border-indigo-400" />
        <span class="ml-2 font-medium text-white">Admin</span>
      </div>
    </div>
  </header>
</template>

<style scoped>
</style>
