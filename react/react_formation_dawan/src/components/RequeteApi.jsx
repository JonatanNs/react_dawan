import axios from "axios";
import TableProduct from "./ExerciceFruits/TableProduct";
import { useEffect, useState } from "react";
import { FormProduct } from "./FormProduct";

export const RequeteApi = () => {
    
    const endpoints = "http://localhost:3001/products";

    const [products, setProducts] = useState([]);

    useEffect(() =>{
        loadProducts();
    }, []);

    const loadProducts = () => {
        axios
        .get(endpoints)
        .then((response) => {
            console.log(response.data);
            setProducts(response.data);
        })
        .catch((e) => console.log(e))
        .finally(() => console.log("requete terminé"));
    };

  return (
    <>
      <h1>Requete API</h1>
      <a href={endpoints}>endpoints: {endpoints}</a>

      <TableProduct products={products}/>
      <FormProduct setProducts={setProducts}/>
    </>
  );
}