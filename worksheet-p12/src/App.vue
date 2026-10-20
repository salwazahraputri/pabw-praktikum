<script setup>
import { state } from './state.js'
import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'
</script>

<template>
  <main>
    <KepalaProfil :profil="state.profil" />
    <TombolFilter />
    <DaftarProyek />
    <FormKontak />
  </main>
</template>
