<script setup>
import { onMounted, watch } from 'vue'
import { state } from './state.js'
import { muat, simpan, aturUlang } from './simpanan.js'

import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'

onMounted(() => {
  const isi = muat()

  if (isi) {
    state.kategoriAktif = isi.kategoriAktif
  }
})

watch(state, (nilai) => simpan(nilai), { deep: true })

function aturUlangPilihan() {
  aturUlang()
  state.kategoriAktif = 'semua'
  simpan(state)
}
</script>

<template>
  <main>
    <KepalaProfil :profil="state.profil" />
    <button type="button" @click="aturUlangPilihan">
      Atur Ulang Filter
    </button>
    <TombolFilter />
    <DaftarProyek />
    <FormKontak />
  </main>
</template>
