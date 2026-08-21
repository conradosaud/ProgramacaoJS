// Aula 05 - Condições
let prompt = require("prompt-sync")();

console.log("Bem-vindo ao DETRAN!")
let idade = prompt("Digite a sua idade: ")

// Comparadores
// > maior
// < menor
// == igual
// >= maior OU igual
// <= menor OU igual
// != diferente

if(idade >= 18){
    console.log("Você já tem idade para tirar a CNH")
} else {
    console.log("Você ainda não pode tirar CNH, volte depois...")
}
