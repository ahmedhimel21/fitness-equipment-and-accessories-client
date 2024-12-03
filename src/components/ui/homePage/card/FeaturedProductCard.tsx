/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";
import { toast } from "sonner";
import { setToCart } from "../../../../redux/features/cart/cartSlice";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const FeaturedProductCard = ({ product }: { product: any }) => {
  const { _id, name, price, img, stock, category } = product;

  const dispatch = useAppDispatch();
  const cart = useAppSelector((state: RootState) => state.cart);

  // find matching cart item
  const cartItem = cart.items.find((item) => item._id === product._id);
  //check is the product out of stock or not
  const isProductOutOfStock = cartItem
    ? cartItem.quantity >= product.stock
    : false;

  const handleAddToCart = async (product: any) => {
    if (!isProductOutOfStock) {
      dispatch(setToCart(product));
      toast.success("Successfully added cart!");
    }
  };
  return (
    <>
      <div className="h-full lg:h-[400px] overflow-hidden rounded-md shadow-sm hover:shadow-xl bg-white relative product-card w-full max-w-[350px]">
        <div className="h-[170px] lg:h-[240px] w-full">
          <img src={img} alt={name} srcSet="" className="card-img " />
        </div>

        <div className=" p-2 lg:p-3 h-full ">
          <Link to={`/products/details/${_id}`}>
            <h1 className="text-sm md:text-base lg:text-xl font-bold tracking-tight ">
              {name.slice(0, 22)}
              {name.length > 22 ? "..." : ""}{" "}
            </h1>
          </Link>

          <p className="text-xs lg:text-base">Category: {category}</p>
          <p className="text-xs lg:text-base">
            Price:{" "}
            <span className="text-primary text-base lg:text-lg font-bold">
              {" "}
              {price} tk
            </span>
          </p>
          <p className="text-xs lg:text-base">
            Status: {stock <= 0 ? "Out Of Stock" : "In Stock"}
          </p>

          <button
            onClick={() => handleAddToCart(product)}
            className="absolute right-3 bottom-5 bg-lightBg p-2 rounded-md shadow-lg product-card-cart"
            disabled={product?.stock <= 0}
          >
            <Icon
              icon={"bx:cart-add"}
              className="text-xl md:2xl lg:text-3xl font-bold text-primary"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default FeaturedProductCard;
