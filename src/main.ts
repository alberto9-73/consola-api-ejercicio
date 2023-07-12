import readline from "readline";
import { getProductById } from "./carpeta-api/productos";
import { getProduct } from "./carpeta-api/productos";

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

console.log('consola-api-ejercicio v0.0.1');

const buscarId =() => {
	rl.question('ingerse el id de producto: ',() => {
		
	let id:any= rl

		const products = getProductById(id)
		
		 console.log(products);
		

});


}
buscarId()

