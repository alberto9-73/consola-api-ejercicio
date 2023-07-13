import readline from "readline";
import { getProductById } from "./carpeta-api/productos";
import { getProduct } from "./carpeta-api/productos";

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

console.log('consola-api-ejercicio v0.0.1');

const buscarId =() => {
	rl.question('ingerse el id de producto: ',(id) => {
		


		 getProductById(Number(id))
		 .then(p=> console.log(p.title))
		 .catch(e=> console.log('El Prducto no existe'));
		 
	
		
		
});


}
buscarId()

