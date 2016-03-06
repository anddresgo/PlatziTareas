function explode(){
	var d = document.getElementById("puntos"); 
	d.innerHTML= "BOOM CONSEGUISTE " + safe + " puntos";;
}
function winner(){
	var d = document.getElementById("puntos");
	d.innerHTML  = "Felicidades llevas " + safe + " puntos";

}
var x , y;
var campo = [[0 , 1 , 0],
			[0 , 1 , 0],
			[0 , 1 , 0]];
var intentos = 3;
var safe = 0;
function clic(x,y){

	
	var posicion = campo[x][y];

	if (intentos > 0){
		if (posicion == 0){
		safe++;
		console.log("Puntos: " + safe);
		winner();
		
	 	}	
	 	else {
	 	console.log("intentos: " + intentos);
	 	intentos = 0;
		 explode();
	 	}
	}
	else {
		explode();
	}
}

