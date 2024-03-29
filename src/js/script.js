function verificarResposta() {
    var opcao = document.querySelector('input[name="animeFavorito"]:checked').value;
    
    if (opcao === "resposta1") {
              
        document.getElementById("exibirResultado").innerHTML = "Correto"
        
        document.getElementById("exibirResultado").style.color = "green";
        
       
    } else {
        document.getElementById("exibirResultado").innerHTML = "Errado"
        
        document.getElementById("exibirResultado").style.color = "red";
              
    }
}








