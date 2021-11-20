window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    /*  Modifica h1   */
    titulo.onmouseover = function (){ 
        titulo.style.backgroundColor = "green";
    };
    titulo.onmouseout = function (){ 
        titulo.style.backgroundColor = "#fff";
    };

    let inputTitulo = document.querySelector('#titulo');
    var estadoSecreto = 0;
    inputTitulo.onkeydown = function (e){ 
        console.log(e.key)
        if(estadoSecreto == 0 && e.key == "s"){
            console.log("entro 1")
            estadoSecreto = estadoSecreto + 1;
        }else if(estadoSecreto == 1 && e.key == "e"){
            estadoSecreto = estadoSecreto + 1;
        }else if(estadoSecreto == 2 && e.key == "c"){
            estadoSecreto = estadoSecreto + 1;
        }else if(estadoSecreto == 3 && e.key == "r"){
            estadoSecreto = estadoSecreto + 1;
        }else if(estadoSecreto == 4 && e.key == "e"){
            estadoSecreto = estadoSecreto + 1;
        }else if(estadoSecreto == 5 && e.key == "t"){
            estadoSecreto = estadoSecreto + 1;
        }else if(estadoSecreto == 6 && e.key == "o"){
            estadoSecreto = 0;
            alert("SECRETO MAGICO")
        }else{
            estadoSecreto = 0;
        }        
        console.log(estadoSecreto)
    };
}