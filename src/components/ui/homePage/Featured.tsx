import { Link } from "react-router-dom";
import ProgressBar from "../global/ProgressBar";
import ErrorPage from "../global/ErrorPage";
import FeaturedProductCard from "./card/FeaturedProductCard";
import productApi from "../../../redux/features/product/productApi";
import { useEffect, useState } from "react";
import { Button } from "flowbite-react";

const Featured = () => {
  // get data which is fetched by RTK query
  const { data, isLoading, error } = productApi.useGetProductsQuery({
    undefined,
  });

  const products = data?.data;

  const [randomProducts, setRandomProducts] = useState([]);

  //Get Random 6 Products
  useEffect(() => {
    const shuffledProducts = [...products].sort(() => Math.random() - 0.5);
    const selectedProducts = shuffledProducts.slice(0, 8);
    setRandomProducts(selectedProducts);
  }, [products]);

  // if data is loading showing progress
  if (isLoading) {
    return (
      <div>
        <ProgressBar></ProgressBar>
      </div>
    );
  }
  // if any error occur during fetching data showing error
  if (error) {
    return (
      <div className="w-1/2 mx-auto">
        <ErrorPage></ErrorPage>
      </div>
    );
  }
  return (
    <>
      <div className="bg-lightBg text-secondary">
        <div className="text-center pt-10">
          <h1 className="text-2xl lg:text-4xl font-bold text-primary">
            Featured Products
          </h1>
          <h3 className="text-sm lg:text-base">
            Check & Get Your Desired Product!
          </h3>
        </div>

        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-5 max-w-7xl mx-auto py-10 px-3 md:px-3 lg:px-2 place-items-center">
          {randomProducts?.map((product) => (
            <FeaturedProductCard key={product?._id} product={product} />
          ))}
        </div>
        <div className="flex items-center justify-center py-4">
          <Link to={"/products"}>
            {" "}
            <Button color="failure" className="px-6 py-1 text-lg ">
              VIEW ALL
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Featured;
