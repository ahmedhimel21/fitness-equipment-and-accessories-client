import { useGetProductsQuery } from "../redux/api/baseApi";
import { clearCategory } from "../redux/features/category/categorySlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { TProduct } from "../types";

const Products = () => {
  const dispatch = useAppDispatch();
  const selectedCategory = useAppSelector(
    (state: RootState) => state.category.category
  );
  const {
    data: products,
    error,
    isLoading,
  } = useGetProductsQuery(selectedCategory);
  console.log(selectedCategory);

  const handleFilterReset = () => {
    dispatch(clearCategory());
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        {selectedCategory && (
          <div className="mb-4">
            <span className="mr-2">Category: {selectedCategory}</span>
            <button className="btn btn-secondary" onClick={handleFilterReset}>
              Clear Filter
            </button>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products?.data?.map((product: TProduct) => (
            <div key={product._id} className="border p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4"
              />
              <h2 className="text-xl">{product.name}</h2>
              <p>Price: ${product.price}</p>
              <button className="btn btn-primary mt-2">View Details</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
