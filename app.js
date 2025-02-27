// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica 
// para resolver el problema.

//Variables
let amigos = [] 

function agregarAmigo () { 
    let ingresoAmigos = document.getElementById('amigo');
    let nombreAmigo = ingresoAmigos.value;

    if (!nombreAmigo){
        alert("Por favor ingresa un nombre valido");
        return;
    }
    amigos.push(nombreAmigo);
    limpiarCaja();
    mostrarAmigos();
    


};

function limpiarCaja() {
    let valorCaja = document.querySelector("#amigo");
    valorCaja.value = " ";
    valorCaja.focus();
}

function mostrarAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = " ";

    for(let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);

    };
}

function sortearAmigo() {
    if(amigos.length === 0) {
        alert("Por favor ingresa a tus amigos en la lista para sortear");
        return; 
    }

    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `Tu amigo secreto es: ${amigoSorteado}`;
}