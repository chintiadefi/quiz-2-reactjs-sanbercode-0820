let warna = ["biru", "merah", "kuning", "hijau"]

let dataBukuTambahan = {
    penulis: "john doe",
    tahunTerbit: 2020
}

let buku = {
    nama: "pemrograman dasar",
    jumlahHalaman: 172,
    warnaSampul: ["hitam"]
}

let [...semuaWarna] = warna;
buku.warnaSampul.push(...semuaWarna)

var obj = Object.assign({}, dataBukuTambahan, buku);

console.log(buku.warnaSampul);
console.log(obj);