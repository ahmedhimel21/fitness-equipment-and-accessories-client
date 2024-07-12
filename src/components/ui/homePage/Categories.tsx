import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hooks";
import CategoriesCard from "./card/CategoriesCard";
import { setCategory } from "../../../redux/features/filter/filterSlice";

const Categories = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // grab category name: navigate and dispatch categoryName basis on category name
  const handleCategory = (category: string) => {
    navigate("/products"), dispatch(setCategory(category));
  };

  return <CategoriesCard handleCategory={handleCategory}></CategoriesCard>;
};

export default Categories;
