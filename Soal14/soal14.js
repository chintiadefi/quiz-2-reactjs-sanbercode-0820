const volumeKubus = (sisi) => {
    return sisi * sisi * sisi
}

const hasilKubus = volumeKubus(10);

const volumeBalok = (panjang, lebar, tinggi) => {
    return panjang * lebar * tinggi
}

const hasilBalok = volumeBalok(10, 4, 3);

const banguRuang = `Volume balok ${hasilBalok}cm dan volume kubus ${hasilKubus}cm`;
console.log(banguRuang);