
var titulo = document.querySelector(".titulo");

var pacientes = document.querySelectorAll(".paciente");

for(var i=0; i<pacientes.length; i++){

	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var tdAltura = paciente.querySelector(".info-altura");
	var tdimc = paciente.querySelector(".info-imc");

	var peso = tdPeso.textContent;
	var altura = tdAltura.textContent;

	var pesovalido = validaPeso(peso);
	var alturavalida = validaAltura(altura);

	if(!pesovalido){
		console.log("Peso Invalido!");
		pesovalido = false;
		tdimc.textContent = "Peso Invalido!";
		paciente.classList.add("paciente-invalido");
	}

	if(!alturavalida){
		console.log("Altura Invalida!");
		alturavalida = false;
		tdimc.textContent = "Altura Invalida!";
		paciente.classList.add("paciente-invalido");
	}

	if( alturavalida && pesovalido) {
		var imc = calculaIMC(peso,altura);
		tdimc.textContent = imc;
	}
}

function validaPeso(peso){
	if(peso >= 0 && peso <= 400){
		return true;
	}else{
		return false;
	}
}

function validaAltura(altura){
	if(altura >= 0 && altura <= 3.0){
		return true;
	}else{
		return false;
	}
}

function calculaIMC(peso, altura){
	var imc = 0;
	imc = peso / (altura * altura);
	return imc.toFixed(2);
}






		
