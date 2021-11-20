

window.onload = function(){
    let body = document.querySelector('body');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');

    let modo = confirm('Desea modo oscuro');
    if(modo){
        body.style.backgroundColor = '#7f7f7f'
        body.classList.add('fondoMoviesList');
    }

    console.log(body);
    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.color ='white';
    moviesListTitulo.style.backgroundColor = 'teal';
    moviesListTitulo.style.padding = '20px';

    /*  modo oscuro al pasar el puntero sobre el logo  */
    let logo = document.querySelector('figure');
    logo.onmouseover = function (){ 
        console.log("cambiaste a modo oscuro")
        body.style.backgroundColor = '#7f7f7f';
    };
}