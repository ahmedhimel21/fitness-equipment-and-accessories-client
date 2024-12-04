/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "flowbite-react";
import { TProduct } from "../../../types";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import productApi from "../../../redux/features/product/productApi";
import FeaturedProductCard from "../homePage/card/FeaturedProductCard";

type TProductDetailsProps = {
  product: TProduct;
  handleAddToCart: () => Promise<void>;
  isProductOutOfStock: boolean;
};

const ProductDetailsCard = ({
  product,
  handleAddToCart,
  isProductOutOfStock,
}: TProductDetailsProps) => {
  const { data: relatedProducts, isLoading } =
    productApi.useGetProductsQuery(undefined);
  //Get Related Products
  const relData = relatedProducts?.filter(
    (data: any) =>
      data._id !== product?._id && data.category === product?.category
  );
  return (
    <>
      {/* <div className="card card-side bg-base-100 shadow-xl mb-8">
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
          <p className="mb-0">
            Stock: {product.stock ? product.stock : "Out of the stock"}
          </p>
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
      </div> */}

      <div className="bg-lightBg text-secondary ">
        <div className="max-w-7xl mx-auto px-5 lg:px-0  py-10 ">
          <div>
            <div className="flex flex-col lg:flex-row items-start gap-5 lg:gap-10 mb-5 lg:mb-10 bg-white p-10">
              <div className="w-full lg:w-1/2 h-full lg:h-[400px]">
                <img
                  src={product?.image}
                  alt={product?.name}
                  width={200}
                  height={300}
                  className="h-full w-full"
                />
              </div>

              <div className="w-full lg:w-1/2">
                <div>
                  <h1 className="text-primary text-xl lg:text-2xl font-bold mb-2">
                    {product?.name}
                  </h1>

                  <div className="flex flex-wrap items-center gap-1 mb-2 font-bold text-xs lg:text-sm">
                    <span className="bg-red-200 px-2 py-1 rounded-full font-semibold">
                      Category : {product?.category}
                    </span>
                    <span className="bg-red-200 px-2 py-1 rounded-full font-semibold">
                      Status :{" "}
                      {product.stock <= 0 ? "Out Of Stock" : "In Stock"}
                    </span>
                  </div>

                  <p className=" font-bold mb-2">
                    Price:{" "}
                    <span className="text-xl text-primary">
                      {product?.price}
                    </span>{" "}
                    Tk
                  </p>

                  <div>
                    <p>
                      <span className=" font-bold text-sm lg:text-base">
                        description:{" "}
                      </span>
                      {product?.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 my-3">
                    <Link to={"/products/cart"}>
                      <Button
                        color="failure"
                        className="px-3 py-0.5"
                        onClick={() => handleAddToCart()}
                      >
                        <span> Buy Now</span>
                        <Icon
                          icon="icon-park-outline:buy"
                          className="text-xl md:2xl font-bold ml-1"
                        />
                      </Button>
                    </Link>

                    <Button
                      onClick={() => handleAddToCart()}
                      color="warning"
                      className="px-3 py-0.5"
                      disabled={isProductOutOfStock}
                    >
                      <span> Add to Cart</span>
                      <Icon
                        icon={"bx:cart-add"}
                        className="text-xl md:2xl font-bold "
                      />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <div className="text-center pt-10">
              <h1 className="text-2xl lg:text-4xl font-bold text-primary">
                Related Products
              </h1>
            </div>
            <div>
              <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-5 max-w-7xl mx-auto py-10 px-3 md:px-3 lg:px-2 place-items-center">
                {!isLoading ? (
                  relData?.map((product: any) => (
                    <FeaturedProductCard key={product?._id} product={product} />
                  ))
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsCard;
