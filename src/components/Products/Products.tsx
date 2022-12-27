import { ReactNode, useContext, useEffect, useState } from "react";
import "./products.css";
import Product from "../Product/Product";
import Context from "../../context/Context";
import items from "../../data/items.json";

export default function Products() {
  const { searchValue, products, setProducts } = useContext(Context);

  useEffect(() => {
    setProducts(items.sort(() => Math.random() - 0.5));
  }, []);

  useEffect(() => {
    setProducts(
      items.filter((item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue]);

  return (
    <div className="products-grid">
      {products.map((product, index) => {
        return <Product {...product} key={index} />;
      })}
    </div>
  );
}
