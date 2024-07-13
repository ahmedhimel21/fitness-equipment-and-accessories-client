type TTestimonialsProps = {
  testimonial: {
    name: string;
    testimonial: string;
    image: string;
  };
};

const TestimonialsCard = ({ testimonial }: TTestimonialsProps) => {
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
        <p className="text-gray-600 mt-4 mb-6">{testimonial.testimonial}</p>
        <h3 className="text-lg font-semibold text-gray-800">
          {testimonial.name}
        </h3>
        <div>
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="size-20 object-cover rounded-full"
          />
        </div>
      </div>
    </>
  );
};

export default TestimonialsCard;
