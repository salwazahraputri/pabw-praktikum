import { daftarProyek } from "./app.js";

const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");

function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = proyek.judul;
  return li;
}

function render(proyek) {
  wadah.textContent = "";

  proyek.forEach((item) => {
    wadah.append(buatKartu(item));
  });
}

render(daftarProyek);