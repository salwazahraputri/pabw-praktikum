
import { reactive } from 'vue'
import { profil, daftarProyek } from './data.js'
import { muat, simpan } from './simpanan.js'

const simpanan = muat()

export const state = reactive({
  profil,
  daftarProyek,
  kategoriAktif:
    simpanan &&
    simpanan.versi === 2 &&
    ['semua', 'web', 'data'].includes(simpanan.kategoriAktif)
      ? simpanan.kategoriAktif
      : 'semua',
})

export function pilihKategori(nilai) {
  state.kategoriAktif = nilai
  simpan(state)
}
