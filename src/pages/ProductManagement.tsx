import { toast } from "sonner";
import ErrorPage from "../components/ui/global/ErrorPage";
import ProgressBar from "../components/ui/global/ProgressBar";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../redux/features/product/productApi";
import { TProduct } from "../types";
import { NavLink } from "react-router-dom";

const ProductManagement = () => {
  const { data: products, isLoading, error } = useGetProductsQuery({});
  const [deleteProduct] = useDeleteProductMutation();
  if (isLoading) {
    return <ProgressBar></ProgressBar>;
  }
  if (error) {
    return <ErrorPage></ErrorPage>;
  }
  //handle delete
  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure, you want to delete")) {
      deleteProduct(id);
      toast.success("Product deleted successfully");
    }
  };

  return (
    <>
      <div className="overflow-x-auto mb-8">
        <h1 className="text-3xl font-bold mb-4">Product Management</h1>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Category</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {products?.data?.map((product: TProduct, index: number) => (
              <tr key={product._id}>
                <th>{index + 1}</th>
                <td>{product?.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td className="py-2 px-4 border-b">
                  <NavLink to={`/products/update/${product._id}`}>
                    <button className="bg-yellow-500 text-white py-1 px-2 rounded mr-2">
                      Update
                    </button>
                  </NavLink>
                  <button
                    className="bg-red-500 text-white py-1 px-2 rounded"
                    onClick={() => handleDelete(product._id!)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-center mt-4">
          <NavLink to="/products/create-product">
            <button className="btn btn-primary py-2 px-4 rounded mb-4">
              Create New Product
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default ProductManagement;
