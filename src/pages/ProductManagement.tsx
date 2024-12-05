/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "sonner";
import { Link, NavLink } from "react-router-dom";
import productApi from "../redux/features/product/productApi";
import { Button, Table } from "flowbite-react";

const ProductManagement = () => {
  const { data: products } = productApi.useGetProductsQuery({});
  const [deleteProduct] = productApi.useDeleteProductMutation();
  //handle delete
  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure, you want to delete")) {
      deleteProduct(id);
      toast.success("Product deleted successfully");
    }
  };

  return (
    <>
      <div className="bg-lightBg text-secondary min-h-screen">
        <div className="max-w-7xl mx-auto px-3 lg:px-0 py-10">
          <div className="bg-white shadow-sm rounded-md p-2 px-4">
            <h1 className="text-2xl mb-5 font-bold">Product Management</h1>

            <div className="overflow-x-auto">
              <Table className="w-full">
                <Table.Head>
                  <Table.HeadCell className="truncate">Image</Table.HeadCell>
                  <Table.HeadCell className="truncate">
                    Product name
                  </Table.HeadCell>
                  <Table.HeadCell className="truncate">Category</Table.HeadCell>
                  <Table.HeadCell className="truncate">Quantity</Table.HeadCell>
                  <Table.HeadCell className="truncate">Price</Table.HeadCell>
                  <Table.HeadCell className="truncate">Actions</Table.HeadCell>
                </Table.Head>

                <Table.Body className="divide-y">
                  {products?.data?.map((pro: any) => (
                    <Table.Row key={pro?._id} className="bg-white  ">
                      <Table.Cell className="truncate">
                        <img
                          src={pro?.image}
                          alt={pro?.name}
                          width={40}
                          height={40}
                          className="max-w-full h-auto"
                        />
                      </Table.Cell>

                      <Table.Cell>
                        <p className="text-sm lg:text-base"> {pro?.name}</p>
                      </Table.Cell>
                      <Table.Cell className="truncate">
                        {pro?.category}
                      </Table.Cell>
                      <Table.Cell className="truncate">{pro?.stock}</Table.Cell>
                      <Table.Cell className="truncate">
                        {pro?.price} Tk
                      </Table.Cell>

                      <Table.Cell className="truncate">
                        <div className="flex items-center gap-2">
                          <p className="text-base lg:text-xl font-bold">
                            {" "}
                            {pro?.quantity}
                          </p>

                          <div className="flex flex-col gap-1">
                            <NavLink to={`/products/update/${pro._id}`}>
                              <button className="bg-green-500 text-white px-2 py-0.5">
                                Update
                              </button>
                            </NavLink>
                            <button
                              onClick={() => handleDelete(pro._id!)}
                              className="bg-red-500 text-white px-2 py-0.5"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>

            <div className="flex items-center justify-center px-5 my-3">
              <Link to={"/products/create-product"}>
                <Button color="blue" className="text-sm lg:text-base">
                  Create New Product
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductManagement;
