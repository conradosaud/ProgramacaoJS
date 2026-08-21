// Aula 04: Converter variáveis
let prompt = require("prompt-sync")()

let numero1 = prompt("Digite um número: ")
numero1 = parseInt(numero1)

let numero2 = parseInt( prompt("Digite outro número: ") )

let soma = numero1 + numero2
console.log("O resultado é: "+soma)

// ----------------------------------------

// ----- Atividade 1:
// Peça para o usuário digitar o ano em que nasceu e
// mostre a idade atual dela no console

let ano = parseInt( prompt("Digite ano que você nasceu: ") )
let idade = 2026 - ano
console.log("Você tem "+idade+" anos")

// ----- Atividade 2:
// Peça para o usuário digitar três notas de um aluno
// em seguida mostre a média escolar dele
let nota1 = parseFloat( prompt("Digite a primeira nota: ") )
let nota2 = parseFloat( prompt("Digite a segunda nota: ") )
let nota3 = parseFloat( prompt("Digite a terceira nota: ") )
let media = (nota1 + nota2 + nota3) / 3


// ----- Atividade 3:
// Peça para um usuário digitar:
// o nome de um produto, o seu preço e a quantidade em estoque
// Em seguida, exiba o nome do produto e quanto o usuário vai faturar
// caso venda todos os itens em estoque
let produto = prompt("Digite o nome do produto: ")
let preco = prompt("Digite o preço de "+produto+": R$ ")
preco = parseFloat(preco)
let quantidade = prompt("Digite a quantidade: ")
quantidade = parseInt(quantidade)

let total = preco * quantidade
