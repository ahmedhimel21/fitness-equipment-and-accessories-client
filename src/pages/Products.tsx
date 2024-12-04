/* eslint-disable @typescript-eslint/no-explicit-any */

import Category from "../components/ui/productsPage/Category";
import SearchBar from "../components/ui/productsPage/SearchBar";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import productApi from "../redux/features/product/productApi";
import PaginationProducts from "../utils/Pagination";
import FeaturedProductCard from "../components/ui/homePage/card/FeaturedProductCard";
import { useState } from "react";
import Sorting from "../components/ui/productsPage/Sorting";
import ClearFilterButton from "../components/ui/productsPage/ClearFilterButton";

const Products = () => {
  // grab filtering value from local state
  const { searchTerm, sort, categories } = useAppSelector(
    (state: RootState) => state.filters
  );
  //fetching data
  const { data: products } = productApi.useGetProductsQuery({
    searchTerm,
    sort,
    categories,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(12);

  //Change Page
  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);
  const handlePrevBtn = () => setCurrentPage(currentPage - 1);
  const handleNextBtn = () => setCurrentPage(currentPage + 1);

  return (
    <>
      <div className="bg-lightBg text-secondary">
        <div className="text-center pt-10">
          <h1 className="text-2xl lg:text-4xl font-bold text-primary">
            All Of Our Products
          </h1>
          <h3 className="text-sm lg:text-base">
            Check & Get Your Desired Products!
          </h3>
        </div>

        <div className="max-w-7xl mx-auto py-10 px-5 lg:px-0">
          <SearchBar></SearchBar>

          <div className="flex flex-col lg:flex-row  items-start gap-5 ">
            <div className="w-full lg:w-1/5 bg-gray-200 px-2 pt-2 pb-10">
              <h2 className="text-2xl font-bold text-center mb-10">
                Filter Products
              </h2>
              {/* CheckBox Sorting */}
              <div className="flex flex-row lg:flex-col gap-5 items-start">
                {/* CheckBox Sorting By Category */}
                <Category></Category>
                <Sorting></Sorting>
                <ClearFilterButton></ClearFilterButton>
              </div>
            </div>

            {/* SHowing data */}
            <div className="w-full lg:w-4/5 ">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-5 place-items-center">
                {products?.data?.map((product: any) => (
                  <FeaturedProductCard key={product?._id} product={product} />
                ))}
              </div>
              <PaginationProducts
                currentPage={currentPage}
                postPerPage={postPerPage}
                totalPost={products?.data?.length}
                handlePrevBtn={handlePrevBtn}
                handleNextBtn={handleNextBtn}
                paginate={paginate}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
