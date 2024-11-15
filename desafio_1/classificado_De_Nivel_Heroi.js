// Desafio Classificador de nível de Herói
 
let nomeHeroi ="Geleia";
const XP = true;

while(XP === true) {
if(XP <= 1000) {
    console.log("O Herói de nome " +nomeHeroi+ " está no nível de  Ferro"); break;
}else if(XP >= 1001 && XP <= 2000) {
    console.log("O Herói de nome " +nomeHeroi+ " está no nível de Bronze"); break;
}else if(XP >= 2001 && XP <= 5000) {
    console.log("O Herói de nome " +nomeHeroi+ " está no nível de Prata"); break;
}else if(XP >= 5001 && XP <= 7000) {
    console.log("O Herói de nome " +nomeHeroi+ " está no nível de Ouro"); break;
}else if(XP >= 7001 && XP <= 8000) {
    console.log("O Herói de nome " +nomeHeroi+ " está no nível de Platina"); break;
}else if(XP >= 8001 && XP <= 9000) {
    console.log("O Herói de nome " +nomeHeroi+ " está no nível de Ascendente"); break;
}else if(XP >= 9001 && XP <= 10000) {
    console.log("O Herói de nome " +nomeHeroi+ " está no nível de Imortal"); break;
}else {
    console.log("O Herói de nome " +nomeHeroi+ " está no nível de Radiante"); break;
}

}

