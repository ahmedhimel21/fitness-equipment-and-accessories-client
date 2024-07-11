const Checkout = () => {
  return (
    <>
      <div className="mb-8 p-4">
        <div className=" md:w-3/4 md:mx-auto">
          <h1 className="text-3xl font-bold ml-6 mt-3">Checkout</h1>
          <div>
            <div className="bg-base-100 w-full h-full shadow-2xl">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    // value={userDetails.name}
                    // onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    // value={userDetails.email}
                    // onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    // value={userDetails.phone}
                    // onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">address</span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    // value={userDetails.address}
                    // onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="mt-4">
                  <h2 className="text-xl font-bold mb-2">Payment Method</h2>
                  <div>
                    <label className="block mb-2">
                      <input
                        type="checkbox"
                        name="paymentMethod"
                        value="cash"
                        // checked={paymentMethod === 'cash'}
                        // onChange={handlePaymentChange}
                        className="mr-2"
                      />
                      Cash on Delivery
                    </label>
                  </div>
                </div>
                <div className="form-control mt-6 w-1/4">
                  <button className="btn btn-primary">Place Order</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* <form>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block mb-2 col-span-3">Name</label>
              <input
                type="text"
                name="name"
                // value={userDetails.name}
                // onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <br />
            <div>
              <label className="block mb-2">Email</label>
              <input
                type="email"
                name="email"
                // value={userDetails.email}
                // onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <br />
            <div>
              <label className="block mb-2">Phone</label>
              <input
                type="text"
                name="phone"
                // value={userDetails.phone}
                // onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <br />
            <div>
              <label className="block mb-2">Delivery Address</label>
              <input
                type="text"
                name="address"
                // value={userDetails.address}
                // onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              ></input>
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">Payment Method</h2>
            <div>
              <label className="block mb-2">
                <input
                  type="checkbox"
                  name="paymentMethod"
                  value="cash"
                  // checked={paymentMethod === 'cash'}
                  // onChange={handlePaymentChange}
                  className="mr-2"
                />
                Cash on Delivery
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary mt-4">
            Place Order
          </button>
        </form> */}
      </div>
    </>
  );
};

export default Checkout;
