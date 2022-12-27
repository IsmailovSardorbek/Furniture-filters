import SearchForm from "./components/SearchForm/SearchForm";
import "./App.css";
import Products from "./components/Products/Products";
import { useEffect, useState } from "react";
import items from "./data/items.json";
import Context from "./context/Context";

export default function App() {
  const [searchValue, setSearchValue] = useState("");

  const [products, setProducts] = useState(items);

 
  return (
    <Context.Provider
      value={{ searchValue, setSearchValue, products, setProducts }}
    >
      <div className="App">
        <div className="wrapper">
          <SearchForm />
          <Products />
        </div>
      </div>
    </Context.Provider>
  );
}
