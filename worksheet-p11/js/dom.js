
import { daftarProyek } from "./data.js";

// Pemilih elemen
const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");

// Membuat kartu proyek
function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = proyek.judul;
  return li;
}

// Menampilkan daftar proyek
export function render(daftar = daftarProyek) {
  if (!wadah || !kosong) return;

  wadah.textContent = "";

  if (daftar.length === 0) {
    kosong.hidden = false;
    return;
  }

  kosong.hidden = true;

  daftar.forEach((proyek) => {
    wadah.append(buatKartu(proyek));
  });
}

// Menandai tombol filter yang aktif
export function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

// Menampilkan berita dari API
export function renderBerita(daftar) {
  const wadahBerita = document.querySelector("#daftar-berita");

  if (!wadahBerita) {
    console.error('Elemen "#daftar-berita" tidak ditemukan di HTML.');
    return;
  }

  wadahBerita.textContent = "";

  if (!Array.isArray(daftar) || daftar.length === 0) {
    wadahBerita.textContent = "Belum ada berita.";
    return;
  }

  daftar.slice(0, 5).forEach((berita) => {
    const kartu = document.createElement("article");
    kartu.className = "kartu";

    const judul = document.createElement("h3");
    judul.textContent = berita.title;

    kartu.appendChild(judul);
    wadahBerita.appendChild(kartu);
  });
}
