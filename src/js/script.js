function verificarResposta() {
    var opcao1 = document.querySelector('input[name="nome-grand-line"]:checked').value;
    var opcao2 = document.querySelector('input[name="nome-do-luffy"]:checked').value;
    


    
    if ( opcao1 === "resposta1") {        
        document.getElementById("exibirResultado1").innerHTML = "Correto!"
        document.getElementById("exibirResultado1").style.color = "green";
        console.log('test 1');
    } else {
        document.getElementById("exibirResultado1").innerHTML = "Errado!"
        document.getElementById("exibirResultado1").style.color = "FireBrick";
    }
    
    if  (opcao2 === 'Monkey-D-luffy'){
        document.getElementById("exibirResultado2").innerHTML = "Correto!"
        document.getElementById("exibirResultado2").style.color = "green";
    } else {
        document.getElementById("exibirResultado2").innerHTML = "Errado!"
        document.getElementById("exibirResultado2").style.color = "FireBrick";
    }


  
}

     
//    else {
    //  document.getElementById("exibirResultado1").innerHTML = "Errado!"
   //   document.getElementById("exibirResultado1").style.color = "FireBrick";
  //    console.log('test 3');     
//      }






