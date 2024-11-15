//Calcuadora de partidas Rankeadas

let resultado = quantidade(3000, 10);

function quantidade(vitoria, derrota){
     return vitoria - derrota;
}

while(resultado) {
    if(resultado <= 1000) {
            console.log("O Herói tem de sado " +resultado+ " está no nível de  Ferro"); break
    }else if(resultado >= 10) {
            console.log("O Herói tem de sado " +resultado+ " está no nível de Bronze"); break
    }else if(resultado >= 11 && resultado <= 20) {
            console.log("O Herói tem de sado " +resultado+ " está no nível de Prata"); break
    }else if(resultado >= 21 && resultado <= 50) {
            console.log("O Herói tem de sado " +resultado+ " está no nível de Ouro"); break
    }else if(resultado >= 51 && resultado <= 80) {
            console.log("O Herói tem de sado " +resultado+ " está no nível de Platina"); break
    }else if(resultado >= 81 && resultado <= 90) {
            console.log("O Herói tem de sado " +resultado+ " está no nível de Ascendente"); break
    }else if(resultado >= 91 && resultado <= 100) {
            console.log("O Herói tem de sado " +resultado+ " está no nível de Imortal"); break
    }
    
}