
import { state, ubahKategori } from "./state.js";
import { render, tandaiTombolAktif } from "./dom.js";

export function pasangPendengar() {
  // Filter Karya Saya
  const barisFilter = document.querySelector("#filter");

  if (barisFilter) {
    barisFilter.addEventListener("click", (event) => {
      const tombol = event.target.closest("button");
      if (!tombol || !barisFilter.contains(tombol)) return;

      const kategori = tombol.dataset.kategori;
      if (!kategori) return;

      ubahKategori(kategori);
      tandaiTombolAktif(tombol);

      const terpilih =
        kategori === "semua"
          ? state.daftarProyek
          : state.daftarProyek.filter(
              (proyek) => proyek.kategori === kategori
            );

      render(terpilih);
    });
  }

  // Validasi formulir kontak
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
      const sah = kolom.value.trim() !== "" && kolom.checkValidity();

      let pesan = kolom.parentElement.querySelector(".pesan-galat");

      if (!pesan) {
        pesan = document.createElement("span");
        pesan.className = "pesan-galat";
        kolom.parentElement.append(pesan);
      }

      kolom.setAttribute("aria-invalid", String(!sah));
      pesan.textContent = sah ? "" : pesanGalat(kolom);

      return sah;
    }

    function validasiForm() {
      let sah = true;

      kolomForm.forEach((kolom) => {
        if (!validasiKolom(kolom)) sah = false;
      });

      if (tombolKirim) tombolKirim.disabled = !sah;
      return sah;
    }

    kolomForm.forEach((kolom) => {
      kolom.addEventListener("input", validasiForm);
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!validasiForm()) {
        const kolomBermasalah = Array.from(kolomForm).find(
          (kolom) => !validasiKolom(kolom)
        );

        kolomBermasalah?.focus();
        return;
      }

      alert("Form berhasil divalidasi dan siap dikirim.");
    });

    validasiForm();
  }
}
