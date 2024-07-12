import { teamMembers, testimonials } from "../utils/aboutUsData";

const AboutUs = () => {
  return (
    <>
      <div className="container mx-auto p-4 space-y-8 mb-8">
        {/* Company Overview */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Company Overview</h2>
          <p className="text-lg">
            Our company has a rich history of providing the best gym equipment
            and accessories to help you achieve your fitness goals. Our mission
            is to empower people to lead healthier lives, and our vision is to
            become the leading provider of fitness solutions worldwide.
          </p>
        </section>

        {/* Team Introduction */}
        <section>
          <h2 className="text-3xl font-bold mb-4 text-center">Meet Our Team</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="max-w-xs text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-full w-32 h-32 mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-md">{member.role}</p>
                <p className="text-sm text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Customer Testimonials */}
        <section>
          <h2 className="text-3xl font-bold mb-4 text-center">
            Customer Testimonials
          </h2>
          <div className="space-y-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="text-center">
                <p className="text-lg italic">"{testimonial.quote}"</p>
                <p className="text-md font-semibold mt-2">
                  - {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Information */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg">
            Have questions or feedback? We'd love to hear from you!
          </p>
          <p className="mt-2">Email: contact@company.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Fitness Ave, Gym City, Country</p>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
