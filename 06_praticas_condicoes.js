// Aula 06: Práticas com condições
let prompt = require("prompt-sync")()

let preco_sao_paulo = 125.00
let preco_araraquara = 10
let preco_seguro = 42.50

let total = 0

console.log("Escolha seu destino: ")
console.log("1 - São Paulo por R$ "+preco_sao_paulo)
console.log("2 - Araraquara por R$ "+preco_araraquara)
let resposta = prompt("Digite uma opção: ")

if(resposta == "1"){
    total = preco_sao_paulo
}else{
    total = preco_araraquara
}

let seguro = prompt("Deseja adicionar um seguro por mais R$ "+preco_seguro+"? : ")
if(seguro == "SIM"){
    total = total + preco_seguro
}

let cupom = prompt("Digite seu cupom de desconto: ")
if(cupom == "Conradito10"){
    console.log("Cupom de 10% aplicado!")
    let desconto = total * 0.10
    total = total - desconto
} else {
    console.log("Este cupom não existe...")
}

let email = prompt("Quer receber emails promocionais? : ")
if(email == "SIM"){
    console.log("Obrigado por se cadastrar!")
} else {
    console.log("Ok, você não receberá emails")
}

console.log("\nO total da viagem é de: R$ "+total)

console.log("Formas de pagamento: ")
console.log("1 - Cartão de crédito (acréscimo de 5%)")
console.log("2 - PIX (desconto de 5%)")
resposta = prompt("Escolha uma opção: ")

if(resposta == "1"){
    total = total * 1.05
    // let acrescimo = total * 0.05
    // total = total + acrescimo
}else{
    total = total * 0.95
    // let desconto = total * 0.05
    // total = total - desconto
}

console.log("\nTotal a se pagar: R$ "+total)

console.log("Obrigado, e volte sempre!")

