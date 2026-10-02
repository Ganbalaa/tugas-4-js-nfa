// 1. class Pelanggan
class Pelanggan {
  constructor(nama, nomorTelepon) {
    this.nama = nama;
    this.nomorTelepon = nomorTelepon;
    this.kendaraanDisewa = null; // Nilai awal null karena belum ada kendaraan yang disewa
  }

  // 2. Tambah metode untuk mencatat transaksi penyewaan
  sewaKendaraan(kendaraan) {
    this.kendaraanDisewa = kendaraan;
    console.log(`[Transaksi] ${this.nama} berhasil menyewa kendaraan: ${this.kendaraanDisewa}`);
  }
}

// 3. menampilkan daftar pelanggan yang menyewa kendaraan
class SistemManajemen {
  constructor() {
    this.daftarPelanggan = [];
  }

  // mendaftarkan pelanggan ke dalam sistem
  tambahPelanggan(pelanggan) {
    this.daftarPelanggan.push(pelanggan);
  }

  // menampilkan pelanggan yang memiliki kendaraan sewaan
  tampilkanDaftarPenyewa() {
    console.log("\n=== Daftar Pelanggan Menyewa Kendaraan ===");
    let adaPenyewa = false;

    this.daftarPelanggan.forEach(pelanggan => {
      // Cek apakah pelanggan sedang menyewa kendaraan
      if (pelanggan.kendaraanDisewa !== null) {
        console.log(`- Nama: ${pelanggan.nama} | No. Telp: ${pelanggan.nomorTelepon} | Kendaraan: ${pelanggan.kendaraanDisewa}`);
        adaPenyewa = true;
      }
    });

    if (!adaPenyewa) {
      console.log("Belum ada pelanggan yang menyewa kendaraan saat ini.");
    }
    console.log("==========================================\n");
  }
}

// ==========================================
// TESTING
// ==========================================

// Inisialisasi sistem manajemen
const sistem = new SistemManajemen();

// Membuat data pelanggan baru
const pelanggan1 = new Pelanggan("Noval Maulani", "08123456789");
const pelanggan2 = new Pelanggan("Budi Santoso", "08987654321");
const pelanggan3 = new Pelanggan("Siti Aminah", "08561234987");

// Mendaftarkan pelanggan ke sistem
sistem.tambahPelanggan(pelanggan1);
sistem.tambahPelanggan(pelanggan2);
sistem.tambahPelanggan(pelanggan3);

// Mencatat transaksi penyewaan (hanya pelanggan 1 dan 3 yang menyewa)
pelanggan1.sewaKendaraan("Mobil Toyota Avanza");
pelanggan3.sewaKendaraan("Motor Honda Vario");

// Menampilkan daftar pelanggan yang sedang menyewa
sistem.tampilkanDaftarPenyewa();