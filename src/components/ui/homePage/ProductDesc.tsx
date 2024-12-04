import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

export default function ProductDesc() {
  return (
    <div className="desc-bg h-full lg:h-[70vh] py-20">
      <div className="max-w-7xl mx-auto px-5 lg:px-0 flex items-center  h-full">
        <div className="w-full lg:w-1/2">
          <h1 className="text-2xl lg:text-6xl font-bold mb-1">
            ULTIMATE HOME GYM
          </h1>
          <h3 className="text-xl lg:text-5xl  mb-1">AVAILABLE NOW</h3>
          <p className="text-sm lg:text-xl mb-5 max-w-2xl">
            Transform your fitness routine with our compact, multi-functional
            home gym equipment.
          </p>

          <Link to={"/categories/Monitor"}>
            <Button color="failure" className="px-4 py-0.5">
              LEARN MORE{" "}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
