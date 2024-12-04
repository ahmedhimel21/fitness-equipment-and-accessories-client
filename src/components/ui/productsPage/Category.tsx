import { Checkbox, Label } from "flowbite-react";
import {
  removeCategory,
  setCategory,
} from "../../../redux/features/filter/filterSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";
import { CategoryData } from "../../../utils/staticData";

const Category = () => {
  const dispatch = useAppDispatch();
  //get local categories
  const { categories } = useAppSelector((state: RootState) => state.filters);

  //dispatch category
  const handleCategoryChange = (category: string) => {
    if (categories.includes(category)) {
      dispatch(removeCategory(category));
    } else {
      dispatch(setCategory(category));
    }
  };
  return (
    <>
      <div className="ml-2">
        <h2 className="text-lg text-start">Category</h2>
        {CategoryData.map((category) => (
          <div key={category?.id} className="flex items-center gap-2">
            <Checkbox
              id={category?.name}
              checked={categories.includes(category?.name)}
              onChange={() => handleCategoryChange(category?.name)}
              value={category?.name}
            />
            <Label>{category?.name}</Label>
          </div>
        ))}
      </div>
    </>
  );
};

export default Category;
