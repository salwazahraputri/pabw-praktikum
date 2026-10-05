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