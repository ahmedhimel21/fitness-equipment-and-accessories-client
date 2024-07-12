const Banner = () => {
  return (
    <>
      <div
        className="hero min-h-screen mb-8"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/hR6S4Yd/istockphoto-1400986326-2048x2048.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md rounded-lg">
            <h1 className="mb-5 text-5xl font-bold">
              "Elevate Your Fitness Journey"
            </h1>
            <p className="mb-5">
              "Discover the perfect blend of quality and performance with our
              premium range of gym equipment and accessories. Whether you're a
              beginner or a seasoned athlete, our products are designed to
              support your fitness goals and help you achieve peak performance.
              From durable weights to ergonomic accessories, find everything you
              need to build your ideal workout space and elevate your fitness
              journey to the next level."
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
