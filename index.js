let tracker = document.querySelector('.tracker');
let puntero = document.querySelector('#pokebola');
let despaparecer = true;
         

document.body.addEventListener('mousemove',e =>{
    tracker.style.left = `${e.clientX}px`;
    tracker.style.top = `${e.clientY}px`;
})



function abrirPokebola(){
    let pokemon = document.querySelectorAll("button");
    pokemon.forEach(element => {
        element.addEventListener('click', e=>{
            puntero.src = "img/pokeballOpen.png";
            tracker.style.height = "150px";
            tracker.style.width = "150px";  
            despaparecer = true;
            cerrarpokebola();
            sumarPokemon();
          
    });
   
});
}


function cerrarpokebola(){
    let pokemon = document.querySelectorAll("button");
    pokemon.forEach(element => {
        element.addEventListener('mouseout', e=>{
            puntero.src = "img/pokeball.png";
            tracker.style.height = "50px";
            tracker.style.width = "50px";  
            if(despaparecer){
            element.style.display = "none"  
            despaparecer = false;
            }  
    });
   
});
}

function sumarPokemon(){
    let contador =parseInt(document.querySelector('span').innerHTML);
    document.querySelector('span').innerText =  contador+1;
}

abrirPokebola();


