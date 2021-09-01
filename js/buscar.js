var buttonadd = document.querySelector("#buscar-paciente");

buttonadd.addEventListener("click", function(){
    
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){

        if(xhr.status == 200){
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente){
            adicionaPacienteTable(paciente);
            })
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            var erro = document.querySelector("#erro-ajax");
            erro.classList.remove("esconde");
        }
        
    });

    xhr.send();

})