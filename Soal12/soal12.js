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
    constructor (name) {
        super (name);
    }
    jump() {
        return "hop hop"
    }
}