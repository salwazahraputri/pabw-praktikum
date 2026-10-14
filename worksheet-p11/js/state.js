
import { profil, daftarProyek } from "./data.js";
import { render } from "./dom.js";

export const state = {
  profil,
  daftarProyek,
  kategoriAktif: "semua"
};

export function pilihKategori(nilai) {
  state.kategoriAktif = nilai;
  console.log(state);
  render(state);
}
