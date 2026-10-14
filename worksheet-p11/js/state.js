import { profil, daftarProyek } from "./data.js";

export const state = {
  profil,
  daftarProyek,
  kategoriAktif: "semua"
};

export function ubahKategori(kategori) {
  state.kategoriAktif = kategori;
}

export function ubahDaftarProyek(daftar) {
  state.daftarProyek = daftar;
}
