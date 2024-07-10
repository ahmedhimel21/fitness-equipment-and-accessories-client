import { useParams } from "react-router-dom";
import {
  useGetSpecificProductQuery,
  useUpdateProductMutation,
} from "../redux/api/baseApi";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { setToCart } from "../redux/features/cart/cartSlice";
import { toast } from "sonner";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetSpecificProductQuery(id);
  const product = data?.data;
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state: RootState) => state.cart);
  const [updateProduct] = useUpdateProductMutation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error:</div>;
  }

  const cartItem = cart.items.find((item) => item._id === product._id);
  const isProductOutOfStock = cartItem
    ? cartItem.quantity >= product.stock
    : false;

  const handleAddToCart = async () => {
    if (!isProductOutOfStock) {
      dispatch(setToCart(product));
      await updateProduct({ id: id, stock: product.stock - 1 });
      toast.success("Successfully added cart!");
    }
  };

  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl mb-8">
        <figure>
          <img
            className="w-full md:h-96"
            src={product.image}
            alt={product.name}
          />
        </figure>
        <div className="card-body">
          <h1 className="text-3xl font-bold mb-0">{product.name}</h1>
          <p className="text-xl mb-0">price: ${product.price}</p>
          <p className="mb-0">Stock: {product.stock}</p>
          <p className="mb-0">Description: {product.description}</p>
          <div className="card-actions justify-end">
            <button
              className={`btn ${
                isProductOutOfStock ? "btn-disabled" : "btn-primary"
              }`}
              onClick={handleAddToCart}
              disabled={isProductOutOfStock}
            >
              {isProductOutOfStock ? "Out of Stock" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
