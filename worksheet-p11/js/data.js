export const profil = {
  nama: "Salwa Zahra Putri",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"]
};

export const daftarProyek = [
  {
    judul: "Halaman Profil",
    tahun: 2026,
    selesai: true,
    kategori: "web"
  },
  {
    judul: "Katalog Produk",
    tahun: 2026,
    selesai: false,
    kategori: "web"
  }
];

export function buatPerkenalan(profil) {
  return `Halo, saya ${profil.nama}, ${profil.peran}.`;
}

export function formatKeahlian(keahlian) {
  return keahlian.join(", ");
}
