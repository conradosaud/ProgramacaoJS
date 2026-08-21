const prompt = require("prompt-sync")();

// Ativdade 3
let peso = parseFloat( prompt("Digite seu peso (kg): ") )
let altura = parseFloat( prompt("Digite sua altura (m): ") )
let imc = peso / (altura * altura)

if(imc < 25){
    console.log("Ta suave mano peso normal")
}else{
    console.log("Ta gordo, emagreça")
}

// Atividade 2
let numero1 = parseInt( prompt("Digite um número: ") )
let numero2 = parseInt( prompt("Digite outro número: ") )
if(numero1 > numero2){
    console.log("O número "+numero1+" é maior do que o "+numero2)
}else{
    console.log("O número "+numero2+" é maior do que o "+numero1)
}

// Atividade 1
let numero = parseInt( prompt("Digite um número: ") )
if(numero >= 0){
    console.log("É POSITIVO!")
}else{
    console.log("É NEGATIVO!")
}