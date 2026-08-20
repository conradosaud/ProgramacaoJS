const prompt = require("prompt-sync")();

// Entrada dos valores dos ingredientes
console.log("========================================");
console.log("   CADASTRO DE PREÇOS - CONRADITO DOGUEZITO");
console.log("========================================");

let pao = Number(prompt("Digite o preço do pão: R$ "));
let salsicha = Number(prompt("Digite o preço da salsicha: R$ "));
let pureDeBatata = Number(prompt("Digite o preço do purê de batata: R$ "));
let queijo = Number(prompt("Digite o preço do queijo: R$ "));
let bacon = Number(prompt("Digite o preço do bacon: R$ "));

// Entrada da porcentagem de lucro
let lucro = Number(prompt("Digite a porcentagem de lucro desejada: "));

// Cálculo do preço de custo dos produtos

// Cachorro-quente com purê
let cachorroQuentePure =
    pao + pureDeBatata + bacon + salsicha;

// Cachorro-quente cremoso
let cachorroQuenteCremoso =
    pao + salsicha + salsicha + queijo;

// Cachorro-quente especial
let cachorroQuenteEspecial =
    pao + salsicha + pureDeBatata + queijo + bacon;

// Cálculo do preço de custo do combo
let combo =
    cachorroQuentePure +
    cachorroQuenteCremoso +
    cachorroQuenteEspecial;

// Conversão da porcentagem para decimal
let percentualLucro = lucro / 100;

// Cálculo do preço de venda

let vendaCachorroQuentePure =
    cachorroQuentePure * (1 + percentualLucro);

let vendaCachorroQuenteCremoso =
    cachorroQuenteCremoso * (1 + percentualLucro);

let vendaCachorroQuenteEspecial =
    cachorroQuenteEspecial * (1 + percentualLucro);

let vendaCombo =
    combo * (1 + percentualLucro);


// Exibição do cardápio

console.log("\n");
console.log("========================================");
console.log("       CARDÁPIO CONRADITO DOGUEZITO");
console.log("========================================");

console.log(`Lucro aplicado: ${lucro.toFixed(2)}%`);

console.log("\nCACHORRO-QUENTE COM PURÊ");
console.log("Ingredientes: pão, purê de batata, bacon e salsicha");
console.log(`Preço de custo: R$ ${cachorroQuentePure.toFixed(2)}`);
console.log(`Preço de venda: R$ ${vendaCachorroQuentePure.toFixed(2)}`);

console.log("----------------------------------------");

console.log("\nCACHORRO-QUENTE CREMOSO");
console.log("Ingredientes: pão, 2 salsichas e queijo");
console.log(`Preço de custo: R$ ${cachorroQuenteCremoso.toFixed(2)}`);
console.log(`Preço de venda: R$ ${vendaCachorroQuenteCremoso.toFixed(2)}`);

console.log("----------------------------------------");

console.log("\nCACHORRO-QUENTE ESPECIAL");
console.log("Ingredientes: pão, salsicha, purê de batata, queijo e bacon");
console.log(`Preço de custo: R$ ${cachorroQuenteEspecial.toFixed(2)}`);
console.log(`Preço de venda: R$ ${vendaCachorroQuenteEspecial.toFixed(2)}`);

console.log("----------------------------------------");

console.log("\nCOMBO");
console.log(
    "Cachorro-quente com purê + Cachorro-quente cremoso + Cachorro-quente especial"
);
console.log(`Preço de custo: R$ ${combo.toFixed(2)}`);
console.log(`Preço de venda: R$ ${vendaCombo.toFixed(2)}`);

console.log("========================================");