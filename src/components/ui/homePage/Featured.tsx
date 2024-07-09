import { useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "../../../redux/api/baseApi";
import { TProduct } from "../../../types";

const Featured = () => {
  const { data: products, isLoading, error } = useGetProductsQuery(undefined);
  const navigate = useNavigate();

  const handleExploreMore = () => {
    navigate("/products");
  };

  const handleViewDetails = (id: string) => {
    navigate(`/products/details/${id}`);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading featured products</div>;
  return (
    <>
      <div className="my-8">
        <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products?.data?.slice(0, 6).map((product: TProduct) => (
            <div key={product._id} className="border p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl mb-2">{product.name}</h3>
              <p className="mb-2">Price: ${product.price}</p>
              <button
                onClick={() => handleViewDetails(product._id)}
                className="btn btn-primary mb-2"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button
            onClick={handleExploreMore}
            className="btn btn-secondary mt-4"
          >
            Explore More
          </button>
        </div>
      </div>
    </>
  );
};

export default Featured;
