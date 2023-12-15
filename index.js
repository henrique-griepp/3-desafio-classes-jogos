class hero{
    constructor(name, age, character, weapon){
        this.name = name
        this.age = age
        this.character = character
        this.weapon = weapon
    }
    atackNow(){
        console.log(`O ${this.character} ${this.name} de ${this.age} anos atacou usando sua ${this.weapon}.`)
    }
}

let guerreiro = new hero ("John Snow", "24", "guerreiro", "espada")
let mago = new hero ("Gandalf", "2000", "mago", "magia")
let monge = new hero ("Miyagi", "59", "monge", "artes marciais")
let ninja = new hero ("NoKakashi Hatake", "26", "ninja", "shuriken")

guerreiro.atackNow()
mago.atackNow()
monge.atackNow()
ninja.atackNow()
