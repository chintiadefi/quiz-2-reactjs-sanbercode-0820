class BangunDatar {
    constructor(nama, luas, keliling) {
        this._nama = nama
        this._luas = luas
        this._keliling = keliling
    }
    get luas() {
        return this._luas
    }
    set luas(x) {
        this._luas = x;
    }
    get keliling() {
        return this._keliling
    }
    set keliling(y) {
        this._keliling = y;
    }
}

class Lingkaran extends BangunDatar {
    constructor (name, jari2) {
        super (name);
    }
}

class Persegi extends BangunDatar {
    constructor (name, panjang, lebar) {
        super (name);
    }
}