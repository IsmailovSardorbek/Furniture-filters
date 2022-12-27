import React, { useContext } from "react";
import "./list-item.css";
import Context from "../../context/Context";
import items from "../../data/items.json";

type CategoryListItemProps = {
  category: string;
  index: number | string;
};

export default function CategoryListItem({
  category,
  index,
}: CategoryListItemProps) {
  const { products, setProducts } = useContext(Context);

  const handleFilter = (category: string) => {
    if (category === "All") {
      setProducts(items);
      return;
    }
    setProducts(items.filter((product) => product.category === category));
  };

  return (
    <li key={index} onClick={() => handleFilter(category)}>
      {category}
    </li>
  );
}
