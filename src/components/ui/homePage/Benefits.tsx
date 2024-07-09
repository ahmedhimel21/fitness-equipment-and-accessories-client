const benefitsData = [
  {
    title: "High Quality",
    description: "Our products are made with the highest quality materials.",
    image:
      "https://media.istockphoto.com/id/625739874/photo/heavy-weight-exercise.jpg?s=2048x2048&w=is&k=20&c=1JmhC4Hf9X37bw7PqRpF7eX-0M9zQUPgYAcFCwBa_Fc=",
  },
  {
    title: "Affordable Prices",
    description: "We offer competitive prices on all our products.",
    image:
      "https://www.shutterstock.com/image-vector/richers-help-poorers-concept-rich-600w-696551677.jpg",
  },
  {
    title: "Fast Shipping",
    description: "Enjoy fast and reliable shipping on all orders.",
    image:
      "https://img.freepik.com/premium-vector/fast-shipping-logo_10250-3101.jpg",
  },
  {
    title: "Customer Support",
    description: "Our team is here to help you 24/7 with any inquiries.",
    image:
      "https://cdn.educba.com/academy/wp-content/uploads/2017/02/Customer-Support-1.jpg",
  },
];

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
