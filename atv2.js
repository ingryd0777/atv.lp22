//criando uma classe base
class Animal {
    constructor(nome, cor){
        this.nome = nome;
        this.cor = cor;
    }
    falar(){
        return "Olá, meu nome é" ${this.nome}.;
    }
}
//criando uma classe derivada de animal
class Cachorro extends Animal{
    constructor(nome, cor, raça){
        super(nome, cor);
        this.raça = raça;
    }
    latir(){
        return "Au au!";
    }
}

//criando uma classe derivada de animal
class Gato extends Animal{
    constructor(nome, cor, raça){
        super(nome, cor);
        this.raça = raça;
    }
    miar(){
        return "Miau!";
    }
}
//criando um array de animals
const animais = [
    new Cachorro("Rex", "Marrom", "Pastor Alemão"),
    new Gato("Mia", "Preto", "Siamês"),
];
//Percorrendo o array e imprimindo o nome e a cor de cada animal
for(const animal of animais){
    console.log(" O animal "${animal.nome}" é ${animal.cor}.")
//chamando o método falar() em cada animal
for(const animal of animais){
    console.log(animal.falar());
}
//chamado o latir() no cachorro
const cachorro = animais[0];
console.log(cachorro.latir());

//chamado método "miar() no gato"
const gato = animais[1];
console.log(gato.miar());