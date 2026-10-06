const tombolTema = document.getElementById("tombolTema");

tombolTema.addEventListener("click", function () {
  document.documentElement.classList.toggle("tema-gelap");

  if (document.documentElement.classList.contains("tema-gelap")) {
    tombolTema.textContent = "Tema terang";
  } else {
    tombolTema.textContent = "Tema gelap";
  }
});

const profil = {
  nama: "Nama Anda",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"],
};

// Peragaan spread operator
console.log("Dengan spread:");
console.log({ ...profil });

console.log("Tanpa spread:");
console.log({ profil });

const daftarProyek = [
  { judul: "Halaman Profil", tahun: 2026, selesai: true },
  { judul: "Katalog Produk", tahun: 2026, selesai: false },
];

const kalimat = `Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal.`;

console.log(kalimat);

const namaLengkap = "Salwa Zahra Putri";
const peran = "Mahasiswa Informatika yang belajar front-end";
const keahlian = ["HTML", "CSS", "JavaScript"];
const jumlahProyek = 3;

console.log(namaLengkap);
console.log(peran);
console.log(keahlian);
console.log(jumlahProyek);

// 1. Menyusun kalimat perkenalan dari satu object
function buatPerkenalan({ nama, peran = "Mahasiswa Informatika" }) {
  return `${nama} — ${peran}`;
}

// 2. Merapikan daftar keahlian menjadi satu baris teks
const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

console.log(buatPerkenalan({ nama: "Ayu", peran: "Mahasiswa" }));
console.log(buatPerkenalan({ nama: "Budi", peran: "Programmer" }));
console.log(buatPerkenalan({ nama: "Citra" }));

console.log(daftarProyek[0]);
console.log(daftarProyek[0].judul);
console.log(daftarProyek[1].tahun);

console.table(profil.keahlian);
console.table(daftarProyek);

const selesai = daftarProyek.filter((proyek) => proyek.selesai);

console.table(selesai);

const katalog = daftarProyek.find(
  (proyek) => proyek.judul === "Katalog Produk"
);

console.log(katalog);

const judulProyek = daftarProyek.map((proyek) => proyek.judul);

console.log(judulProyek);

const urutanProyek = [...daftarProyek].sort((a, b) =>
  a.judul.localeCompare(b.judul)
);

console.log("Hasil sort:", urutanProyek);
console.log("Data asli:", daftarProyek);