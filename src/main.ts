import readline from "readline";
import { getProductById } from "./carpeta-api/productos";


console.log('consola-api-ejercicio v0.0.1');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const buscarId =() => {
	rl.question('ingerse el id de producto: ',() => {
		
	let id:any= rl

		const products = getProductById(id)
		
		 console.log(products);
		

});


}
buscarId()