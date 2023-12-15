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

let warrior = new hero ("John Snow", "24", "guerreiro", "espada")
let wizard = new hero ("Gandalf", "2000", "mago", "magia")
let monk = new hero ("Miyagi", "59", "monge", "artes marciais")
let ninja = new hero ("NoKakashi Hatake", "26", "ninja", "shuriken")

warrior.atackNow()
wizard.atackNow()
monk.atackNow()
ninja.atackNow()
