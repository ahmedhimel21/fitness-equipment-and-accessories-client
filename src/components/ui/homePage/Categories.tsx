import { useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "../../../redux/api/baseApi";
import { getUniqueCategoriesByName } from "../../../utils/getUniqueCategories";
import { useAppDispatch } from "../../../redux/hooks";
import { selectCategory } from "../../../redux/features/category/categorySlice";

const Categories = () => {
  const { data: products, isLoading, error } = useGetProductsQuery(undefined);
  console.log(products?.data);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleCategoryClick = (category: string) => {
    navigate("/products"), dispatch(selectCategory(category));
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading categories</div>;

  const categories = products ? getUniqueCategoriesByName(products?.data) : [];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
        {categories?.map((category, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => handleCategoryClick(category)}
          >
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-xl">{category}</span>
            </div>
            {/* <h2 className="text-center mt-2">{category}</h2> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default Categories;
