/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { useCreateOrderMutation } from "../redux/features/order/orderApi";
import { clearCart } from "../redux/features/cart/cartSlice";
import { toast } from "sonner";

const Checkout = () => {
  const cart = useAppSelector((state: RootState) => state.cart);
  const dispatch = useAppDispatch();
  const [createOrder] = useCreateOrderMutation();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data: any) => {
    const order = {
      userDetails: data,
      cartItems: cart.items,
    };
    try {
      await createOrder(order);
      dispatch(clearCart());
      toast.success("Order confirmed");
    } catch (err) {
      toast.error("Something went wrong");
      console.error("Failed to place the order:", err);
      alert("Failed to place the order. Please try again.");
    }
  };
  return (
    <>
      <div className="mb-8 p-4">
        <div className=" md:w-3/4 md:mx-auto">
          <h1 className="text-3xl font-bold ml-6 mt-3">Checkout</h1>
          <div>
            <div className="bg-base-100 w-full h-full shadow-2xl">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name")}
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
                    {...register("email")}
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
                    {...register("phone")}
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
                    {...register("address")}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="mt-4">
                  <h2 className="text-xl font-bold mb-2">Payment Method</h2>
                  <div>
                    <label className="block mb-2">
                      <input
                        type="radio"
                        value="cash"
                        {...register("paymentMethod")}
                        className="mr-2"
                        required
                      />
                      Cash on Delivery
                    </label>
                  </div>
                </div>
                <div className="form-control mt-6 w-1/4">
                  <button
                    disabled={cart.items.length === 0}
                    className="btn btn-primary"
                  >
                    Place Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
