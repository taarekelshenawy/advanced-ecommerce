import { Link } from "react-router-dom";
import styles from "./styles.module.css";
const { category, categoryImg, categoryTitle } = styles;
import type { TCategory } from "src/types/category";



const Category = ({title,prefix,img}:TCategory) => {
  return (
    <div className={category}>
      <div className={categoryImg}>
        <Link to={`/product/${prefix}`}>
        <img
          src={img}
          alt=""
        />
        </Link>
      </div>
      <h4 className={categoryTitle}>{title}</h4>
    </div>
  );
};

export default Category;