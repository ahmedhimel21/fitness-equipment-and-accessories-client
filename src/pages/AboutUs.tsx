import { ProductDescAbout } from "../components/ui/aboutUs/ProductDescAbout";

const AboutUs = () => {
  return (
    <>
      <div className="bg-lightBg text-secondary">
        <div className="max-w-7xl mx-auto px-3 lg:px-0 pb-10">
          <div className="text-center py-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-primary">
              FitnessHub
            </h1>
            <h3 className="text-sm lg:text-base capitalize">
              Your ultimate destination for premium gym accessories and
              equipment
            </h3>
          </div>

          <div className="text-sm lg:text-base">
            <div className="bg-white p-4 rounded-md">
              <h1 className="text-xl font-bold mb-2">About FitnessHub</h1>
              <p>
                <span className="text-primary">FitnessHub</span> was established
                in 2010 with a passion for fitness and a vision to provide the
                best gym accessories and equipment to fitness enthusiasts. Over
                the years, FitnessHub has become a trusted name in the fitness
                industry, offering high-quality products that cater to every
                need of our customers. With a mission to help individuals
                achieve their fitness goals, we have grown to serve customers
                nationwide through both our physical stores and e-commerce
                platform.
              </p>
              <br />
              <br />
              <h1 className="text-xl font-bold mb-2">
                Certified Quality Management Standards
              </h1>
              <p>
                At <span className="text-primary">FitnessHub</span>, quality is
                our top priority. In 2022, we achieved the prestigious "ISO
                9001:2015 Certification," a testament to our commitment to
                maintaining the highest standards of quality management. We
                ensure that every product meets stringent quality checks to
                provide our customers with reliable and durable gym equipment.
              </p>
              <br />
              <h1 className="text-xl font-bold mb-2">Our Mission</h1>
              <p>
                At <span className="text-primary">FitnessHub</span>, we aim to
                inspire and empower individuals to lead healthier lives. Our
                mission is to deliver the best gym equipment and accessories to
                meet the diverse needs of fitness enthusiasts, from beginners to
                professionals. With a strong focus on customer satisfaction, we
                strive to make fitness accessible, enjoyable, and effective for
                everyone.
              </p>
              <br />
              <h1 className="text-xl font-bold mb-2">Our Services</h1>
              <p>
                <span className="text-primary">FitnessHub</span> offers a wide
                range of high-quality gym accessories and equipment, including:
                <ul className="list-disc pl-6">
                  <li>Dumbbells, barbells, and kettlebells</li>
                  <li>Treadmills, ellipticals, and exercise bikes</li>
                  <li>Resistance bands and yoga mats</li>
                  <li>Weight benches and power racks</li>
                  <li>Boxing gear and training gloves</li>
                  <li>Foam rollers and recovery tools</li>
                </ul>
                Each product is carefully curated to provide the best value and
                durability for our customers. We also offer delivery services,
                so you can get your desired products right at your doorstep.
              </p>
              <br />
              <h1 className="text-xl font-bold mb-2">Top-Selling Brands</h1>
              <p>
                <span className="text-primary">FitnessHub</span> proudly
                features products from some of the most trusted names in the
                fitness industry, including:
                <ul className="list-disc pl-6">
                  <li>Rogue Fitness</li>
                  <li>Bowflex</li>
                  <li>TRX</li>
                  <li>Body-Solid</li>
                  <li>PowerBlock</li>
                  <li>ProForm</li>
                </ul>
                These brands are known for their innovation and durability,
                ensuring you get the best value for your investment. Our
                partnerships enable us to provide unmatched after-sales support
                and competitive pricing, so you can shop confidently.
              </p>
            </div>
          </div>
        </div>

        <ProductDescAbout />
      </div>
    </>
  );
};

export default AboutUs;
