let nama_Mahasiswa = ["Pirni", "Sahla", "Denindra", "Rizky", "Rifa"];

console.log("Nama Mahasiswa Awal:");

for (let i = 0; i < nama_Mahasiswa.length; i++) {
    console.log(nama_Mahasiswa[i]);
}

nama_Mahasiswa.push("Dani");

let nama_yang_dihapus = nama_Mahasiswa.shift();
console.log("\nNama yang Dihapus : " + nama_yang_dihapus);

console.log("Nama Mahasiswa Setelah di Modifikasi:");

for (let i = 0; i < nama_Mahasiswa.length; i++) {
    console.log(nama_Mahasiswa[i]);
}