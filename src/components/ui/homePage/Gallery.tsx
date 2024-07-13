const Gallery = () => {
  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold text-center mb-8">Happy Customers</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/happyCustomer.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/happyCustomer1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/happyCustomer2.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/happyCustomer3.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/happyCustomer4.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/happyCustomer5.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/happyCustomer6.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/happyCustomer7.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/happyCustomer8.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/happyCustomer9.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/happyCustomer10.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="/happyCustomer11.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
