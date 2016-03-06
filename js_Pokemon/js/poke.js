function Pokemon(n,v,a)
{
    this.nombre = n;
    this.vida = v;
    this.ataque = a;
    console.log(n)
}
function mostrar1(x){
    var d = document.getElementById("vida1");
    d.innerHTML  = x;
}
function mostrar2(x){
    var d = document.getElementById("vida2");
    d.innerHTML  = x;
}


function primerataque(){
    var charmander = new Pokemon("charmander", 100, 40);
    var pikachu = new Pokemon("pikachu", 110, 50);
    console.log(charmander)
    console.log(pikachu)

    pikachu.vida = pikachu.vida - charmander.ataque;
    charmander.vida = charmander.vida - pikachu.ataque;

console.log(pikachu.vida);
console.log(charmander.vida);
    mostrar2(pikachu.vida);
    mostrar1(charmander.vida);

}

function segundoataque(){
    var charmander = new Pokemon("charmander", 100, 40);
    var pikachu = new Pokemon("pikachu", 110, 50);
    console.log(charmander)
    console.log(pikachu)

    pikachu.vida = pikachu.vida - (charmander.ataque * 2);
    charmander.vida = charmander.vida - (pikachu.ataque * 2);

console.log(pikachu.vida);
console.log(charmander.vida);
    mostrar2(pikachu.vida);
    mostrar1(charmander.vida);
    if (pikachu.vida <= 0){
        winner(charmander.nombre);

    } else {
        winner(pikachu.nombre);
    }
 }

function winner(x){
    var d = document.getElementById("output_text");
    d.innerHTML = "<h3> El ganador es " + x + "</h3>";
}

//function inicio()
//{
 //   var rattata = new Pokemon("Rattata", 40, 2);
//    rattata.vida = rattata.vida - 13;
//    nombrePokemon.textContent = rattata.nombre;
//}
