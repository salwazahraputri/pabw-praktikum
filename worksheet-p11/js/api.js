const ALAMAT = "https://jsonplaceholder.typicode.com/posts";


export async function ambilNotisia() {
  try {
    const respons = await fetch(ALAMAT);

    console.log('status', respons.status, 'ok', respons.ok);

    if (!respons.ok) {
      throw new Error('status ' + respons.status);
    }

    // Mengubah respons JSON menjadi data JavaScript
    const data = await respons.json();

    console.log('Seluruh data API:');
    console.log(data);

    console.log('Contoh teks menjadi objek:');
    console.log(data[0].title);

    return data;
  } catch (galat) {
    console.error('gagal memuat', galat.message);
    throw galat;
  }
}

// Mengubah objek JavaScript menjadi teks JSON
const badan = JSON.stringify({
  titulu: 'Avisu',
  nivel: 2
});

console.log('Objek menjadi teks:');
console.log(badan);
console.log('Jenis data:', typeof badan);

export async function mulaiBerita() {
  try {
    const data = await ambilNotisia();
    const { renderBerita } = await import("./dom.js");
    renderBerita(data);
  } catch (galat) {
    console.error("Gagal memuat berita:", galat.message);
  }
}