import { CategoryData } from "../../../../utils/staticData";

type TCategoriesCardProps = {
  handleCategory: (category: string) => void;
};

const CategoriesCard = ({ handleCategory }: TCategoriesCardProps) => {
  return (
    <>
      <div className="bg-lightBg text-secondary">
        <div className="text-center pt-10">
          <h1 className="text-2xl lg:text-4xl font-bold text-primary">
            Featured Category
          </h1>
          <h3 className="text-sm lg:text-base">
            Get Your Desired Product from Featured Category!
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-5 max-w-7xl mx-auto py-10 px-5 lg:px-0">
          {CategoryData?.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategory(category?.name)}
              className="cursor-pointer"
            >
              <div className=" text-center category-card flex items-center  justify-center gap-3">
                <div className="text-lg lg:text-2xl ">{category?.icon}</div>
                <h1>{category?.name}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoriesCard;
