import { useNavigate } from "react-router-dom";
import ProgressBar from "../global/ProgressBar";
import ErrorPage from "../global/ErrorPage";
import FeaturedProductCard from "./card/FeaturedProductCard";
import productApi from "../../../redux/features/product/productApi";

const Featured = () => {
  // get data which is fetched by RTK query
  const {
    data: products,
    isLoading,
    error,
  } = productApi.useGetProductsQuery({ undefined });

  const navigate = useNavigate();

  // explore more button functionality
  const handleExploreMore = () => {
    navigate("/products");
  };

  //view details  button functionality
  const handleViewDetails = (id: string) => {
    navigate(`/products/details/${id}`);
  };

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
      <FeaturedProductCard
        products={products.data}
        handleExploreMore={handleExploreMore}
        handleViewDetails={handleViewDetails}
      ></FeaturedProductCard>
    </>
  );
};

export default Featured;
