/*
Atividade
Crie uma função que recebe dois números como parâmetros.
Confira se os números são iguais.
Confira se a soma dos números é maior que 10 ou menor que 20.
Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20". 
*/

function comparar(num1,num2){
    let soma = 0
    soma = num1 + num2
    const resultado = num1 === num2 ? 'são iguais' : 'são diferentes'
   
    if(soma < 10){
        console.log(`Os números ${num1} e ${num2} ${resultado}. Sua soma é ${soma}, que é menor que 10 e menor que 20`)
    }else if(soma > 10 && soma < 20){
        console.log(`Os números ${num1} e ${num2} ${resultado}. Sua soma é ${soma}, que é maior que 10 e menor que 20`)
    }else if(soma === 20){
        console.log(`Os números ${num1} e ${num2} ${resultado}. Sua soma é ${soma}, que é maior que 10`)
    }
}
comparar(10,9)