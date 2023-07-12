
import axios from "axios";
import { Product } from "./interface.producto"


export async function getProductById(id: number) {

    const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`);
    const products: Product[] = response.data;

    return products;

}