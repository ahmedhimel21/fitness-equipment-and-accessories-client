import { categoriesArr } from "../../../../utils/categoriesData";

type TCategoriesCardProps = {
  handleCategory: (category: string) => void;
};

const CategoriesCard = ({ handleCategory }: TCategoriesCardProps) => {
  return (
    <>
      <div className="my-8">
        <h2 className="text-2xl font-bold mb-4">Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categoriesArr?.map((category, index) => (
            <div
              key={index}
              className="cursor-pointer border p-4 rounded-lg"
              onClick={() => handleCategory(category.name)}
            >
              <div className="w-full h-48 flex items-center justify-center">
                <img
                  className="w-full h-48 object-contain"
                  src={category.image}
                  alt={category.name}
                />
              </div>
              <h2 className="text-center mt-2">{category.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoriesCard;
