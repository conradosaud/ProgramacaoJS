// Aula 04: INPUT
let prompt = require("prompt-sync")()

let nome = prompt("Olá, digite o seu nome: ")
let sobrenome = prompt("Digite seu sobrenome: ")
let idade = prompt("Digite sua idade: ")
let nome_completo = nome + " " + sobrenome
console.log("Seja bem-vindo(a) "+nome_completo+" você tem "+idade+" anos XD")

console.log("\n\n")

let produto1 = prompt("Digite o nome de um produto: ")
let valor1 = prompt("Digite o preço de "+produto1+" R$ ")
let produto2 = prompt("Digite o nome de outro produto: ")
let valor2 = prompt("Digite o preço de "+produto2+" R$ ")

console.log("----- RELATÓRIO -----")
console.log(produto1+" - R$ "+valor1)
console.log(produto2+" - R$ "+valor2)