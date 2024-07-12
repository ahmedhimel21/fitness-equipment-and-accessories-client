import { TProduct } from "../../../../types";

type TFeaturedCardProps = {
  products: TProduct[];
  handleExploreMore: () => void;
  handleViewDetails: (id: string) => void;
};

const FeaturedProductCard = ({
  products,
  handleExploreMore,
  handleViewDetails,
}: TFeaturedCardProps) => {
  return (
    <>
      <div className="my-8">
        <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products?.slice(0, 6).map((product: TProduct) => (
            <div key={product._id} className="border p-4 rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl mb-2">{product.name}</h3>
              <p className="mb-2">Price: ${product.price}</p>
              <button
                onClick={() => handleViewDetails(product._id!)}
                className="btn btn-primary mb-2"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button
            onClick={handleExploreMore}
            className="btn btn-secondary mt-4"
          >
            Explore More
          </button>
        </div>
      </div>
    </>
  );
};

export default FeaturedProductCard;
