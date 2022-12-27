import "./furniture-list.css";
import categories from "../../data/categories.json";
import CategoryListItem from "../CategoryListItem/CategoryListItem";

export default function CategoryList() {
  return (
    <>
      <ul className="categories">
        <h4>Company</h4>
        {categories.map((category, index) => {
          return (
            <CategoryListItem category={category} index={index} key={index} />
          );
        })}
      </ul>
    </>
  );
}
