
<script setup>
import { ref } from 'vue'

const nama = ref('')
const email = ref('')
const pesan = ref('')
const status = ref('')

function kirimFormulir() {
  status.value = 'Formulir berhasil dikirim.'
  nama.value = ''
  email.value = ''
  pesan.value = ''
}
</script>

<template>
  <form @submit.prevent="kirimFormulir">
    <h2>Kontak</h2>

    <label for="nama-kontak">Nama</label>
    <input id="nama-kontak" v-model="nama" required />

    <label for="email-kontak">Email</label>
    <input id="email-kontak" v-model="email" type="email" required />

    <label for="pesan-kontak">Pesan</label>
    <textarea id="pesan-kontak" v-model="pesan" required></textarea>

    <button type="submit">Kirim</button>
    <p v-if="status">{{ status }}</p>
  </form>
</template>
