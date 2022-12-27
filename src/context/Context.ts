import React from "react";

type SearchFilterContext = {
  searchValue: any;
  products: Array<any>;
  setSearchValue: (value: string) => void;
  setProducts: (array: Array<any>) => void;
};

const Context = React.createContext({} as SearchFilterContext);

export default Context;
