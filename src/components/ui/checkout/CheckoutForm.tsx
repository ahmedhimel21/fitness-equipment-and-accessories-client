/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { TCartInitialState } from "../../../types";
import { PersistPartial } from "redux-persist/lib/persistReducer";
import {
  Button,
  Checkbox,
  Label,
  Radio,
  Table,
  Textarea,
  TextInput,
} from "flowbite-react";
import { Link } from "react-router-dom";
import { useState } from "react";

type TCheckoutFormProps = {
  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>;
  register: UseFormRegister<FieldValues>;
  cart: TCartInitialState & PersistPartial;
  onSubmit: (data: any) => Promise<void>;
  total: () => number;
};

const CheckoutForm = ({
  handleSubmit,
  register,
  cart,
  onSubmit,
  total,
}: TCheckoutFormProps) => {
  const [deliveryCharge, setDeliveryCharge] = useState<any>(60);
  const [, setPaymentMethod] = useState("cashOnDelivery");

  const totalPayable = total() + parseInt(deliveryCharge);
  return (
    <>
      <div className="bg-lightBg text-secondary min-h-screen">
        <div className="max-w-7xl mx-auto px-3 lg:px-0 py-10">
          <div className=" p-2 px-2">
            <h1 className="text-xl lg:text-2xl mb-5">Checkout</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col lg:flex-row items-start gap-4 min-h-screen">
                <div className="w-full lg:w-1/3 bg-white shadow-sm rounded-md  p-4">
                  <div className="flex items-center gap-2 ">
                    <span className="bg-[#FEECEB] w-9 h-9 rounded-full px-3 py-2 text-primary font-bold flex items-center justify-center">
                      1
                    </span>
                    <h1 className="text-base lg:text-lg font-bold">
                      {" "}
                      Customer Information
                    </h1>
                  </div>
                  <hr className="my-3" />

                  {/* Customer Information */}

                  <div className="my-4">
                    <div className="mb-3">
                      <div className="mb-1 block">
                        <Label htmlFor="Name" value="Name*" />
                      </div>
                      <TextInput
                        id="Name"
                        sizing="md"
                        type="text"
                        placeholder="Enter Your Name"
                        {...register("name", { required: true })}
                      />
                    </div>

                    <div className="mb-3">
                      <div className="mb-1 block">
                        <Label htmlFor="Mobile" value="Mobile*" />
                      </div>
                      <TextInput
                        id="Mobile"
                        sizing="md"
                        type="tel"
                        placeholder="Enter Your Mobile"
                        {...register("mobile", { required: true })}
                      />
                    </div>

                    <div className="mb-3">
                      <div className="mb-1 block">
                        <Label htmlFor="Email" value="Email*" />
                      </div>
                      <TextInput
                        id="Email"
                        sizing="md"
                        type="email"
                        placeholder="Enter Your Email"
                        {...register("email", { required: true })}
                      />
                    </div>

                    <div className="mb-3">
                      <div className="mb-1 block">
                        <Label htmlFor="City" value="City*" />
                      </div>
                      <TextInput
                        id="City"
                        sizing="md"
                        type="text"
                        placeholder="Enter Your City"
                        {...register("city", { required: true })}
                      />
                    </div>

                    <div className="mb-3">
                      <div className="mb-1 block">
                        <Label htmlFor="Address" value="Address*" />
                      </div>
                      <TextInput
                        id="Address"
                        sizing="md"
                        type="text"
                        placeholder="Enter Your Address"
                        {...register("address", { required: true })}
                      />
                    </div>

                    <div className="mb-3">
                      <div className="mb-1 block">
                        <Label htmlFor="comment" value="comment" />
                      </div>
                      <Textarea
                        id="comment"
                        placeholder="Leave a comment..."
                        {...register("comment")}
                        rows={4}
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-2/3 min-h-screen ">
                  {/* Payment Method, Delivery System */}

                  <div className="flex flex-col lg:flex-row items-start gap-4 w-full">
                    <div className="bg-white shadow-sm rounded-md p-4 w-full h-full lg:h-[300px]">
                      <div className="flex items-center gap-2">
                        <span className="bg-[#FEECEB] w-9 h-9 rounded-full px-3 py-2 text-primary font-bold flex items-center justify-center">
                          2
                        </span>
                        <h1 className="text-base lg:text-lg font-bold">
                          {" "}
                          Payment Method
                        </h1>
                      </div>
                      <hr className="my-3" />

                      <div>
                        <fieldset
                          className="flex max-w-md flex-col gap-2"
                          id="radio"
                          onChange={(e: any) =>
                            setPaymentMethod(e.target.value)
                          }
                        >
                          <legend className="mb-4">
                            Select a payment method
                          </legend>

                          <div className="flex items-center gap-2">
                            <Radio
                              defaultChecked
                              id="united-state"
                              name="payments"
                              value="cashOnDelivery"
                            />
                            <Label htmlFor="united-state">
                              {" "}
                              Cash on Delivery{" "}
                            </Label>
                          </div>

                          <div className="flex items-center gap-2">
                            <Radio id="germany" name="payments" value="POS" />
                            <Label htmlFor="germany">POS on Delivery</Label>
                          </div>

                          <div className="flex items-center gap-2">
                            <Radio id="spain" name="payments" value="Online" />
                            <Label htmlFor="spain">Online Payment </Label>
                          </div>
                        </fieldset>

                        <div className="mt-3">
                          <h1 className="text-sm font-bold mb-2">
                            We Accept:{" "}
                          </h1>
                          <img src="/payment-methods.png" alt="payments" />
                        </div>
                      </div>
                    </div>

                    <div className="bg-white shadow-sm rounded-md p-4 w-full h-full lg:h-[300px]">
                      <div className="flex items-center gap-2">
                        <span className="bg-[#FEECEB] w-9 h-9 rounded-full px-3 py-2 text-primary font-bold flex items-center justify-center">
                          3
                        </span>
                        <h1 className="text-base lg:text-lg font-bold">
                          {" "}
                          Delivery Method
                        </h1>
                      </div>
                      <hr className="my-3" />

                      <div>
                        <fieldset
                          className="flex max-w-md flex-col gap-2"
                          id="radio"
                          onChange={(e: any) =>
                            setDeliveryCharge(e.target.value)
                          }
                        >
                          <legend className="mb-4">
                            Select a delivery method
                          </legend>

                          <div className="flex items-center gap-2">
                            <Radio
                              defaultChecked
                              id="Home"
                              name="deliveryCharge"
                              value="60"
                            />
                            <Label htmlFor="Home">Home Delivery - 60৳</Label>
                          </div>

                          <div className="flex items-center gap-2">
                            <Radio
                              id="Pickup"
                              name="deliveryCharge"
                              value="0"
                            />
                            <Label htmlFor="Pickup">Store Pickup - 0৳</Label>
                          </div>

                          <div className="flex items-center gap-2">
                            <Radio
                              id="Express"
                              name="deliveryCharge"
                              value="120"
                            />
                            <Label htmlFor="Express">
                              Request Express - 120৳
                            </Label>
                          </div>
                        </fieldset>
                      </div>
                    </div>
                  </div>

                  {/* Order Summery */}

                  <div className="w-full bg-white shadow-sm rounded-md p-4">
                    <div className="flex items-center gap-2">
                      <span className="bg-[#FEECEB] w-9 h-9 rounded-full px-3 py-2 text-primary font-bold flex items-center justify-center">
                        4
                      </span>
                      <h1 className="text-base lg:text-lg font-bold">
                        Order Overview
                      </h1>
                    </div>
                    <hr className="my-3" />

                    <Table>
                      <Table.Head>
                        <Table.HeadCell>Product Name</Table.HeadCell>

                        <Table.HeadCell>Price</Table.HeadCell>

                        <Table.HeadCell>Total</Table.HeadCell>
                      </Table.Head>

                      <Table.Body className="divide-y">
                        {cart?.items?.map((pro) => (
                          <Table.Row key={pro?._id} className="bg-white  ">
                            <Table.Cell>{pro?.name}</Table.Cell>

                            <Table.Cell>
                              <p>
                                {pro?.price} x {pro?.quantity}
                              </p>
                            </Table.Cell>

                            <Table.Cell>
                              {pro?.price * pro?.quantity} Tk
                            </Table.Cell>
                          </Table.Row>
                        ))}
                      </Table.Body>
                    </Table>

                    <div className=" text-end w-full px-5">
                      <hr className="my-3" />
                      <h1 className="text-sm lg:text-base">
                        Sub Total:{" "}
                        <span className="text-primary">
                          {total().toFixed(2)} Tk
                        </span>
                      </h1>
                      <hr className="my-3" />
                    </div>

                    <div className=" text-end w-full px-5">
                      <h1 className="text-sm lg:text-base">
                        Delivery Charge:{" "}
                        <span className="text-primary">
                          {deliveryCharge} Tk
                        </span>
                      </h1>
                      <hr className="my-3" />
                    </div>

                    <div className=" text-end w-full px-5">
                      <h1 className="text-sm lg:text-base">
                        Total:
                        <span className="text-primary">{totalPayable} Tk</span>
                      </h1>
                      <hr className="my-3" />
                    </div>
                  </div>
                </div>
              </div>

              <hr className="my-3" />

              <div className="w-full flex flex-col lg:flex-row gap-3 items-center justify-between ">
                <div className="flex w-full flex-col gap-4 " id="checkbox">
                  <div className="flex items-center gap-2">
                    <Checkbox defaultChecked id="accept" />
                    <Label className="flex" htmlFor="agree">
                      <p className="text-xs lg:text-base">
                        I have read and agree to the
                        <Link to={"/"} className="text-primary hover:underline">
                          {" "}
                          Terms and Conditions
                        </Link>
                        ,
                        <Link to={"/"} className="text-primary hover:underline">
                          {" "}
                          Privacy Policy
                        </Link>{" "}
                        and
                        <Link to={"/"} className="text-primary hover:underline">
                          {" "}
                          Refund and Return Policy
                        </Link>
                      </p>
                    </Label>
                  </div>
                </div>

                <div>
                  <Button
                    disabled={cart?.items?.length === 0}
                    type="submit"
                    color="blue"
                    className="px-4 py-0.5"
                  >
                    Checkout
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutForm;
