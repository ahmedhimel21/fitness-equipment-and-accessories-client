import { NavLink } from "react-router-dom";
import { TCartInitialState } from "../../../types";
import EmptyCard from "./EmptyCard";

type TCartCardProps = {
  cart: TCartInitialState;
  handleUpdateQuantity: (id: string, quantity: number) => void;
  handleRemoveFromCart: (id: string) => void;
  totalPrice: () => number;
};

const CartCard = ({
  cart,
  handleUpdateQuantity,
  handleRemoveFromCart,
  totalPrice,
}: TCartCardProps) => {
  return (
    <>
      <div className=" p-4 my-8">
        {!(cart.items.length === 0) ? (
          <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
        ) : (
          ""
        )}
        {cart.items.length === 0 ? (
          <EmptyCard></EmptyCard>
        ) : (
          <div>
            <div className="overflow-x-auto">
              <table className="table-auto w-full mb-4">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Product</th>
                    <th className="px-4 py-2">Price</th>
                    <th className="px-4 py-2">Quantity</th>
                    <th className="px-4 py-2">Total</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.items.map((item) => (
                    <tr key={item._id}>
                      <td className="border px-4 py-2">{item.name}</td>
                      <td className="border px-4 py-2">
                        ${item.price.toFixed(2)}
                      </td>
                      <td className="border px-4 py-2">
                        <div className="flex items-center justify-center">
                          <button
                            className="btn btn-secondary btn-xs"
                            onClick={() =>
                              handleUpdateQuantity(item._id!, item.quantity - 1)
                            }
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <span className="mx-2">{item.quantity}</span>
                          <button
                            className="btn btn-secondary btn-xs"
                            onClick={() =>
                              handleUpdateQuantity(item._id!, item.quantity + 1)
                            }
                            disabled={item.quantity >= item.stock}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="border px-4 py-2">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                      <td className="border px-4 py-2">
                        <button
                          className="btn btn-error btn-xs"
                          onClick={() => handleRemoveFromCart(item._id!)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
              <h2 className="text-2xl mb-2 sm:mb-0">
                Total: ${totalPrice().toFixed(2)}
              </h2>
              <NavLink to="/products/checkout">
                <button className="btn btn-primary">Proceed to Checkout</button>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartCard;
