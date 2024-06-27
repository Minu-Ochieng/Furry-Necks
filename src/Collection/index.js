import React from "react";
import "./index.css";
import ProductCard from "../Atoms/ProductCard";
import { useGetProducts } from "./hooks/useGetProducts";

const Products = () => {
  const { products, error, loading } = useGetProducts();
  console.log({ products });
  return (
    <div className="details">
      {loading && <h2>loading porducts ...</h2>}
      {error && <h2>{error}</h2>}
      {products.length>0 ? products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={`${product.title}`}
              price={product.price}
              category={product.category}
              description={product.description}
            />
          )) : !loading && <h2>No products found </h2>}
    </div>
  );
};
export default Products;
