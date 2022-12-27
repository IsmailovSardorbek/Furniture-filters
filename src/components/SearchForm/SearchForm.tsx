import { useContext } from "react";
import CategoryList from "../CategoryList/CategoryList";
import "./search-form.css";
import Context from "../../context/Context";

export default function SearchForm() {
  const { searchValue, setSearchValue } = useContext(Context);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
  }

  return (
    <div className="search-form">
      <div className="search">
        <input
          type="text"
          placeholder="search..."
          className="search-input"
          onChange={handleChange}
        />
      </div>
      <CategoryList />
    </div>
  );
}
