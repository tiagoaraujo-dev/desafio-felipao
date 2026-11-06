// 1️⃣ Variáveis para armazenar o nome e a experiência (XP) do herói
let nomeHeroi = "Tiago"; 
let xpHeroi = 7500; // Altere este valor para testar outros níveis

// Variável que vai guardar o nível final
let nivelHeroi = "";

// 2️⃣ Estrutura de decisão para classificar o nível com base no XP
if (xpHeroi < 1000) {
    nivelHeroi = "Ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    nivelHeroi = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    nivelHeroi = "Prata";
} else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    nivelHeroi = "Ouro";
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    nivelHeroi = "Platina";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    nivelHeroi = "Ascendente";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    nivelHeroi = "Imortal";
} else {
    nivelHeroi = "Radiante"; // Para XP maior ou igual a 10001
}

// 3️⃣ Saída final formatada
console.log(`O Herói de nome **${nomeHeroi}** está no nível de **${nivelHeroi}**`);
