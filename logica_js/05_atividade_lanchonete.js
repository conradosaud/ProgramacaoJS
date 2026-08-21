// ATIVIDADE DA LANCHONETE
const prompt = require("prompt-sync")();

console.log("Bem-vindo ao CONRADITO DOGUERIA")
console.log("\nDigite o valor dos ingredientes: ")

let pao = parseFloat( prompt("Digite o valor do Pão: R$ ") )
let salsicha = parseFloat( prompt("Digite o valor do Salsicha: R$ ") )
let pureBatata = parseFloat( prompt("Digite o valor do Purê de batata: R$ ") )
let queijo = parseFloat( prompt("Digite o valor do Queijo: R$ ") )
let bacon = parseFloat( prompt("Digite o valor do Bacon: R$ ") )

let lucro_digitado = prompt("\nDigite o valor do lucro: % ")
let lucro = lucro_digitado / 100

let dog_pure_custo = pao + pureBatata + bacon + salsicha
let dog_pure_venda = (lucro * dog_pure_custo) + dog_pure_custo

console.log("----------------------------")
console.log("O lucro desejado é de: "+lucro_digitado+"%")
console.log("----------------------------")


console.log("\n CACHORRO-QUENTE COM PURÊ: ")
console.log("Valor de custo: R$ " + dog_pure_custo)
console.log("Valor de venda: R$ " + dog_pure_venda)

