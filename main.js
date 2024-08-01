class animal {
    constructor(nome) {
        this.nome = nome;
    }
}

class cachorro extends animal {
    constructor (nome,raca) {
        super(nome);
        this.raca = raca;
    }

    mostrarAnimal() {
        console.log(`Esse é ${this.nome} um ${this.raca}`);
    }
}

class cavalo extends animal {
    constructor(nome,cor) {
        super(nome);
        this.cor = cor;
    }

    corCavalo() {
        console.log(`Esse é ${this.nome} meu cavalo ${this.cor}`);
    }
}

const cachorro1 = new cachorro("rex","labrador");
const cachorro2 = new cachorro("tob","Pastor Alemão");
const cavalo1 = new cavalo("carpeado","Branco");

cachorro1.mostrarAnimal();
cachorro2.mostrarAnimal();
cavalo1.corCavalo();

