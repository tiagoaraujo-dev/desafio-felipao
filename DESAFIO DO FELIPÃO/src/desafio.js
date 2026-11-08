// Variáveis para armazenar o nome e a experiência (XP) do herói:
let nome = "Tiago";
let xp = 7500; 

// Variável que vai guardar o nível final:
let nivelHeroi = "";

// Estrutura de decisão para classificar o nível com base no XP:
if (xp < 1000) {
    nivelHeroi = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    nivelHeroi = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
    nivelHeroi = "Prata";
} else if (xp >= 5001 && xp <= 7000) {
    nivelHeroi = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
    nivelHeroi = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
    nivelHeroi = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
    nivelHeroi = "Imortal";
} else {
    nivelHeroi = "Radiante"; // XP maior ou igual a 10001
}

// Saída (Usando os nomes exatos das suas variáveis: nome e nivelHeroi)
console.log("O Herói de nome: " + nome + " está no nível de " + nivelHeroi);
