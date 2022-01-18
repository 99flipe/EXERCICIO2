//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18
let idade = 22
if (idade >= 18){
    console.log("Parabéns, você tem 18 nos ou mais")
}

//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a variável "humano" seja true
let humano = true
if (idade >=18 && humano == true){
    console.log("Mensagem no console")
} else{
    console.log("A condição deu false")
}

//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro
let mes = "Abril"

if (mes === "Dezembro" || mes === "Janeiro"){
    console.log("Parabéns, esse mês é todo seu!!")
} else{
    console.log(`Você faz aniversário em ${mes}`)
}

//*** Exercícios bônus
//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R
let nome = "Felipe"

//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E