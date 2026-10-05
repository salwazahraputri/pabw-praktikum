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