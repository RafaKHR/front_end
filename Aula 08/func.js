var calc = document.getElementById('calc');

function dobro () {
	var valor = prompt ("Digite o valor ");
	if (valor === '') {
		alert('Digite um valor valido ');
		calc.innerHTML = "tente novamente ";
	} else {
		calc.innerHTML = O dobro do valor digitado foi " + (valor * 2);
	}
}

function escolha() {
	var op = prompt('Digite um valor entre 1 a 4');
	switch (Number(op)) { //Casting - converter
		case 1:
			alert("escolhido valor1");
			break;
		case 2:
			alert("escolhido valor2");
			break;
		case 3:
			alert("escolhido valor3");
			break;
		case 4:
			alert("escolhido valor4");
			break;
		default:
			alert("escolhido valor errado");
			break;
	}
}