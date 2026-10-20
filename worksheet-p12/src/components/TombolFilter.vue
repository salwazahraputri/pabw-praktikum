
<script setup>
import { state, pilihKategori } from '../state.js'

const kategori = ['semua', 'web', 'data']
</script>

<template>
  <div>
    <button
      v-for="item in kategori"
      :key="item"
      :class="{ aktif: state.kategoriAktif === item }"
      @click="pilihKategori(item)"
    >
      {{ item }}
    </button>
  </div>
</template>
