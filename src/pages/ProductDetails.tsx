import { useParams } from "react-router-dom";
import { useGetSpecificProductQuery } from "../redux/api/baseApi";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetSpecificProductQuery(id);
  const product = data.data;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error:</div>;
  }
  return (
    <>
      <div className="flex flex-col md:flex-row  md:mt-12">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 h-64 object-cover mb-4 md:mb-0"
        />
        <div className="md:ml-4">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-xl mb-2">${product.price}</p>
          <p className="mb-2">Stock: {product.stock}</p>
          <p className="mb-4">{product.description}</p>
          <button
          // className={`btn ${isOutOfStock ? 'btn-disabled' : 'btn-primary'}`}
          // onClick={handleAddToCart}
          // disabled={isOutOfStock}
          >
            {/* {isOutOfStock ? 'Out of Stock' : 'Add to Cart'} */}
            add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
