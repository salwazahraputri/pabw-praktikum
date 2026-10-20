
<script setup>
import { computed } from 'vue'
import { state } from '../state.js'

const proyekTampil = computed(() => {
  if (state.kategoriAktif === 'semua') {
    return state.daftarProyek
  }

  return state.daftarProyek.filter(
    (proyek) => proyek.kategori === state.kategoriAktif,
  )
})
</script>

<template>
  <section>
    <article v-for="proyek in proyekTampil" :key="proyek.judul">
      <h2>{{ proyek.judul }}</h2>
      <p>Tahun: {{ proyek.tahun }}</p>
      <p>Kategori: {{ proyek.kategori }}</p>
      <p>{{ proyek.selesai ? 'Selesai' : 'Dalam pengerjaan' }}</p>
    </article>

    <p v-if="proyekTampil.length === 0">
      Belum ada proyek pada kategori ini.
    </p>
  </section>
</template>
