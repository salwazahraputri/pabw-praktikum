# PABW — Salwa Zahra Putri — 25523068

Repositori ini berisi pekerjaan praktikum mata kuliah Pengembangan Aplikasi Berbasis Web (PABW), mulai dari Pertemuan 4 dan seterusnya. Setiap pertemuan disimpan dalam folder masing-masing.

## Pertemuan 4 — Halaman Profil Saya

- **Topik:** Profil mahasiswa.
- **Judul halaman:** Profil Salwa Zahra Putri — PABW 2026/2027.
- **Deskripsi:** Halaman profil mahasiswa yang memuat informasi tentang diri, karya, kegiatan, dan kontak.
- **Navigasi:** Tentang, Karya, Kontak.
- **Bagian halaman:** Tabel kegiatan dan formulir kontak.
- **Kolom tabel:** Kegiatan, Peran, Waktu.
- **Kolom formulir:** Nama lengkap, Email, NIM, Pesan.
- **Gambar:** `foto-profil.jpg`.

## Catatan Penggunaan AI

- **Bagian yang dibantu AI:** Membantu menjelaskan konsep, memberikan saran perbaikan kode CSS dan JavaScript, serta membantu memahami struktur komponen dan pengelolaan state pada Vue.
- **Bagian yang saya kerjakan sendiri:** Menjalankan perintah di terminal, membuat dan mengatur berkas proyek, menguji halaman di browser, memeriksa hasil build, menguji filter dan penyimpanan data, serta menyimpan perubahan ke Git.

## Design Token Halaman Profil

- **Warna pilihan:** Dusty Rose (`#D96C8A`), karena memberikan kesan pink yang lembut, elegan, dan santai.
- **Berkas gaya:** `tokens.css`, `base.css`, `layout.css`, `komponen.css`, `tema.css`, dan `responsif.css`.

| Token | Nilai | Fungsi |
|---|---|---|
| `--color-primary` | `#2563EB` | Tombol, tautan, judul, dan penanda |
| `--color-fg` | `#F8FAFC` | Warna teks utama |
| `--color-bg` | `#0F172A` | Warna latar halaman |
| `--radius-md` | `0.75rem` | Sudut tombol dan kartu |
| `--space-4` | `1rem` | Jarak standar antarelemen |

**Kriteria selesai:** Perubahan nilai `--color-primary` pada satu tempat dapat mengubah warna elemen yang menggunakan token tersebut.

## Pertemuan 12 — Migrasi ke Vue dan Build Produksi

Pada Pertemuan 12, halaman profil dipindahkan ke proyek Vue menggunakan Vite. Halaman dipecah menjadi komponen, state dikelola menggunakan `reactive()`, dan penyimpanan pilihan filter menggunakan `localStorage`.

### Komponen

- `KepalaProfil.vue` — menampilkan nama dan peran profil melalui props.
- `TombolFilter.vue` — menyediakan pilihan kategori proyek.
- `DaftarProyek.vue` — menampilkan proyek berdasarkan kategori aktif.
- `FormKontak.vue` — menyediakan formulir kontak.

### Perkakas

- **Node.js:** `v24.22.1`
- **npm:** `11.19.1`

### Pengujian Build

Build produksi dijalankan menggunakan `npm run build`, kemudian hasilnya diuji menggunakan `npm run preview`.

| Pengujian | Hasil |
|---|---|
| Sebelum build — server pengembangan | 33 permintaan; 1,6 MB ditransfer |
| Sesudah build — server preview | 11 permintaan; 150 kB ditransfer |
| Hasil build | Berhasil; folder `dist/` terbentuk |
| Pengujian halaman | Halaman tampil dan filter berfungsi |
| Console | Tidak ditemukan galat aplikasi saat pengujian |

*Catatan: ukuran dan jumlah permintaan merupakan hasil pengamatan saat praktikum. Hasil dapat berbeda karena cache, ekstensi browser, dan permintaan eksternal.*

### Pengelolaan Git

Folder `node_modules/` dan `dist/` diabaikan melalui `.gitignore`. Berkas `package-lock.json` disimpan di repositori untuk menjaga konsistensi versi dependensi. Hasil build dapat dibuat kembali menggunakan `npm run build`.

## Catatan Praktikum P04

Starter praktikum adalah `kerangka-profil.html`, yang disalin menjadi `profil.html` di folder `worksheet-p4/`. Struktur HTML dipertahankan, sedangkan tampilan diatur melalui berkas CSS.

Pekerjaan P04 mencakup pengisian konten profil, penambahan bagian semantik, pembuatan lima berkas gaya, serta evaluasi HTML dan aksesibilitas menggunakan W3C Nu Html Checker dan kriteria WCAG.

**Catatan evaluasi:** Hasil pemeriksaan W3C dan WCAG perlu diisi berdasarkan pengujian yang benar-benar dilakukan.
