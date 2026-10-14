import { profil, daftarProyek } from "./data.js";
import { render } from "./dom.js";
import { muat, simpan } from "./simpanan.js";

const simpanan = muat();

export const state = {
  profil,
  daftarProyek,
  kategoriAktif:
    simpanan &&
    simpanan.versi === 2 &&
    ["semua", "web", "data"].includes(simpanan.kategoriAktif)
      ? simpanan.kategoriAktif
      : "semua"
};

export function pilihKategori(nilai) {
  state.kategoriAktif = nilai;
  simpan(state);
  render(state);
}