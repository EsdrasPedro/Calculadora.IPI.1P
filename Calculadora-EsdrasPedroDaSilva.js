/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Esdras Pedro da Silva
 * Curso: IPI
 * Primeira Avalição Individual
 * Questão: 1
 *
 */


var readlineSync = require('readline-sync')


function somar(a, b) {
    return a + b
}


function subtrair(a, b) {
    return a - b
}


function divisão(a, b) {

	for(i = 1; i <= a; i++){
		if(i*b==a){
			return (i)
		}
	}
}


function multiplicação(a, b) {
	var r = 0;

	for(i = 1; i <= a; i++){
		r += b;	
	}
	return (r)
}


function resto(a, b) {

	while(a >= b){
		a -= b
	}
    return (a)
}


do {

    var operacao = parseInt(readlineSync.question("Digite a operacao \n\t(1) Soma\n\t(2) Subtracao \n\t(3) Divisao\n\t(4) Multiplicacao\n\t(5) Resto da divisao\n\t(6) Sair\n"))
    console.log(operacao)

    if (operacao < 1 || operacao > 6) {
			console.log("\n Operacao invalida\n")
	} else {

        if (operacao != 6) {

        var operando1 = parseInt(readlineSync.question("Digite o primeiro operando "))
        var operando2 = parseInt(readlineSync.question("Digite o segundo operando "))

		var resultado = -1

		switch (operacao) {
			case 1:
				resultado = somar(operando1, operando2)
				break;
			case 2:
				resultado = subtrair(operando1, operando2)
				break;
			case 3:
				resultado = divisão(operando1, operando2)
				break;
			case 4:
				resultado = multiplicação(operando1, operando2)
				break;
			case 5:
				resultado = resto(operando1, operando2)
				break;
		}

		console.log("Resultado: ", resultado)
	}
} 
}while (operacao != "6"){
		console.log("\n Saindo\n\n")
}