class heroi {
    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }

    atacar(){
            
        if(this.tipo === "mago") {
            console.log(`O ${this.tipo} atacou usando Magia`);
        }else if(this.tipo === "guerreiro"){
            console.log(`O ${this.tipo} atacou usando Espada`);
        }else if(this.tipo === "monge"){
            console.log(`O ${this.tipo} atacou usando Artes marciais`);
        }else {
            console.log(`O ${this.tipo} atacou usando Shuriken`);
        }
        
    }

}

let acao = new heroi("Junio", "mago");

acao.atacar();