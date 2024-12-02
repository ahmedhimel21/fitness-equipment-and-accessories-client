import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { setToCart } from "../redux/features/cart/cartSlice";
import { toast } from "sonner";
import ProductDetailsCard from "../components/ui/ProductDetailsPage/ProductDetailsCard";
import ProgressBar from "../components/ui/global/ProgressBar";
import ErrorPage from "../components/ui/global/ErrorPage";
import productApi from "../redux/features/product/productApi";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = productApi.useGetSpecificProductQuery(id);
  // destructure single product
  const product = data?.data;
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state: RootState) => state.cart);

  if (isLoading) {
    return <ProgressBar></ProgressBar>;
  }

  if (error) {
    return <ErrorPage></ErrorPage>;
  }

  // find matching cart item
  const cartItem = cart.items.find((item) => item._id === product._id);
  //check is the product out of stock or not
  const isProductOutOfStock = cartItem
    ? cartItem.quantity >= product.stock
    : false;

  const handleAddToCart = async () => {
    if (!isProductOutOfStock) {
      dispatch(setToCart(product));
      toast.success("Successfully added cart!");
    }
  };

  return (
    <>
      <ProductDetailsCard
        product={product}
        handleAddToCart={handleAddToCart}
        isProductOutOfStock={isProductOutOfStock}
      ></ProductDetailsCard>
    </>
  );
};

export default ProductDetails;
