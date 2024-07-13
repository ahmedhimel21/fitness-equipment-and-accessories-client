import TeamIntroCard from "../components/ui/aboutUs/TeamIntroCard";
import TestimonialsCard from "../components/ui/aboutUs/TestimonialsCard";
import { teamMembers, testimonials } from "../utils/aboutUsData";

const AboutUs = () => {
  return (
    <>
      <div className="container mx-auto p-4 space-y-12">
        {/* Company Overview */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Company Overview</h2>
          <p className="text-lg">
            Our company has a rich history of providing the best gym equipment
            and accessories to help you achieve your fitness goals. Our mission
            is to empower people to lead healthier lives, and our vision is to
            become the leading provider of fitness solutions worldwide.
          </p>
        </div>

        {/* Team Introduction */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-center">Meet Our Team</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {teamMembers.map((member) => (
              <TeamIntroCard member={member}></TeamIntroCard>
            ))}
          </div>
        </div>

        {/* Customer Testimonials */}
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">
            Customer reviews
          </h2>
          <p className="text-center text-gray-600 mb-12">
            What our customers are saying..
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((testimonial, index) => (
              <TestimonialsCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg">
            Have questions or feedback? We'd love to hear from you!
          </p>
          <p className="mt-2">Email: ahmedhimel000@gmail.com</p>
          <p>Phone: (+880) 01800000000 </p>
          <p>Address: 123 Fitness Hub, Jashore, Bangladesh</p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
