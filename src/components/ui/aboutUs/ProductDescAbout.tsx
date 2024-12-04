import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hooks";
import { setCategory } from "../../../redux/features/filter/filterSlice";

export const ProductDescAbout = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // grab category name: navigate and dispatch categoryName basis on category name
  const handleCategory = (category: string) => {
    navigate("/products"), dispatch(setCategory(category));
  };

  return (
    <div className="desc-bg-two h-full lg:h-[80vh] py-20 text-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-0 flex items-center  h-full">
        <div className="w-full lg:w-3/5"> </div>

        <div className="w-full lg:w-2/5 flex flex-col items-center justify-center">
          <h1 className="text-2xl lg:text-5xl text-center font-bold mb-1">
            ASSEMBLED AND SUPPORTED
          </h1>
          <h3 className="text-lg text-primary  mb-1 text-center">IN THE USA</h3>
          <div className="bg-white h-[2px] w-24 mt-2 mb-5"></div>
          <p className="text-xs lg:text-sm text-center mb-5">
            By buying an ORIGIN PC, you get access to a fast and powerful PC as
            well as supporting jobs based in the United States.
          </p>
          <>
            <Button
              color="failure"
              className="px-4 py-0.5"
              onClick={() => handleCategory("Dumbbells & Weights")}
            >
              LEARN MORE{" "}
            </Button>
          </>
        </div>
      </div>
    </div>
  );
};
