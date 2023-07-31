const tracker = document.querySelector('.tracker');
let puntero = document.querySelector('pokebola');

         

document.body.addEventListener('mousemove',e =>{
    tracker.style.left = `${e.clientX}px`;
    tracker.style.top = `${e.clientY}px`;
})



function agregarBotones(){
    let pokemon = document.querySelectorAll("button");
    pokemon.forEach(element => {
        element.addEventListener('click', e=>{
            puntero.src = "img/pokeballOpen.png";
            alert('hola');
    });
   
});
}

agregarBotones();