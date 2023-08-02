let tracker = document.querySelector('.tracker');
let puntero = document.querySelector('#pokebola');
let despaparecer = true;


document.body.addEventListener('mousemove', e => {
    tracker.style.left = `${e.clientX}px`;
    tracker.style.top = `${e.clientY}px`;
})



//contador de pokemon
function sumarPokemonCapturados() {
    let contador = parseInt(document.querySelector('span').innerHTML);
    document.querySelector('span').innerText = contador + 1;
}

//colocar los pokemon en el eje x de la pantalla
function moverPokemon() {
    let pokemon = document.querySelectorAll("button");
    pokemon.forEach(element => {
        element.style.position = 'relative';
        element.style.top = '100px';
        element.style.left = '200px';

    }
    )
};


//agrega pokemon en la pantalla
function agregarPokemon() {

    const pantalla = document.querySelector('.pantalla');

    //creando img
    const imgPokemon = document.createElement('img');
    imgPokemon.src = "img/pokeball.png";

    //creando btn
    const btnPokemon = document.createElement('button');
    btnPokemon.style.position = 'relative';
    btnPokemon.style.top = '100px';
    btnPokemon.style.left = '200px';

    btnPokemon.addEventListener('click', e => {
        puntero.src = "img/pokeballOpen.png";
        tracker.style.height = "150px";
        tracker.style.width = "150px";
        despaparecer = true;

        sumarPokemonCapturados();

    });



    btnPokemon.addEventListener('mouseout', e => {
        puntero.src = "img/pokeball.png";
        tracker.style.height = "50px";
        tracker.style.width = "50px";
        if (despaparecer) {
            btnPokemon.style.display = "none"
            despaparecer = false;
        }
    });

    btnPokemon.appendChild(imgPokemon);
    pantalla.appendChild(btnPokemon);

}





// agrega los pokemon cada 2 segundos
function agregarPOkemonPorTiempo() {
    let i = 0;
    const agregarPokes = setTimeout("agregarPokemon()", 1000);
    if (i >= 10) {
        clearTimeout(agregarPokes);
    }
    i++;
}



//agregarPOkemonPorTiempo();
agregarPokemon()
agregarPokemon()
agregarPokemon()


/*
Pokemon.setDatos();
Pokemon.getEjeX();
Pokemon.getImg();
alert(Pokemon.imagen +" "+  Pokemon.posicionX)
*/