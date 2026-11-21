/*
 * Proyek Akhir Semester Ganjil — Paket 1
 * XI RPL 2 | Pemrograman Web
 *
 * KERJAKAN HANYA:
 *   JS-01: Melengkapi perulangan for.
 *   JS-02: Mengambil elemen Array berdasarkan indeks.
 *
 * Bagian penghubung antarmuka disiapkan guru dan tidak dinilai
 * pada Paket 1. Jangan mengubah bagian tersebut.
 */

// Data awal disediakan guru. Jangan diubah.
const daftarKegiatan = ["Piket Kelas", "Rapat OSIS", "Kerja Bakti"];

function tampilkanKegiatan(daftar) {
  const elemenDaftar = document.getElementById("daftarKegiatan");

  if (elemenDaftar === null) {
    return;
  }

  // Disediakan guru: hapus isi daftar sebelum menampilkannya kembali.
  elemenDaftar.innerHTML = "";

  // TODO JS-01:
  // Perbaiki batas perulangan for berikut agar dimulai dari indeks pertama
  // dan memproses seluruh elemen berdasarkan panjang Array (length).
  for (let i = 0; i < daftar.length; i++) {
    // TODO JS-02:
    // Ganti string kosong dengan elemen Array 'daftar' pada indeks i.
    const namaKegiatan = daftar[i];

    // Disediakan guru: pembentukan dan penampilan elemen HTML.
    const item = document.createElement("li");
    item.textContent = namaKegiatan;
    elemenDaftar.appendChild(item);
  }
}

// ================================================================
// KODE PENGHUBUNG ANTARMUKA — DISEDIAKAN GURU, JANGAN DIUBAH
// Bagian ini bukan materi yang diuji pada Paket 1.
// Tombol tambah/cari/hapus baru akan berfungsi setelah guru memberi
// petunjuk dan bagian fungsi pada pertemuan berikutnya.
// ================================================================

function perbaruiTampilan() {
  tampilkanKegiatan(daftarKegiatan);

  const elemenTotal = document.getElementById("totalKegiatan");
  if (elemenTotal !== null) {
    if (typeof hitungJumlahKegiatan === "function") {
      elemenTotal.textContent = hitungJumlahKegiatan(daftarKegiatan);
    } else {
      elemenTotal.textContent = daftarKegiatan.length;
    }
  }
}

function tampilkanStatus(pesan, berhasil) {
  const elemenStatus = document.getElementById("pesanStatus");
  if (elemenStatus === null) {
    return;
  }

  elemenStatus.textContent = pesan;
  elemenStatus.classList.remove("berhasil", "gagal");
  elemenStatus.classList.add(berhasil ? "berhasil" : "gagal");
}

document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("inputKegiatan");
  const btnTambah = document.getElementById("btnTambah");
  const btnCari = document.getElementById("btnCari");
  const btnHapus = document.getElementById("btnHapus");

  if (input !== null && btnTambah !== null) {
    btnTambah.addEventListener("click", function () {
      if (typeof tambahKegiatan !== "function") return;

      const berhasil = tambahKegiatan(daftarKegiatan, input.value);
      tampilkanStatus(
        berhasil ? "Kegiatan berhasil ditambahkan." : "Nama kegiatan kosong atau sudah terdaftar.",
        berhasil
      );
      if (berhasil) input.value = "";
      perbaruiTampilan();
    });
  }

  if (input !== null && btnCari !== null) {
    btnCari.addEventListener("click", function () {
      if (typeof cariKegiatan !== "function") return;

      const indeks = cariKegiatan(daftarKegiatan, input.value);
      tampilkanStatus(
        indeks !== -1 ? `Kegiatan ditemukan pada indeks ${indeks}.` : "Kegiatan tidak ditemukan.",
        indeks !== -1
      );
    });
  }

  if (input !== null && btnHapus !== null) {
    btnHapus.addEventListener("click", function () {
      if (typeof hapusKegiatan !== "function") return;

      const berhasil = hapusKegiatan(daftarKegiatan, input.value);
      tampilkanStatus(
        berhasil ? "Kegiatan berhasil dihapus." : "Kegiatan tidak ditemukan.",
        berhasil
      );
      if (berhasil) input.value = "";
      perbaruiTampilan();
    });
  }

  perbaruiTampilan();
});

// ========================================
// FUNGSI PENGELOLAAN KEGIATAN — TAMBAHAN SISWA
// ========================================

// Menambah kegiatan baru ke dalam Array.
function tambahKegiatan(daftar, nama) {
  // Menghapus spasi pada awal dan akhir teks.
  const namaBaru = nama.trim();

  // Nama kosong tidak boleh ditambahkan.
  if (namaBaru === "") {
    return false;
  }

  // Periksa semua kegiatan satu per satu dengan perulangan.
  for (let i = 0; i < daftar.length; i++) {
    if (daftar[i].toLowerCase() === namaBaru.toLowerCase()) {
      return false;
    }
  }

  // Tambahkan nama kegiatan ke bagian akhir Array.
  daftar.push(namaBaru);
  return true;
}

// Mencari kegiatan berdasarkan nama dan mengembalikan indeksnya.
function cariKegiatan(daftar, nama) {
  const namaDicari = nama.trim();

  if (namaDicari === "") {
    return -1;
  }

  // Periksa setiap data menggunakan perulangan sederhana.
  for (let i = 0; i < daftar.length; i++) {
    if (daftar[i].toLowerCase() === namaDicari.toLowerCase()) {
      return i;
    }
  }

  // -1 berarti kegiatan tidak ditemukan.
  return -1;
}

// Menghapus kegiatan dari Array berdasarkan nama.
function hapusKegiatan(daftar, nama) {
  const namaDicari = nama.trim();

  if (namaDicari === "") {
    return false;
  }

  // Cari indeks kegiatan yang akan dihapus.
  for (let i = 0; i < daftar.length; i++) {
    if (daftar[i].toLowerCase() === namaDicari.toLowerCase()) {
      daftar.splice(i, 1);
      return true;
    }
  }

  return false;
}

// Menghitung jumlah kegiatan menggunakan perulangan.
function hitungJumlahKegiatan(daftar) {
  let jumlah = 0;

  for (let i = 0; i < daftar.length; i++) {
    jumlah++;
  }

  return jumlah;
}

// Area penambahan Function untuk pertemuan berikutnya akan diberikan
// oleh guru pada saat paket soal berikutnya dibagikan.

// =====================================================================
// KERANGKA SOAL SABTU, 21 NOVEMBER 2026
// Tambahkan blok ini pada AKHIR script.js hasil Checkpoint 1 (17 Nov).
// Jangan menghapus/mengganti kode yang sudah dikerjakan pada 17 Nov.
// Hapus baris return sementara setelah logika TODO yang sesuai lengkap.
// =====================================================================

// TODO JS-03, JS-04, JS-05 — Validasi dan penambahan kegiatan
function tambahKegiatan(daftar, nama) {
  // TODO JS-03: Simpan nama yang sudah di-trim ke variabel namaBersih.
  // Jika namaBersih kosong, gunakan return false.

  // TODO JS-04: Gunakan includes() untuk menolak nama duplikat.
  // Jika kegiatan sudah ada, gunakan return false.

  // TODO JS-05: Gunakan push() untuk menambahkan namaBersih.
  // Jika penambahan berhasil, gunakan return true.

  return false; // SEMENTARA: ganti/hapus setelah TODO JS-03 s.d. JS-05 selesai
}

// TODO JS-06 — Pencarian kegiatan
function cariKegiatan(daftar, nama) {
  // TODO JS-06: Hilangkan spasi awal/akhir menggunakan trim().
  // Cari posisi kegiatan dengan indexOf(), lalu kembalikan indeksnya.
  // Jika tidak ditemukan, indexOf() akan menghasilkan -1.

  return -1; // SEMENTARA: ganti setelah TODO JS-06 selesai
}

// TODO JS-07 dan JS-08 — Penghapusan kegiatan
function hapusKegiatan(daftar, nama) {
  // TODO JS-07: Panggil cariKegiatan(daftar, nama).
  // Simpan hasilnya dalam variabel indeks.

  // TODO JS-08: Jika indeks bernilai -1, gunakan return false.
  // Jika ditemukan, hapus satu elemen menggunakan splice().
  // Kembalikan true jika penghapusan berhasil.

  return false; // SEMENTARA: ganti/hapus setelah TODO JS-07 s.d. JS-08 selesai
}

// TODO JS-09 — Menghitung jumlah kegiatan
function hitungJumlahKegiatan(daftar) {
  // TODO JS-09: Gunakan length dan return untuk menghasilkan jumlah kegiatan.

  return 0; // SEMENTARA: ganti setelah TODO JS-09 selesai
}
