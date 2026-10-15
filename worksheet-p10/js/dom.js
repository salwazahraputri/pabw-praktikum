
import { daftarProyek } from "./app.js";
import { ambilNotisia } from "./api.js";

// DAFTAR DAN FILTER PROYEK
const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");

function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = proyek.judul;
  return li;
}

function render(daftar) {
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

function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

const barisFilter = document.querySelector("#filter");

barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol) return;

  tandaiTombolAktif(tombol);

  const kategori = tombol.dataset.kategori;

  const terpilih = daftarProyek.filter(
    (proyek) =>
      kategori === "semua" || proyek.kategori === kategori
  );

  render(terpilih);
});

render(daftarProyek);

// BERITA DARI API
const wadahBerita = document.querySelector("#daftar-berita");

async function tampilkanNotisia() {
  if (!wadahBerita) {
    console.error('Elemen "#daftar-berita" tidak ditemukan di HTML.');
    return;
  }

  wadahBerita.textContent = "Memuat...";

  try {
    const daftar = await ambilNotisia();

    if (daftar.length === 0) {
      wadahBerita.textContent = "Belum ada notisia";
      return;
    }

    wadahBerita.textContent = "";

    daftar.slice(0, 5).forEach((n) => {
      const kartu = document.createElement("article");
      kartu.className = "kartu";

      const judul = document.createElement("h3");
      judul.textContent = n.title;

      kartu.appendChild(judul);
      wadahBerita.appendChild(kartu);
    });
  } catch (galat) {
    wadahBerita.textContent =
      "Gagal memuat data: " + galat.message;
  }
}

tampilkanNotisia();

// VALIDASI FORMULIR KONTAK
const form = document.querySelector("#kontak form");

if (form) {
  const tombolKirim = form.querySelector('button[type="submit"]');
  const kolomForm = form.querySelectorAll("input, textarea");

  function pesanGalat(kolom) {
    if (kolom.id === "nama") {
      return "Nama lengkap wajib diisi.";
    }

    if (kolom.id === "email") {
      return "Masukkan email dengan format yang benar.";
    }

    if (kolom.id === "nim") {
      return "NIM harus terdiri dari 8 digit angka.";
    }

    if (kolom.id === "pesan") {
      return "Pesan wajib diisi.";
    }

    return "Periksa kembali kolom ini.";
  }

  function validasiKolom(kolom) {
    const nilai = kolom.value.trim();
    const sah = nilai !== "" && kolom.checkValidity();

    let pesan = kolom.parentElement.querySelector(".pesan-galat");

    if (!pesan) {
      pesan = document.createElement("span");
      pesan.className = "pesan-galat";
      kolom.parentElement.append(pesan);
    }

    if (!sah) {
      kolom.setAttribute("aria-invalid", "true");
      pesan.textContent = pesanGalat(kolom);
    } else {
      kolom.setAttribute("aria-invalid", "false");
      pesan.textContent = "";
    }

    return sah;
  }

  function validasiForm() {
    let sah = true;

    kolomForm.forEach((kolom) => {
      if (!validasiKolom(kolom)) {
        sah = false;
      }
    });

    tombolKirim.disabled = !sah;

    return sah;
  }

  kolomForm.forEach((kolom) => {
    kolom.addEventListener("input", () => {
      validasiForm();
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const sah = validasiForm();

    if (!sah) {
      const kolomBermasalah = Array.from(kolomForm).find(
        (kolom) => !validasiKolom(kolom)
      );

      if (kolomBermasalah) {
        kolomBermasalah.focus();
      }

      return;
    }

    alert("Form berhasil divalidasi dan siap dikirim.");
  });
}
