import { benefitsData } from "../../../utils/benefitsData";

const Benefits = () => {
  return (
    <>
      <div className="my-8">
        <h2 className="text-2xl font-bold text-center mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitsData.map((benefit, index) => (
            <div key={index} className="text-center border p-4 rounded-lg">
              <img
                src={benefit.image}
                alt={benefit.title}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Benefits;
